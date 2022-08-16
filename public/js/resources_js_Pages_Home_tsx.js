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
    className: "text-xl text-center text-gray-700 font-bold hover:text-red-700"
  }, props.title), react_1["default"].createElement("hr", null));
};

exports.Heading = Heading;

/***/ }),

/***/ "./resources/js/Components/Navbar.tsx":
/*!********************************************!*\
  !*** ./resources/js/Components/Navbar.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Navbar = function Navbar() {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("nav", {
    className: "w-full bg-stone-500 shadow p-1"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/",
    className: "bg-transparent font-semibold hover:underline text-white hover:text-green-200 px-4 hover:border-transparent rounded"
  }, "Home"), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/transationlist",
    className: "bg-transparent font-semibold hover:underline text-white hover:text-green-200 px-4 hover:border-transparent rounded"
  }, "Transaction List"), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/createtransaction",
    className: "bg-transparent font-semibold hover:underline text-white hover:text-green-200 px-4 hover:border-transparent rounded"
  }, "Create Transaction")));
};

exports["default"] = Navbar;

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

var Navbar_1 = __importDefault(__webpack_require__(/*! ../Components/Navbar */ "./resources/js/Components/Navbar.tsx"));

var Home = function Home() {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Navbar_1["default"], null), react_1["default"].createElement(Heading_1.Heading, {
    title: "Hey There! Welcome..."
  }));
};

exports["default"] = Home;

/***/ })

}]);