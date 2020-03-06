function taskModelEdit() {
  const tasklines = document.createElement('div');
  tasklines.innerHTML = `
    <h2>Edit task</h2>
    <form class="form">
      <fieldset>
        <label for="title">Task's title</label><br>
        <input type="text" id="titleTaskEdit" required>
      </fieldset>
      <fieldset>
        <label for="description">Task's description:</label><br>
        <input type="text" id="descriptionTaskEdit" required>
      </fieldset>
      <fieldset>
        <label for="Date">Task's Date:</label><br>
        <input type="date" id="dataTaskEdit" required>
      </fieldset>
      <fieldset>
        <label for="priority">Task's Priority:</label><br>
        <select name="priority" id="priorityTaskEdit" size="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </fieldset>
      <button id="submitTaskEdit">Save</button>
      <button id="cancelTaskEdit">Cancel</button>
    </form>
  `;
  tasklines.setAttribute('id', 'tskModelEdit');
  tasklines.className = 'taskModel';
  return tasklines;
}

export default taskModelEdit;