import { Project, allProjects, addProject } from './projects';
import { List, addList } from './list';

const allProjs = allProjects();

function openProjectModel() {
  document.getElementById('projectModel').style.display = 'grid';
}

function closeProjectModel() {
  document.getElementById('projectModel').style.display = 'none';
}

function opentaskModel() {
  document.getElementById('taskModel').style.display = 'grid';
}

function closetaskModel() {
  document.getElementById('taskModel').style.display = 'none';
}


function displayProject() {
  const div = document.getElementById('displayProject');

  //console.log(allProjs.getProjs().length);

  for (let i = 0; i < allProjs.getProjs().length; i += 1) {
    const h2 = document.createElement('h2');
    h2.innerHTML = allProjs.getProjs()[i].title;
    div.appendChild(h2);
  }
}

function displaytaskW() {
  const div = document.getElementById('taskWProject');

  console.log(allProjs.getProjs()[0]);

  for (let i = 1; i < allProjs.getProjs()[0].list.length; i += 1) {
    const title = document.createElement('h2');
    title.innerHTML = allProjs.getProjs()[0].list[i].title;
    div.appendChild(title);

    const desc = document.createElement('h2');
    desc.innerHTML = allProjs.getProjs()[0].list[i].desc;
    div.appendChild(desc);


    const dueDate = document.createElement('h2');
    desc.innerHTML = allProjs.getProjs()[0].list[i].dueDate;
    div.appendChild(dueDate);

    const priority = document.createElement('h2');
    priority.innerHTML = allProjs.getProjs()[0].list[i].priority;
    div.appendChild(priority);

    const status = document.createElement('h2');
    status.innerHTML = allProjs.getProjs()[0].list[i].status;
    div.appendChild(status);
  }
}

function getProjectsData() {
  const allProjs = allProjects();
  console.log(allProjs.getProjs());
  const title = document.getElementById('titleProject').value;
  if (title !== '') {
    addProject(title, false, [], allProjs);
    closeProjectModel();
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

  if (title !== '' || desc !== '' || dueDate !== '' || priority !== '') {
    allProjs.getProjs()[0].list.push(addList(title, desc, dueDate, priority, false));
    closetaskModel();
  }
  displaytaskW();
  console.log(allProjs.getProjs());
}


function init() {

  addProject('firstProject', false, [], allProjs);

  document.getElementById('addProject').addEventListener('click', openProjectModel);
  document.getElementById('addListNoProj').addEventListener('click', opentaskModel);

  document.getElementById('submitProject').addEventListener('click', getProjectsData);
  document.getElementById('submitTask').addEventListener('click', getTaskData);
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
