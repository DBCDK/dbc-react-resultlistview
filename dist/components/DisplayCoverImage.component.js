"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// Import styling
//import './DisplayCoverImage.scss';

/**
 * Main component for presenting cover image
 */
var CoverImageDisplay = _react2["default"].createClass({
  displayName: "CoverImageDisplay",

  render: function render() {
    return _react2["default"].createElement(CoverImage, { title: this.props.title, identifiers: this.props.identifiers, worktype: this.props.worktype, cover: this.props.cover });
  }
});

/**
 * Component for creating presentation of a cover image
 */

var CoverImage = _react2["default"].createClass({
  displayName: "CoverImage",

  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var identifiers = _props.identifiers;
    var worktype = _props.worktype;
    var cover = _props.cover;

    var identifier = identifiers[0];

    if (cover != -1) {
      identifier = identifiers[cover];
    }

    identifier = identifier.replace("870970-basis:", "");
    var url = "../src/static/covers/" + identifier + ".jpg";

    if (cover == -1) {
      url = "../src/static/covers/no-cover-image-" + worktype + ".png";
    }
    return _react2["default"].createElement(
      "div",
      { className: "cover-image" },
      _react2["default"].createElement("img", { src: url, alt: title, ref: cover })
    );
  }
});

exports["default"] = CoverImageDisplay;
module.exports = exports["default"];