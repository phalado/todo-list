function storeProjects(allProjs) {
  const projs = JSON.stringify(allProjs);
  localStorage.setItem('allProjs', projs);
}

function getProjects() {
  const allProjs = localStorage.getItem('allProjs');
  return JSON.parse(allProjs);
}

export { storeProjects, getProjects };
