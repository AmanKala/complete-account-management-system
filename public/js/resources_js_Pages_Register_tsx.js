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

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js"); // import { useForm } from '@inertiajs/inertia-react'


var Heading_1 = __webpack_require__(/*! ../Components/Heading */ "./resources/js/Components/Heading.tsx");

var InputField_1 = __importDefault(__webpack_require__(/*! ../Components/InputField */ "./resources/js/Components/InputField.tsx"));

var Register = function Register() {
  // const { data, setData, post, processing, errors } = useForm({
  //     first_name: "",
  //     email:"",
  // });
  var _ref = (0, react_1.useState)({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_enter_password: ""
  }),
      _ref2 = _slicedToArray(_ref, 2),
      user = _ref2[0],
      setUser = _ref2[1];

  var handleData = function handleData(event) {
    event.preventDefault();
    console.log(user);
    inertia_1.Inertia.post('/register', user); // post(route('register'))
  };

  var name, value;

  var handleInput = function handleInput(event) {
    name = event.target.name;
    value = event.target.value;
    setUser(Object.assign(Object.assign({}, user), _defineProperty({}, name, value)));
  };

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(Heading_1.Heading, {
    title: "Register Page"
  }), react_1["default"].createElement("form", {
    onSubmit: handleData
  }, react_1["default"].createElement(InputField_1["default"], {
    title: "First Name",
    name: "first_name",
    value: user.first_name,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Last Name",
    name: "last_name",
    value: user.last_name,
    type: "text",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Email Id",
    name: "email",
    value: user.email,
    type: "email",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "Password",
    name: "password",
    value: user.password,
    type: "password",
    onChange: handleInput
  }), react_1["default"].createElement(InputField_1["default"], {
    title: "RE-Enter Password",
    name: "re_enter_password",
    value: user.re_enter_password,
    type: "password",
    onChange: handleInput
  }), react_1["default"].createElement("button", {
    type: "submit"
  }, "Register")));
};

exports["default"] = Register;

/***/ })

}]);