'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
* Main component for creating presentation of a cover image
*/

var CoverImage = _react2['default'].createClass({
  displayName: 'CoverImage',

  propTypes: {
    title: _react2['default'].PropTypes.string,
    identifiers: _react2['default'].PropTypes.array.isRequired,
    worktype: _react2['default'].PropTypes.string,
    cover: _react2['default'].PropTypes.number
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var identifiers = _props.identifiers;
    var worktype = _props.worktype;
    var cover = _props.cover;

    var bibl_identifier = '';
    var url = '';
    if (identifiers.length > 0) {
      bibl_identifier = identifiers[0];
      if (cover) {
        bibl_identifier = identifiers[cover];
      }
      bibl_identifier = bibl_identifier.replace('870970-basis:', '');
      url = '../src/static/covers/' + bibl_identifier + '.jpg';
      if (!cover) {
        url = '../src/static/covers/no-cover-image-' + worktype + '.png';
      }
    } else {
      bibl_identifier = '';
    }
    return _react2['default'].createElement(
      'div',
      { className: 'cover-image' },
      _react2['default'].createElement('img', { src: url, alt: title, ref: cover })
    );
  }
});

exports['default'] = CoverImage;
module.exports = exports['default'];