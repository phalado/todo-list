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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: displayTaskWithout, opentaskModel, displayProject, getProjectsInter, openProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTaskWithout\", function() { return displayTaskWithout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"opentaskModel\", function() { return opentaskModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProject\", function() { return displayProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectsInter\", function() { return getProjectsInter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openProjectModel\", function() { return openProjectModel; });\n/* harmony import */ var _localStorageManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageManagement */ \"./src/localStorageManagement.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\nfunction displaytask(index) {\n  const div = document.createElement('div');\n  const allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])();\n\n  if (allProjs[index] !== undefined) {\n    const table = document.createElement('table');\n    table.setAttribute('class', 'text-center table-bordered table-secondary');\n    let tr = document.createElement('tr');\n    table.appendChild(tr);\n    let title = document.createElement('th');\n    title.innerHTML = 'Title';\n    tr.appendChild(title);\n    let desc = document.createElement('th');\n    desc.innerHTML = 'Task Description';\n    tr.appendChild(desc);\n    let dueDate = document.createElement('th');\n    dueDate.innerHTML = 'Limit Date';\n    tr.appendChild(dueDate);\n    let priority = document.createElement('th');\n    priority.innerHTML = 'Priority';\n    tr.appendChild(priority);\n    let status = document.createElement('th');\n    status.innerHTML = 'Status';\n    tr.appendChild(status);\n    let edit = document.createElement('th');\n    edit.innerHTML = 'Edit';\n    tr.appendChild(edit);\n    let delet = document.createElement('th');\n    delet.innerHTML = 'Delete';\n    tr.appendChild(delet);\n\n    for (let i = 0; i < allProjs[index].list.length; i += 1) {\n      if (allProjs[index].list[i].title !== undefined) {\n        tr = document.createElement('tr');\n        table.appendChild(tr);\n\n        title = document.createElement('th');\n        title.innerHTML = allProjs[index].list[i].title;\n        tr.appendChild(title);\n\n        desc = document.createElement('th');\n        desc.innerHTML = allProjs[index].list[i].desc;\n        tr.appendChild(desc);\n\n        dueDate = document.createElement('th');\n        dueDate.innerHTML = allProjs[index].list[i].dueDate;\n        tr.appendChild(dueDate);\n\n        priority = document.createElement('th');\n        priority.innerHTML = allProjs[index].list[i].priority;\n        tr.appendChild(priority);\n\n        status = document.createElement('th');\n        if (allProjs[index].list[i].status) {\n          status.innerHTML = `<input type=\"checkbox\" \n                               id=\"taskStatus\" \n                               checked>`;\n        } else {\n          status.innerHTML = `<input type=\"checkbox\" \n                               id=\"taskStatus\">`;\n        }\n        status.addEventListener('click', () => { Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"updateListStatus\"])(index, i); });\n        tr.appendChild(status);\n\n        edit = document.createElement('th');\n        edit.innerHTML = '<a href=\"#\">Edit</a>';\n        edit.addEventListener('click', () => { Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"updateList\"])(index, i); });\n        tr.appendChild(edit);\n\n        delet = document.createElement('th');\n        delet.innerHTML = '<a href=\"#\">Delete</a>';\n        delet.addEventListener('click', () => { Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"deleteList\"])(index, i); });\n        tr.appendChild(delet);\n      }\n      div.appendChild(table);\n    }\n    return div;\n  }\n  return 0;\n}\n\nfunction displayTaskWithout() {\n  const div = document.getElementById('displayTaskW');\n  div.innerHTML = '';\n\n  const div2 = document.createElement('div');\n  const h2 = document.createElement('h2');\n  h2.innerHTML += Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])()[0].title;\n  div2.appendChild(h2);\n  div2.appendChild(displaytask(0));\n  div.appendChild(div2);\n}\n\nfunction opentaskModel(index = 0) {\n  document.getElementById('tskModel').style.display = 'grid';\n  document.getElementById('projModel').style.display = 'none';\n  document.getElementById('submitTask').addEventListener('click', () => { Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"getTaskInter\"])(index); });\n}\n\nfunction displayProject() {\n  const div = document.getElementById('displayProject');\n  div.innerHTML = '';\n\n  for (let i = 1; i < Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])().length; i += 1) {\n    const div2 = document.createElement('div');\n    div2.setAttribute('class', 'projectsTasks mb-3');\n    const h2 = document.createElement('h2');\n    h2.innerHTML += Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])()[i].title;\n    div2.appendChild(h2);\n    div2.appendChild(displaytask(i));\n\n    const button = document.createElement('button');\n    button.innerHTML = 'add task';\n    button.setAttribute('id', `add-task${i}`);\n    div2.appendChild(button);\n    div.appendChild(div2);\n\n    document.getElementById(`add-task${i}`).addEventListener('click', () => { opentaskModel(i); });\n  }\n}\n\nfunction getProjectsInter() {\n  Object(_projects__WEBPACK_IMPORTED_MODULE_2__[\"getProjectsData\"])();\n  // eslint-disable-next-line no-restricted-globals\n  location.reload();\n}\n\nfunction openProjectModel() {\n  document.getElementById('projModel').style.display = 'grid';\n  document.getElementById('tskModel').style.display = 'none';\n}\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-model */ \"./src/task-model.js\");\n/* harmony import */ var _task_model_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-model-edit */ \"./src/task-model-edit.js\");\n/* harmony import */ var _localStorageManagement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageManagement */ \"./src/localStorageManagement.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\n\n\n\nfunction testAddProj(allProjs) {\n  allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Approve the code', false, Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('Review the code', 'Read all the code and see that everything is all right', '2020-03-05', 1, false), allProjs);\n  allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Todo List', true, Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('Create reppository', 'Repository created at Github', '2020-03-02', 1, true), allProjs);\n  allProjs[1].list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('Approve it', 'Click on the \"aproved\" button', '2020-03-05', 1, false));\n  allProjs[2].list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('Create todo list project', 'Create the app as described in Odin Project and Microverse', '2020-03-04', 1, true));\n  allProjs[2].list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('Check for linter errors', 'Check errors using lint', '2020-03-04', 1, true));\n  allProjs[2].list.push(Object(_list__WEBPACK_IMPORTED_MODULE_1__[\"addList\"])('Send for code review', 'Open a pull request on Github and send code for code review in Microverse', '2020-03-04', 1, true));\n  return allProjs;\n}\n\nfunction init() {\n  let allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_5__[\"getProjects\"])();\n  if (allProjs === null) {\n    allProjs = [];\n    allProjs = Object(_projects__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])('Tasks', false, [], allProjs);\n    allProjs = testAddProj(allProjs);\n  }\n  Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_5__[\"storeProjects\"])(allProjs);\n\n  document.getElementById('projectModel').appendChild(Object(_project_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  document.getElementById('taskModel').appendChild(Object(_task_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  // document.getElementById('taskModelEdit').appendChild(taskModelEdit());\n\n  document.getElementById('addProject').addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_6__[\"openProjectModel\"]);\n  document.getElementById('addListNoProj').addEventListener('click', () => { Object(_dom__WEBPACK_IMPORTED_MODULE_6__[\"opentaskModel\"])(0); });\n\n  document.getElementById('submitProject').addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_6__[\"getProjectsInter\"]);\n\n  document.getElementById('cancelProj').addEventListener('click', _list__WEBPACK_IMPORTED_MODULE_1__[\"closeModels\"]);\n  document.getElementById('cancelTask').addEventListener('click', _list__WEBPACK_IMPORTED_MODULE_1__[\"closeModels\"]);\n\n  Object(_dom__WEBPACK_IMPORTED_MODULE_6__[\"displayTaskWithout\"])();\n  Object(_dom__WEBPACK_IMPORTED_MODULE_6__[\"displayProject\"])();\n}\n\ninit();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: List, addList, getTaskData, updateListStatus, closeModels, deleteList, updateList, getTaskInter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTaskData\", function() { return getTaskData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateListStatus\", function() { return updateListStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModels\", function() { return closeModels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteList\", function() { return deleteList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateList\", function() { return updateList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTaskInter\", function() { return getTaskInter; });\n/* harmony import */ var _localStorageManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageManagement */ \"./src/localStorageManagement.js\");\n/* harmony import */ var _task_model_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-model-edit */ \"./src/task-model-edit.js\");\n\n\n\nfunction List(title, desc, dueDate, priority, status) {\n  this.title = title;\n  this.desc = desc;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.status = status;\n}\n\nfunction addList(title, desc, dueDate, priority, status) {\n  const list = new List(\n    title,\n    desc,\n    dueDate,\n    priority,\n    status,\n  );\n  return list;\n}\n\nfunction closeModels() {\n  document.getElementById('projModel').style.display = 'none';\n  document.getElementById('tskModel').style.display = 'none';\n  if (document.getElementById('tskModelEdit')) {\n    document.getElementById('tskModelEdit').style.display = 'none';\n  }\n}\n\nfunction getTaskInter(index, i = null) {\n  if (i === null) {\n    getTaskData(index);\n  } else {\n    editTaskData(index, i)\n  }\n\n  // eslint-disable-next-line no-restricted-globals\n  location.reload();\n}\n\nfunction getTaskData(index) {\n  const title = document.getElementById('titleTask').value;\n  const desc = document.getElementById('descriptionTask').value;\n  const dueDate = document.getElementById('dataTask').value;\n  const priority = document.getElementById('priorityTask').value;\n  const allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])();\n\n  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {\n    allProjs[index].list.push(addList(title, desc, dueDate, priority, false));\n    Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"storeProjects\"])(allProjs);\n    closeModels();\n  }\n}\n\nfunction editTaskData(index, i) {\n  const title = document.getElementById('titleTaskEdit').value;\n  const desc = document.getElementById('descriptionTaskEdit').value;\n  const dueDate = document.getElementById('dataTaskEdit').value;\n  const priority = document.getElementById('priorityTaskEdit').value;\n  const allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])();\n\n  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {\n    allProjs[index].list[i] = (addList(title, desc, dueDate, priority, false));\n    Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"storeProjects\"])(allProjs);\n    closeModels();\n  }\n}\n\nfunction updateListStatus(index, i) {\n  const allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])();\n  allProjs[index].list[i].status = !allProjs[index].list[i].status;\n  Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"storeProjects\"])(allProjs);\n}\n\nfunction updateList(index, i) {\n  const allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])();\n  const list = allProjs[index].list[i];\n\n  document.getElementById('taskModelEdit').innerHTML = '';\n  document.getElementById('taskModelEdit').appendChild(Object(_task_model_edit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list));\n  document.getElementById('tskModelEdit').style.display = 'grid';\n  document.getElementById('submitTaskEdit').addEventListener('click', () => { getTaskInter(index, i); });\n  document.getElementById('cancelTaskEdit').addEventListener('click', closeModels);\n}\n\nfunction deleteList(index, i) {\n  const allProjs = Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])();\n  allProjs[index].list.splice(i, 1);\n  Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"storeProjects\"])(allProjs);\n  // eslint-disable-next-line no-restricted-globals\n  location.reload();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/list.js?");

/***/ }),

/***/ "./src/localStorageManagement.js":
/*!***************************************!*\
  !*** ./src/localStorageManagement.js ***!
  \***************************************/
/*! exports provided: storeProjects, getProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeProjects\", function() { return storeProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\nfunction storeProjects(allProjs) {\n  const projs = JSON.stringify(allProjs);\n  localStorage.setItem('allProjs', projs);\n}\n\nfunction getProjects() {\n  const allProjs = localStorage.getItem('allProjs');\n  return JSON.parse(allProjs);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/localStorageManagement.js?");

/***/ }),

/***/ "./src/project-model.js":
/*!******************************!*\
  !*** ./src/project-model.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction projectModel() {\n  const projlines = document.createElement('div');\n  projlines.innerHTML = `\n    <h2>Add a new project</h2>\n    <form class=\"form\">\n      <div class=\"form-group\">\n      <fieldset>\n        <label for=\"title\">Project's title:</label>\n        <input type=\"text\" id=\"titleProject\" required>\n      </fieldset>\n      <button id=\"submitProject\">Create</button>\n      <button id=\"cancelProj\">Cancel</button>\n      </div>\n    </form>\n  `;\n  projlines.setAttribute('id', 'projModel');\n  projlines.className = 'projectModel';\n  return projlines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectModel);\n\n\n//# sourceURL=webpack:///./src/project-model.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: Project, addProject, getProjectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectsData\", function() { return getProjectsData; });\n/* harmony import */ var _localStorageManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageManagement */ \"./src/localStorageManagement.js\");\n\n\nfunction Project(title, status, list) {\n  this.title = title;\n  this.list = [];\n  this.list.push(list);\n  this.status = status;\n}\n\nfunction addProject(title, status, list, allProjs = this.allProjs) {\n  const project = new Project(\n    title,\n    status,\n    list,\n  );\n  allProjs.push(project);\n  return allProjs;\n}\n\nfunction getProjectsData() {\n  const title = document.getElementById('titleProject').value;\n  if (title !== '') {\n    Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"storeProjects\"])(addProject(title, false, [], Object(_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__[\"getProjects\"])()));\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ }),

/***/ "./src/task-model-edit.js":
/*!********************************!*\
  !*** ./src/task-model-edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction taskModelEdit(list) {\n  const tasklines = document.createElement('div');\n  tasklines.innerHTML = `\n    <h2>Edit task</h2>\n    <form class=\"form\">\n      <fieldset>\n        <label for=\"title\">Task's title</label><br>\n        <input type=\"text\" id=\"titleTaskEdit\" required value=${list.title}>\n      </fieldset>\n      <fieldset>\n        <label for=\"description\">Task's description:</label><br>\n        <input type=\"text\" id=\"descriptionTaskEdit\" required value=${list.desc}>\n      </fieldset>\n      <fieldset>\n        <label for=\"Date\">Task's Date:</label><br>\n        <input type=\"date\" id=\"dataTaskEdit\" required value=${list.dueDate}>\n      </fieldset>\n      <fieldset>\n        <label for=\"priority\">Task's Priority:</label><br>\n        <select name=\"priority\" id=\"priorityTaskEdit\" size=\"1  value=${list.priority}\">\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n        </select>\n      </fieldset>\n      <button id=\"submitTaskEdit\">Save</button>\n      <button id=\"cancelTaskEdit\">Cancel</button>\n    </form>\n  `;\n  tasklines.setAttribute('id', 'tskModelEdit');\n  tasklines.className = 'taskModel';\n  return tasklines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskModelEdit);\n\n//# sourceURL=webpack:///./src/task-model-edit.js?");

/***/ }),

/***/ "./src/task-model.js":
/*!***************************!*\
  !*** ./src/task-model.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction taskModel() {\n  const tasklines = document.createElement('div');\n  tasklines.innerHTML = `\n    <h2>Add a new task</h2>\n    <form class=\"form\">\n      <fieldset>\n        <label for=\"title\">Task's title</label><br>\n        <input type=\"text\" id=\"titleTask\" required>\n      </fieldset>\n      <fieldset>\n        <label for=\"description\">Task's description:</label><br>\n        <input type=\"text\" id=\"descriptionTask\" required>\n      </fieldset>\n      <fieldset>\n        <label for=\"Date\">Task's Date:</label><br>\n        <input type=\"date\" id=\"dataTask\" required>\n      </fieldset>\n      <fieldset>\n        <label for=\"priority\">Task's Priority:</label><br>\n        <select name=\"priority\" id=\"priorityTask\" size=\"1\">\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n        </select>\n      </fieldset>\n      <button id=\"submitTask\">Create</button>\n      <button id=\"cancelTask\">Cancel</button>\n    </form>\n  `;\n  tasklines.setAttribute('id', 'tskModel');\n  tasklines.className = 'taskModel';\n  return tasklines;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskModel);\n\n\n//# sourceURL=webpack:///./src/task-model.js?");

/***/ })

/******/ });