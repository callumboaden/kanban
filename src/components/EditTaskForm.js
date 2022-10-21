import React, { useState } from "react";
import uniqid from "uniqid";
import Button from "./Button";
import { Form, Title, FormGroup } from "./styles/Form.styles";

function EditTaskForm({
  activeBoard,
  updateTask,
  editingTask,
  handleClick,
  toggleOpen,
}) {
  const id = editingTask.id || "";
  const prevStatus = editingTask.status;

  const [title, setTitle] = useState(editingTask.title);
  const [description, setDescription] = useState(editingTask.description);
  const [subtasks, setSubtasks] = useState(
    editingTask.subtasks ? Object.values(editingTask.subtasks) : []
  );
  const [status, setStatus] = useState(editingTask.status);

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubtaskChange = (evt, i) => {
    const newSubtasks = Array.from(subtasks);
    newSubtasks[i].isComplete = evt.target.checked;
    setSubtasks(newSubtasks);
  };

  const handleStatusChange = (evt) => {
    setStatus(evt.target.value);
  };

  const handleSubmit = (evt) => {
    console.log(evt);
    evt.preventDefault();
    updateTask({ id, title, description, subtasks, status, prevStatus });
    toggleOpen();
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleClick}>
      <Title>Edit Task</Title>
      <FormGroup>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTitleChange}
          value={title}
          name="title"
          placeholder="e.g. Take Coffee Break"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="description">Description</label>
        <input
          onChange={handleDescriptionChange}
          value={description}
          name="description"
          placeholder="e.g. It's always good to take a break"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="subtasks">Subtasks</label>
        {subtasks.map((subtask, i) => (
          <div className="input-group checkbox-group" key={i}>
            <input
              type="checkbox"
              onChange={(evt) => handleSubtaskChange(evt, i)}
              name="subtask"
              placeholder="e.g. It's always good to take a break"
              checked={subtask.isComplete}
            />
            <div>{subtask.title}</div>
          </div>
        ))}
      </FormGroup>
      <FormGroup>
        <label htmlFor="title">Status</label>
        <select onChange={handleStatusChange} name="status" value={status}>
          {activeBoard.columnOrder.map((columnId) => {
            const option = activeBoard.columns[columnId];
            return (
              <option value={option.id} key={columnId}>
                {option.title}
              </option>
            );
          })}
        </select>
      </FormGroup>
      <Button text="Update Task" primary fullWidth />
    </Form>
  );
}

export default EditTaskForm;
