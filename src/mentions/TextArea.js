import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import Suggestions from './Suggestions';
import getCoordinates from './getCoordinates';

import './TextArea.scss';

const KEYS = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

class ProxyPre extends Component {
  /**
   * @returns {Number}
   */
  getHeight = () => {
    return this.pre ? this.pre.offsetHeight : 0;
  };

  /**
   * @returns {Object}
   */
  getComputedStyle() {
    return this.props.isAbsolute
      ? {
          position: 'absolute',
          overflow: 'hidden',
          maxHeight: this.props.maxHeight,
        }
      : {};
  }

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    if (this.props.isAbsolute) {
      return (
        <div style={this.getComputedStyle()}>
          <pre ref={pre => (this.pre = pre)} className="Mention-proxy">
            {this.props.value}
            <br />
          </pre>
        </div>
      );
    } else {
      return (
        <pre ref={pre => (this.pre = pre)} className="Mention-proxy">
          {this.props.value}
          <br />
        </pre>
      );
    }
  }
}

ProxyPre.defaultProps = {
  value: '',
  isVisible: false,
  isAbsolute: false,
  maxHeight: 200,
};

ProxyPre.propTypes = {
  value: PropTypes.string,
  isVisible: PropTypes.bool,
  isAbsolute: PropTypes.bool,
  maxHeight: PropTypes.number,
};

class Highlighter extends Component {
  /**
   * @param {Array|null} value
   * @param {Array} mentions
   */
  getHtmlValue(value, mentions = []) {
    return value
      .split(new RegExp(`(${this.props.trigger}\\w+)`, 'g'))
      .map((str, key) => {
        if (mentions.indexOf(str) !== -1) {
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
        {this.getHtmlValue(this.props.value, this.props.mentions)}
      </div>,
      <br key="1" />,
    ];
  }
}

Highlighter.defaultProps = {
  trigger: '@',
  value: '',
  mentions: [],
};

Highlighter.propTypes = {
  trigger: PropTypes.oneOf(['@', '#']),
  value: PropTypes.string.isRequired,
  mentions: PropTypes.array.isRequired,
};

class Backdrop extends Component {
  componentWillUnmount() {
    this.backdrop = null;
  }

  /**
   * @param {Number} props.scrollTop
   * @param {Number} props.scrollLeft
   */
  scroll = ({ scrollTop, scrollLeft }) => {
    this.backdrop.scrollTop = scrollTop;
    this.backdrop.scrollLeft = scrollLeft;
  };

  getCustomStyle() {
    return {
      overflow: this.props.overflow,
    };
  }

  render() {
    return (
      <div
        style={this.getCustomStyle()}
        ref={backdrop => (this.backdrop = backdrop)}
        className="Mention-backdrop"
      >
        {this.props.children}
      </div>
    );
  }
}

Backdrop.propTypes = {
  overflow: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Backdrop.defaultProps = {
  overflow: 'auto',
};

class TextInput extends Component {
  state = {
    lastKey: undefined,
    isHoldingSameKey: false, // Used to throttle back space.
  };

  /**
   * @param {Object} event
   */
  onChange = event => {
    this.props.onChange(event.target.value);
    this.attemptMention(event.target);
  };

  attemptMention(target) {
    const mentioned = this.getLastWord(target);

    const isMatched = new RegExp(`(${this.props.trigger}\\w+)`, 'g').test(
      mentioned
    );

    if (
      mentioned &&
      mentioned.length > 1 &&
      isMatched &&
      this.state.isHoldingSameKey === false
    ) {
      this.props.onMention(mentioned);
    } else {
      this.props.onMention(false);
    }
  }

  /**
   * @param {Object} event
   */
  onScroll = event => {
    this.props.onScroll({
      scrollLeft: event.target.scrollLeft,
      scrollTop: event.target.scrollTop,
    });
  };

  /**
   * Gets the last word being modified.
   *
   * @param {Object} textarea
   *
   * @returns {Boolean|String}
   */
  getLastWord(textarea) {
    const lastWord = this.getCurrentText(
      textarea.value,
      this.getCaretPosition(textarea)
    );

    return lastWord ? lastWord : false;
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
      const lastWord = words[words.length - 1];
      return lastWord.trim ? lastWord.trim() : lastWord;
    } else {
      return preText.trim ? preText.trim() : preText;
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
   * Replace mention with the suggested value.
   * Notice we add a space at the end.
   *
   * @param {String} value
   *
   * @returns {String}
   */
  replaceText(value) {
    const currentPosition = this.getCaretPosition(this.textarea);
    const prevText = this.props.value.substring(0, currentPosition);

    const textPart1 = prevText.substring(
      0,
      prevText.lastIndexOf(this.props.trigger)
    );
    const textPart2 = this.props.value.substring(
      currentPosition,
      this.props.value.length
    );

    return this.props.onChange(
      `${textPart1}${this.props.trigger}${value}${textPart2} `
    );
  }

  /**
   * Get text area care x and y position.
   */
  getCoordinates = () => {
    const { left, top } = getCoordinates(
      this.textarea,
      this.textarea.selectionEnd
    );

    let nextTop = top;

    if (this.textarea.scrollHeight > this.textarea.clientHeight) {
      nextTop = top - (this.textarea.scrollHeight - this.textarea.clientHeight);
    }

    return {
      left,
      top: nextTop,
    };
  };

  /**
   * @param {Object} event
   *
   * @returns {void}
   */
  onKeyPress = event => {
    this.props.onKeyPress(event);
  };

  /**
   * @param {Object} event
   *
   * @returns {void}
   */
  onKeyDown = event => {
    this.setState({
      lastKey: event.keyCode,
      isHoldingSameKey: this.state.lastKey === event.keyCode,
    });

    this.props.onKeyDown(event);
  };

  /**
   * @param {Object} event
   *
   * @returns {void}
   */
  onKeyUp = event => {
    const isHoldingSameKey = this.state.isHoldingSameKey;
    event.persist();
    this.setState(
      {
        lastKey: undefined,
        isHoldingSameKey: false,
      },
      () => {
        if (isHoldingSameKey) {
          this.attemptMention(event.target);
        }
      }
    );
    this.props.onKeyUp(event);
  };

  /**
   * @returns {Object}
   *
   * @returns {void}
   */
  getCustomStyle() {
    return {
      overflow: this.props.overflow,
    };
  }

  /**
   * @returns {void}
   */
  focus = () => this.textarea.focus();

  /**
   * @returns {void}
   */
  blur = () => this.textarea.blur();

  /**
   * @returns {Object}
   */
  render() {
    return (
      <textarea
        style={this.getCustomStyle()}
        className="Mention-textarea"
        autoFocus={true}
        ref={textarea => (this.textarea = textarea)}
        onChange={this.onChange}
        onPaste={this.onChange}
        onCut={this.onChange}
        onScroll={this.onScroll}
        onKeyPress={this.onKeyPress}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        value={this.props.value}
        spellCheck={false}
        placeholder={this.props.placeholder}
      />
    );
  }
}

TextInput.propTypes = {
  trigger: PropTypes.string,
  overflow: PropTypes.string,
  onChange: PropTypes.func,
  onMention: PropTypes.func,
  onScroll: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onEnter: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  trigger: '@',
  overflow: 'auto',
  onChange: () => {},
  onMention: () => {},
  onScroll: () => {},
  onKeyUp: () => {},
  onKeyPress: () => {},
  onKeyDown: () => {},
  onEnter: () => {},
  value: '',
  placeholder: '',
};

class TextArea extends Component {
  /**
   * @property {Object} state
   */
  state = {
    activeSuggestion: 0,
    value: '',
    isMentionOpen: false,
    isActivated: false,
    coords: {
      top: 0,
      left: 0,
    },
    mentions: [],
    height: undefined,
  };

  componentWillUnmount() {
    this.pre = null;
    this.component = null;
    this.textarea = null;
    this.backdrop = null;
    document.removeEventListener('scroll', this.onDocumentScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value || '',
    });
  }

  /**
   * @returns {void}
   */
  closeMention = () => this.onMentionClose();

  /**
   * @returns {void}
   */
  openMention = () => this.onMentionOpen();

  /**
   * Focus to the textarea
   */
  focus = () => this.textarea.focus();

  /**
   * @returns {void}
   */
  blur = () => this.textarea.blur();

  /**
   * @returns {void}
   */
  clearValue = () => this.setState({ value: '' });

  /**
   * @param {String} value
   */
  setValue = value => this.setState({ value });

  /**
   * Handles click outside event for closing suggestions component.
   */
  handleClickOutside = () => {
    this.onMentionClose();
  };

  /**
   * Handle on enter event.
   *
   * @param {Object} event
   */
  onEnter = event => {
    if (this.state.isMentionOpen) {
      event.preventDefault();
      this.selectMentionOnEnter();
      return;
    }

    if (event.ctrlKey || event.metaKey) {
      this.props.onSubmit(event, this.state.value);
    }

    if (event.shiftKey) return;
  };

  /**
   * Well only update the coordinates on keyup
   */
  onKeyUp = () => this.updateCoordinates();

  /**
   * @param {Object} event
   */
  onKeyDown = event => {
    switch (event.keyCode) {
      case KEYS.RETURN: {
        this.onEnter(event);
        return;
      }
      case KEYS.ESC: {
        this.state.isMentionOpen && this.onMentionClose();
        return;
      }
      case KEYS.UP: {
        if (this.state.isMentionOpen) {
          event.preventDefault();
          this.updateActiveSuggestion(KEYS.UP);
        }
        return;
      }
      case KEYS.DOWN: {
        if (this.state.isMentionOpen) {
          event.preventDefault();
          this.updateActiveSuggestion(KEYS.DOWN);
        }
        return;
      }
      case KEYS.LEFT: {
        if (this.state.isMentionOpen) {
          event.preventDefault();
          this.onMentionClose();
        }
        return;
      }
      case KEYS.RIGHT: {
        if (this.state.isMentionOpen) {
          event.preventDefault();
          this.onMentionClose();
        }
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
    this.setState(
      {
        value,
      },
      () => {
        this.props.onChange(value);
      }
    );
  };

  /**
   * Scroll event handler syncs the scroll values of the backdrop and the textarea.
   * Close the mention on scroll, so the its position will not go off.
   *
   * @param {Object} event
   */
  onScroll = ({ scrollTop, scrollLeft }) => {
    this.onMentionClose();
    this.backdrop.scroll({ scrollTop, scrollLeft });
  };

  /**
   * @param {String} mention
   *
   * @returns {void}
   */
  onMention = mention => {
    if (!mention) {
      this.onMentionClose();
    } else {
      this.onMentionOpen();
      this.props.onSearch(mention);
    }
  };

  /**
   * Update coords state
   */
  updateCoordinates() {
    this.setState({
      coords: this.textarea.getCoordinates(),
    });
  }

  /**
   * @returns {void}
   */
  onMentionOpen = () => {
    this.setState(
      {
        activeSuggestion: 0,
        isMentionOpen: true,
      },
      () => {
        this.activate();
      }
    );
  };

  /**
   * @returns {void}
   */
  onMentionClose = () => {
    this.setState({
      isMentionOpen: false,
    });
  };

  /**
   * @param {Object} event
   * @param {Object} user
   * @param {Number}
   *
   * @returns {void}
   */
  onMentionSelect = (event, user) => {
    this.onMentionClose();
    this.textarea.replaceText(user.value);
    this.onAddMention(user.value);
  };

  /**
   * Add mention to the state then focus on thext area with extra space after.
   *
   * @param {String} value
   *
   * @returns {void}
   */
  onAddMention(value) {
    this.setState(
      {
        mentions: this.state.mentions.concat([`${this.props.trigger}${value}`]),
      },
      () => {
        this.textarea.focus();
      }
    );
  }

  /**
   * @returns {void}
   */
  selectMentionOnEnter() {
    const user = this.props.suggestions[this.state.activeSuggestion];

    if (user) {
      this.textarea.replaceText(user.value);
      this.onAddMention(user.value);
    }

    this.onMentionClose();
  }

  /**
   * Handles changing of active(highlighted) mentions item.
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

  /**
   * @returns {Boolean}
   */
  isMaxHeightReached() {
    if (
      this.pre &&
      this.props.autoResizeMaxHeight > 0 &&
      this.props.autoResize
    ) {
      return this.props.autoResizeMaxHeight < this.pre.getHeight();
    } else {
      return false;
    }
  }

  /**
   * @returns {String}
   */
  getOverflow() {
    if (this.props.autoResize) {
      return this.isMaxHeightReached() ? 'auto' : 'hidden';
    } else {
      return 'auto';
    }
  }

  /**
   * @returns {Object}
   */
  getComputedStyle() {
    if (this.isMaxHeightReached()) {
      return {
        height: `${this.props.autoResizeMaxHeight}px`,
        maxHeight: `${this.props.autoResizeMaxHeight}px`,
      };
    } else {
      return {};
    }
  }

  /**
   * We only use certain components e.g
   * If we start using the textarea on click.
   * So we can avoid mounting alot of components upfront.
   */
  activate = () => {
    this.setState(
      {
        isActivated: true,
      },
      () => {
        this.props.onActivated();
      }
    );
  };

  render() {
    return (
      <div
        ref={component => (this.component = component)}
        className="Mention-container"
        style={this.getComputedStyle()}
      >
        <ProxyPre
          ref={pre => (this.pre = pre)}
          isVisible={this.props.autoResize}
          isAbsolute={this.isMaxHeightReached()}
          maxHeight={this.props.autoResizeMaxHeight}
          value={this.state.value}
        />

        <Backdrop
          ref={backdrop => (this.backdrop = backdrop)}
          overflow={this.getOverflow()}
        >
          <Highlighter
            value={this.state.value}
            mentions={this.state.mentions}
            trigger={this.props.trigger}
          />
        </Backdrop>

        <TextInput
          ref={textarea => (this.textarea = textarea)}
          overflow={this.getOverflow()}
          onMention={this.onMention}
          onChange={this.onChange}
          onEnter={this.onEnter}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onScroll={this.onScroll}
          value={this.state.value}
          trigger={this.props.trigger}
          placeholder={this.props.placeholder}
        />

        {this.state.isActivated &&
          this.props.suggestions.length > 0 && (
            <Suggestions
              active={this.state.activeSuggestion}
              isOpen={this.state.isMentionOpen}
              coords={this.state.coords}
              options={this.props.suggestions}
              onSelect={this.onMentionSelect}
              scrollParent={this.props.scrollParent}
            />
          )}
      </div>
    );
  }
}

TextArea.propTypes = {
  autoResize: PropTypes.bool,
  autoResizeMaxHeight: PropTypes.number,
  value: PropTypes.string,
  suggestions: PropTypes.array,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onActivated: PropTypes.func,
  onSearch: PropTypes.func,
  trigger: PropTypes.oneOf(['@', '#']),
  placeholder: PropTypes.string,
  scrollParent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

TextArea.defaultProps = {
  autoResize: false,
  autoResizeMaxHeight: 0,
  value: '',
  suggestions: [],
  onSubmit: () => {},
  onChange: () => {},
  onActivated: () => {},
  onSearch: () => {},
  trigger: '@',
  placeholder: 'Type your message here...',
  scrollParent: 'scrollParent',
};

export default onClickOutside(TextArea);
