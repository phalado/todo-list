import { storeProjects, getProjects } from './localStorageManagement';

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

function updateListStatus(index, i) {
  const allProjs = getProjects();
  allProjs[index].list[i].status = !allProjs[index].list[i].status;
  storeProjects(allProjs);
}

function updateList(index, i) {
  const allProjs = getProjects();
  let list = allProjs[index].list[i];
  document.getElementById('tskModelEdit').style.display = 'grid';
}

function deleteList(index, i) {
  const allProjs = getProjects();
  allProjs[index].list.splice(i, 1);
  storeProjects(allProjs);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export {
  List, addList, getTaskData, updateListStatus, closeModels, deleteList, updateList
};
