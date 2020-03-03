function Project(title, status, list) {
  this.title = title;
  this.list = [];
  this.list.push(list);
  this.status = status;
}

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
    status
  );
  return list;
}

function addProject(title, status, list) {
  const project = new Project(
    title,
    status,
    list
  );
  return project;
}

function testAddProj() {
  const test = addProject('Test', false, addList('testList', 'desc', '10/10/20', 1, false));
  test.list.push(addList('testList2', 'desc2', '10/10/20', 1, true));
  console.log(test);
  console.log(Project);
}

testAddProj();