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
    var newEntry = {
      id: new Date().getTime().toString(),
      title: data.title,
      date: data.date,
      amount: data.amount,
      status: data.status
    };
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

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: "Create Transaction"
  }), react_1["default"].createElement("form", {
    onSubmit: handleData,
    className: "m-5"
  }, react_1["default"].createElement(InputField_1["default"], {
    title: "Title",
    name: "title",
    value: data.title,
    type: "text",
    onChange: handleInput
  }), errors.title && react_1["default"].createElement("div", null, errors.title), react_1["default"].createElement(InputField_1["default"], {
    title: "Date",
    name: "date",
    value: data.date,
    type: "date",
    onChange: handleInput
  }), errors.date && react_1["default"].createElement("div", null, errors.date), react_1["default"].createElement(InputField_1["default"], {
    title: "Paid by/to",
    name: "paid_by_to",
    value: data.paid_by_to,
    type: "text",
    onChange: handleInput
  }), errors.paid_by_to && react_1["default"].createElement("div", null, errors.paid_by_to), react_1["default"].createElement(InputField_1["default"], {
    title: "Amount",
    name: "amount",
    value: data.amount,
    type: "number",
    onChange: handleInput
  }), errors.amount && react_1["default"].createElement("div", null, errors.amount), react_1["default"].createElement(InputField_1["default"], {
    title: "Quantity",
    name: "quantity",
    value: data.quantity,
    type: "number",
    onChange: handleInput
  }), errors.quantity && react_1["default"].createElement("div", null, errors.quantity), react_1["default"].createElement(InputField_1["default"], {
    title: "Unit Name",
    name: "unit_name",
    value: data.unit_name,
    type: "text",
    onChange: handleInput
  }), errors.unit_name && react_1["default"].createElement("div", null, errors.unit_name), react_1["default"].createElement(SelectField_1["default"], {
    title: "Type",
    name: "type",
    dropdown: ['Expense', 'Revenue'],
    value: data.type,
    onChange: handleSelect
  }), errors.type && react_1["default"].createElement("div", null, errors.type), react_1["default"].createElement(SelectField_1["default"], {
    title: "Status",
    name: "status",
    dropdown: ['Due', 'Cancled', 'Cleared'],
    value: data.status,
    onChange: handleSelect
  }), errors.status && react_1["default"].createElement("div", null, errors.status), react_1["default"].createElement(InputField_1["default"], {
    title: "UTR",
    name: "utr",
    value: data.utr,
    type: "text",
    onChange: handleInput
  }), errors.utr && react_1["default"].createElement("div", null, errors.utr), react_1["default"].createElement(InputField_1["default"], {
    title: "Project",
    name: "project",
    value: data.project,
    type: "text",
    onChange: handleInput
  }), errors.project && react_1["default"].createElement("div", null, errors.project), react_1["default"].createElement(InputField_1["default"], {
    title: "Comment",
    name: "comment",
    value: data.comment,
    type: "text",
    onChange: handleInput
  }), errors.comment && react_1["default"].createElement("div", null, errors.comment), react_1["default"].createElement("button", {
    type: "submit",
    className: "bg-sky-500 hover:bg-sky-700"
  }, "Create Transaction")));
};

exports["default"] = CreateTransaction;

/***/ })

}]);