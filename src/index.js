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

function displaytask(index) {
  //table.setAttribute('class', 'task-card');
  // div.innerHTML = '';
  const div = document.createElement('div');

  console.log(allProjs.getProjs()[index]);

  if (allProjs.getProjs()[index].list !== undefined) {
    for (let i = 0; i < allProjs.getProjs()[index].list.length; i += 1) {

      if (allProjs.getProjs()[index].list[i].title !== undefined) {
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const title = document.createElement('th');
        title.innerHTML = allProjs.getProjs()[index].list[i].title;
        tr.appendChild(title);

        const desc = document.createElement('th');
        desc.innerHTML = allProjs.getProjs()[index].list[i].desc;
        tr.appendChild(desc);

        const dueDate = document.createElement('th');
        desc.innerHTML = allProjs.getProjs()[index].list[i].dueDate;
        tr.appendChild(dueDate);

        const priority = document.createElement('th');
        priority.innerHTML = allProjs.getProjs()[index].list[i].priority;
        tr.appendChild(priority);

        const status = document.createElement('th');
        status.innerHTML = allProjs.getProjs()[index].list[i].status;
        tr.appendChild(status);

        div.appendChild(table);
      }
    }
    return div;
  }
  return 0;
}

function displayProject() {
  const div = document.getElementById('displayProject');
  div.setAttribute('class', 'mx-3');

  for (let i = 1; i < allProjs.getProjs().length; i += 1) {
    const div2 = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML += allProjs.getProjs()[i].title;
    div2.appendChild(h2);
    div2.appendChild(displaytask(i));
    div2.setAttribute('class', 'col-4');
    div.appendChild(div2);
  }
}

function displayTaskWithout() {
  const div = document.getElementById('displayTaskW');

  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerHTML += allProjs.getProjs()[0].title;
  div2.appendChild(h2);
  div2.appendChild(displaytask(0));
  div2.setAttribute('class', 'col-4');
  div.appendChild(div2);

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
  displaytask();
  console.log(allProjs.getProjs());
}


function init() {
  addProject('Tasks', false, [], allProjs);

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
  const test = addProject('Project', false, addList('testList', 'desc', '10/10/20', 1, false), allProjs);
  addProject('Project2', true, addList('testList', 'desc', '10/10/20', 1, true), allProjs);
  test.list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  allProjs.getProjs()[0].list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  // console.log(test);
  displayTaskWithout();
  displayProject();
  displaytask();
  console.log(allProjs.getProjs());
}

// let allProjs = init();
testAddProj();
