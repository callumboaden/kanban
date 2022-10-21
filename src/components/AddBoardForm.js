import React, { useState } from "react";
import Button from "./Button";
import { Form, Title, FormGroup } from "./styles/Form.styles";

function AddBoardForm({ addBoard, handleClick, toggleOpen }) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBoard(title);
    toggleOpen();
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleClick}>
      <Title>Add New Board</Title>
      <FormGroup>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTitleChange}
          name="title"
          value={title}
          placeholder="e.g. Marketing Plan"
          required
          autoFocus
        />
      </FormGroup>
      <Button primary fullWidth text="Create Board" />
    </Form>
  );
}

export default AddBoardForm;
