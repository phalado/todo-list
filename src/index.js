import { Project, allProjects, addProject } from './projects';
import { List, addList } from './list';
import projectModel from './project-model';
import taskModel from './task-model';

const allProjs = allProjects();

function openProjectModel() {
  document.getElementById('projModel').style.display = 'grid';
}

function closeModels() {
  document.getElementById('projModel').style.display = 'none';
  document.getElementById('tskModel').style.display = 'none';
}

function opentaskModel() {
  document.getElementById('tskModel').style.display = 'grid';
}

function displayProject() {
  const div = document.getElementById('displayProject');
  div.setAttribute('class', 'row mx-3');

  for (let i = 1; i < allProjs.getProjs().length; i += 1) {
    const div2 = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML += allProjs.getProjs()[i].title;
    div2.appendChild(h2);
    div2.appendChild(displaytaskW(i));
    div2.setAttribute('class', 'col-4');
    div.appendChild(div2);
  }
}

function displaytaskW(index) {
  const div = document.createElement('div');
  // div.innerHTML = '';

  console.log(allProjs.getProjs()[index]);

  if (allProjs.getProjs()[index].list != undefined) {
    for (let i = 0; i < allProjs.getProjs()[index].list.length; i += 1) {
      const title = document.createElement('h3');
      title.innerHTML = allProjs.getProjs()[index].list[i].title;
      div.appendChild(title);

      const desc = document.createElement('h3');
      desc.innerHTML = allProjs.getProjs()[index].list[i].desc;
      div.appendChild(desc);

      const dueDate = document.createElement('h3');
      desc.innerHTML = allProjs.getProjs()[index].list[i].dueDate;
      div.appendChild(dueDate);

      const priority = document.createElement('h3');
      priority.innerHTML = allProjs.getProjs()[index].list[i].priority;
      div.appendChild(priority);

      const status = document.createElement('h3');
      status.innerHTML = allProjs.getProjs()[index].list[i].status;
      div.appendChild(status);
    }
    return div;
  }
}

function getProjectsData() {
  const allProjs = allProjects();
  console.log(allProjs.getProjs());
  const title = document.getElementById('titleProject').value;
  if (title !== '') {
    addProject(title, false, [], allProjs);
    closeModels();
  }
  displayProject();
  console.log(allProjs.getProjs());
}

function getTaskData() {
  console.log(allProjs.getProjs());
  const title = document.getElementById('titleTask').value;
  const desc = document.getElementById('descriptionTask').value;
  const dueDate = document.getElementById('dataTask').value;
  const priority = document.getElementById('priorityTask').value;

  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    allProjs.getProjs()[0].list.push(addList(title, desc, dueDate, priority, false));
    closeModels();
  }
  displaytaskW(0);
  console.log(allProjs.getProjs());
}


function init() {

  addProject('firstProject', false, [], allProjs);

  document.getElementById('projectModel').appendChild(projectModel());
  document.getElementById('taskModel').appendChild(taskModel());

  document.getElementById('addProject').addEventListener('click', openProjectModel);
  document.getElementById('addListNoProj').addEventListener('click', opentaskModel);

  document.getElementById('submitProject').addEventListener('click', getProjectsData);
  document.getElementById('submitTask').addEventListener('click', getTaskData);

  document.getElementById('cancelProj').addEventListener('click', closeModels);
  document.getElementById('cancelTask').addEventListener('click', closeModels);
  return allProjs;
}

function testAddProj() {
  const allProjs = init();
  const test = addProject('Test', false, addList('testList', 'desc', '10/10/20', 1, false), allProjs);
  addProject('Test2', true, addList('testList', 'desc', '10/10/20', 1, true), allProjs);
  test.list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  allProjs.getProjs()[0].list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  // console.log(test);
  displayProject();
  displaytaskW();
  console.log(allProjs.getProjs());
}

// let allProjs = init();
testAddProj();
