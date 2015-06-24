'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Loadmore = _react2['default'].createClass({
  displayName: 'Loadmore',

  propTypes: {
    button: _react2['default'].PropTypes.string,
    update: _react2['default'].PropTypes.func
  },

  render: function render() {
    var classes = ['button', 'secondary'];
    return _react2['default'].createElement(
      'ul',
      { className: 'button-group even-2' },
      _react2['default'].createElement(
        'li',
        null,
        _react2['default'].createElement(
          'a',
          {
            key: this.props.button,
            onClick: this.props.update.bind(null, null),
            href: '#',
            className: classes.join(' ')
          },
          this.props.button
        )
      )
    );
  }
});

exports['default'] = Loadmore;
module.exports = exports['default'];