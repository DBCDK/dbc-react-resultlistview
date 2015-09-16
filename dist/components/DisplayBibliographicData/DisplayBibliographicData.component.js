'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DisplayCoverImageDisplayCoverImageComponentJs = require('./../DisplayCoverImage/DisplayCoverImage.component.js');

var _DisplayCoverImageDisplayCoverImageComponentJs2 = _interopRequireDefault(_DisplayCoverImageDisplayCoverImageComponentJs);

// eslint-disable-line no-unused-vars

/**
 * Component for creating presentation of bibliographic data
 */

function _getIcon(worktype) {

  var icon = new Array('fa');

  switch (worktype) {
    case 'article':
      icon.push('fa-file-text');
      break;
    case 'book':
      icon.push('fa-book');
      break;
    case 'audiobook':
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
    case 'periodica':
      icon.push('fa-newspaper-o');
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
    creator: _react2['default'].PropTypes.string,
    identifiers: _react2['default'].PropTypes.array.isRequired,
    workType: _react2['default'].PropTypes.string
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var creator = _props.creator;
    var workType = _props.workType;
    var identifiers = _props.identifiers;
    var noOfWorks = _props.noOfWorks;

    var icon = _getIcon(workType);
    var workid = 'id-' + identifiers[0];
    var worklink = '/work?id=' + identifiers[0];
    var classes = 'work small-6 medium-4 large-3';
    if (noOfWorks === 1) {
      classes = 'work small-12 medium-6 large-4';
    }
    if (noOfWorks === 3) {
      classes = 'work small-4 medium-3 large-2';
    }
    return _react2['default'].createElement(
      'div',
      { id: workid, 'data-work-id': identifiers[0], className: classes },
      _react2['default'].createElement(
        'a',
        { className: 'image-see-work', href: worklink },
        _react2['default'].createElement(_DisplayCoverImageDisplayCoverImageComponentJs2['default'], this.props),
        _react2['default'].createElement('i', { className: icon.join(' ') }),
        _react2['default'].createElement(
          'div',
          { className: 'title' },
          title
        ),
        _react2['default'].createElement(
          'div',
          { className: 'creator' },
          creator
        )
      )
    );
  }
});

exports['default'] = BibliographicData;
module.exports = exports['default'];