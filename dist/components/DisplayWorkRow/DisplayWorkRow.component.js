'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DisplayBibliographicDataDisplayBibliographicDataComponentJs = require('./../DisplayBibliographicData/DisplayBibliographicData.component.js');

var _DisplayBibliographicDataDisplayBibliographicDataComponentJs2 = _interopRequireDefault(_DisplayBibliographicDataDisplayBibliographicDataComponentJs);

/**
* Component for creating presentation a row of works
*/

var WorkRow = _react2['default'].createClass({
  displayName: 'WorkRow',

  propTypes: {
    work: _react2['default'].PropTypes.array.isRequired
  },
  render: function render() {
    var workElement = this.props.work.map(function (work, i) {
      return _react2['default'].createElement(_DisplayBibliographicDataDisplayBibliographicDataComponentJs2['default'], { key: i, title: work.title, identifiers: work.identifiers, worktype: work.worktype, cover: work.cover });
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