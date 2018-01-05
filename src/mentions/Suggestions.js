import React, { PureComponent } from 'react';

export default class Suggestions extends PureComponent {
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

  /**
   * Get the dynamic style of the component.
   * Component is in absolute position relative to the Mention-container.
   * Position offset gets updated when coords props get updated.
   *
   * @returns {Object}
   */
  getWrapperStyle() {
    return {
      display: this.props.isOpen ? 'block' : 'none',
      position: 'absolute',
      top: `${this.props.coords.top + 25}px`,
      left: `${this.props.coords.left}px`,
    };
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
      <div style={this.getWrapperStyle()} className="Mention-suggestions">
        <ul>
          {this.props.options.map((user, index) => (
            <li key={user.id}>
              <a
                className={this.getClassName(index)}
                href="/"
                onClick={this.onClick(user, index)}
              >
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
