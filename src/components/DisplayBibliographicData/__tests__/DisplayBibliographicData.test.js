'use strict';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

import {expect, assert} from 'chai';
import BibliographicData from '../DisplayBibliographicData.component.js';

describe('Test DisplayBibliographicData Component', () => {
	it('Assert correct rendering of BibliographicData component', function() {
    	let rendered = TestUtils.renderIntoDocument(<BibliographicData title={"This is a test"} identifiers={['870970-basis:12345678']} worktype={"book"} cover={-1}/>);
    	
    	assert.equal(rendered.props.title, "This is a test");
    	assert.equal(rendered.props.identifiers[0], "870970-basis:12345678");
    	
    	let bibliographicData = React.findDOMNode(rendered);
    	
    	expect(React.findDOMNode(bibliographicData).className).to.contain('work');
    	
    	let title = bibliographicData.getElementsByClassName('title');
    	
    	expect(title[0].textContent).to.contain('This is a test');
    	
  	});
  	
  	it('Assert empty when no data provided', function() {
  		let rendered = TestUtils.renderIntoDocument(<BibliographicData />);
  		
  		let bibliographicData = React.findDOMNode(rendered);
  		
  		assert.equal(bibliographicData.textContent, '');
  		
  		assert.equal(React.findDOMNode(bibliographicData).textContent, '');
  	
  	});
});