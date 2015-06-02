"use strict";
import React from 'react';


import BibliographicData from './../DisplayBibliographicData/DisplayBibliographicData.component.js';

/**
 * Component for creating presentation a row of works
 */
 
const WorkRow = React.createClass({
    render() {
    	let i = 0;
    	const work = this.props.work.map((work)=>{
    		i++;
    		return (<BibliographicData key={i} title={work.title} identifiers={work.identifiers} worktype={work.worktype} cover={work.cover} />);
    	});
		return (
			<div className="row">
            	{work}
            </div>
        );
    }
});

export default WorkRow;