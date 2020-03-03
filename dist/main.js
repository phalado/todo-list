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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\n\nfunction openProjectModel() {\n  document.getElementById('projectModel').style.display = 'grid';\n}\n\nfunction init() {\n  const allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"allProjects\"])();\n  const firstProject = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('firstProject',\n                                  false,\n                                  [],\n                                  allProjs);\n\n  document.getElementById('addProject').addEventListener('click', openProjectModel);\n  document.getElementById('submitProject').addEventListener('click', getProjectsData);\n\n  return allProjs;\n}\n\nfunction getProjectsData() {\n  const allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"allProjects\"])();\n  console.log(allProjs.getProjs());\n  const title = document.getElementById('title').value;\n  Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])(title, false, [], allProjs);\n}\n\nfunction testAddProj() {\n  let allProjs = init();\n  const test = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Test', false, Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList', 'desc', '10/10/20', 1, false), allProjs);\n  const test2 = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Test2', true, Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList', 'desc', '10/10/20', 1, true), allProjs);\n  test.list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList2', 'desc2', '10/10/20', 1, true));\n  // console.log(test);\n  console.log(allProjs.getProjs());\n}\n\n// let allProjs = init();\ntestAddProj();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: List, addList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\nfunction List(title, desc, dueDate, priority, status) {\n  this.title = title;\n  this.desc = desc;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.status = status;\n}\n\nfunction addList(title, desc, dueDate, priority, status) {\n  const list = new List(\n    title,\n    desc,\n    dueDate,\n    priority,\n    status\n  );\n  return list;\n}\n\n\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: Project, allProjects, addProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allProjects\", function() { return allProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\nfunction Project(title, status, list) {\n  this.title = title;\n  this.list = [];\n  this.list.push(list);\n  this.status = status;\n}\n\nconst allProjects = () => {\n  const allProjs = [];\n\n  const addProj = (Project) => {\n    allProjs.push(Project);\n  };\n\n  const getProjs = () => {\n    return allProjs;\n  };\n\n  return { allProjs, addProj, getProjs };\n};\n\nfunction addProject(title, status, list, allProjs = this.allProjs) {\n  const project = new Project(\n    title,\n    status,\n    list\n  );\n  allProjs.addProj(project);\n  return project;\n}\n\n\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ })

/******/ });