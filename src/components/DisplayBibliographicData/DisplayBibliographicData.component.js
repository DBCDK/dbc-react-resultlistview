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
    default:
      icon.push('fa-question');
      break;
  }

  return icon;

}

const BibliographicData = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    creator: React.PropTypes.string,
    identifiers: React.PropTypes.array.isRequired,
    workType: React.PropTypes.string
  },
  render() {
    const {title, creator, workType, identifiers} = this.props;
    let icon = _getIcon(workType);
    const workid = 'id-' + identifiers[0];
    const worklink = '/work?id=' + identifiers[0];
    return (
      <div id={workid} data-work-id={identifiers[0]} className="work small-6 medium-4 large-3">
        <a className="image-see-work" href={worklink}><CoverImage {...this.props} />
          <i className={icon.join(' ')}></i>
          <div className="title">{title}</div>
          <div className="creator">{creator}</div>
        </a>
      </div>);
  }
});

export default BibliographicData;
