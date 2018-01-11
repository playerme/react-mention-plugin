import React, { Component } from 'react';
import Popper from 'popper.js';

export default class Suggestions extends Component {
  /**
   * Popup Element to used by popper
   */
  popEl = null;

  /**
   * PopperJS instance
   */
  popper = null;

  /**
   * Fake ref element
   */
  ref = {
    getBoundingClientRect: () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
    }),
    clientWidth: 0,
    clientHeight: 0,
  };

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
  }

  componentDidMount() {
    this.initializePopper();
  }

  componentDidUpdate() {
    this.popper && this.popper.scheduleUpdate();
  }

  initializePopper() {
    this.popper = new Popper(this.ref, this.popEl, {
      removeOnDestroy: true,
      modifiers: {
        computeStyle: {
          enabled: true,
          fn: data => {
            console.log(this.props.coords);
            return {
              ...data,
              styles: {
                display: this.props.isOpen ? 'block' : 'none',
                ...data.styles,
                top:
                  this.isVisible(data.instance.popper) && this.props.isOpen
                    ? this.props.coords.top + 25
                    : this.props.coords.top - data.popper.height,
                left: this.props.coords.left - 25,
              },
            };
          },
        },
      },
    });
  }

  isVisible(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.bottom <
      (window.innerHeight || document.documentElement.clientWidth)
    );
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
    return (
      <div ref={popEl => (this.popEl = popEl)} className="Mention-suggestions">
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
      </div>
    );
  }
}
