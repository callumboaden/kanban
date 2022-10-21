import React, { useState } from "react";
import Button from "./Button";
import { Form, Title, FormGroup } from "./styles/Form.styles";

function AddColumnForm({ addColumn, handleClick, toggleOpen }) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColumn(title);
    toggleOpen();
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleClick}>
      <Title>Add New Column</Title>
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
      <Button primary fullWidth text="Create New Column" />
    </Form>
  );
}

export default AddColumnForm;
