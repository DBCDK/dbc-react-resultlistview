'use strict';
import React from 'react';
import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';

/**
* Component for creating presentation a row of works
*/
const WorkRow = React.createClass({
  propTypes: {
    work: React.PropTypes.array.isRequired,
    coverImages: React.PropTypes.object
  },
  render() {
    const workElement = this.props.work.map((work, i) => {
      let covers = this.props.coverImages.get(work.identifiers[0]);
      return (<BibliographicData key={i} title={work.title} identifiers={work.identifiers} workType={work.workType} cover={covers} />);
    });
    return (
      <div className="row">
        {workElement}
      </div>);
  }
});

export default WorkRow;
