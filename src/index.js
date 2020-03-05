import { addProject } from './projects';
import {
  addList, closeModels,
} from './list';
import projectModel from './project-model';
import taskModel from './task-model';
import { storeProjects, getProjects } from './localStorageManagement';
import {
  displayTaskWithout, opentaskModel, displayProject, getProjectsInter, openProjectModel,
} from './dom';

function testAddProj(allProjs) {
  allProjs = addProject('Approve the code', false, addList('Review the code', 'Read all the code and see that everything is all right', '05/03/2020', 1, false), allProjs);
  allProjs = addProject('Todo List', true, addList('Create reppository', 'Repository created at Github', '02/03/2020', 1, true), allProjs);
  allProjs[1].list.push(addList('Approve it', 'Click on the "aproved" button', '05/03/2020', 1, false));
  allProjs[2].list.push(addList('Create todo list project', 'Create the app as described in Odin Project and Microverse', '04/03/2020', 1, true));
  allProjs[2].list.push(addList('Check for linter errors', 'Check errors using lint', '04/03/2020', 1, true));
  allProjs[2].list.push(addList('Send for code review', 'Open a pull request on Github and send code for code review in Microverse', '04/03/2020', 1, true));
  return allProjs;
}

function init() {
  let allProjs = getProjects();
  if (allProjs === null) {
    allProjs = [];
    allProjs = addProject('Tasks', false, [], allProjs);
    allProjs = testAddProj(allProjs);
  }
  storeProjects(allProjs);

  document.getElementById('projectModel').appendChild(projectModel());
  document.getElementById('taskModel').appendChild(taskModel());

  document.getElementById('addProject').addEventListener('click', openProjectModel);
  document.getElementById('addListNoProj').addEventListener('click', () => { opentaskModel(0); });

  document.getElementById('submitProject').addEventListener('click', getProjectsInter);

  document.getElementById('cancelProj').addEventListener('click', closeModels);
  document.getElementById('cancelTask').addEventListener('click', closeModels);

  displayTaskWithout();
  displayProject();
}

init();
