"use strict";
import React from 'react';

import CoverImage from './DisplayCoverImage.component.js';

/**
 * Component for creating presentation of bibliographic data
 */
 
const BibliographicData = React.createClass({
    render() {
        let {title, identifiers, worktype, cover} = this.props;

        let classes = new Array('work small-6 medium-4 large-3');
        let icon = new Array();
        switch (worktype) {
        	case "book":
        		icon = new Array('fa fa-book');
        		break;
        	case "game":
        		icon = new Array('fa fa-gamepad');
        		break;
        	case "movie":
        		icon = new Array('fa fa-movie');
        		break;
        	case "music":
        		icon = new Array('fa fa-music');
        		break;
        	default:
        		icon = new Array('fa fa-book');
        		break;
        }
        return (
            <div className={classes.join(' ')}>
            	<CoverImage title={title} identifiers={identifiers} worktype={worktype} cover={cover} />
            	<i className={icon.join(' ')}></i>
                <div className="title">{title}</div>
            </div>
        );
    }
});

export default BibliographicData;