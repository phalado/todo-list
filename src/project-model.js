function projectModel() {
  const projlines = document.createElement('div');
  projlines.innerHTML = `
    <h2>Add a new project</h2>
    <form class="form">
      <div class="form-group">
      <fieldset>
        <label for="title">Project's title:</label>
        <input type="text" id="titleProject" required>
      </fieldset>
      <button id="submitProject">Create</button>
      <button id="cancelProj">Cancel</button>
      </div>
    </form>
  `;
  projlines.setAttribute('id', 'projModel');
  projlines.className = 'projectModel';
  return projlines;
}

export default projectModel;
