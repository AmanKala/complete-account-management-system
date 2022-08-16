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
  }, "Create Transaction"), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/logout",
    className: "bg-transparent font-semibold hover:underline text-white hover:text-red-400 px-4 hover:border-transparent rounded"
  }, "Logout")));
};

exports["default"] = Navbar;

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

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var Navbar_1 = __importDefault(__webpack_require__(/*! ../Components/Navbar */ "./resources/js/Components/Navbar.tsx"));

var TransactionListing = function TransactionListing(props) {
  var edit = function edit(id) {
    var url = "/edit/".concat(id);
    inertia_1.Inertia.get(url);
  };

  var showPromt = function showPromt(id) {
    if (window.confirm('Hold On Sparky.... Really want to Delete this transaction?')) {
      var url = "/delete/".concat(id);
      inertia_1.Inertia.get(url);
    }
  };

  var generateReceipt = function generateReceipt(id) {
    var url = "/receipt/".concat(id);
    inertia_1.Inertia.get(url);
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Navbar_1["default"], null), react_1["default"].createElement(Heading_1.Heading, {
    title: 'Transaction List'
  }), console.log(props), react_1["default"].createElement("div", {
    className: "flex justify-center h-full bg-gray-100"
  }, react_1["default"].createElement("div", {
    className: "p-5 mt-4 mb-4 bg-white shadow-lg md:w-9.5/10 lg:w-9.5/10 sm:w-9.5/10 rounded"
  }, react_1["default"].createElement("table", {
    className: "table-auto min-w-full text-xs"
  }, react_1["default"].createElement("thead", {
    className: "border-b bg-stone-200"
  }, react_1["default"].createElement("tr", null, react_1["default"].createElement("th", null, "Title"), react_1["default"].createElement("th", null, "Date"), react_1["default"].createElement("th", null, "Paid To/By"), react_1["default"].createElement("th", null, "Total"), react_1["default"].createElement("th", null, "Type"), react_1["default"].createElement("th", null, "Status"), react_1["default"].createElement("th", null, "UTR"), react_1["default"].createElement("th", null, "Project"), react_1["default"].createElement("th", null, "Actions"))), react_1["default"].createElement("tbody", null, props.data.map(function (trans) {
    return react_1["default"].createElement("tr", {
      key: trans.id,
      className: "border-b text-center"
    }, react_1["default"].createElement("td", null, " ", trans.title, " "), react_1["default"].createElement("td", null, " ", trans.date, " "), react_1["default"].createElement("td", null, " ", trans.paid_by_to, " "), react_1["default"].createElement("td", null, " ", trans.amount * trans.quantity, " "), react_1["default"].createElement("td", null, " ", trans.type, " "), react_1["default"].createElement("td", null, " ", trans.status, " "), react_1["default"].createElement("td", null, " ", trans.utr, " "), react_1["default"].createElement("td", null, " ", trans.project, " "), react_1["default"].createElement("td", null, react_1["default"].createElement("button", {
      className: "bg-blue-600 hover:bg-blue-500 text-white px-2 rounded mr-1",
      onClick: function onClick() {
        edit(trans.id);
      }
    }, "Edit"), react_1["default"].createElement("button", {
      className: "bg-red-600 hover:bg-red-500 text-white px-2 rounded mr-1",
      onClick: function onClick() {
        showPromt(trans.id);
      }
    }, "Delete"), react_1["default"].createElement("button", {
      className: "bg-green-600 hover:bg-green-500 text-white px-2 rounded",
      onClick: function onClick() {
        generateReceipt(trans.id);
      }
    }, "Generate Receipt")));
  }))))));
};

exports["default"] = TransactionListing;

/***/ })

}]);