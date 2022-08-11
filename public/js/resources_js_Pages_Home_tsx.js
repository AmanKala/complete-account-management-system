"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_tsx"],{

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

/***/ "./resources/js/Pages/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.tsx ***!
  \*************************************/
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

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var Home = function Home() {
  var handleTransaction = function handleTransaction() {
    inertia_1.Inertia.get('createtransaction');
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: "Hey There! Welcome..."
  }), react_1["default"].createElement("button", {
    onClick: handleTransaction
  }, "Create Transaction"));
};

exports["default"] = Home;

/***/ })

}]);