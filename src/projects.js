import { storeProjects, getProjects } from './localStorageManagement';

function Project(title, status, list) {
  this.title = title;
  this.list = [];
  this.list.push(list);
  this.status = status;
}

function addProject(title, status, list, allProjs = this.allProjs) {
  const project = new Project(
    title,
    status,
    list,
  );
  allProjs.push(project);
  return allProjs;
}

function getProjectsData() {
  const title = document.getElementById('titleProject').value;
  if (title !== '') {
    storeProjects(addProject(title, false, [], getProjects()));
  }
}

export { Project, addProject, getProjectsData };
