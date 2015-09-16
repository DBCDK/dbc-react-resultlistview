'use strict';
import React from 'react';
import CoverImage from './../DisplayCoverImage/DisplayCoverImage.component.js'; // eslint-disable-line no-unused-vars

/**
 * Component for creating presentation of bibliographic data
 */

function _getIcon(worktype) {

  let icon = new Array('fa');

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

const BibliographicData = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    creator: React.PropTypes.string,
    identifiers: React.PropTypes.array.isRequired,
    workType: React.PropTypes.string
  },
  render() {
    const {title, creator, workType, identifiers, noOfWorks} = this.props;
    let icon = _getIcon(workType);
    const workid = 'id-' + identifiers[0];
    const worklink = '/work?id=' + identifiers[0];
    let classes = 'work small-6 medium-4 large-3';
    if (noOfWorks === 1) {
      classes = 'work small-12 medium-6 large-4';
    }
    if (noOfWorks === 3) {
      classes = 'work small-4 medium-3 large-2';
    }
    return (
      <div id={workid} data-work-id={identifiers[0]} className={classes}>
        <a className="image-see-work" href={worklink}><CoverImage {...this.props} />
          <i className={icon.join(' ')}></i>
          <div className="title">{title}</div>
          <div className="creator">{creator}</div>
        </a>
      </div>);
  }
});

export default BibliographicData;
