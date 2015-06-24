'use strict';
import React from 'react';
import {chunk} from 'lodash';
import WorkRow from './../DisplayWorkRow/DisplayWorkRow.component.js';

/**
 * Method that checks of component is being rendered on server or client
 * @returns {boolean}
 */
function isClient() {
  return (typeof window !== 'undefined');
}

function _getNumberOfRows(windowWidth) {
  let rows = 2;
  if (windowWidth < 604) {
    rows = 2;
  } else if (windowWidth < 1024) {
    rows = 3;
  } else {
    rows = 4;
  }
  return rows;
}

/**
 * Main component for presenting search result
 */
const ResultDisplay = React.createClass({
  getInitialState() {
    return {windowWidth: isClient() && window.innerWidth};
  },
  handleResize() {
    this.setState({windowWidth: isClient() && window.innerWidth});
  },
  componentDidMount() {
    if (isClient()) {
      window.addEventListener('resize', this.handleResize);
    }
  },
  componentWillUnmount() {
    if (isClient()) {
      window.removeEventListener('resize', this.handleResize);
    }

  },
  propTypes: {
    result: React.PropTypes.array,
    coverImages: React.PropTypes.object
  },
  render() {
    let worksInRows = _getNumberOfRows(this.state.windowWidth);
    let rows = chunk(this.props.result, worksInRows);
    const workRow = rows.map((work, i) => {
      return (<WorkRow key={i} work={work} coverImages={this.props.coverImages} />);
    });
    return (
      <div className='container'>
        {this.props.result.length && workRow || this.props.children}
      </div>);
  }
});

export default ResultDisplay;
