import { Project, allProjects, addProject } from './projects';
import { List, addList } from './list';

function openProjectModel() {
  document.getElementById('projectModel').style.display = 'grid';
}

function init() {
  const allProjs = allProjects();
  const firstProject = addProject('firstProject',
                                  false,
                                  [],
                                  allProjs);

  document.getElementById('addProject').addEventListener('click', openProjectModel);
  document.getElementById('submitProject').addEventListener('click', getProjectsData);

  return allProjs;
}

function getProjectsData() {
  const allProjs = allProjects();
  console.log(allProjs.getProjs());
  const title = document.getElementById('title').value;
  addProject(title, false, [], allProjs);
}

function testAddProj() {
  let allProjs = init();
  const test = addProject('Test', false, addList('testList', 'desc', '10/10/20', 1, false), allProjs);
  const test2 = addProject('Test2', true, addList('testList', 'desc', '10/10/20', 1, true), allProjs);
  test.list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  // console.log(test);
  console.log(allProjs.getProjs());
}

// let allProjs = init();
testAddProj();
