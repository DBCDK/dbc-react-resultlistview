'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DisplayCoverImageDisplayCoverImageComponentJs = require('./../DisplayCoverImage/DisplayCoverImage.component.js');

var _DisplayCoverImageDisplayCoverImageComponentJs2 = _interopRequireDefault(_DisplayCoverImageDisplayCoverImageComponentJs);

/**
 * Component for creating presentation of bibliographic data
 */

function _getIcon(worktype) {
  var icon = new Array('fa');
  switch (worktype) {
    case 'book':
      icon.push('fa-book');
      break;
    case 'game':
      icon.push('fa-gamepad');
      break;
    case 'movie':
      icon.push('fa-film');
      break;
    case 'music':
      icon.push('fa-music');
      break;
    default:
      icon.push('fa-question');
      break;
  }

  return icon;
}

var BibliographicData = _react2['default'].createClass({
  displayName: 'BibliographicData',

  propTypes: {
    title: _react2['default'].PropTypes.string,
    identifiers: _react2['default'].PropTypes.array.isRequired,
    workType: _react2['default'].PropTypes.string,
    cover: _react2['default'].PropTypes.number
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var workType = _props.workType;

    var icon = _getIcon(workType);
    return _react2['default'].createElement(
      'div',
      { className: 'work small-6 medium-4 large-3' },
      _react2['default'].createElement(_DisplayCoverImageDisplayCoverImageComponentJs2['default'], this.props),
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