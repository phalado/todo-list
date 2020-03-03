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
        <label for="priority">Task's Priority (between 1 and 10):</label><br>
        <input type="number" id="priorityTask" min="1" max="10" required>
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