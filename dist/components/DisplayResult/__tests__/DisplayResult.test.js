'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _chai = require('chai');

var _DisplayResultComponentJs = require('../DisplayResult.component.js');

var _DisplayResultComponentJs2 = _interopRequireDefault(_DisplayResultComponentJs);

// eslint-disable-line no-unused-vars

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Test DisplayResult Component', function () {
  it('Assert correct rendering of ResultDisplay component', function () {

    var rendered = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_DisplayResultComponentJs2['default'], null));

    var result = _reactAddons2['default'].findDOMNode(rendered);

    (0, _chai.expect)(_reactAddons2['default'].findDOMNode(result).className).to.contain('container');
  });
});