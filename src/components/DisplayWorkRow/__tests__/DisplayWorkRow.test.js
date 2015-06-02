'use strict';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

import {expect, assert} from 'chai';
import WorkRow from '../DisplayWorkRow.component.js';

describe('Test DisplayWorkRow Component', () => {
	it('Assert correct rendering of WorkRow component', function() {
		const work = [{
			"title":"This is a test", 
			"identifiers":['870970-basis:12345678'],
			"worktype":"book", 
			"cover":-1
		},
		{
			"title":"This is a also test", 
			"identifiers":['870970-basis:87654321'],
			"worktype":"book", 
			"cover":-1
		}]
    	let rendered = TestUtils.renderIntoDocument(<WorkRow work={work}/>);
    	
    	assert.equal(rendered.props.work[0].title, "This is a test");
    	assert.equal(rendered.props.work[0].identifiers[0], "870970-basis:12345678");
    	assert.equal(rendered.props.work[1].title, "This is a also test");
    	assert.equal(rendered.props.work[1].identifiers[0], "870970-basis:87654321");
    	
    	let workRow = React.findDOMNode(rendered);
    	
    	expect(React.findDOMNode(workRow).className).to.contain('row');
    	
  	});
});