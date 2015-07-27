'use strict';
import React from 'react';
import {chunk} from 'lodash';
import WorkRow from './../DisplayWorkRow/DisplayWorkRow.component.js';
import LoadMore from './LoadMore.component.js';

/**
 * Method that checks of component is being rendered on server or client
 * @returns {boolean}
 */
function isClient() {
  return (typeof window !== 'undefined');
}

function _getNumberOfRows(windowWidth, noOfWorks) {
  let rows = noOfWorks;
  if (windowWidth < 604) {
    rows = rows;
  } else if (windowWidth < 1025) {
    rows += 1;
  } else {
    rows += 2;
  }
  if (noOfWorks === 3) {
    rows = 6;
  }
  return rows;
}

function getWorksInRow(windowWidth, works, noOfWorks) {
  const worksInRows = _getNumberOfRows(windowWidth, noOfWorks);
  return chunk(works, worksInRows);
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
    coverImages: React.PropTypes.object,
    noOfWorks: React.PropTypes.number,
    hasMore: React.PropTypes.bool,
    loadMore: React.PropTypes.func
  },
  render() {
    const {loader, pending, result, hasMore, loadMore, coverImages, noOfWorks} = this.props;
    const rows = getWorksInRow(this.state.windowWidth, result, noOfWorks);
    const loadMoreButton = (hasMore && !pending) && <LoadMore button={'Se flere'} update={loadMore} />;
    const workRow = rows.map((work, i) => {
      return (<WorkRow key={i} work={work} coverImages={coverImages} noOfWorks={noOfWorks}/>);
    });
    return (
      <div className='container'>
        {workRow}
        {loader}
        {loadMoreButton}
      </div>);
  }
});

export default ResultDisplay;
