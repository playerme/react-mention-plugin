import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Suggestions from './Suggestions';
import getCoordinates from './getCoordinates';

import './TextArea.css';

const KEYS = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

class Highlighter extends Component {
  /**
   * @property {Object} propTypes
   */
  static defaultProps = {
    value: [],
  };

  /**
   * @property {Object} propTypes
   */
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  /**
   * @param {Array|null} value
   */
  getHtmlValue(value) {
    return value
      .split(/(@\w+)/g)
      .map((str, key) => {
        if (
          str.length > 1 &&
          str[0] === '@'
          // this.state.mentions.indexOf(str) !== -1
        ) {
          return (
            <mark key={key} className="Mention-mark">
              {str}
            </mark>
          );
        } else if (str.length > 0) {
          return str;
        } else {
          return null;
        }
      })
      .filter(el => el !== null);
  }

  render() {
    return [
      <div key="0" className="Mention-highlights">
        {this.getHtmlValue(this.props.value)}
      </div>,
      <br key="1" />,
    ];
  }
}

class Backdrop extends Component {
  /**
   * @property {Object} propTypes
   */
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  /**
   * @param {Number} props.scrollTop
   * @param {Number} props.scrollLeft
   */
  scroll = ({ scrollTop, scrollLeft }) => {
    this.backdrop.scrollTop = scrollTop;
    this.backdrop.scrollLeft = scrollLeft;
  };

  render() {
    return (
      <div
        ref={backdrop => (this.backdrop = backdrop)}
        className="Mention-backdrop"
      >
        {this.props.children}
      </div>
    );
  }
}

class TextInput extends Component {
  /**
   * @property {Object} propTypes
   */
  static defaultProps = {
    onChange: PropTypes.func,
    onUpdateCoords: PropTypes.func,
    onMention: PropTypes.func,
    onScroll: PropTypes.func,
    onKeyUp: PropTypes.func,
    value: PropTypes.func,
  };

  /**
   * @property {Object} defaultProps
   */
  static defaultProps = {
    onChange: () => {},
    onUpdateCoords: () => {},
    onMention: () => {},
    onScroll: () => {},
    onKeyUp: () => {},
    value: () => {},
  };

  /**
   * Checks if the text is a mention.
   *
   * @param {String} text
   *
   * @returns {Boolean}
   */
  isMatched(text) {
    return /(@\w+)/g.test(text);
  }

  /**
   * Gets the last word being modified.
   *
   * @param {Object} textarea
   */
  getLastMentioned(textarea) {
    const mentioned = this.getCurrentText(
      textarea.value,
      this.getCaretPosition(textarea)
    );

    if (!mentioned) return '';

    if (
      (mentioned && mentioned[mentioned.length - 1] === '\n') ||
      mentioned[mentioned.length - 1] === '\r' ||
      mentioned[mentioned.length - 1] === ''
    ) {
      return '';
    } else {
      return mentioned;
    }
  }

  /**
   * @param {String} text
   * @param {Number} caretPosition
   *
   * @returns {String}
   */
  getCurrentText(text, caretPosition) {
    const preText = text.substring(0, caretPosition);
    if (preText.indexOf(' ') > 0) {
      const words = preText.split(' ');
      return words[words.length - 1]; //return last word
    } else {
      return preText;
    }
  }

  /**
   * @param {Object} textarea
   *
   * @returns {Number}
   */
  getCaretPosition(textarea) {
    let caretPosition = 0; // IE Support
    if (document.selection) {
      textarea.focus();
      let Sel = document.selection.createRange();
      Sel.moveStart('character', -textarea.value.length);
      caretPosition = Sel.text.length;
    } else if (textarea.selectionStart || textarea.selectionStart === '0')
      // Firefox support
      caretPosition = textarea.selectionStart;
    return caretPosition;
  }

  /**
   * Updates mention suggestions coordinates.
   *
   * @returns {void}
   */
  onUpdateCoords() {
    const { left, top } = getCoordinates(
      this.textarea,
      this.textarea.selectionEnd
    );

    let nextTop = top;

    if (this.textarea.scrollHeight > this.textarea.clientHeight) {
      nextTop = top - (this.textarea.scrollHeight - this.textarea.clientHeight);
    }

    this.props.onUpdateCoords({
      left,
      top: nextTop,
    });
  }

  /**
   * @param {Object} event
   */
  onChange = event => {
    this.props.onChange(event.target.value);

    const mentioned = this.getLastMentioned(event.target);
    const isMatched = this.isMatched(mentioned);

    if (mentioned && mentioned.length > 3 && isMatched) {
      this.props.onMention(mentioned);
    } else {
      this.props.onMention(false);
    }

    this.onUpdateCoords();
  };

  /**
   * @param {Object} event
   */
  onScroll = event => {
    this.props.onScroll({
      scrollLeft: event.target.scrollLeft,
      scrollTop: event.target.scrollTop,
    });
  };

  render() {
    return (
      <textarea
        className="Mention-textarea"
        autoFocus={true}
        ref={textarea => (this.textarea = textarea)}
        onChange={this.onChange}
        onScroll={this.onScroll}
        onKeyUp={this.props.onKeyUp}
        value={this.props.value}
        spellCheck={false}
      />
    );
  }
}

export default class TextArea extends Component {
  static propTypes = {
    suggestions: PropTypes.array,
  };

  /**
   * @property {Object} defaultProps
   */
  static defaultProps = {
    suggestions: [],
  };

  /**
   * @property {Object} state
   */
  state = {
    activeSuggestion: 0,
    value: '',
    isMentionOpen: false,
    coords: {
      top: 0,
      left: 0,
    },
    mentions: [],
  };

  onReturn = event => {
    // TODO: Handle return statement
  };

  /**
   * @param {Object} event
   */
  onKeyUp = event => {
    switch (event.keyCode) {
      case KEYS.RETURN: {
        this.onReturn(event);
        break;
      }
      case KEYS.ESC: {
        this.state.isMentionOpen && this.onMentionClose();
        break;
      }
      case KEYS.UP: {
        this.state.isMentionOpen && this.updateActiveSuggestion(KEYS.UP);
        break;
      }
      case KEYS.DOWN: {
        this.state.isMentionOpen && this.updateActiveSuggestion(KEYS.DOWN);
        break;
      }
      case KEYS.LEFT: {
        this.state.isMentionOpen && this.onMentionClose();
        break;
      }
      case KEYS.RIGHT: {
        this.state.isMentionOpen && this.onMentionClose();
        break;
      }
      default:
        break;
    }
  };

  /**
   * @param {String} value
   */
  onChange = value => {
    this.setState({
      value,
    });
  };

  /**
   * @param {Object} event
   */
  onScroll = ({ scrollTop, scrollLeft }) => {
    this.backdrop.scroll({ scrollTop, scrollLeft });
  };

  /**
   * @param {Object} coords
   */
  onUpdateCoords = coords => {
    this.setState({
      coords,
    });
  };

  /**
   * @param {String} mention
   */
  onMention = mention => {
    if (!mention) {
      this.onMentionClose();
    } else {
      this.onMentionOpen();
    }
  };

  /**
   * @returns {void}
   */
  onMentionOpen = () => {
    this.setState({
      activeSuggestion: 0,
      isMentionOpen: true,
    });
  };

  /**
   * @returns {void}
   */
  onMentionClose = () => {
    this.setState({
      isMentionOpen: false,
      coords: {
        top: 0,
        left: 0,
      },
    });
  };

  /**
   * Handles changing of active mention suggestion.
   * If the next active go over the length of the
   * suggestions, Well back to zero. Lesser than zero
   * well go to the last item.
   *
   * @param {String} dir
   *
   * @returns {void}
   */
  updateActiveSuggestion(dir) {
    const nextActive =
      dir === KEYS.UP
        ? this.state.activeSuggestion - 1
        : this.state.activeSuggestion + 1;

    if (
      nextActive > this.props.suggestions.length - 1 ||
      this.props.suggestions.length === 1
    ) {
      return this.setState({
        activeSuggestion: 0,
      });
    }

    if (nextActive < 0) {
      return this.setState({
        activeSuggestion: this.props.suggestions.length - 1,
      });
    }

    this.setState({
      activeSuggestion: nextActive,
    });
  }

  render() {
    return (
      <div
        ref={component => (this.component = component)}
        className="Mention-container"
      >
        <Backdrop ref={backdrop => (this.backdrop = backdrop)}>
          <Highlighter value={this.state.value} />
        </Backdrop>

        <TextInput
          onMention={this.onMention}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          onScroll={this.onScroll}
          onUpdateCoords={this.onUpdateCoords}
          value={this.state.value}
        />

        <Suggestions
          active={this.state.activeSuggestion}
          isOpen={this.state.isMentionOpen}
          coords={this.state.coords}
          options={this.props.suggestions}
        />
      </div>
    );
  }
}
