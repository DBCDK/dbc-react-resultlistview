'use strict';
import React from 'react';

/**
* Main component for creating presentation of a cover image
*/

const CoverImage = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    identifiers: React.PropTypes.array.isRequired,
    worktype: React.PropTypes.string,
    cover: React.PropTypes.number
  },
  render() {
    let {title, identifiers, worktype, cover} = this.props;
    let bibl_identifier = '';
    let url = '';
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
    return (
      <div className="cover-image">
        <img src={url} alt={title} ref={cover}/>
      </div>);
  }
});

export default CoverImage;
