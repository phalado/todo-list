import { Project, addProject } from './projects';
import { List, addList } from './list';
import projectModel from './project-model';
import taskModel from './task-model';

// const allProjs = allProjects();

function storeProjects(allProjs) {
  let projs = JSON.stringify(allProjs);
  localStorage.setItem("allProjs", projs);
}

function getProjects() {
  let allProjs = localStorage.getItem("allProjs");
  return JSON.parse(allProjs);
}

function openProjectModel() {
  document.getElementById('projModel').style.display = 'grid';
}

function closeModels() {
  document.getElementById('projModel').style.display = 'none';
  document.getElementById('tskModel').style.display = 'none';
}

function opentaskModel(index = 0) {
  document.getElementById('tskModel').style.display = 'grid';
  document.getElementById('submitTask').addEventListener('click', () => { getTaskDataP(index); });
}

function updateListStatus(index, i) {
  // console.log(allProjs.getProjs()[index].list[i]);
  let allProjs = getProjects();
  allProjs[index].list[i].status = !allProjs[index].list[i].status;
  storeProjects(allProjs);
  // console.log(allProjs.getProjs()[index].list[i]);
}

function displaytask(index) {
  // table.setAttribute('class', 'task-card');
  // div.innerHTML = '';
  const div = document.createElement('div');
  let allProjs = getProjects();

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
        // console.log(allProjs.getProjs()[index].list[i])
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
        // allProjs.getProjs()[index].list[i].status;
        tr.appendChild(status);
      }
      div.appendChild(table);
    }
    return div;
  }
  return 0;
}

function getTaskDataP(index) {

  const title = document.getElementById('titleTask').value;
  const desc = document.getElementById('descriptionTask').value;
  const dueDate = document.getElementById('dataTask').value;
  const priority = document.getElementById('priorityTask').value;
  // console.log(priority);
  let allProjs = getProjects();

  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    allProjs[index].list.push(addList(title, desc, dueDate, priority, false));
    storeProjects(allProjs);
    closeModels();
  }
  
  displayTask(index);
}

function displayProject() {
  const div = document.getElementById('displayProject');
  div.innerHTML = '';
  // div.setAttribute('class', 'projectsTasks');

  for (let i = 1; i < getProjects().length; i += 1) {
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'projectsTasks mb-3');
    const h2 = document.createElement('h2');
    h2.innerHTML += getProjects()[i].title;
    div2.appendChild(h2);
    div2.appendChild(displaytask(i));
    // div2.setAttribute('class', 'col-4');

    const button = document.createElement('button');
    button.innerHTML = 'add task';
    button.setAttribute('id', `add-task${i}`);
    div2.appendChild(button);
    div.appendChild(div2);

    document.getElementById(`add-task${i}`).addEventListener('click', () => { opentaskModel(i); });
  }
}

function displayTaskWithout() {
  const div = document.getElementById('displayTaskW');
  div.innerHTML = '';

  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerHTML += getProjects()[0].title;
  div2.appendChild(h2);
  div2.appendChild(displaytask(0));
  // div2.setAttribute('class', 'col-4');
  div.appendChild(div2);
}

function displayTask(index) {
  const div = document.getElementById('displayProject');
  div.innerHTML = '';

  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerHTML += getProjects()[index].title;
  div2.appendChild(h2);
  div2.appendChild(displaytask(index));
  // div2.setAttribute('class', 'col-4');
  div.appendChild(div2);
}

function getProjectsData() {
  const title = document.getElementById('titleProject').value;
  if (title !== '') {
    storeProjects(addProject(title, false, [], getProjects()));
    closeModels();
  }
  displayProject();
}

function getTaskData() {
  const title = document.getElementById('titleTask').value;
  const desc = document.getElementById('descriptionTask').value;
  const dueDate = document.getElementById('dataTask').value;
  const priority = document.getElementById('priorityTask').value;
  // console.log(priority);
  let allProjs = getProjects();

  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    allProjs[0].list.push(addList(title, desc, dueDate, priority, false));
    storeProjects(allProjs);
    closeModels();
  }
  displayTaskWithout();
}

function testAddProj(allProjs) {
  // let allProjs = getProjects();
  allProjs = addProject('Project', false, addList('testList', 'desc', '10/10/20', 1, false), allProjs);
  allProjs = addProject('Project2', true, addList('testList', 'desc', '10/10/20', 1, true), allProjs);
  allProjs[1].list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  allProjs[0].list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  allProjs[0].list.push(addList('testList3', 'desc3', '10/10/24', 1, false));
  // console.log(test);
  return allProjs;
}

function init() {
  let allProjs = getProjects();
  // console.log(allProjs);
  if (allProjs === null) {
    allProjs = [];
    // console.log(allProjs);
    allProjs = addProject('Tasks', false, [], allProjs);
    // console.log(allProjs);
    allProjs = testAddProj(allProjs);
  }
  console.log(allProjs);

  storeProjects(allProjs);

  document.getElementById('projectModel').appendChild(projectModel());
  document.getElementById('taskModel').appendChild(taskModel());

  document.getElementById('addProject').addEventListener('click', openProjectModel);
  document.getElementById('addListNoProj').addEventListener('click', opentaskModel);

  document.getElementById('submitProject').addEventListener('click', getProjectsData);

  document.getElementById('cancelProj').addEventListener('click', closeModels);
  document.getElementById('cancelTask').addEventListener('click', closeModels);

  displayTaskWithout();
  displayProject();
  // displaytask();
}

// let allProjs = init();
init();
