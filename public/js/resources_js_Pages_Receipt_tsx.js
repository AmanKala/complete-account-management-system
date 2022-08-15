"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Receipt_tsx"],{

/***/ "./resources/js/Components/Heading.tsx":
/*!*********************************************!*\
  !*** ./resources/js/Components/Heading.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Heading = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Heading = function Heading(props) {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("h1", {
    className: "text-xl text-center font-bold underline"
  }, props.title));
};

exports.Heading = Heading;

/***/ }),

/***/ "./resources/js/Pages/Receipt.tsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Receipt.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Heading_1 = __webpack_require__(/*! ../Components/Heading */ "./resources/js/Components/Heading.tsx");

var Receipt = function Receipt(_ref) {
  var transaction_data = _ref.transaction_data;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: "Receipt"
  }), react_1["default"].createElement("div", null, react_1["default"].createElement("span", null, transaction_data.title)));
};

exports["default"] = Receipt;

/***/ })

}]);