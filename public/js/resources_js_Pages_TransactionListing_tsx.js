"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_TransactionListing_tsx"],{

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

/***/ "./resources/js/Pages/TransactionListing.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/TransactionListing.tsx ***!
  \***************************************************/
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

var TransactionListing = function TransactionListing(props) {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: 'Transaction List'
  }), react_1["default"].createElement("table", {
    className: "table-auto min-w-full mt-5"
  }, react_1["default"].createElement("thead", {
    className: "border-b"
  }, react_1["default"].createElement("tr", null, react_1["default"].createElement("th", null, "Title"), react_1["default"].createElement("th", null, "Date"), react_1["default"].createElement("th", null, "Paid To/By"), react_1["default"].createElement("th", null, "Total"), react_1["default"].createElement("th", null, "Type"), react_1["default"].createElement("th", null, "Status"), react_1["default"].createElement("th", null, "UTR"), react_1["default"].createElement("th", null, "Project"), react_1["default"].createElement("th", null, "Actions"))), react_1["default"].createElement("tbody", null, props.allTrans.map(function (trans) {
    return react_1["default"].createElement("tr", {
      key: trans.id,
      className: "border-b text-center"
    }, react_1["default"].createElement("td", null, trans.title), react_1["default"].createElement("td", null, trans.date), react_1["default"].createElement("td", null), react_1["default"].createElement("td", null), react_1["default"].createElement("td", null), react_1["default"].createElement("td", null, trans.status), react_1["default"].createElement("td", null), react_1["default"].createElement("td", null), react_1["default"].createElement("td", null, react_1["default"].createElement("button", null, "EDIT")));
  }))), react_1["default"].createElement("br", null), react_1["default"].createElement("button", null, "Create Transaction"));
};

exports["default"] = TransactionListing;

/***/ })

}]);