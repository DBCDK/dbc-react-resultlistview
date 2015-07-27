'use strict';
import React from 'react';
import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';

/**
* Component for creating presentation a row of works
*/
const WorkRow = React.createClass({
  propTypes: {
    work: React.PropTypes.array.isRequired,
    coverImages: React.PropTypes.object,
    numRows: React.PropTypes.string
  },
  render() {
    const workElement = this.props.work.map((work, i) => {
      let covers = this.props.coverImages.get(work.identifiers[0]);
      let noOfWorks = this.props.noOfWorks;
      return (<BibliographicData key={i} title={work.title} creator={work.creator} identifiers={work.identifiers} workType={work.workType} cover={covers} noOfWorks={noOfWorks} />);
    });
    return (
      <div className="row">
        {workElement}
      </div>);
  }
});

export default WorkRow;
