'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var _DisplayBibliographicDataComponentJs = require('../DisplayBibliographicData.component.js');

var _DisplayBibliographicDataComponentJs2 = _interopRequireDefault(_DisplayBibliographicDataComponentJs);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test DisplayBibliographicData Component', function () {
  it('Assert correct rendering of BibliographicData component', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayBibliographicDataComponentJs2['default'], { title: 'This is a test', identifiers: ['870970-basis:12345678'], worktype: 'book', cover: { images: [] } }));

    _chai.assert.equal(rendered.props.title, 'This is a test');
    _chai.assert.equal(rendered.props.identifiers[0], '870970-basis:12345678');

    var bibliographicData = _reactAddons2['default'].findDOMNode(rendered);

    (0, _chai.expect)(_reactAddons2['default'].findDOMNode(bibliographicData).className).to.contain('work');

    var title = bibliographicData.getElementsByClassName('title');

    (0, _chai.expect)(title[0].textContent).to.contain('This is a test');
  });

  it('Assert empty when no data provided', function () {
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayBibliographicDataComponentJs2['default'], { identifiers: [] }));

    var bibliographicData = _reactAddons2['default'].findDOMNode(rendered);

    _chai.assert.equal(bibliographicData.textContent, '');

    _chai.assert.equal(_reactAddons2['default'].findDOMNode(bibliographicData).textContent, '');
  });
});