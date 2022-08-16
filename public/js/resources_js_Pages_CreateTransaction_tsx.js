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
    className: "text-xl text-center text-gray-700 font-bold hover:text-red-700"
  }, props.title), react_1["default"].createElement("hr", null));
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
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", null, react_1["default"].createElement("label", {
    className: "block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
  }, props.title), react_1["default"].createElement("input", {
    className: "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
    type: props.type,
    name: props.name,
    value: props.value,
    onChange: props.onChange
  })));
};

exports["default"] = InputField;

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
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", null, react_1["default"].createElement("label", {
    className: "block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
  }, props.title), react_1["default"].createElement("select", {
    className: "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
    name: props.name,
    value: props.value,
    onChange: props.onChange
  }, props.dropdown.map(function (ele) {
    return react_1["default"].createElement("option", {
      value: ele,
      key: ele
    }, " ", ele, " ");
  }))));
};

exports["default"] = SelectField;

/***/ }),

/***/ "./resources/js/Pages/CreateTransaction.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/CreateTransaction.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var InputField_1 = __importDefault(__webpack_require__(/*! ../Components/InputField */ "./resources/js/Components/InputField.tsx"));

var SelectField_1 = __importDefault(__webpack_require__(/*! ../Components/SelectField */ "./resources/js/Components/SelectField.tsx"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var Navbar_1 = __importDefault(__webpack_require__(/*! ../Components/Navbar */ "./resources/js/Components/Navbar.tsx"));

var CreateTransaction = function CreateTransaction() {
  var _ref = (0, inertia_react_1.useForm)({
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
      data = _ref.data,
      setData = _ref.setData,
      post = _ref.post,
      processing = _ref.processing,
      errors = _ref.errors;

  var handleData = function handleData(event) {
    event.preventDefault();
    post('/createtransaction', {
      onSuccess: function onSuccess(page) {
        setData({
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
      }
    });
    console.log(data);
  };

  var name, value;

  var handleInput = function handleInput(event) {
    name = event.target.name;
    value = event.target.value;
    setData(Object.assign(Object.assign({}, data), _defineProperty({}, name, value)));
    console.log(data);
  };

  var handleSelect = function handleSelect(event) {
    name = event.target.name;
    value = event.target.value;
    setData(Object.assign(Object.assign({}, data), _defineProperty({}, name, value)));
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Navbar_1["default"], null), react_1["default"].createElement("div", {
    className: "flex items-center justify-center min-h-screen bg-gray-100"
  }, react_1["default"].createElement("div", {
    className: "px-8 py-2 mx-4 mt-1 text-left bg-white shadow-lg md:w-4/5 lg:w-4/5 sm:w-4/5 rounded"
  }, react_1["default"].createElement(Heading_1.Heading, {
    title: "Create Transaction"
  }), react_1["default"].createElement("form", {
    onSubmit: handleData,
    className: ""
  }, react_1["default"].createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react_1["default"].createElement("div", null, react_1["default"].createElement(InputField_1["default"], {
    title: "Title",
    name: "title",
    value: data.title,
    type: "text",
    onChange: handleInput
  }), errors.title && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.title), react_1["default"].createElement(InputField_1["default"], {
    title: "Date",
    name: "date",
    value: data.date,
    type: "date",
    onChange: handleInput
  }), errors.date && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.date), react_1["default"].createElement(InputField_1["default"], {
    title: "Paid by/to",
    name: "paid_by_to",
    value: data.paid_by_to,
    type: "text",
    onChange: handleInput
  }), errors.paid_by_to && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.paid_by_to), react_1["default"].createElement(InputField_1["default"], {
    title: "Amount",
    name: "amount",
    value: data.amount,
    type: "number",
    onChange: handleInput
  }), errors.amount && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.amount), react_1["default"].createElement(InputField_1["default"], {
    title: "Quantity",
    name: "quantity",
    value: data.quantity,
    type: "number",
    onChange: handleInput
  }), errors.quantity && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.quantity)), react_1["default"].createElement("div", null, react_1["default"].createElement(InputField_1["default"], {
    title: "Unit Name",
    name: "unit_name",
    value: data.unit_name,
    type: "text",
    onChange: handleInput
  }), errors.unit_name && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.unit_name), react_1["default"].createElement(SelectField_1["default"], {
    title: "Type",
    name: "type",
    dropdown: ['Expense', 'Revenue'],
    value: data.type,
    onChange: handleSelect
  }), errors.type && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.type), react_1["default"].createElement(SelectField_1["default"], {
    title: "Status",
    name: "status",
    dropdown: ['Due', 'Cancled', 'Cleared'],
    value: data.status,
    onChange: handleSelect
  }), errors.status && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.status), react_1["default"].createElement(InputField_1["default"], {
    title: "UTR",
    name: "utr",
    value: data.utr,
    type: "text",
    onChange: handleInput
  }), errors.utr && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.utr), react_1["default"].createElement(InputField_1["default"], {
    title: "Project",
    name: "project",
    value: data.project,
    type: "text",
    onChange: handleInput
  }), errors.project && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.project))), react_1["default"].createElement(InputField_1["default"], {
    title: "Comment",
    name: "comment",
    value: data.comment,
    type: "textfield",
    onChange: handleInput
  }), errors.comment && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.comment), react_1["default"].createElement("button", {
    type: "submit",
    className: "bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 w-full"
  }, "Create Transaction")))));
};

exports["default"] = CreateTransaction;

/***/ })

}]);