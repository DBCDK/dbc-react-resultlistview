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

/**
 * Method that checks of component is being rendered on server or client
 * @returns {boolean}
 */
function isClient() {
  return typeof window !== 'undefined';
}

function _getNumberOfRows(windowWidth) {
  var rows = 2;
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
    coverImages: _react2['default'].PropTypes.object
  },
  render: function render() {
    var _this = this;

    var worksInRows = _getNumberOfRows(this.state.windowWidth);
    var rows = (0, _lodash.chunk)(this.props.result, worksInRows);
    var workRow = rows.map(function (work, i) {
      return _react2['default'].createElement(_DisplayWorkRowDisplayWorkRowComponentJs2['default'], { key: i, work: work, coverImages: _this.props.coverImages });
    });
    return _react2['default'].createElement(
      'div',
      { className: 'container' },
      this.props.result.length && workRow || this.props.children
    );
  }
});

exports['default'] = ResultDisplay;
module.exports = exports['default'];