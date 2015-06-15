'use strict';
import React from 'react';
import CoverImage from './../DisplayCoverImage/DisplayCoverImage.component.js';

/**
 * Component for creating presentation of bibliographic data
 */

function _getIcon(worktype) {
  let icon = new Array('fa');
  switch (worktype) {
    case 'book':
      icon.push('fa-book');
      break;
    case 'game':
      icon.push('fa-gamepad');
      break;
    case 'movie':
      icon.push('fa-movie');
      break;
    case 'music':
      icon.push('fa-music');
      break;
    default:
      icon.push('fa-book');
      break;
  }
}

const BibliographicData = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    identifiers: React.PropTypes.array.isRequired,
    worktype: React.PropTypes.string,
    cover: React.PropTypes.number
  },
  render() {
    const {title, worktype} = this.props;
    const icon = _getIcon(worktype);
    return (
      <div className="work small-6 medium-4 large-3">
        <CoverImage {...this.props} />
        <i className={icon}></i>
          <div className="title">{title}</div>
      </div>);
  }
});

export default BibliographicData;
