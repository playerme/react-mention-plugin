import React, { Component } from 'react';
import Popper from 'popper.js';

export default class Suggestions extends Component {
  /**
   * Popup Element to used by popper
   */
  element = null;

  /**
   * PopperJS instance
   */
  popper = null;

  /**
   * @property {Object}
   */
  static defaultProps = {
    isOpen: false,
    coords: {
      top: 0,
      left: 0,
    },
    options: [],
  };

  componentWillUnmount() {
    this.popper && this.popper.destroy();
    this.popper = null;
    this.element = null;
    this.reference = null;
  }

  componentDidMount() {
    this.initializePopper();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && this.popper) {
      this.popper.scheduleUpdate();
    }
  }

  componentWillUpdate() {
    this.popper && this.popper.scheduleUpdate();
  }

  /**
   * Initialize the instance of our popper
   */
  initializePopper() {
    this.popper = new Popper(this.reference, this.element, {
      placement: 'bottom-start',
      removeOnDestroy: true,
      modifiers: {
        offset: { offset: '0,5' },
        preventOverflow: {
          enabled: true,
          padding: 50,
        },
      },
    });
  }

  /**
   * Handles active class name toggling.
   *
   * @param {Number} index
   *
   * @returns {String}
   */
  getClassName(index) {
    return index === this.props.active ? 'active ' : '';
  }

  /**
   * Curry to onClick function in order to pass user object.
   *
   * @returns {Function}
   */
  onClick = (user, index) => {
    const self = this;
    return function(event) {
      event.preventDefault();
      self.props.onSelect(event, user, index);
    };
  };

  render() {
    return [
      <div
        key="reference"
        className="Mention-reference"
        ref={reference => (this.reference = reference)}
        style={{
          top: this.props.coords.top,
          left: this.props.coords.left,
        }}
      />,
      <div
        key="element"
        ref={element => (this.element = element)}
        className={
          this.props.isOpen
            ? 'Mention-suggestions Mention-suggestions--block'
            : 'Mention-suggestions'
        }
      >
        <ul>
          {this.props.options.map((user, index) => (
            <li key={user.id}>
              <a
                className={this.getClassName(index)}
                href="/"
                onClick={this.onClick(user, index)}
              >
                {user.label}
              </a>
            </li>
          ))}
        </ul>
      </div>,
    ];
  }
}
