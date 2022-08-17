"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_tsx"],{

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

/***/ "./resources/js/Pages/Login.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.tsx ***!
  \**************************************/
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
    email: "",
    password: ""
  }),
      data = _ref.data,
      setData = _ref.setData,
      post = _ref.post,
      processing = _ref.processing,
      errors = _ref.errors;

  var handleData = function handleData(event) {
    event.preventDefault();
    post('/login');
  };

  var name, value;

  var handleInput = function handleInput(event) {
    name = event.target.name;
    value = event.target.value;
    setData(Object.assign(Object.assign({}, data), _defineProperty({}, name, value)));
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "flex items-center justify-center min-h-screen bg-gray-100"
  }, react_1["default"].createElement("div", {
    className: "px-8 py-4 mx-4 mt-2 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3"
  }, react_1["default"].createElement(Heading_1.Heading, {
    title: "Login Page"
  }), react_1["default"].createElement("form", {
    onSubmit: handleData
  }, react_1["default"].createElement(InputField_1["default"], {
    title: "Email Id",
    name: "email",
    value: data.email,
    type: "email",
    onChange: handleInput
  }), errors.email && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.email), react_1["default"].createElement(InputField_1["default"], {
    title: "Password",
    name: "password",
    value: data.password,
    type: "password",
    onChange: handleInput
  }), errors.password && react_1["default"].createElement("div", {
    className: "text-xs text-red-600"
  }, errors.password), react_1["default"].createElement("button", {
    type: "submit",
    className: "bg-green-700 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-2"
  }, "Login"), react_1["default"].createElement("div", {
    className: "mt-2 "
  }, "Need an Account?", react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/register",
    className: "text-blue-600 hover:underline"
  }, "Register Here"))))));
};

exports["default"] = Register;

/***/ })

}]);