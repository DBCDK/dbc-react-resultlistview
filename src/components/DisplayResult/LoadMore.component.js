'use strict';
import React from 'react';

var Loadmore = React.createClass({
  propTypes: {
    button: React.PropTypes.string,
    update: React.PropTypes.func
  },

  render() {
    let classes = ['search-result--loadmore', 'button', 'primary'];
    return (
      <button
            key={this.props.button}
            onClick={this.props.update.bind(null, null)}
            className={classes.join(' ')}
          >
            {this.props.button}
          </button>
    );
  }
});

export default Loadmore;

