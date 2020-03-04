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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-model */ \"./src/task-model.js\");\n\n\n\n\n\nconst allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"allProjects\"])();\n\nfunction openProjectModel() {\n  document.getElementById('projModel').style.display = 'grid';\n}\n\nfunction closeModels() {\n  document.getElementById('projModel').style.display = 'none';\n  document.getElementById('tskModel').style.display = 'none';\n}\n\nfunction opentaskModel() {\n  document.getElementById('tskModel').style.display = 'grid';\n}\n\nfunction displaytask(index) {\n  //table.setAttribute('class', 'task-card');\n  // div.innerHTML = '';\n  const div = document.createElement('div');\n\n  console.log(allProjs.getProjs()[index]);\n\n  if (allProjs.getProjs()[index].list !== undefined) {\n    for (let i = 0; i < allProjs.getProjs()[index].list.length; i += 1) {\n\n      if (allProjs.getProjs()[index].list[i].title !== undefined) {\n        const table = document.createElement('table');\n        const tr = document.createElement('tr');\n        table.appendChild(tr);\n\n        const title = document.createElement('th');\n        title.innerHTML = allProjs.getProjs()[index].list[i].title;\n        tr.appendChild(title);\n\n        const desc = document.createElement('th');\n        desc.innerHTML = allProjs.getProjs()[index].list[i].desc;\n        tr.appendChild(desc);\n\n        const dueDate = document.createElement('th');\n        desc.innerHTML = allProjs.getProjs()[index].list[i].dueDate;\n        tr.appendChild(dueDate);\n\n        const priority = document.createElement('th');\n        priority.innerHTML = allProjs.getProjs()[index].list[i].priority;\n        tr.appendChild(priority);\n\n        const status = document.createElement('th');\n        status.innerHTML = allProjs.getProjs()[index].list[i].status;\n        tr.appendChild(status);\n\n        div.appendChild(table);\n      }\n    }\n    return div;\n  }\n  return 0;\n}\n\nfunction displayProject() {\n  const div = document.getElementById('displayProject');\n  div.setAttribute('class', 'mx-3');\n\n  for (let i = 1; i < allProjs.getProjs().length; i += 1) {\n    const div2 = document.createElement('div');\n    const h2 = document.createElement('h2');\n    h2.innerHTML += allProjs.getProjs()[i].title;\n    div2.appendChild(h2);\n    div2.appendChild(displaytask(i));\n    div2.setAttribute('class', 'col-4');\n    div.appendChild(div2);\n  }\n}\n\nfunction displayTaskWithout() {\n  const div = document.getElementById('displayTaskW');\n\n  const div2 = document.createElement('div');\n  const h2 = document.createElement('h2');\n  h2.innerHTML += allProjs.getProjs()[0].title;\n  div2.appendChild(h2);\n  div2.appendChild(displaytask(0));\n  div2.setAttribute('class', 'col-4');\n  div.appendChild(div2);\n\n}\n\n\nfunction getProjectsData() {\n  const allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"allProjects\"])();\n  console.log(allProjs.getProjs());\n  const title = document.getElementById('titleProject').value;\n  if (title !== '') {\n    Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])(title, false, [], allProjs);\n    closeModels();\n  }\n  displayProject();\n  console.log(allProjs.getProjs());\n}\n\nfunction getTaskData() {\n  console.log(allProjs.getProjs());\n  const title = document.getElementById('titleTask').value;\n  const desc = document.getElementById('descriptionTask').value;\n  const dueDate = document.getElementById('dataTask').value;\n  const priority = document.getElementById('priorityTask').value;\n\n  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {\n    allProjs.getProjs()[0].list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])(title, desc, dueDate, priority, false));\n    closeModels();\n  }\n  displaytask();\n  console.log(allProjs.getProjs());\n}\n\n\nfunction init() {\n  Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Tasks', false, [], allProjs);\n\n  document.getElementById('projectModel').appendChild(Object(_project_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  document.getElementById('taskModel').appendChild(Object(_task_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n  document.getElementById('addProject').addEventListener('click', openProjectModel);\n  document.getElementById('addListNoProj').addEventListener('click', opentaskModel);\n\n  document.getElementById('submitProject').addEventListener('click', getProjectsData);\n  document.getElementById('submitTask').addEventListener('click', getTaskData);\n\n  document.getElementById('cancelProj').addEventListener('click', closeModels);\n  document.getElementById('cancelTask').addEventListener('click', closeModels);\n  return allProjs;\n}\n\nfunction testAddProj() {\n  const allProjs = init();\n  const test = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Project', false, Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList', 'desc', '10/10/20', 1, false), allProjs);\n  Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Project2', true, Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList', 'desc', '10/10/20', 1, true), allProjs);\n  test.list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList2', 'desc2', '10/10/20', 1, true));\n  allProjs.getProjs()[0].list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('testList2', 'desc2', '10/10/20', 1, true));\n  // console.log(test);\n  displayTaskWithout();\n  displayProject();\n  displaytask();\n  console.log(allProjs.getProjs());\n}\n\n// let allProjs = init();\ntestAddProj();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: List, addList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\nfunction List(title, desc, dueDate, priority, status) {\n  this.title = title;\n  this.desc = desc;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.status = status;\n}\n\nfunction addList(title, desc, dueDate, priority, status) {\n  const list = new List(\n    title,\n    desc,\n    dueDate,\n    priority,\n    status,\n  );\n  return list;\n}\n\n\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/project-model.js":
/*!******************************!*\
  !*** ./src/project-model.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction projectModel() {\r\n  const projlines = document.createElement('div');\r\n  projlines.innerHTML = `\r\n    <h2>Add a new project</h2>\r\n    <form class=\"form\">\r\n      <div class=\"form-group\">\r\n      <fieldset>\r\n        <label for=\"title\">Project's title:</label>\r\n        <input type=\"text\" id=\"titleProject\" required>\r\n      </fieldset>\r\n      <button id=\"submitProject\">Create</button>\r\n      <button id=\"cancelProj\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  `;\r\n  projlines.setAttribute('id', 'projModel');\r\n  projlines.className = 'projectModel';\r\n  return projlines;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectModel);\n\n//# sourceURL=webpack:///./src/project-model.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: Project, allProjects, addProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allProjects\", function() { return allProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\nfunction Project(title, status, list) {\n  this.title = title;\n  this.list = [];\n  this.list.push(list);\n  this.status = status;\n}\n\nconst allProjects = () => {\n  const allProjs = [];\n\n  const addProj = (Project) => {\n    allProjs.push(Project);\n  };\n\n  const getProjs = () => allProjs;\n\n  return { allProjs, addProj, getProjs };\n};\n\nfunction addProject(title, status, list, allProjs = this.allProjs) {\n  const project = new Project(\n    title,\n    status,\n    list,\n  );\n  allProjs.addProj(project);\n  return project;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ }),

/***/ "./src/task-model.js":
/*!***************************!*\
  !*** ./src/task-model.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction taskModel() {\r\n  const tasklines = document.createElement('div');\r\n  tasklines.innerHTML = `\r\n    <h2>Add a new task</h2>\r\n    <form class=\"form\">\r\n      <fieldset>\r\n        <label for=\"title\">Task's title</label><br>\r\n        <input type=\"text\" id=\"titleTask\" required>\r\n      </fieldset>\r\n      <fieldset>\r\n        <label for=\"description\">Task's description:</label><br>\r\n        <input type=\"text\" id=\"descriptionTask\" required>\r\n      </fieldset>\r\n      <fieldset>\r\n        <label for=\"Date\">Task's Date:</label><br>\r\n        <input type=\"date\" id=\"dataTask\" required>\r\n      </fieldset>\r\n      <fieldset>\r\n        <label for=\"priority\">Task's Priority (between 1 and 10):</label><br>\r\n        <input type=\"number\" id=\"priorityTask\" min=\"1\" max=\"10\" required>\r\n      </fieldset>\r\n      <button id=\"submitTask\">Create</button>\r\n      <button id=\"cancelTask\">Cancel</button>\r\n    </form>\r\n  `;\r\n  tasklines.setAttribute('id', 'tskModel');\r\n  tasklines.className = 'taskModel';\r\n  return tasklines;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskModel);\n\n//# sourceURL=webpack:///./src/task-model.js?");

/***/ })

/******/ });