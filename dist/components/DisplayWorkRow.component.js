'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DisplayBibliographicDataComponentJs = require('./DisplayBibliographicData.component.js');

var _DisplayBibliographicDataComponentJs2 = _interopRequireDefault(_DisplayBibliographicDataComponentJs);

/**
 * Component for creating presentation a row of works
 */

var WorkRow = _react2['default'].createClass({
    displayName: 'WorkRow',

    render: function render() {
        console.log(this.props.work);
        var work = this.props.work.map(function (work) {
            return _react2['default'].createElement(_DisplayBibliographicDataComponentJs2['default'], { title: work.title, identifiers: work.identifiers, worktype: work.worktype, cover: work.cover });
        });
        return _react2['default'].createElement(
            'div',
            { className: 'row' },
            work
        );
    }
});

exports['default'] = WorkRow;
module.exports = exports['default'];