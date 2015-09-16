'use strict';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

import {expect, assert} from 'chai';
import DisplayCoverImage from '../DisplayCoverImage.component.js'; // eslint-disable-line no-unused-vars

describe('Test DisplayCoverImage Component', () => {
  it('Assert correct rendering of DisplayCoverImage component no cover', function() {
    let rendered = TestUtils.renderIntoDocument(<DisplayCoverImage title={"This is a test"} identifiers={['870970-basis:12345678']} worktype={"book"} noCoverImage={"test"}/>);

    assert.equal(rendered.props.title, 'This is a test');
    assert.equal(rendered.props.identifiers[0], '870970-basis:12345678');

    let coverImage = React.findDOMNode(rendered);

    expect(React.findDOMNode(coverImage).className).to.contain('cover-image');
    expect(coverImage.children[0].getAttributeNode('alt').value).to.contain('This is a test');
    assert.equal(React.findDOMNode(coverImage).textContent, '');

  });

  it('Assert correct rendering of DisplayCoverImage component with cover', function() {
    let rendered = TestUtils.renderIntoDocument(<DisplayCoverImage title={"This is a test"} identifiers={['870970-basis:12345678', '870970-basis:87654321']}
			worktype={"book"} cover={{images: []}}/>);

    let coverImage = React.findDOMNode(rendered);

    expect(coverImage.children[0].getAttributeNode('src').value).to.contain('/covers/no-cover-image-undefined.png');
  });

  it('Assert empty when no data provided', function() {
    let rendered = TestUtils.renderIntoDocument(<DisplayCoverImage identifiers={[]}/>);

    assert.equal(String(rendered.props.title), 'undefined');

    let coverImage = React.findDOMNode(rendered);

    assert.equal(coverImage.textContent, '');
    assert.equal(coverImage.children[0].textContent, '');

    assert.equal(React.findDOMNode(coverImage).textContent, '');

  });
});
