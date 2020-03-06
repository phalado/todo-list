import { storeProjects, getProjects } from './localStorageManagement';
import taskModelEdit from './task-model-edit';

function List(title, desc, dueDate, priority, status) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;
}

function addList(title, desc, dueDate, priority, status) {
  const list = new List(
    title,
    desc,
    dueDate,
    priority,
    status,
  );
  return list;
}

function closeModels() {
  document.getElementById('projModel').style.display = 'none';
  document.getElementById('tskModel').style.display = 'none';
  if (document.getElementById('tskModelEdit')) {
    document.getElementById('tskModelEdit').style.display = 'none';
  }
}

function getTaskInter(index, i = null) {
  if (i === null) {
    getTaskData(index);
  } else {
    editTaskData(index, i)
  }

  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

function getTaskData(index) {
  const title = document.getElementById('titleTask').value;
  const desc = document.getElementById('descriptionTask').value;
  const dueDate = document.getElementById('dataTask').value;
  const priority = document.getElementById('priorityTask').value;
  const allProjs = getProjects();

  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    allProjs[index].list.push(addList(title, desc, dueDate, priority, false));
    storeProjects(allProjs);
    closeModels();
  }
}

function editTaskData(index, i) {
  const title = document.getElementById('titleTaskEdit').value;
  const desc = document.getElementById('descriptionTaskEdit').value;
  const dueDate = document.getElementById('dataTaskEdit').value;
  const priority = document.getElementById('priorityTaskEdit').value;
  const allProjs = getProjects();

  if (title !== '' && desc !== '' && dueDate !== '' && priority !== '') {
    allProjs[index].list[i] = (addList(title, desc, dueDate, priority, false));
    storeProjects(allProjs);
    closeModels();
  }
}

function updateListStatus(index, i) {
  const allProjs = getProjects();
  allProjs[index].list[i].status = !allProjs[index].list[i].status;
  storeProjects(allProjs);
}

function updateList(index, i) {
  const allProjs = getProjects();
  const list = allProjs[index].list[i];

  document.getElementById('taskModelEdit').innerHTML = '';
  document.getElementById('taskModelEdit').appendChild(taskModelEdit(list));
  document.getElementById('tskModelEdit').style.display = 'grid';
  document.getElementById('submitTaskEdit').addEventListener('click', () => { getTaskInter(index, i); });
  document.getElementById('cancelTaskEdit').addEventListener('click', closeModels);
}

function deleteList(index, i) {
  const allProjs = getProjects();
  allProjs[index].list.splice(i, 1);
  storeProjects(allProjs);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export {
  List, addList, getTaskData, updateListStatus, closeModels, deleteList, updateList, getTaskInter
};
