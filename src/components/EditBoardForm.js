import React, { useState } from "react";
import uniqid from "uniqid";
import Button from "./Button";
import { Form, Title, FormGroup } from "./styles/Form.styles";

function EditBoardForm({
  activeBoard,
  updateBoard,
  handleClick,
  toggleOpen,
  deleteBoard,
}) {
  const [title, setTitle] = useState(activeBoard.title);

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (evt) => {
    const action = evt.target.value;

    evt.preventDefault();
    if (action === "update") {
      updateBoard({ title });
    } else if (action === "delete") {
      deleteBoard();
    }
    toggleOpen();
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleClick}>
      <Title>Edit Board</Title>
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
      <button type="submit" value="update" onClick={handleSubmit}>
        Update Board
      </button>
      <button type="submit" value="delete" onClick={handleSubmit}>
        Delete Board
      </button>
    </Form>
  );
}

export default EditBoardForm;
