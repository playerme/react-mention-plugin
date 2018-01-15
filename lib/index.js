(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-onclickoutside"), require("popper.js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "react-onclickoutside", "popper.js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types"), require("react-onclickoutside"), require("popper.js")) : factory(root["react"], root["prop-types"], root["react-onclickoutside"], root["popper.js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(9);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextArea = __webpack_require__(6);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextArea2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(7);

var _debounce2 = _interopRequireDefault(_debounce);

var _reactOnclickoutside = __webpack_require__(17);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Suggestions = __webpack_require__(18);

var _Suggestions2 = _interopRequireDefault(_Suggestions);

var _getCoordinates2 = __webpack_require__(20);

var _getCoordinates3 = _interopRequireDefault(_getCoordinates2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYS = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var ProxyPre = function (_Component) {
  _inherits(ProxyPre, _Component);

  function ProxyPre() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProxyPre);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProxyPre.__proto__ || Object.getPrototypeOf(ProxyPre)).call.apply(_ref, [this].concat(args))), _this), _this.getHeight = function () {
      return _this.pre ? _this.pre.offsetHeight : 0;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * @returns {Number}
   */


  _createClass(ProxyPre, [{
    key: 'getComputedStyle',


    /**
     * @returns {Object}
     */
    value: function getComputedStyle() {
      return this.props.isAbsolute ? {
        position: 'absolute',
        overflow: 'hidden',
        maxHeight: this.props.maxHeight
      } : {};
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.isVisible) {
        return null;
      }

      if (this.props.isAbsolute) {
        return _react2.default.createElement(
          'div',
          { style: this.getComputedStyle() },
          _react2.default.createElement(
            'pre',
            { ref: function ref(pre) {
                return _this2.pre = pre;
              }, className: 'Mention-proxy' },
            this.props.value,
            _react2.default.createElement('br', null)
          )
        );
      } else {
        return _react2.default.createElement(
          'pre',
          { ref: function ref(pre) {
              return _this2.pre = pre;
            }, className: 'Mention-proxy' },
          this.props.value,
          _react2.default.createElement('br', null)
        );
      }
    }
  }]);

  return ProxyPre;
}(_react.Component);

ProxyPre.defaultProps = {
  value: '',
  isVisible: false,
  isAbsolute: false,
  maxHeight: 200
};

ProxyPre.propTypes = {
  value: _propTypes2.default.string,
  isVisible: _propTypes2.default.bool,
  isAbsolute: _propTypes2.default.bool,
  maxHeight: _propTypes2.default.number
};

var Highlighter = function (_Component2) {
  _inherits(Highlighter, _Component2);

  function Highlighter() {
    _classCallCheck(this, Highlighter);

    return _possibleConstructorReturn(this, (Highlighter.__proto__ || Object.getPrototypeOf(Highlighter)).apply(this, arguments));
  }

  _createClass(Highlighter, [{
    key: 'getHtmlValue',

    /**
     * @param {Array|null} value
     * @param {Array} mentions
     */
    value: function getHtmlValue(value) {
      var mentions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return value.split(new RegExp('(' + this.props.trigger + '\\w+)', 'g')).map(function (str, key) {
        if (mentions.indexOf(str) !== -1) {
          return _react2.default.createElement(
            'mark',
            { key: key, className: 'Mention-mark' },
            str
          );
        } else if (str.length > 0) {
          return str;
        } else {
          return null;
        }
      }).filter(function (el) {
        return el !== null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'div',
        { key: '0', className: 'Mention-highlights' },
        this.getHtmlValue(this.props.value, this.props.mentions)
      ), _react2.default.createElement('br', { key: '1' })];
    }
  }]);

  return Highlighter;
}(_react.Component);

Highlighter.defaultProps = {
  trigger: '@',
  value: '',
  mentions: []
};

Highlighter.propTypes = {
  trigger: _propTypes2.default.oneOf(['@', '#']),
  value: _propTypes2.default.string.isRequired,
  mentions: _propTypes2.default.array.isRequired
};

var Backdrop = function (_Component3) {
  _inherits(Backdrop, _Component3);

  function Backdrop() {
    var _ref2;

    var _temp2, _this4, _ret2;

    _classCallCheck(this, Backdrop);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref2 = Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).call.apply(_ref2, [this].concat(args))), _this4), _this4.scroll = function (_ref3) {
      var scrollTop = _ref3.scrollTop,
          scrollLeft = _ref3.scrollLeft;

      _this4.backdrop.scrollTop = scrollTop;
      _this4.backdrop.scrollLeft = scrollLeft;
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  _createClass(Backdrop, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.backdrop = null;
    }

    /**
     * @param {Number} props.scrollTop
     * @param {Number} props.scrollLeft
     */

  }, {
    key: 'getCustomStyle',
    value: function getCustomStyle() {
      return {
        height: this.props.height,
        overflow: this.props.overflow
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        {
          style: this.getCustomStyle(),
          ref: function ref(backdrop) {
            return _this5.backdrop = backdrop;
          },
          className: 'Mention-backdrop'
        },
        this.props.children
      );
    }
  }]);

  return Backdrop;
}(_react.Component);

Backdrop.propTypes = {
  height: _propTypes2.default.number,
  overflow: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

Backdrop.defaultProps = {
  height: 0,
  overflow: 'auto'
};

var TextInput = function (_Component4) {
  _inherits(TextInput, _Component4);

  function TextInput() {
    var _ref4;

    var _temp3, _this6, _ret3;

    _classCallCheck(this, TextInput);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this6 = _possibleConstructorReturn(this, (_ref4 = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref4, [this].concat(args))), _this6), _this6.onChange = function (event) {
      _this6.onUpdateCoords();

      _this6.props.onChange(event.target.value);

      var mentioned = _this6.getLastWord(event.target);

      var isMatched = new RegExp('(' + _this6.props.trigger + '\\w+)', 'g').test(mentioned);

      if (mentioned && mentioned.length > 3 && isMatched) {
        _this6.props.onMention(mentioned);
      } else {
        _this6.props.onMention(false);
      }
    }, _this6.onScroll = function (event) {
      _this6.props.onScroll({
        scrollLeft: event.target.scrollLeft,
        scrollTop: event.target.scrollTop
      });
    }, _this6.onKeyPress = function (event) {
      _this6.props.onKeyPress(event);
    }, _this6.onKeyDown = function (event) {
      _this6.props.onKeyDown(event);
    }, _this6.onKeyUp = function (event) {
      _this6.props.onKeyUp(event);
    }, _this6.focus = function () {
      return _this6.textarea.focus();
    }, _this6.blur = function () {
      return _this6.textarea.blur();
    }, _temp3), _possibleConstructorReturn(_this6, _ret3);
  }

  _createClass(TextInput, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.textarea = null;
    }

    /**
     * @param {Object} event
     */


    /**
     * @param {Object} event
     */

  }, {
    key: 'getLastWord',


    /**
     * Gets the last word being modified.
     *
     * @param {Object} textarea
     *
     * @returns {Boolean|String}
     */
    value: function getLastWord(textarea) {
      var lastWord = this.getCurrentText(textarea.value, this.getCaretPosition(textarea));

      return lastWord ? lastWord : false;
    }

    /**
     * @param {String} text
     * @param {Number} caretPosition
     *
     * @returns {String}
     */

  }, {
    key: 'getCurrentText',
    value: function getCurrentText(text, caretPosition) {
      var preText = text.substring(0, caretPosition);
      if (preText.indexOf(' ') > 0) {
        var words = preText.split(' ');
        var lastWord = words[words.length - 1];
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

  }, {
    key: 'getCaretPosition',
    value: function getCaretPosition(textarea) {
      var caretPosition = 0; // IE Support
      if (document.selection) {
        textarea.focus();
        var Sel = document.selection.createRange();
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

  }, {
    key: 'replaceText',
    value: function replaceText(value) {
      var currentPosition = this.getCaretPosition(this.textarea);
      var prevText = this.props.value.substring(0, currentPosition);

      var textPart1 = prevText.substring(0, prevText.lastIndexOf(this.props.trigger));
      var textPart2 = this.props.value.substring(currentPosition, this.props.value.length);

      return this.props.onChange('' + textPart1 + this.props.trigger + value + textPart2 + ' ');
    }

    /**
     * Updates mention suggestions coordinates.
     *
     * @returns {void}
     */

  }, {
    key: 'onUpdateCoords',
    value: function onUpdateCoords() {
      var _getCoordinates = (0, _getCoordinates3.default)(this.textarea, this.textarea.selectionEnd),
          left = _getCoordinates.left,
          top = _getCoordinates.top;

      var nextTop = top;

      if (this.textarea.scrollHeight > this.textarea.clientHeight) {
        nextTop = top - (this.textarea.scrollHeight - this.textarea.clientHeight);
      }

      this.props.onUpdateCoords({
        left: left,
        top: nextTop
      });
    }

    /**
     * @param {Object} event
     *
     * @returns {void}
     */


    /**
     * @param {Object} event
     *
     * @returns {void}
     */


    /**
     * @param {Object} event
     *
     * @returns {void}
     */

  }, {
    key: 'getCustomStyle',


    /**
     * @returns {Object}
     *
     * @returns {void}
     */
    value: function getCustomStyle() {
      return {
        overflow: this.props.overflow
      };
    }

    /**
     * @returns {void}
     */


    /**
     * @returns {void}
     */

  }, {
    key: 'render',


    /**
     * @returns {Object}
     */
    value: function render() {
      var _this7 = this;

      return _react2.default.createElement('textarea', {
        style: this.getCustomStyle(),
        className: 'Mention-textarea',
        autoFocus: true,
        ref: function ref(textarea) {
          return _this7.textarea = textarea;
        },
        onChange: this.onChange,
        onPaste: this.onChange,
        onCut: this.onChange,
        onScroll: this.onScroll,
        onKeyPress: this.onKeyPress,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        value: this.props.value,
        spellCheck: false
      });
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  trigger: _propTypes2.default.string,
  overflow: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onUpdateCoords: _propTypes2.default.func,
  onMention: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  value: _propTypes2.default.string
};

TextInput.defaultProps = {
  trigger: '@',
  overflow: 'auto',
  onChange: function onChange() {},
  onUpdateCoords: function onUpdateCoords() {},
  onMention: function onMention() {},
  onScroll: function onScroll() {},
  onKeyUp: function onKeyUp() {},
  onKeyPress: function onKeyPress() {},
  onKeyDown: function onKeyDown() {},
  onEnter: function onEnter() {},
  value: ''
};

var TextArea = function (_Component5) {
  _inherits(TextArea, _Component5);

  function TextArea() {
    var _ref5;

    var _temp4, _this8, _ret4;

    _classCallCheck(this, TextArea);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp4 = (_this8 = _possibleConstructorReturn(this, (_ref5 = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref5, [this].concat(args))), _this8), _this8.state = {
      activeSuggestion: 0,
      value: '',
      isMentionOpen: false,
      isActivated: false,
      coords: {
        top: 0,
        left: 0
      },
      mentions: [],
      height: undefined
    }, _this8.closeMention = function () {
      return _this8.onMentionClose();
    }, _this8.openMention = function () {
      return _this8.onMentionOpen();
    }, _this8.focus = function () {
      return _this8.textarea.focus();
    }, _this8.blur = function () {
      return _this8.textarea.blur();
    }, _this8.clearValue = function () {
      return _this8.setState({ value: '' });
    }, _this8.setValue = function (value) {
      return _this8.setState({ value: value });
    }, _this8.handleClickOutside = function () {
      _this8.onMentionClose();
    }, _this8.onEnter = function (event) {
      if (_this8.state.isMentionOpen) {
        event.preventDefault();
        _this8.selectMentionOnEnter();
        return;
      }

      if (event.ctrlKey || event.metaKey) {
        _this8.props.onSubmit(event, _this8.state.value);
      }

      if (event.shiftKey) return;
    }, _this8.onKeyDown = function (event) {
      switch (event.keyCode) {
        case KEYS.RETURN:
          {
            _this8.onEnter(event);
            return;
          }
        case KEYS.ESC:
          {
            _this8.state.isMentionOpen && _this8.onMentionClose();
            return;
          }
        case KEYS.UP:
          {
            if (_this8.state.isMentionOpen) {
              event.preventDefault();
              _this8.updateActiveSuggestion(KEYS.UP);
            }
            return;
          }
        case KEYS.DOWN:
          {
            if (_this8.state.isMentionOpen) {
              event.preventDefault();
              _this8.updateActiveSuggestion(KEYS.DOWN);
            }
            return;
          }
        case KEYS.LEFT:
          {
            if (_this8.state.isMentionOpen) {
              event.preventDefault();
              _this8.onMentionClose();
            }
            return;
          }
        case KEYS.RIGHT:
          {
            if (_this8.state.isMentionOpen) {
              event.preventDefault();
              _this8.onMentionClose();
            }
            break;
          }
        default:
          break;
      }
    }, _this8.onChange = function (value) {
      _this8.setState({
        value: value
      }, function () {
        _this8.props.onChange(value);
      });
    }, _this8.onScroll = function (_ref6) {
      var scrollTop = _ref6.scrollTop,
          scrollLeft = _ref6.scrollLeft;

      _this8.onMentionClose();
      _this8.backdrop.scroll({ scrollTop: scrollTop, scrollLeft: scrollLeft });
    }, _this8.onUpdateCoords = function () {
      return (0, _debounce2.default)(function (coords) {
        _this8.setState({
          coords: coords
        });
      }, 300);
    }, _this8.onMention = function (mention) {
      if (!mention) {
        _this8.onMentionClose();
      } else {
        _this8.onMentionOpen();
        _this8.props.onSearch(mention);
      }
    }, _this8.onMentionOpen = function () {
      _this8.setState({
        activeSuggestion: 0,
        isMentionOpen: true
      }, function () {
        _this8.activate();
      });
    }, _this8.onMentionClose = function () {
      _this8.setState({
        isMentionOpen: false
      });
    }, _this8.onMentionSelect = function (event, user) {
      _this8.onMentionClose();
      _this8.textarea.replaceText(user.value);
      _this8.onAddMention(user.value);
    }, _this8.activate = function () {
      _this8.setState({
        isActivated: true
      }, function () {
        _this8.props.onActivated();
      });
    }, _temp4), _possibleConstructorReturn(_this8, _ret4);
  }
  /**
   * @property {Object} state
   */


  _createClass(TextArea, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.pre = null;
      this.component = null;
      this.textarea = null;
      this.backdrop = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value || ''
      });
    }

    /**
     * @returns {void}
     */


    /**
     * @returns {void}
     */


    /**
     * Focus to the textarea
     */


    /**
     * @returns {void}
     */


    /**
     * @returns {void}
     */


    /**
     * @param {String} value
     */


    /**
     * Handles click outside event for closing suggestions component.
     */


    /**
     * Handle on enter event.
     *
     * @param {Object} event
     */


    /**
     * @param {Object} event
     */


    /**
     * @param {String} value
     */


    /**
     * Scroll event handler syncs the scroll values of the backdrop and the textarea.
     * Close the mention on scroll, so the its position will not go off.
     *
     * @param {Object} event
     */


    /**
     * Updates the coordinates in the state to be used
     * for positioning our mention suggestion.
     *
     * @returns {Function}
     */


    /**
     * @param {String} mention
     *
     * @returns {void}
     */


    /**
     * @returns {void}
     */


    /**
     * @returns {void}
     */


    /**
     * @param {Object} event
     * @param {Object} user
     * @param {Number}
     *
     * @returns {void}
     */

  }, {
    key: 'onAddMention',


    /**
     * Add mention to the state then focus on thext area with extra space after.
     *
     * @param {String} value
     *
     * @returns {void}
     */
    value: function onAddMention(value) {
      var _this9 = this;

      this.setState({
        mentions: this.state.mentions.concat(['' + this.props.trigger + value])
      }, function () {
        _this9.textarea.focus();
      });
    }

    /**
     * @returns {void}
     */

  }, {
    key: 'selectMentionOnEnter',
    value: function selectMentionOnEnter() {
      var user = this.props.suggestions[this.state.activeSuggestion];

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

  }, {
    key: 'updateActiveSuggestion',
    value: function updateActiveSuggestion(dir) {
      var nextActive = dir === KEYS.UP ? this.state.activeSuggestion - 1 : this.state.activeSuggestion + 1;

      if (nextActive > this.props.suggestions.length - 1 || this.props.suggestions.length === 1) {
        return this.setState({
          activeSuggestion: 0
        });
      }

      if (nextActive < 0) {
        return this.setState({
          activeSuggestion: this.props.suggestions.length - 1
        });
      }

      this.setState({
        activeSuggestion: nextActive
      });
    }

    /**
     * @returns {Boolean}
     */

  }, {
    key: 'isMaxHeightReached',
    value: function isMaxHeightReached() {
      if (this.pre && this.props.autoResizeMaxHeight > 0 && this.props.autoResize) {
        return this.props.autoResizeMaxHeight < this.pre.getHeight();
      } else {
        return false;
      }
    }

    /**
     * @returns {String}
     */

  }, {
    key: 'getOverflow',
    value: function getOverflow() {
      if (this.props.autoResize) {
        return this.isMaxHeightReached() ? 'auto' : 'hidden';
      } else {
        return 'auto';
      }
    }

    /**
     * @returns {Object}
     */

  }, {
    key: 'getComputedStyle',
    value: function getComputedStyle() {
      if (this.isMaxHeightReached()) {
        return {
          height: this.props.autoResizeMaxHeight + 'px',
          maxHeight: this.props.autoResizeMaxHeight + 'px'
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

  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(component) {
            return _this10.component = component;
          },
          className: 'Mention-container',
          style: this.getComputedStyle()
        },
        _react2.default.createElement(ProxyPre, {
          ref: function ref(pre) {
            return _this10.pre = pre;
          },
          isVisible: this.props.autoResize,
          isAbsolute: this.isMaxHeightReached(),
          maxHeight: this.props.autoResizeMaxHeight,
          value: this.state.value
        }),
        _react2.default.createElement(
          Backdrop,
          {
            ref: function ref(backdrop) {
              return _this10.backdrop = backdrop;
            },
            overflow: this.getOverflow()
          },
          _react2.default.createElement(Highlighter, {
            value: this.state.value,
            mentions: this.state.mentions,
            trigger: this.props.trigger
          })
        ),
        _react2.default.createElement(TextInput, {
          ref: function ref(textarea) {
            return _this10.textarea = textarea;
          },
          overflow: this.getOverflow(),
          onMention: this.onMention,
          onChange: this.onChange,
          onEnter: this.onEnter,
          onKeyDown: this.onKeyDown,
          onScroll: this.onScroll,
          onUpdateCoords: this.onUpdateCoords(),
          value: this.state.value,
          trigger: this.props.trigger
        }),
        this.state.isActivated && _react2.default.createElement(_Suggestions2.default, {
          active: this.state.activeSuggestion,
          isOpen: this.state.isMentionOpen,
          coords: this.state.coords,
          options: this.props.suggestions,
          onSelect: this.onMentionSelect
        })
      );
    }
  }]);

  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  autoResize: _propTypes2.default.bool,
  autoResizeMaxHeight: _propTypes2.default.number,
  value: _propTypes2.default.string,
  suggestions: _propTypes2.default.array,
  onChange: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onActivated: _propTypes2.default.func,
  onSearch: _propTypes2.default.func,
  trigger: _propTypes2.default.oneOf(['@', '#'])
};

TextArea.defaultProps = {
  autoResize: false,
  autoResizeMaxHeight: 0,
  value: '',
  suggestions: [],
  onSubmit: function onSubmit() {},
  onChange: function onChange() {},
  onActivated: function onActivated() {},
  onSearch: function onSearch() {},
  trigger: '@'
};

exports.default = (0, _reactOnclickoutside2.default)(TextArea);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    now = __webpack_require__(8),
    toNumber = __webpack_require__(11);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3),
    getRawTag = __webpack_require__(14),
    objectToString = __webpack_require__(15);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popper = __webpack_require__(19);

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @param {Number} active
 * @param {Array} options
 * @param {Function} onCLick
 *
 * @returns {Object}
 */
var MentionItems = function MentionItems(_ref) {
  var active = _ref.active,
      options = _ref.options,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'ul',
    null,
    options.map(function (item, index) {
      return _react2.default.createElement(
        'li',
        { key: item.id },
        _react2.default.createElement(
          'a',
          {
            className: active === index ? 'active' : '',
            href: '/',
            onClick: onClick(item, index)
          },
          item.label
        )
      );
    })
  );
};

MentionItems.propTypes = {
  active: _propTypes2.default.number,
  options: _propTypes2.default.array,
  onClick: _propTypes2.default.func
};

MentionItems.defaultProps = {
  active: 0,
  options: [],
  onClick: function onClick() {}
};

var Suggestions = function (_Component) {
  _inherits(Suggestions, _Component);

  function Suggestions() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Suggestions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call.apply(_ref2, [this].concat(args))), _this), _this.element = null, _this.popper = null, _this.onClick = function (item, index) {
      var self = _this;
      return function (event) {
        event.preventDefault();
        self.props.onSelect(event, item, index);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * Popup Element to used by popper
   */


  /**
   * PopperJS instance
   */


  /**
   * @property {Object}
   */


  _createClass(Suggestions, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.popper && this.popper.destroy();
      this.popper = null;
      this.element = null;
      this.reference = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initializePopper();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && this.popper) {
        this.popper.scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.popper && this.popper.scheduleUpdate();
    }

    /**
     * Initialize the instance of our popper
     */

  }, {
    key: 'initializePopper',
    value: function initializePopper() {
      this.popper = new _popper2.default(this.reference, this.element, {
        placement: 'bottom-start',
        removeOnDestroy: true,
        modifiers: {
          offset: { offset: '0,5' },
          preventOverflow: {
            enabled: true,
            padding: 50
          }
        }
      });
    }

    /**
     * @returns {String}
     */

  }, {
    key: 'getElementClass',
    value: function getElementClass() {
      return this.props.isOpen ? 'Mention-suggestions Mention-suggestions--block' : 'Mention-suggestions';
    }

    /**
     * Curry to onClick function in order to pass item object.
     *
     * @returns {Function}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return [_react2.default.createElement('span', {
        key: 'reference',
        className: 'Mention-reference',
        ref: function ref(reference) {
          return _this2.reference = reference;
        },
        style: {
          top: this.props.coords.top,
          left: this.props.coords.left
        }
      }), _react2.default.createElement(
        'div',
        {
          key: 'element',
          ref: function ref(element) {
            return _this2.element = element;
          },
          className: this.getElementClass()
        },
        _react2.default.createElement(MentionItems, {
          active: this.props.active,
          options: this.props.options,
          onClick: this.onClick
        })
      )];
    }
  }]);

  return Suggestions;
}(_react.Component);

Suggestions.defaultProps = {
  isOpen: false,
  coords: {
    top: 0,
    left: 0
  },
  options: []
};


Suggestions.propTypes = {
  coords: _propTypes2.default.object,
  active: _propTypes2.default.number,
  options: _propTypes2.default.array,
  isOpen: _propTypes2.default.bool
};

Suggestions.defaultProps = {
  coords: {},
  active: 0,
  options: [],
  isOpen: false
};

exports.default = Suggestions;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCaretCoordinates;
/* eslint-disable */
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
var properties = ['direction', // RTL support
'boxSizing', 'width', // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
'height', 'overflowX', 'overflowY', // copy the scrollbar for IE

'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',

// https://developer.mozilla.org/en-US/docs/Web/CSS/font
'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', // might not make a difference, but better be safe

'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'];

var isBrowser = typeof window !== 'undefined';
var isFirefox = isBrowser && window.mozInnerScreenX != null;

function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
  }

  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
    if (el) el.parentNode.removeChild(el);
  }

  // The mirror div will replicate the textarea's style
  var div = document.createElement('div');
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.appendChild(div);

  var style = div.style;
  var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9
  var isInput = element.nodeName === 'INPUT';

  // Default textarea styles
  style.whiteSpace = 'pre-wrap';
  if (!isInput) style.wordWrap = 'break-word'; // only for textarea-s

  // Position off-screen
  style.position = 'absolute'; // required to return coordinates properly
  if (!debug) style.visibility = 'hidden'; // not 'display: none' because we want rendering

  // Transfer the element's properties to the div
  properties.forEach(function (prop) {
    if (isInput && prop === 'lineHeight') {
      // Special case for <input>s because text is rendered centered and line height may be != height
      style.lineHeight = computed.height;
    } else {
      style[prop] = computed[prop];
    }
  });

  if (isFirefox) {
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
    if (element.scrollHeight > parseInt(computed.height)) style.overflowY = 'scroll';
  } else {
    style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
  }

  div.textContent = element.value.substring(0, position);
  // The second special handling for input type="text" vs textarea:
  // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (isInput) div.textContent = div.textContent.replace(/\s/g, '\xA0');

  var span = document.createElement('span');
  // Wrapping must be replicated *exactly*, including when a long word gets
  // onto the next line, with whitespace at the end of the line before (#7).
  // The  *only* reliable way to do that is to copy the *entire* rest of the
  // textarea's content into the <span> created at the caret position.
  // For inputs, just '.' would be enough, but no need to bother.
  span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
  div.appendChild(span);

  var coordinates = {
    top: span.offsetTop + parseInt(computed['borderTopWidth']),
    left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
    height: parseInt(computed['lineHeight'])
  };

  if (debug) {
    span.style.backgroundColor = '#aaa';
  } else {
    document.body.removeChild(div);
  }

  return coordinates;
}

/***/ })
/******/ ]);
});