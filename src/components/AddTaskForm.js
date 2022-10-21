import React, { useState } from "react";
import Button from "./Button";
import { ReactComponent as IconCross } from "../images/icon-cross.svg";
import { Form, Title, FormGroup } from "./styles/Form.styles";

function AddTaskForm({ activeBoard, addTask, handleClick, toggleOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState([]);
  const [status, setStatus] = useState(activeBoard.columnOrder[0]);

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubtaskChange = (evt, i) => {
    const newSubtasks = Array.from(subtasks);
    newSubtasks[i] = evt.target.value;

    setSubtasks(newSubtasks);
  };

  const handleStatusChange = (evt) => {
    setStatus(evt.target.value);
  };

  const addSubtask = () => {
    setSubtasks((prevState) => [...prevState, ""]);
  };

  const removeSubtask = (evt, index) => {
    const newSubtasks = Array.from(subtasks);
    newSubtasks.splice(index, 1);
    setSubtasks(newSubtasks);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask({ title, description, subtasks, status });
    toggleOpen();
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleClick}>
      <Title>Add New Task</Title>
      <FormGroup>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTitleChange}
          value={title}
          name="title"
          placeholder="e.g. Take Coffee Break"
          required
          autoFocus
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
          <div key={i} className="input-group">
            <input
              onChange={(evt) => handleSubtaskChange(evt, i)}
              name="subtask"
              value={subtask}
              placeholder="e.g. It's always good to take a break"
              required
            />
            <IconCross onClick={(evt) => removeSubtask(evt, i)} />
          </div>
        ))}
        <Button
          text="Add Subtask"
          handleClick={addSubtask}
          secondary
          fullWidth
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="title">Status</label>
        <select onChange={handleStatusChange} name="status" value={status}>
          {activeBoard.columnOrder.map((columnId) => {
            const option = activeBoard.columns[columnId];
            return (
              <option value={columnId} key={columnId}>
                {option.title}
              </option>
            );
          })}
        </select>
      </FormGroup>
      <Button text="Create Task" primary fullWidth />
    </Form>
  );
}

export default AddTaskForm;
