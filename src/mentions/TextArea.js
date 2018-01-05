import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';

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

export default class TextArea extends Component {
  /**
   * @property {Object|null}
   */
  backdrop = null;

  /**
   * @property {Object|null}
   */
  textarea = null;

  /**
   * @property {Object} defaultProps
   */
  static defaultProps = {
    onReturn: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
    suggestions: [
      {
        id: 1,
        avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
        name: 'Fred Smith',
      },
      {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
        name: 'Ronald Horn',
      },
      {
        id: 3,
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        name: 'Joseph Jones',
      },
      {
        id: 4,
        avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
        name: 'Kumar Patel',
      },
    ],
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

  componentWillUnmount() {
    this.cleanUpData();
  }

  /**
   * Use to clean up all the data bindings and elements created.
   *
   * @returns {void}
   */
  cleanUpData() {
    this.backdrop = null;
    this.textarea = null;
  }

  /**
   * @param {Object} event
   *
   * @returns {void}
   */
  onChange = event => {
    this.setState(
      {
        value: event.target.value,
      },
      () => {
        // this.onMentionOpen();
      }
    );
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
  getLastWord(textarea) {
    const lastWord = this.getCurrentText(
      textarea.value,
      this.getCaretPosition(textarea)
    );

    if (!lastWord) return '';

    if (
      (lastWord && lastWord[lastWord.length - 1] === '\n') ||
      lastWord[lastWord.length - 1] === '\r' ||
      lastWord[lastWord.length - 1] === ''
    ) {
      return '';
    } else {
      return lastWord;
    }
  }

  /**
   * @param {String} text
   * @param {Number} caretPosition
   *
   * @returns {String}
   */
  getCurrentText(text, caretPosition) {
    let index = text.indexOf(caretPosition);
    let preText = text.substring(0, caretPosition);
    if (preText.indexOf(' ') > 0) {
      let words = preText.split(' ');
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
    } else if (textarea.selectionStart || textarea.selectionStart == '0')
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

    this.setState({
      coords: {
        left,
        top: nextTop,
      },
    });
  }

  /**
   * @return {void}
   */
  onMentionClose() {
    this.setState({
      activeSuggestion: 0,
      coords: { top: 0, left: 0 },
      isMentionOpen: false,
    });
  }

  /**
   * @return {void}
   */
  onMentionOpen() {
    this.setState(
      {
        activeSuggestion: 0,
        isMentionOpen: true,
      },
      () => {
        this.onUpdateCoords();
      }
    );
  }

  /**
   * @return {void}
   */
  onSearchRequest(keyword) {
    console.log('Search request should perform here using', keyword);
  }

  /**
   * @returns {void}
   */
  onBlur = e => {
    this.onMentionClose();
    typeof this.props.onBlur === 'function' && this.props.onBlur(e);
  };

  /**
   * @returns {void}
   */
  onFocus = e => {
    typeof this.props.onFocus === 'function' && this.props.onFocus(e);
  };

  onKeyUp = e => {
    switch (e.keyCode) {
      case KEYS.RETURN: {
        this.onPressEnter(e);
        break;
      }
      case KEYS.ESC: {
        this.state.isMentionOpen && this.onMentionClose();
        break;
      }
      case KEYS.UP: {
        this.state.isMentionOpen && this.setActiveSuggestion(KEYS.UP);
        break;
      }
      case KEYS.DOWN: {
        this.state.isMentionOpen && this.setActiveSuggestion(KEYS.DOWN);
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

  onPressEnter = event => {};

  syncScrollbars = event => {
    const backdrop = ReactDOM.findDOMNode(this.backdrop);
    backdrop.scrollTop = event.target.scrollTop;
    backdrop.scrollLeft = event.target.scrollLeft;
  };

  /**
   * Handles the click event on the Suggestion component.
   */
  onMentionSelect = (event, user, index) => {
    this.onMentionClose();
    console.log(user, index);
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
  setActiveSuggestion(dir) {
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

  /**
   * Returns a parsed text value. Replaces mentions with mark tag.
   *
   * @returns {Array}
   */
  getContents() {
    return this.state.value
      .split(/(@\w+)/g)
      .map((str, key) => {
        if (
          str.length > 1 &&
          str[0] === '@' &&
          this.state.mentions.indexOf(str) !== -1
        ) {
          return (
            <mark key={key} className="Mention-mark">
              {str.substr(1)}
            </mark>
          );
        } else if (str.length > 0) {
          return <span key={key}>{this.renderSpan(str)}</span>;
        } else {
          return null;
        }
      })
      .filter(el => el);
  }

  renderSpan(span) {
    return span.split('').map(char => {
      if (char === '\n') {
        return <br />;
      } else {
        return <span>{char}</span>;
      }
    });
  }

  render() {
    return (
      <div
        ref={component => (this.component = component)}
        className="Mention-container"
      >
        <div
          ref={backdrop => (this.backdrop = backdrop)}
          className="Mention-backdrop"
        >
          <div className="Mention-highlights">{this.getContents()}</div>
        </div>
        <textarea
          className="Mention-textarea"
          autoFocus={true}
          ref={textarea => (this.textarea = textarea)}
          onChange={this.onChange}
          onScroll={this.syncScrollbars}
          onFocus={this.onFocus}
          onKeyUp={this.onKeyUp}
          value={this.state.value}
          spellCheck={false}
        />
        <Suggestions
          active={this.state.activeSuggestion}
          isOpen={this.state.isMentionOpen}
          coords={this.state.coords}
          onSelect={this.onMentionSelect}
          options={this.props.suggestions}
        />
      </div>
    );
  }
}
