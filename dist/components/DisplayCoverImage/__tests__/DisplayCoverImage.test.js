'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var _DisplayCoverImageComponentJs = require('../DisplayCoverImage.component.js');

var _DisplayCoverImageComponentJs2 = _interopRequireDefault(_DisplayCoverImageComponentJs);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test DisplayCoverImage Component', function () {
  it('Assert correct rendering of DisplayCoverImage component no cover', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayCoverImageComponentJs2['default'], { title: 'This is a test', identifiers: ['870970-basis:12345678'], worktype: 'book', cover: -1 }));

    _chai.assert.equal(rendered.props.title, 'This is a test');
    _chai.assert.equal(rendered.props.identifiers[0], '870970-basis:12345678');

    var coverImage = _reactAddons2['default'].findDOMNode(rendered);

    (0, _chai.expect)(_reactAddons2['default'].findDOMNode(coverImage).className).to.contain('cover-image');
    (0, _chai.expect)(coverImage.children[0].getAttributeNode('alt').value).to.contain('This is a test');
    _chai.assert.equal(_reactAddons2['default'].findDOMNode(coverImage).textContent, '');
  });

  it('Assert correct rendering of DisplayCoverImage component with cover', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayCoverImageComponentJs2['default'], { title: 'This is a test', identifiers: ['870970-basis:12345678', '870970-basis:87654321'],
      worktype: 'book', cover: 0 }));

    var coverImage = _reactAddons2['default'].findDOMNode(rendered);

    (0, _chai.expect)(coverImage.children[0].getAttributeNode('src').value).to.contain('../src/static/covers/12345678.jpg');
  });

  it('Assert empty when no data provided', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayCoverImageComponentJs2['default'], { identifiers: [] }));

    _chai.assert.equal(String(rendered.props.title), 'undefined');

    var coverImage = _reactAddons2['default'].findDOMNode(rendered);

    _chai.assert.equal(coverImage.textContent, '');
    _chai.assert.equal(coverImage.children[0].textContent, '');

    _chai.assert.equal(_reactAddons2['default'].findDOMNode(coverImage).textContent, '');
  });
});