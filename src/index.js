import { addProject, getProjectsData } from './projects';
import {
  addList, getTaskData, updateListStatus, closeModels,
} from './list';
import projectModel from './project-model';
import taskModel from './task-model';
import { storeProjects, getProjects } from './localStorageManagement';

function displaytask(index) {
  const div = document.createElement('div');
  const allProjs = getProjects();

  if (allProjs[index] !== undefined) {
    const table = document.createElement('table');
    table.setAttribute('class', 'text-center table-bordered table-secondary');
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let title = document.createElement('th');
    title.innerHTML = 'Title';
    tr.appendChild(title);
    let desc = document.createElement('th');
    desc.innerHTML = 'Task Description';
    tr.appendChild(desc);
    let dueDate = document.createElement('th');
    dueDate.innerHTML = 'Limit Date';
    tr.appendChild(dueDate);
    let priority = document.createElement('th');
    priority.innerHTML = 'Priority';
    tr.appendChild(priority);
    let status = document.createElement('th');
    status.innerHTML = 'Status';
    tr.appendChild(status);

    for (let i = 0; i < allProjs[index].list.length; i += 1) {
      if (allProjs[index].list[i].title !== undefined) {
        tr = document.createElement('tr');
        table.appendChild(tr);

        title = document.createElement('th');
        title.innerHTML = allProjs[index].list[i].title;
        tr.appendChild(title);

        desc = document.createElement('th');
        desc.innerHTML = allProjs[index].list[i].desc;
        tr.appendChild(desc);

        dueDate = document.createElement('th');
        dueDate.innerHTML = allProjs[index].list[i].dueDate;
        tr.appendChild(dueDate);

        priority = document.createElement('th');
        priority.innerHTML = allProjs[index].list[i].priority;
        tr.appendChild(priority);

        status = document.createElement('th');
        if (allProjs[index].list[i].status) {
          status.innerHTML = `<input type="checkbox" 
                               id="taskStatus" 
                               checked>`;
        } else {
          status.innerHTML = `<input type="checkbox" 
                               id="taskStatus">`;
        }
        status.addEventListener('click', () => { updateListStatus(index, i); });
        tr.appendChild(status);
      }
      div.appendChild(table);
    }
    return div;
  }
  return 0;
}

function displayTaskWithout() {
  const div = document.getElementById('displayTaskW');
  div.innerHTML = '';

  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerHTML += getProjects()[0].title;
  div2.appendChild(h2);
  div2.appendChild(displaytask(0));
  div.appendChild(div2);
}

function getTaskInter(index) {
  getTaskData(index);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

function opentaskModel(index = 0) {
  document.getElementById('tskModel').style.display = 'grid';
  document.getElementById('projModel').style.display = 'none';
  document.getElementById('submitTask').addEventListener('click', () => { getTaskInter(index); });
}

function displayProject() {
  const div = document.getElementById('displayProject');
  div.innerHTML = '';

  for (let i = 1; i < getProjects().length; i += 1) {
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'projectsTasks mb-3');
    const h2 = document.createElement('h2');
    h2.innerHTML += getProjects()[i].title;
    div2.appendChild(h2);
    div2.appendChild(displaytask(i));

    const button = document.createElement('button');
    button.innerHTML = 'add task';
    button.setAttribute('id', `add-task${i}`);
    div2.appendChild(button);
    div.appendChild(div2);

    document.getElementById(`add-task${i}`).addEventListener('click', () => { opentaskModel(i); });
  }
}

function getProjectsInter() {
  getProjectsData();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

function openProjectModel() {
  document.getElementById('projModel').style.display = 'grid';
  document.getElementById('tskModel').style.display = 'none';
}

function testAddProj(allProjs) {
  // eslint-disable-next-line no-param-reassign
  allProjs = addProject('Approve the code', false, addList('Review the code', 'Read all the code and see that everything is all right', '05/03/2020', 1, false), allProjs);
  // eslint-disable-next-line no-param-reassign
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
