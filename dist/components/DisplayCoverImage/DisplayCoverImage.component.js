'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Get image with size
 *
 * Runs though an array of images and returns the image with a certain size
 *
 * @param {array} images
 * @param {string} size
 * @returns {string}
 * @private
 */
function _getImage(images, size) {
  return images.filter(function (image) {
    return image.size === size;
  }).pop().url;
}

/**
 * Main component for creating presentation of a cover image
 */
exports['default'] = _react2['default'].createClass({
  displayName: 'DisplayCoverImage.component',

  propTypes: {
    title: _react2['default'].PropTypes.string,
    identifiers: _react2['default'].PropTypes.array.isRequired,
    workType: _react2['default'].PropTypes.string,
    noCoverImage: _react2['default'].PropTypes.string,
    cover: _react2['default'].PropTypes.object,
    size: _react2['default'].PropTypes.string
  },

  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var workType = _props.workType;
    var cover = _props.cover;
    var noCoverImage = _props.noCoverImage;
    var size = _props.size;

    var url = noCoverImage || '/covers/no-cover-image-' + workType + '.png';
    if (cover && cover.images.length) {
      url = _getImage(cover.images, size || 'detail_500');
    }
    return _react2['default'].createElement(
      'div',
      { className: 'cover-image' },
      _react2['default'].createElement('img', { src: url, alt: title })
    );
  }
});
module.exports = exports['default'];