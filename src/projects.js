function Project(title, status, list) {
  this.title = title;
  this.list = [];
  this.list.push(list);
  this.status = status;
}

// const allProjects = () => {
//   const allProjs = [];

//   const addProj = (Project) => {
//     allProjs.push(Project);
//   };

//   const getProjs = () => allProjs;

//   return { allProjs, addProj, getProjs };
// };

function addProject(title, status, list, allProjs = this.allProjs) {
  const project = new Project(
    title,
    status,
    list,
  );
  allProjs.push(project);
  return allProjs;
}


export { Project, addProject };