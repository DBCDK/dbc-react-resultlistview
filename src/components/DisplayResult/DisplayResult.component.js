"use strict";
import React from 'react';
import Lodash from 'lodash';

// Import styling
import './DisplayResult.scss';

import WorkRow from './../DisplayWorkRow/DisplayWorkRow.component.js';

/**
 * Main component for presenting search result
 */
const ResultDisplay = React.createClass({
	getInitialState: function() {
    	return {windowWidth: window.innerWidth};
  	},
  	handleResize: function(e) {
    	this.setState({windowWidth: window.innerWidth});
  	},
  	componentDidMount() {
  		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function() {
    	window.removeEventListener('resize', this.handleResize);
  	},
  	render() {
  		let worksInRows = 2;
        if (this.state.windowWidth < 604) {
    		worksInRows = 2;
    	} else if (this.state.windowWidth < 1024) {
    		worksInRows = 3;
    	} else {
    		worksInRows = 4;
    	}
    	let rows = Lodash.chunk(this.props.result, worksInRows);
    	const workRow = rows.map((work)=>{
    		return (<WorkRow work={work}/>);
    	});
  		return (
            <div className='container' ref="container">
            	{workRow}
            </div>
        );
    }
});

export default ResultDisplay;