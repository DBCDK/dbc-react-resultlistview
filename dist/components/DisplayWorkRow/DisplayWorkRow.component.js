'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DisplayBibliographicDataDisplayBibliographicDataComponentJs = require('./../DisplayBibliographicData/DisplayBibliographicData.component.js');

var _DisplayBibliographicDataDisplayBibliographicDataComponentJs2 = _interopRequireDefault(_DisplayBibliographicDataDisplayBibliographicDataComponentJs);

// eslint-disable-line no-unused-vars

/**
* Component for creating presentation a row of works
*/
var WorkRow = _react2['default'].createClass({
  displayName: 'WorkRow',

  propTypes: {
    work: _react2['default'].PropTypes.array.isRequired,
    coverImages: _react2['default'].PropTypes.object,
    numRows: _react2['default'].PropTypes.string
  },
  render: function render() {
    var _this = this;

    var workElement = this.props.work.map(function (work, i) {
      var covers = _this.props.coverImages.get(work.identifiers[0]);
      var noOfWorks = _this.props.noOfWorks;
      return _react2['default'].createElement(_DisplayBibliographicDataDisplayBibliographicDataComponentJs2['default'], { key: i, title: work.title, creator: work.creator, identifiers: work.identifiers, workType: work.workType, cover: covers, noOfWorks: noOfWorks });
    });
    return _react2['default'].createElement(
      'div',
      { className: 'row' },
      workElement
    );
  }
});

exports['default'] = WorkRow;
module.exports = exports['default'];