function taskModel() {
  const tasklines = document.createElement('div');
  tasklines.innerHTML = `
    <h2>Add a new task</h2>
    <form class="form">
      <fieldset>
        <label for="title">Task's title</label><br>
        <input type="text" id="titleTask" required>
      </fieldset>
      <fieldset>
        <label for="description">Task's description:</label><br>
        <input type="text" id="descriptionTask" required>
      </fieldset>
      <fieldset>
        <label for="Date">Task's Date:</label><br>
        <input type="date" id="dataTask" required>
      </fieldset>
      <fieldset>
        <label for="priority">Task's Priority:</label><br>
        <select name="priority" id="priorityTask" size="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </fieldset>
      <button id="submitTask">Create</button>
      <button id="cancelTask">Cancel</button>
    </form>
  `;
  tasklines.setAttribute('id', 'tskModel');
  tasklines.className = 'taskModel';
  return tasklines;
}

export default taskModel;