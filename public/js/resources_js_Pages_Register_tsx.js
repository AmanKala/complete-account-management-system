"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Register_tsx"],{

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

/***/ "./resources/js/Pages/Register.tsx":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Register.tsx ***!
  \*****************************************/
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

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var Register = function Register() {
  var _ref = (0, inertia_react_1.useForm)({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_enter_password: ""
  }),
      data = _ref.data,
      setData = _ref.setData,
      post = _ref.post,
      processing = _ref.processing,
      errors = _ref.errors;

  var handleData = function handleData(event) {
    event.preventDefault();
    post('/register', {
      onSuccess: function onSuccess(page) {
        setData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          re_enter_password: ""
        });
      }
    });
  };

  var name, value;

  var handleInput = function handleInput(event) {
    name = event.target.name;
    value = event.target.value;
    setData(Object.assign(Object.assign({}, data), _defineProperty({}, name, value)));
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: "Register Page"
  }), react_1["default"].createElement("form", {
    onSubmit: handleData
  }, react_1["default"].createElement(InputField_1["default"], {
    title: "First Name",
    name: "first_name",
    value: data.first_name,
    type: "text",
    onChange: handleInput
  }), errors.first_name && react_1["default"].createElement("div", null, errors.first_name), react_1["default"].createElement(InputField_1["default"], {
    title: "Last Name",
    name: "last_name",
    value: data.last_name,
    type: "text",
    onChange: handleInput
  }), errors.last_name && react_1["default"].createElement("div", null, errors.last_name), react_1["default"].createElement(InputField_1["default"], {
    title: "Email Id",
    name: "email",
    value: data.email,
    type: "email",
    onChange: handleInput
  }), errors.email && react_1["default"].createElement("div", null, errors.email), react_1["default"].createElement(InputField_1["default"], {
    title: "Password",
    name: "password",
    value: data.password,
    type: "password",
    onChange: handleInput
  }), errors.password && react_1["default"].createElement("div", null, errors.password), react_1["default"].createElement(InputField_1["default"], {
    title: "RE-Enter Password",
    name: "re_enter_password",
    value: data.re_enter_password,
    type: "password",
    onChange: handleInput
  }), errors.re_enter_password && react_1["default"].createElement("div", null, errors.re_enter_password), react_1["default"].createElement("button", {
    type: "submit"
  }, "Register")));
};

exports["default"] = Register;

/***/ })

}]);