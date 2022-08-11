"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_CreateTransaction_tsx"],{

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

/***/ "./resources/js/Components/InputField.tsx":
/*!************************************************!*\
  !*** ./resources/js/Components/InputField.tsx ***!
  \************************************************/
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

var InputField = function InputField(props) {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", null, react_1["default"].createElement("label", null, props.title), react_1["default"].createElement("br", null), react_1["default"].createElement("input", {
    className: "shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline",
    type: props.type,
    name: props.name,
    value: props.value,
    onChange: props.onChange
  }), react_1["default"].createElement("br", null), react_1["default"].createElement("br", null)));
};

exports["default"] = InputField;

/***/ }),

/***/ "./resources/js/Components/SelectField.tsx":
/*!*************************************************!*\
  !*** ./resources/js/Components/SelectField.tsx ***!
  \*************************************************/
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

var SelectField = function SelectField(props) {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", null, react_1["default"].createElement("label", null, props.title), react_1["default"].createElement("br", null), react_1["default"].createElement("select", {
    className: "shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 focus:shadow-outline",
    name: props.name,
    value: props.value,
    onChange: props.onChange
  }, props.dropdown.map(function (ele) {
    return react_1["default"].createElement("option", {
      value: ele,
      key: ele
    }, " ", ele, " ");
  })), react_1["default"].createElement("br", null), react_1["default"].createElement("br", null)));
};

exports["default"] = SelectField;

/***/ }),

/***/ "./resources/js/Pages/CreateTransaction.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/CreateTransaction.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var Heading_1 = __webpack_require__(/*! ../Components/Heading */ "./resources/js/Components/Heading.tsx");

var InputField_1 = __importDefault(__webpack_require__(/*! ../Components/InputField */ "./resources/js/Components/InputField.tsx"));

var SelectField_1 = __importDefault(__webpack_require__(/*! ../Components/SelectField */ "./resources/js/Components/SelectField.tsx"));

var CreateTransaction = function CreateTransaction() {
  var _ref = (0, react_1.useState)({
    title: '',
    date: '',
    paid_by_to: '',
    amount: '',
    quantity: '',
    unit_name: '',
    type: '',
    status: '',
    utr: '',
    project: '',
    comment: ''
  }),
      _ref2 = _slicedToArray(_ref, 2),
      transaction = _ref2[0],
      setTransaction = _ref2[1];

  var handleData = function handleData(event) {
    event.preventDefault();
    var newEntry = {
      id: new Date().getTime().toString(),
      title: transaction.title,
      date: transaction.date,
      amount: transaction.amount,
      status: transaction.status
    };
    setTransaction({
      title: '',
      date: '',
      paid_by_to: '',
      amount: '',
      quantity: '',
      unit_name: '',
      type: '',
      status: '',
      utr: '',
      project: '',
      comment: ''
    });
    console.log(transaction);
    inertia_1.Inertia.post('/createtransaction', transaction);
  };

  var name, value;

  var handleInput = function handleInput(event) {
    name = event.target.name;
    value = event.target.value;
    setTransaction(Object.assign(Object.assign({}, transaction), _defineProperty({}, name, value)));
    console.log(transaction);
  };

  var handleSelect = function handleSelect(event) {
    name = event.target.name;
    value = event.target.value;
    setTransaction(Object.assign(Object.assign({}, transaction), _defineProperty({}, name, value)));
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: "Create Transaction"
  }), react_1["default"].createElement("form", {
    onSubmit: handleData
  }, react_1["default"].createElement(InputField_1["default"], {
    title: "Title",
    name: "title",
    value: transaction.title,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Date",
    name: "date",
    value: transaction.date,
    type: "date",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Paid by/to",
    name: "paid_by_to",
    value: transaction.paid_by_to,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Amount",
    name: "amount",
    value: transaction.amount,
    type: "number",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "quantity",
    name: "quantity",
    value: transaction.quantity,
    type: "number",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Unit Name",
    name: "unit_name",
    value: transaction.unit_name,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(SelectField_1["default"], {
    title: "Type",
    name: "type",
    dropdown: ['Expense', 'Revenue'],
    value: transaction.type,
    onChange: handleSelect
  }), react_1["default"].createElement(SelectField_1["default"], {
    title: "Status",
    name: "status",
    dropdown: ['Due', 'Cancled', 'Cleared'],
    value: transaction.status,
    onChange: handleSelect
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "UTR",
    name: "utr",
    value: transaction.utr,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Project",
    name: "project",
    value: transaction.project,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Comment",
    name: "comment",
    value: transaction.comment,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement("button", {
    type: "submit"
  }, "Create Transaction")));
};

exports["default"] = CreateTransaction;

/***/ })

}]);