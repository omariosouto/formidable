/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/UsersTable/UsersTable.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/UsersTable/UsersTable.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/UsersTable/index.js":
/*!************************************************!*\
  !*** ./src/app/components/UsersTable/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersTable; });
/* harmony import */ var _infra_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../infra/Component */ "./src/infra/Component.js");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersTable.scss */ "./src/app/components/UsersTable/UsersTable.scss");
/* harmony import */ var _UsersTable_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UsersTable_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UsersTable =
/*#__PURE__*/
function (_Component) {
  _inherits(UsersTable, _Component);

  function UsersTable(element, controller) {
    var _this;

    _classCallCheck(this, UsersTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UsersTable).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      users: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeUser", function (_ref) {
      var clickTargetElement = _ref.target;

      if (clickTargetElement.classList.contains('btn-remove')) {
        var userTr = clickTargetElement.closest('tr');
        var userTds = userTr.querySelectorAll('td');
        var userData = Array.from(userTds).reduce(function (acc, currentTd) {
          var currentDataType = currentTd.getAttribute('data-type');
          acc[currentDataType] = currentTd.textContent;
          return acc;
        }, {});

        _this.controller.remove(userData);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "template", function () {
      return "\n      <table>\n        <thead>\n          <tr>\n            <td>Nome</td>\n            <td>CPF</td>\n            <td>Email</td>\n            <td>Telefone</td>\n          </tr>\n        </thead>\n        <tbody>\n          ".concat(_this.state.users.map(function (user) {
        return "\n              <tr>\n                <td data-type=\"nome\">".concat(user.getFullName(), "</td>\n                <td data-type=\"cpf\">").concat(user.getCPFFormated(), "</td>\n                <td data-type=\"email\">").concat(user.getEmail(), "</td>\n                <td data-type=\"telefone\">").concat(user.getPhoneFormated(), "</td>\n                <td><button class=\"btn-remove\">Remover</button></td>\n              </tr>\n            ");
      }).join(''), "\n          ").concat(_this.state.users.length === 0 ? '<tr><td colspan="4" align="center">Nenhum usuário encontrado :(</td></tr>' : '', "\n        </tbody>\n      </table>\n    ");
    });

    _this.controller = controller;
    _this.baseElement = element;

    _this.setupEvents();

    return _this;
  }

  _createClass(UsersTable, [{
    key: "setupEvents",
    value: function setupEvents() {
      this.baseElement.onclick = this.removeUser;
    }
  }, {
    key: "render",
    value: function render() {
      this.baseElement.innerHTML = this.template();
    }
  }]);

  return UsersTable;
}(_infra_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/app/controllers/UserControler.js":
/*!**********************************************!*\
  !*** ./src/app/controllers/UserControler.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserController; });
/* harmony import */ var _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/services/UsersService */ "./src/domain/services/UsersService.js");
/* harmony import */ var _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UsersTable */ "./src/app/components/UsersTable/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var $form = event.target;
      if ($form.validator.isInvalid()) return;
      $form.dispatchEvent(new Event('btnsubmitloading'));
      var formElementsDTO = {
        fullName: $form.querySelector('[data-element="inputNome"]').value,
        cpf: $form.querySelector('[data-element="inputCPF"]').value,
        phone: $form.querySelector('[data-element="inputTelefone"]').value,
        email: $form.querySelector('[data-element="inputEmail"]').value
      };
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].addNew(formElementsDTO).then(function () {
        $form.dispatchEvent(new Event('btnsubmitloaded'));
        window.location.href = '/';
      });
    }
  }, {
    key: "showAll",
    value: function showAll() {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].getAllWithInitialData().then(function (users) {
        usersTable.setState({
          users: users
        });
      });
    }
  }, {
    key: "remove",
    value: function remove(user) {
      var usersTable = new _components_UsersTable__WEBPACK_IMPORTED_MODULE_1__["default"](window.document.querySelector('[data-template="UsersTable"]'), UserController);
      var removableUserDTO = {
        fullName: user.nome,
        cpf: user.cpf,
        phone: user.telefone,
        email: user.email
      };
      _domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUser(removableUserDTO).then(_domain_services_UsersService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll).then(function (users) {
        usersTable.setState({
          users: users
        });
      });
    }
  }]);

  return UserController;
}();



/***/ }),

/***/ "./src/app/pages/home/index.js":
/*!*************************************!*\
  !*** ./src/app/pages/home/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/UserControler */ "./src/app/controllers/UserControler.js");

window.pageHome = {
  userController: _controllers_UserControler__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/app/pages/home/index.scss":
/*!***************************************!*\
  !*** ./src/app/pages/home/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/domain/entities/User.js":
/*!*************************************!*\
  !*** ./src/domain/entities/User.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../valueObjects/Phone */ "./src/domain/valueObjects/Phone.js");
/* harmony import */ var _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../valueObjects/CPF */ "./src/domain/valueObjects/CPF.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var User = function User(_ref) {
  var _this = this;

  var fullName = _ref.fullName,
      cpf = _ref.cpf,
      phone = _ref.phone,
      email = _ref.email;

  _classCallCheck(this, User);

  _defineProperty(this, "getFullName", function () {
    return _this.fullName;
  });

  _defineProperty(this, "getEmail", function () {
    return _this.email;
  });

  _defineProperty(this, "getCPF", function () {
    return _this.cpf.getValue();
  });

  _defineProperty(this, "getCPFFormated", function () {
    return _this.cpf.getValueFormated();
  });

  _defineProperty(this, "getPhone", function () {
    return _this.phone.getNumber();
  });

  _defineProperty(this, "getPhoneFormated", function () {
    return _this.phone.getNumberFormated();
  });

  this.fullName = fullName;
  this.cpf = new _valueObjects_CPF__WEBPACK_IMPORTED_MODULE_1__["default"]({
    CPFNumbers: cpf
  });
  this.phone = new _valueObjects_Phone__WEBPACK_IMPORTED_MODULE_0__["default"]({
    number: phone
  });
  this.email = email.toLowerCase();
  Object.freeze(this);
};



/***/ }),

/***/ "./src/domain/services/UsersService.js":
/*!*********************************************!*\
  !*** ./src/domain/services/UsersService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/User */ "./src/domain/entities/User.js");
/* harmony import */ var _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/repositories/UsersRepository */ "./src/infra/repositories/UsersRepository.js");
/* eslint no-use-before-define: ["error", { "functions": false }] */



var addNew = function addNew(formElementsDTO) {
  var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](formElementsDTO);
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(usersRepository.insert(user));
    }, 1000);
  });
};

var getAll = function getAll() {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return new Promise(function (resolve) {
    var listOfDomainUsers = usersRepository.getAll().map(function (user) {
      return new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone
      });
    });
    resolve(listOfDomainUsers);
  });
};

var getAllWithInitialData = function getAllWithInitialData() {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var hasUsersFromRepository = usersRepository.getAll().length > 0;

  if (hasUsersFromRepository) {
    return getAll();
  }

  return getExternalUsers();
};

function getExternalUsers() {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users').then(function (response) {
    if (response.ok) return response.json();
    return response;
  }).then(function (users) {
    var addUsersPromises = users.map(function (user) {
      return usersRepository.insert(new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
        cpf: user.cpf,
        email: user.email,
        fullName: user.name,
        phone: user.phone
      }));
    });
    return Promise.all(addUsersPromises);
  }).then(function () {
    return getAll();
  });
}

function deleteUser(removableUserDTO) {
  var usersRepository = new _infra_repositories_UsersRepository__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var user = new _entities_User__WEBPACK_IMPORTED_MODULE_0__["default"](removableUserDTO);
  usersRepository.remove(user);
  return new Promise(function (resolve) {
    resolve({
      message: 'removed with success'
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  addNew: addNew,
  getAll: getAll,
  deleteUser: deleteUser,
  getAllWithInitialData: getAllWithInitialData
});

/***/ }),

/***/ "./src/domain/valueObjects/CPF.js":
/*!****************************************!*\
  !*** ./src/domain/valueObjects/CPF.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CPF; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CPF = function CPF(_ref) {
  var _this = this;

  var CPFNumbers = _ref.CPFNumbers;

  _classCallCheck(this, CPF);

  _defineProperty(this, "getValue", function () {
    return _this.CPFNumbers;
  });

  _defineProperty(this, "getValueFormated", function () {
    var CPFRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    return _this.CPFNumbers.replace(CPFRegex, function (fullMatch, partOne, partTwo, partThree, digit) {
      return "".concat(partOne, ".").concat(partTwo, ".").concat(partThree, "-").concat(digit);
    });
  });

  this.CPFNumbers = CPFNumbers.replace(/-/g, '').replace(/\./g, '');
  Object.freeze(this);
};



/***/ }),

/***/ "./src/domain/valueObjects/Phone.js":
/*!******************************************!*\
  !*** ./src/domain/valueObjects/Phone.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Phone; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Phone = function Phone(_ref) {
  var _this = this;

  var number = _ref.number;

  _classCallCheck(this, Phone);

  _defineProperty(this, "getNumber", function () {
    return _this.number;
  });

  _defineProperty(this, "getNumberFormated", function () {
    return _this.number.replace(/(\d{2})?(\d{4})(\d{4})/, function (fullMatch, ddd, numberPartOne, numberPartTwo) {
      if (ddd) return "".concat(ddd, "-").concat(numberPartOne, "-").concat(numberPartTwo);
      return "".concat(numberPartOne, "-").concat(numberPartTwo);
    });
  });

  this.number = number.replace(/-/g, '');
  Object.freeze(this);
};



/***/ }),

/***/ "./src/infra/Component.js":
/*!********************************!*\
  !*** ./src/infra/Component.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = function Component() {
  var _this = this;

  _classCallCheck(this, Component);

  _defineProperty(this, "setState", function (newState) {
    requestAnimationFrame(function () {
      _this.state = _objectSpread({}, _this.state, newState);

      _this.render();
    });
  });
};



/***/ }),

/***/ "./src/infra/deepEqual.js":
/*!********************************!*\
  !*** ./src/infra/deepEqual.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var deepEqual = function deepEqual(a, b) {
  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    var aKeys = Object.keys(a);
    return aKeys.reduce(function (acc, key) {
      if (!deepEqual(a[key], b[key]) || acc === false) return false;
      return true;
    }, true);
  }

  return a === b;
};

/* harmony default export */ __webpack_exports__["default"] = (deepEqual);

/***/ }),

/***/ "./src/infra/repositories/UsersRepository.js":
/*!***************************************************!*\
  !*** ./src/infra/repositories/UsersRepository.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersRepository; });
/* harmony import */ var _deepEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepEqual */ "./src/infra/deepEqual.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var UsersRepository = function UsersRepository() {
  var _this = this;

  _classCallCheck(this, UsersRepository);

  _defineProperty(this, "key", 'users');

  _defineProperty(this, "getItemFromLocalStorage", function () {
    return JSON.parse(localStorage.getItem(_this.key)) || [];
  });

  _defineProperty(this, "setItemInLocalStorage", function (item) {
    return localStorage.setItem(_this.key, JSON.stringify(item));
  });

  _defineProperty(this, "getAll", function () {
    return _this.getItemFromLocalStorage();
  });

  _defineProperty(this, "insert", function (user) {
    var listOfUsers = _this.getAll();

    if (user.getFullName) {
      listOfUsers.push({
        name: user.getFullName(),
        cpf: user.getCPF(),
        phone: user.getPhone(),
        email: user.getEmail()
      });
    }

    return new Promise(function (resolve, reject) {
      try {
        _this.setItemInLocalStorage(listOfUsers);

        resolve({
          message: 'User registered with success'
        });
      } catch (err) {
        reject(err);
      }
    });
  });

  _defineProperty(this, "remove", function (removableUser) {
    var removableUserDbObj = {
      name: removableUser.getFullName(),
      cpf: removableUser.getCPF(),
      phone: removableUser.getPhone(),
      email: removableUser.getEmail()
    };

    var listOfUsers = _this.getAll();

    var updatedListOfUsers = listOfUsers.filter(function (currentUser) {
      return !Object(_deepEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(currentUser, removableUserDbObj);
    });

    _this.setItemInLocalStorage(updatedListOfUsers);
  });
};



/***/ }),

/***/ 1:
/*!***************************************************************************!*\
  !*** multi ./src/app/pages/home/index.js ./src/app/pages/home/index.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app/pages/home/index.js */"./src/app/pages/home/index.js");
module.exports = __webpack_require__(/*! ./src/app/pages/home/index.scss */"./src/app/pages/home/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJzVGFibGUvVXNlcnNUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2Vyc1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udHJvbGxlcnMvVXNlckNvbnRyb2xlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ob21lL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vc2VydmljZXMvVXNlcnNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdmFsdWVPYmplY3RzL0NQRi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL3ZhbHVlT2JqZWN0cy9QaG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9kZWVwRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlcnNUYWJsZSIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXNlcnMiLCJjbGlja1RhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJUciIsImNsb3Nlc3QiLCJ1c2VyVGRzIiwicXVlcnlTZWxlY3RvckFsbCIsInVzZXJEYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudFRkIiwiY3VycmVudERhdGFUeXBlIiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJzdGF0ZSIsIm1hcCIsInVzZXIiLCJnZXRGdWxsTmFtZSIsImdldENQRkZvcm1hdGVkIiwiZ2V0RW1haWwiLCJnZXRQaG9uZUZvcm1hdGVkIiwiam9pbiIsImxlbmd0aCIsImJhc2VFbGVtZW50Iiwic2V0dXBFdmVudHMiLCJvbmNsaWNrIiwicmVtb3ZlVXNlciIsImlubmVySFRNTCIsInRlbXBsYXRlIiwiQ29tcG9uZW50IiwiVXNlckNvbnRyb2xsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGZvcm0iLCJ2YWxpZGF0b3IiLCJpc0ludmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JtRWxlbWVudHNEVE8iLCJmdWxsTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNwZiIsInBob25lIiwiZW1haWwiLCJVc2Vyc1NlcnZpY2UiLCJhZGROZXciLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcnNUYWJsZSIsImRvY3VtZW50IiwiZ2V0QWxsV2l0aEluaXRpYWxEYXRhIiwic2V0U3RhdGUiLCJyZW1vdmFibGVVc2VyRFRPIiwibm9tZSIsInRlbGVmb25lIiwiZGVsZXRlVXNlciIsImdldEFsbCIsInBhZ2VIb21lIiwidXNlckNvbnRyb2xsZXIiLCJVc2VyIiwiZ2V0VmFsdWUiLCJnZXRWYWx1ZUZvcm1hdGVkIiwiZ2V0TnVtYmVyIiwiZ2V0TnVtYmVyRm9ybWF0ZWQiLCJDUEYiLCJDUEZOdW1iZXJzIiwiUGhvbmUiLCJudW1iZXIiLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsImZyZWV6ZSIsInVzZXJzUmVwb3NpdG9yeSIsIlVzZXJzUmVwb3NpdG9yeSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImluc2VydCIsImxpc3RPZkRvbWFpblVzZXJzIiwibmFtZSIsImhhc1VzZXJzRnJvbVJlcG9zaXRvcnkiLCJnZXRFeHRlcm5hbFVzZXJzIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImFkZFVzZXJzUHJvbWlzZXMiLCJhbGwiLCJtZXNzYWdlIiwiQ1BGUmVnZXgiLCJyZXBsYWNlIiwiZnVsbE1hdGNoIiwicGFydE9uZSIsInBhcnRUd28iLCJwYXJ0VGhyZWUiLCJkaWdpdCIsImRkZCIsIm51bWJlclBhcnRPbmUiLCJudW1iZXJQYXJ0VHdvIiwibmV3U3RhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJkZWVwRXF1YWwiLCJhIiwiYiIsImtleXMiLCJhS2V5cyIsImtleSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlIiwibGlzdE9mVXNlcnMiLCJwdXNoIiwiZ2V0Q1BGIiwiZ2V0UGhvbmUiLCJyZWplY3QiLCJzZXRJdGVtSW5Mb2NhbFN0b3JhZ2UiLCJlcnIiLCJyZW1vdmFibGVVc2VyIiwicmVtb3ZhYmxlVXNlckRiT2JqIiwidXBkYXRlZExpc3RPZlVzZXJzIiwiZmlsdGVyIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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QUN3RyxNQUFMLEVBRlU7QUFHZjdFLGFBQUssRUFBRTNCLElBQUksQ0FBQ3lHLFFBQUwsRUFIUTtBQUlmN0UsYUFBSyxFQUFFNUIsSUFBSSxDQUFDRyxRQUFMO0FBSlEsT0FBakI7QUFNRDs7QUFFRCxXQUFPLElBQUl5RCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVNkMsTUFBVixFQUFxQjtBQUN0QyxVQUFJO0FBQ0YsYUFBSSxDQUFDQyxxQkFBTCxDQUEyQkwsV0FBM0I7O0FBQ0F6QyxlQUFPLENBQUM7QUFBRWEsaUJBQU8sRUFBRTtBQUFYLFNBQUQsQ0FBUDtBQUNELE9BSEQsQ0FHRSxPQUFPa0MsR0FBUCxFQUFZO0FBQ1pGLGNBQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0Q7QUFDRixLQVBNLENBQVA7QUFRRCxHOztrQ0FFUSxVQUFDQyxhQUFELEVBQW1CO0FBQzFCLFFBQU1DLGtCQUFrQixHQUFHO0FBQ3pCN0MsVUFBSSxFQUFFNEMsYUFBYSxDQUFDNUcsV0FBZCxFQURtQjtBQUV6QnlCLFNBQUcsRUFBRW1GLGFBQWEsQ0FBQ0wsTUFBZCxFQUZvQjtBQUd6QjdFLFdBQUssRUFBRWtGLGFBQWEsQ0FBQ0osUUFBZCxFQUhrQjtBQUl6QjdFLFdBQUssRUFBRWlGLGFBQWEsQ0FBQzFHLFFBQWQ7QUFKa0IsS0FBM0I7O0FBTUEsUUFBTW1HLFdBQVcsR0FBRyxLQUFJLENBQUMzRCxNQUFMLEVBQXBCOztBQUNBLFFBQU1vRSxrQkFBa0IsR0FBR1QsV0FBVyxDQUNuQ1UsTUFEd0IsQ0FDakIsVUFBQUMsV0FBVztBQUFBLGFBQUksQ0FBQ3pCLDBEQUFTLENBQUN5QixXQUFELEVBQWNILGtCQUFkLENBQWQ7QUFBQSxLQURNLENBQTNCOztBQUdBLFNBQUksQ0FBQ0gscUJBQUwsQ0FBMkJJLGtCQUEzQjtBQUNELEciLCJmaWxlIjoianMvaG9tZS9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vaW5mcmEvQ29tcG9uZW50JztcbmltcG9ydCAnLi9Vc2Vyc1RhYmxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdLFxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udHJvbGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmJhc2VFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcbiAgfVxuXG4gIHNldHVwRXZlbnRzKCkge1xuICAgIHRoaXMuYmFzZUVsZW1lbnQub25jbGljayA9IHRoaXMucmVtb3ZlVXNlcjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmJhc2VFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcbiAgfVxuXG4gIHJlbW92ZVVzZXIgPSAoeyB0YXJnZXQ6IGNsaWNrVGFyZ2V0RWxlbWVudCB9KSA9PiB7XG4gICAgaWYgKGNsaWNrVGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1yZW1vdmUnKSkge1xuICAgICAgY29uc3QgdXNlclRyID0gY2xpY2tUYXJnZXRFbGVtZW50LmNsb3Nlc3QoJ3RyJyk7XG4gICAgICBjb25zdCB1c2VyVGRzID0gdXNlclRyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEFycmF5LmZyb20odXNlclRkcykucmVkdWNlKChhY2MsIGN1cnJlbnRUZCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0YVR5cGUgPSBjdXJyZW50VGQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgICAgICAgYWNjW2N1cnJlbnREYXRhVHlwZV0gPSBjdXJyZW50VGQudGV4dENvbnRlbnQ7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIucmVtb3ZlKHVzZXJEYXRhKTtcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZSA9ICgpID0+IGBcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Ob21lPC90ZD5cbiAgICAgICAgICAgIDx0ZD5DUEY8L3RkPlxuICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgIDx0ZD5UZWxlZm9uZTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLm1hcCh1c2VyID0+IGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJub21lXCI+JHt1c2VyLmdldEZ1bGxOYW1lKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiY3BmXCI+JHt1c2VyLmdldENQRkZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS10eXBlPVwiZW1haWxcIj4ke3VzZXIuZ2V0RW1haWwoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJ0ZWxlZm9uZVwiPiR7dXNlci5nZXRQaG9uZUZvcm1hdGVkKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmVcIj5SZW1vdmVyPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGApLmpvaW4oJycpXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLmxlbmd0aCA9PT0gMCA/ICc8dHI+PHRkIGNvbHNwYW49XCI0XCIgYWxpZ249XCJjZW50ZXJcIj5OZW5odW0gdXN1w6FyaW8gZW5jb250cmFkbyA6KDwvdGQ+PC90cj4nIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIGBcbn1cbiIsImltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi4vLi4vZG9tYWluL3NlcnZpY2VzL1VzZXJzU2VydmljZSc7XG5pbXBvcnQgVXNlcnNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhZGQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0ICRmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCRmb3JtLnZhbGlkYXRvci5pc0ludmFsaWQoKSkgcmV0dXJuO1xuXG4gICAgJGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2J0bnN1Ym1pdGxvYWRpbmcnKSk7XG5cbiAgICBjb25zdCBmb3JtRWxlbWVudHNEVE8gPSB7XG4gICAgICBmdWxsTmFtZTogJGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImlucHV0Tm9tZVwiXScpLnZhbHVlLFxuICAgICAgY3BmOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRDUEZcIl0nKS52YWx1ZSxcbiAgICAgIHBob25lOiAkZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiaW5wdXRUZWxlZm9uZVwiXScpLnZhbHVlLFxuICAgICAgZW1haWw6ICRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJpbnB1dEVtYWlsXCJdJykudmFsdWUsXG4gICAgfTtcblxuICAgIFVzZXJzU2VydmljZVxuICAgICAgLmFkZE5ldyhmb3JtRWxlbWVudHNEVE8pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdidG5zdWJtaXRsb2FkZWQnKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2hvd0FsbCgpIHtcbiAgICBjb25zdCB1c2Vyc1RhYmxlID0gbmV3IFVzZXJzVGFibGUod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBsYXRlPVwiVXNlcnNUYWJsZVwiXScpLCBVc2VyQ29udHJvbGxlcik7XG5cbiAgICBVc2Vyc1NlcnZpY2VcbiAgICAgIC5nZXRBbGxXaXRoSW5pdGlhbERhdGEoKVxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgIHVzZXJzVGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZSh1c2VyKSB7XG4gICAgY29uc3QgdXNlcnNUYWJsZSA9IG5ldyBVc2Vyc1RhYmxlKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wbGF0ZT1cIlVzZXJzVGFibGVcIl0nKSwgVXNlckNvbnRyb2xsZXIpO1xuXG4gICAgY29uc3QgcmVtb3ZhYmxlVXNlckRUTyA9IHtcbiAgICAgIGZ1bGxOYW1lOiB1c2VyLm5vbWUsXG4gICAgICBjcGY6IHVzZXIuY3BmLFxuICAgICAgcGhvbmU6IHVzZXIudGVsZWZvbmUsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICB9O1xuXG4gICAgVXNlcnNTZXJ2aWNlXG4gICAgICAuZGVsZXRlVXNlcihyZW1vdmFibGVVc2VyRFRPKVxuICAgICAgLnRoZW4oVXNlcnNTZXJ2aWNlLmdldEFsbClcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICB1c2Vyc1RhYmxlLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VycyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sZXInO1xuXG53aW5kb3cucGFnZUhvbWUgPSB7XG4gIHVzZXJDb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcixcbn07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBQaG9uZSBmcm9tICcuLi92YWx1ZU9iamVjdHMvUGhvbmUnO1xuaW1wb3J0IENQRiBmcm9tICcuLi92YWx1ZU9iamVjdHMvQ1BGJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBmdWxsTmFtZSxcbiAgICBjcGYsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gIH0pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgdGhpcy5jcGYgPSBuZXcgQ1BGKHsgQ1BGTnVtYmVyczogY3BmIH0pO1xuICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmUoeyBudW1iZXI6IHBob25lIH0pO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIGdldEZ1bGxOYW1lID0gKCkgPT4gdGhpcy5mdWxsTmFtZVxuXG4gIGdldEVtYWlsID0gKCkgPT4gdGhpcy5lbWFpbFxuXG4gIGdldENQRiA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlKClcblxuICBnZXRDUEZGb3JtYXRlZCA9ICgpID0+IHRoaXMuY3BmLmdldFZhbHVlRm9ybWF0ZWQoKVxuXG4gIGdldFBob25lID0gKCkgPT4gdGhpcy5waG9uZS5nZXROdW1iZXIoKVxuXG4gIGdldFBob25lRm9ybWF0ZWQgPSAoKSA9PiB0aGlzLnBob25lLmdldE51bWJlckZvcm1hdGVkKClcbn1cbiIsIi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogW1wiZXJyb3JcIiwgeyBcImZ1bmN0aW9uc1wiOiBmYWxzZSB9XSAqL1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgVXNlcnNSZXBvc2l0b3J5IGZyb20gJy4uLy4uL2luZnJhL3JlcG9zaXRvcmllcy9Vc2Vyc1JlcG9zaXRvcnknO1xuXG5jb25zdCBhZGROZXcgPSAoZm9ybUVsZW1lbnRzRFRPKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtRWxlbWVudHNEVE8pO1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh1c2Vyc1JlcG9zaXRvcnkuaW5zZXJ0KHVzZXIpKSwgMTAwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgbGlzdE9mRG9tYWluVXNlcnMgPSB1c2Vyc1JlcG9zaXRvcnkuZ2V0QWxsKCkubWFwKHVzZXIgPT4gbmV3IFVzZXIoe1xuICAgICAgY3BmOiB1c2VyLmNwZixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgZnVsbE5hbWU6IHVzZXIubmFtZSxcbiAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgIH0pKTtcbiAgICByZXNvbHZlKGxpc3RPZkRvbWFpblVzZXJzKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRBbGxXaXRoSW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJzUmVwb3NpdG9yeSA9IG5ldyBVc2Vyc1JlcG9zaXRvcnkoKTtcbiAgY29uc3QgaGFzVXNlcnNGcm9tUmVwb3NpdG9yeSA9IHVzZXJzUmVwb3NpdG9yeS5nZXRBbGwoKS5sZW5ndGggPiAwO1xuXG4gIGlmIChoYXNVc2Vyc0Zyb21SZXBvc2l0b3J5KSB7XG4gICAgcmV0dXJuIGdldEFsbCgpO1xuICB9XG4gIHJldHVybiBnZXRFeHRlcm5hbFVzZXJzKCk7XG59O1xuXG5mdW5jdGlvbiBnZXRFeHRlcm5hbFVzZXJzKCkge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTIxZThkZS1yYWZhZWxsdWNpby5hcGlhcnktbW9jay5jb20vdXNlcnMnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICBjb25zdCBhZGRVc2Vyc1Byb21pc2VzID0gdXNlcnMubWFwKHVzZXIgPT4gdXNlcnNSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgIGNwZjogdXNlci5jcGYsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBmdWxsTmFtZTogdXNlci5uYW1lLFxuICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgIH0pKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWRkVXNlcnNQcm9taXNlcyk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBnZXRBbGwoKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVVzZXIocmVtb3ZhYmxlVXNlckRUTykge1xuICBjb25zdCB1c2Vyc1JlcG9zaXRvcnkgPSBuZXcgVXNlcnNSZXBvc2l0b3J5KCk7XG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihyZW1vdmFibGVVc2VyRFRPKTtcbiAgdXNlcnNSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdyZW1vdmVkIHdpdGggc3VjY2VzcycgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZE5ldyxcbiAgZ2V0QWxsLFxuICBkZWxldGVVc2VyLFxuICBnZXRBbGxXaXRoSW5pdGlhbERhdGEsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BGIHtcbiAgY29uc3RydWN0b3IoeyBDUEZOdW1iZXJzIH0pIHtcbiAgICB0aGlzLkNQRk51bWJlcnMgPSBDUEZOdW1iZXJzLnJlcGxhY2UoLy0vZywgJycpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLkNQRk51bWJlcnNcblxuICBnZXRWYWx1ZUZvcm1hdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IENQRlJlZ2V4ID0gLyhcXGR7M30pKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pLztcbiAgICByZXR1cm4gdGhpcy5DUEZOdW1iZXJzLnJlcGxhY2UoQ1BGUmVnZXgsIChmdWxsTWF0Y2gsIHBhcnRPbmUsIHBhcnRUd28sIHBhcnRUaHJlZSwgZGlnaXQpID0+IGAke3BhcnRPbmV9LiR7cGFydFR3b30uJHtwYXJ0VGhyZWV9LSR7ZGlnaXR9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob25lIHtcbiAgY29uc3RydWN0b3IoeyBudW1iZXIgfSkge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoLy0vZywgJycpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBnZXROdW1iZXIgPSAoKSA9PiB0aGlzLm51bWJlcjtcblxuICBnZXROdW1iZXJGb3JtYXRlZCA9ICgpID0+IHRoaXMubnVtYmVyLnJlcGxhY2UoLyhcXGR7Mn0pPyhcXGR7NH0pKFxcZHs0fSkvLCAoZnVsbE1hdGNoLCBkZGQsIG51bWJlclBhcnRPbmUsIG51bWJlclBhcnRUd28pID0+IHtcbiAgICBpZiAoZGRkKSByZXR1cm4gYCR7ZGRkfS0ke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuXG4gICAgcmV0dXJuIGAke251bWJlclBhcnRPbmV9LSR7bnVtYmVyUGFydFR3b31gO1xuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgc2V0U3RhdGUgPSAobmV3U3RhdGUpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgZGVlcEVxdWFsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICByZXR1cm4gYUtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pIHx8IGFjYyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBFcXVhbDtcbiIsImltcG9ydCBkZWVwRXF1YWwgZnJvbSAnLi4vZGVlcEVxdWFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNSZXBvc2l0b3J5IHtcbiAga2V5ID0gJ3VzZXJzJ1xuXG4gIGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpIHx8IFtdXG5cbiAgc2V0SXRlbUluTG9jYWxTdG9yYWdlID0gaXRlbSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG5cbiAgZ2V0QWxsID0gKCkgPT4gdGhpcy5nZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgpXG5cbiAgaW5zZXJ0ID0gKHVzZXIpID0+IHtcbiAgICBjb25zdCBsaXN0T2ZVc2VycyA9IHRoaXMuZ2V0QWxsKCk7XG4gICAgaWYgKHVzZXIuZ2V0RnVsbE5hbWUpIHtcbiAgICAgIGxpc3RPZlVzZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiB1c2VyLmdldEZ1bGxOYW1lKCksXG4gICAgICAgIGNwZjogdXNlci5nZXRDUEYoKSxcbiAgICAgICAgcGhvbmU6IHVzZXIuZ2V0UGhvbmUoKSxcbiAgICAgICAgZW1haWw6IHVzZXIuZ2V0RW1haWwoKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnNldEl0ZW1JbkxvY2FsU3RvcmFnZShsaXN0T2ZVc2Vycyk7XG4gICAgICAgIHJlc29sdmUoeyBtZXNzYWdlOiAnVXNlciByZWdpc3RlcmVkIHdpdGggc3VjY2VzcycgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUgPSAocmVtb3ZhYmxlVXNlcikgPT4ge1xuICAgIGNvbnN0IHJlbW92YWJsZVVzZXJEYk9iaiA9IHtcbiAgICAgIG5hbWU6IHJlbW92YWJsZVVzZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgIGNwZjogcmVtb3ZhYmxlVXNlci5nZXRDUEYoKSxcbiAgICAgIHBob25lOiByZW1vdmFibGVVc2VyLmdldFBob25lKCksXG4gICAgICBlbWFpbDogcmVtb3ZhYmxlVXNlci5nZXRFbWFpbCgpLFxuICAgIH07XG4gICAgY29uc3QgbGlzdE9mVXNlcnMgPSB0aGlzLmdldEFsbCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRMaXN0T2ZVc2VycyA9IGxpc3RPZlVzZXJzXG4gICAgICAuZmlsdGVyKGN1cnJlbnRVc2VyID0+ICFkZWVwRXF1YWwoY3VycmVudFVzZXIsIHJlbW92YWJsZVVzZXJEYk9iaikpO1xuXG4gICAgdGhpcy5zZXRJdGVtSW5Mb2NhbFN0b3JhZ2UodXBkYXRlZExpc3RPZlVzZXJzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==