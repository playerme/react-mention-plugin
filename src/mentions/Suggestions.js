import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popper from 'popper.js';

/**
 * @param {Number} active
 * @param {Array} options
 * @param {Function} onCLick
 *
 * @returns {Object}
 */
const MentionItems = ({ active, options, onClick }) => {
  return (
    <ul>
      {options.map((item, index) => (
        <li key={item.id}>
          <a
            className={active === index ? 'active' : ''}
            href="/"
            onClick={onClick(item, index)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

MentionItems.propTypes = {
  active: PropTypes.number,
  options: PropTypes.array,
  onClick: PropTypes.func,
};

MentionItems.defaultProps = {
  active: 0,
  options: [],
  onClick: () => {},
};

class Suggestions extends Component {
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
   * @returns {String}
   */
  getElementClass() {
    return this.props.isOpen
      ? 'Mention-suggestions Mention-suggestions--block'
      : 'Mention-suggestions';
  }

  /**
   * Curry to onClick function in order to pass item object.
   *
   * @returns {Function}
   */
  onClick = (item, index) => {
    const self = this;
    return function(event) {
      event.preventDefault();
      self.props.onSelect(event, item, index);
    };
  };

  render() {
    return [
      <span
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
        className={this.getElementClass()}
      >
        <MentionItems
          active={this.props.active}
          options={this.props.options}
          onClick={this.onClick}
        />
      </div>,
    ];
  }
}

Suggestions.propTypes = {
  coords: PropTypes.object,
  active: PropTypes.number,
  options: PropTypes.array,
  isOpen: PropTypes.bool,
};

Suggestions.propTypes = {
  coords: {},
  active: 0,
  options: [],
  isOpen: false,
};

export default Suggestions;
