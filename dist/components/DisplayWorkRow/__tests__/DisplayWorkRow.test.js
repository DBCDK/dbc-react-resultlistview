'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var _DisplayWorkRowComponentJs = require('../DisplayWorkRow.component.js');

var _DisplayWorkRowComponentJs2 = _interopRequireDefault(_DisplayWorkRowComponentJs);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test DisplayWorkRow Component', function () {
  it('Assert correct rendering of WorkRow component', function () {
    var work = [{
      title: 'This is a test',
      identifiers: ['870970-basis:12345678'],
      worktype: 'book',
      cover: -1
    }, {
      title: 'This is a also test',
      identifiers: ['870970-basis:87654321'],
      worktype: 'book',
      cover: -1
    }];
    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayWorkRowComponentJs2['default'], { work: work }));

    _chai.assert.equal(rendered.props.work[0].title, 'This is a test');
    _chai.assert.equal(rendered.props.work[0].identifiers[0], '870970-basis:12345678');
    _chai.assert.equal(rendered.props.work[1].title, 'This is a also test');
    _chai.assert.equal(rendered.props.work[1].identifiers[0], '870970-basis:87654321');

    var workRow = _reactAddons2['default'].findDOMNode(rendered);

    (0, _chai.expect)(_reactAddons2['default'].findDOMNode(workRow).className).to.contain('row');
  });
});