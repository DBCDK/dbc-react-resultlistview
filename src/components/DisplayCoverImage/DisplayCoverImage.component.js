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
		let bibl_identifier = "";

		if (identifiers != undefined) {
			bibl_identifier = identifiers[0];
		} else {
			return <div></div>;
		}

		if (cover != -1) {
			bibl_identifier = identifiers[cover];
		}
		
		bibl_identifier = bibl_identifier.replace("870970-basis:", "");
		let url = "../src/static/covers/" + bibl_identifier + ".jpg";
		
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