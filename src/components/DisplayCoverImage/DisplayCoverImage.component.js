'use strict';
import React from 'react';

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
  return images.filter((image) => image.size === size).pop().url;
}

/**
 * Main component for creating presentation of a cover image
 */
export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    identifiers: React.PropTypes.array.isRequired,
    workType: React.PropTypes.string,
    noCoverImage: React.PropTypes.string,
    cover: React.PropTypes.object,
    size: React.PropTypes.string
  },

  render() {
    let {title, workType, cover, noCoverImage, size} = this.props;
    let url = noCoverImage || `/covers/no-cover-image-${workType}.png`;
    if (cover && cover.images.length) {
      url = _getImage(cover.images, size || 'detail_500');
    }
    return (
      <div className="cover-image">
        <img src={url} alt={title}/>
      </div>);
  }
});
