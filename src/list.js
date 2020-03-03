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

export { List, addList };