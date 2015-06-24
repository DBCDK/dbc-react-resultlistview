'use strict';
import React from 'react';

var Loadmore = React.createClass({
  propTypes: {
    button: React.PropTypes.string,
    update: React.PropTypes.func
  },

  render() {
    let classes = ['button', 'secondary'];
    return (
      <ul className="button-group even-2">
        <li>
          <a
            key={this.props.button}
            onClick={this.props.update.bind(null, null)}
            href="#"
            className={classes.join(' ')}
          >
            {this.props.button}
          </a>
        </li>
      </ul>
    );
  }
});

export default Loadmore;

