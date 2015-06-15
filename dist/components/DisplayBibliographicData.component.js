'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DisplayCoverImageComponentJs = require('./DisplayCoverImage.component.js');

var _DisplayCoverImageComponentJs2 = _interopRequireDefault(_DisplayCoverImageComponentJs);

/**
 * Component for creating presentation of bibliographic data
 */

var BibliographicData = _react2['default'].createClass({
    displayName: 'BibliographicData',

    render: function render() {
        var _props = this.props;
        var title = _props.title;
        var identifiers = _props.identifiers;
        var worktype = _props.worktype;
        var cover = _props.cover;

        var classes = new Array('work small-6 medium-4 large-3');
        var icon = new Array();
        switch (worktype) {
            case 'book':
                icon = new Array('fa fa-book');
                break;
            case 'game':
                icon = new Array('fa fa-gamepad');
                break;
            case 'movie':
                icon = new Array('fa fa-movie');
                break;
            case 'music':
                icon = new Array('fa fa-music');
                break;
            default:
                icon = new Array('fa fa-book');
                break;
        }
        return _react2['default'].createElement(
            'div',
            { className: classes.join(' ') },
            _react2['default'].createElement(_DisplayCoverImageComponentJs2['default'], { title: title, identifiers: identifiers, worktype: worktype, cover: cover }),
            _react2['default'].createElement('i', { className: icon.join(' ') }),
            _react2['default'].createElement(
                'div',
                { className: 'title' },
                title
            )
        );
    }
});

exports['default'] = BibliographicData;
module.exports = exports['default'];