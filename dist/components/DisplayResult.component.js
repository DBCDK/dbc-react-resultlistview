'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

// Import styling

require('./DisplayResult.scss');

var _DisplayWorkRowComponentJs = require('./DisplayWorkRow.component.js');

var _DisplayWorkRowComponentJs2 = _interopRequireDefault(_DisplayWorkRowComponentJs);

/**
 * Main component for presenting search result
 */
var ResultDisplay = _react2['default'].createClass({
  displayName: 'ResultDisplay',

  getInitialState: function getInitialState() {
    return { windowWidth: window.innerWidth };
  },
  handleResize: function handleResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  },
  componentDidMount: function componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  render: function render() {
    var worksInRows = 2;
    if (this.state.windowWidth < 604) {
      worksInRows = 2;
    } else if (this.state.windowWidth < 1024) {
      worksInRows = 3;
    } else {
      worksInRows = 4;
    }
    var rows = _lodash2['default'].chunk(this.props.result, worksInRows);
    var workRow = rows.map(function (work) {
      return _react2['default'].createElement(_DisplayWorkRowComponentJs2['default'], { work: work });
    });
    return _react2['default'].createElement(
      'div',
      { className: 'container', ref: 'container' },
      workRow
    );
  }
});

exports['default'] = ResultDisplay;
module.exports = exports['default'];