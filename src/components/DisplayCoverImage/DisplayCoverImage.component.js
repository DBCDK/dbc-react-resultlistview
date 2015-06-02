"use strict";
import React from 'react';

// Import styling
//import './DisplayCoverImage.scss';

/**
 * Main component for presenting cover image
 */
const CoverImageDisplay = React.createClass({
    render() {
        return (<CoverImage title={this.props.title} identifiers={this.props.identifiers} worktype={this.props.worktype} cover={this.props.cover} />);
    }
});

/**
 * Component for creating presentation of a cover image
 */
 
const CoverImage = React.createClass({
    render() {
        let {title, identifiers, worktype, cover} = this.props;

		let identifier = identifiers[0];

		if (cover != -1) {
			identifier = identifiers[cover];
		}
		
		identifier = identifier.replace("870970-basis:", "");
		let url = "../src/static/covers/" + identifier + ".jpg";
		
		if (cover == -1) {
			url = "../src/static/covers/no-cover-image-" + worktype + ".png";
		}
		return (
			<div className="cover-image">
            	<img src={url} alt={title} ref={cover}/>
            </div>
        );
    }
});

export default CoverImageDisplay;