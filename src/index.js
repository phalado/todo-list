function Project(title, status, list) {
  this.id
  this.title = title;
  this.list = [];
  this.list.push(list);
  this.status = status;
}

function List(title, desc, dueDate, priority, status) {
  this.id
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = status;
}

function testAddProj() {
  let list1 = new List(
    'testList',
    'desc',
    10/10/20,
    1,
    false);
  console.log(list1);
  let test = new Project(
    'Test',
    false,
    list1
    );
  console.log(test);
}

testAddProj();