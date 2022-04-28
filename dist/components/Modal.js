"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleModal = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Display modal and prevent scrolling
 */
var toggleModal = function toggleModal() {
  var modalContainer = document.querySelector(".modal-container");
  document.body.classList.toggle("no-scroll");
  modalContainer.classList.toggle("hidden");
};
/**
 * Modal component
 * @param {String} props - Modal message
 */


exports.toggleModal = toggleModal;

var Modal = function Modal(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-message"
  }, message, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-close-btn",
    onClick: function onClick(e) {
      return toggleModal();
    }
  }, "X"))));
};

var _default = Modal;
exports.default = _default;