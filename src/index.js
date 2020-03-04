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

function updateListStatus(index, i) {
  // console.log(allProjs.getProjs()[index].list[i]);
  allProjs.getProjs()[index].list[i].status = !allProjs.getProjs()[index].list[i].status;
  // console.log(allProjs.getProjs()[index].list[i]);
}

function displaytask(index) {
  //table.setAttribute('class', 'task-card');
  // div.innerHTML = '';
  const div = document.createElement('div');

  if (allProjs.getProjs()[index] !== undefined) {

    const table = document.createElement('table');
    table.setAttribute('class', 'text-center table-bordered table-secondary');
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let title = document.createElement('th');
    title.innerHTML = "Title";
    tr.appendChild(title);
    let desc = document.createElement('th');
    desc.innerHTML = "Task Description";
    tr.appendChild(desc);
    let dueDate = document.createElement('th');
    dueDate.innerHTML = "Limit Date";
    tr.appendChild(dueDate);
    let priority = document.createElement('th');
    priority.innerHTML = "Priority";
    tr.appendChild(priority);
    let status = document.createElement('th');
    status.innerHTML = "Status";
    tr.appendChild(status);

    for (let i = 0; i < allProjs.getProjs()[index].list.length; i += 1) {

      if (allProjs.getProjs()[index].list[i].title !== undefined) {
        // console.log(allProjs.getProjs()[index].list[i])
        tr = document.createElement('tr');
        table.appendChild(tr);

        title = document.createElement('th');
        title.innerHTML = allProjs.getProjs()[index].list[i].title;
        tr.appendChild(title);

        desc = document.createElement('th');
        desc.innerHTML = allProjs.getProjs()[index].list[i].desc;
        tr.appendChild(desc);

        dueDate = document.createElement('th');
        dueDate.innerHTML = allProjs.getProjs()[index].list[i].dueDate;
        tr.appendChild(dueDate);

        priority = document.createElement('th');
        priority.innerHTML = allProjs.getProjs()[index].list[i].priority;
        tr.appendChild(priority);

        status = document.createElement('th');
        if (allProjs.getProjs()[index].list[i].status){
          status.innerHTML = `<input type="checkbox" 
                               id="taskStatus" 
                               checked>`
        } else {
          status.innerHTML = `<input type="checkbox" 
                               id="taskStatus">`
        }
        status.addEventListener('click', () => { updateListStatus(index, i) })
        // allProjs.getProjs()[index].list[i].status;
        tr.appendChild(status);

      }
      div.appendChild(table);
    }
    return div;
  }
  return 0;
}

function displayProject() {
  const div = document.getElementById('displayProject');
  div.innerHTML = "";
  // div.setAttribute('class', 'projectsTasks');

  for (let i = 1; i < allProjs.getProjs().length; i += 1) {
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'projectsTasks mb-3');
    const h2 = document.createElement('h2');
    h2.innerHTML += allProjs.getProjs()[i].title;
    div2.appendChild(h2);
    div2.appendChild(displaytask(i));
    // div2.setAttribute('class', 'col-4');
    div.appendChild(div2);
  }
}

function displayTaskWithout() {
  const div = document.getElementById('displayTaskW');
  div.innerHTML = "";

  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerHTML += allProjs.getProjs()[0].title;
  div2.appendChild(h2);
  div2.appendChild(displaytask(0));
  // div2.setAttribute('class', 'col-4');
  div.appendChild(div2);
}

function getProjectsData() {
  const title = document.getElementById('titleProject').value;
  if (title !== '') {
    addProject(title, false, [], allProjs);
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

  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    allProjs.getProjs()[0].list.push(addList(title, desc, dueDate, priority, false));
    closeModels();
  }
  displayTaskWithout();
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
  allProjs.getProjs()[0].list.push(addList('testList3', 'desc3', '10/10/24', 1, false));
  // console.log(test);
  displayTaskWithout();
  displayProject();
  displaytask();
}

// let allProjs = init();
testAddProj();
