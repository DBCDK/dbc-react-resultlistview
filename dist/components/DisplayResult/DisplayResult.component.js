'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _DisplayWorkRowDisplayWorkRowComponentJs = require('./../DisplayWorkRow/DisplayWorkRow.component.js');

var _DisplayWorkRowDisplayWorkRowComponentJs2 = _interopRequireDefault(_DisplayWorkRowDisplayWorkRowComponentJs);

var _LoadMoreComponentJs = require('./LoadMore.component.js');

/**
 * Method that checks of component is being rendered on server or client
 * @returns {boolean}
 */

var _LoadMoreComponentJs2 = _interopRequireDefault(_LoadMoreComponentJs);

function isClient() {
  return typeof window !== 'undefined';
}

function _getNumberOfRows(windowWidth, noOfWorks) {
  var rows = noOfWorks;
  if (windowWidth < 604) {
    rows = rows;
  } else if (windowWidth < 1025) {
    rows += 1;
  } else {
    rows += 2;
    if (noOfWorks === 3) {
      rows += 3;
    }
  }
  return rows;
}

function getWorksInRow(windowWidth, works, noOfWorks) {
  var worksInRows = _getNumberOfRows(windowWidth, noOfWorks);
  return (0, _lodash.chunk)(works, worksInRows);
}

/**
 * Main component for presenting search result
 */
var ResultDisplay = _react2['default'].createClass({
  displayName: 'ResultDisplay',

  getInitialState: function getInitialState() {
    return { windowWidth: isClient() && window.innerWidth };
  },
  handleResize: function handleResize() {
    this.setState({ windowWidth: isClient() && window.innerWidth });
  },
  componentDidMount: function componentDidMount() {
    if (isClient()) {
      window.addEventListener('resize', this.handleResize);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (isClient()) {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  propTypes: {
    result: _react2['default'].PropTypes.array,
    coverImages: _react2['default'].PropTypes.object,
    noOfWorks: _react2['default'].PropTypes.number,
    hasMore: _react2['default'].PropTypes.bool,
    loadMore: _react2['default'].PropTypes.func
  },
  render: function render() {
    var _props = this.props;
    var loader = _props.loader;
    var pending = _props.pending;
    var result = _props.result;
    var hasMore = _props.hasMore;
    var loadMore = _props.loadMore;
    var coverImages = _props.coverImages;
    var noOfWorks = _props.noOfWorks;

    var rows = getWorksInRow(this.state.windowWidth, result, noOfWorks);
    var loadMoreButton = hasMore && !pending && _react2['default'].createElement(_LoadMoreComponentJs2['default'], { button: 'Se flere', update: loadMore });
    var workRow = rows.map(function (work, i) {
      return _react2['default'].createElement(_DisplayWorkRowDisplayWorkRowComponentJs2['default'], { key: i, work: work, coverImages: coverImages, noOfWorks: noOfWorks });
    });
    return _react2['default'].createElement(
      'div',
      { className: 'container' },
      workRow,
      loader,
      loadMoreButton
    );
  }
});

exports['default'] = ResultDisplay;
module.exports = exports['default'];