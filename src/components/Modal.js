import React, { useState } from "react";
import styled from "styled-components";

import AddBoardForm from "./AddBoardForm";
import AddColumnForm from "./AddColumnForm";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";
import EditBoardForm from "./EditBoardForm";

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
`;

function Modal({
  activeBoard,
  action,
  addBoard,
  addColumn,
  addTask,
  toggleOpen,
  editingTask,
  updateTask,
  updateBoard,
  deleteBoard,
}) {
  const handleClick = (evt) => {
    evt.stopPropagation();
  };

  return (
    <StyledModal onClick={toggleOpen}>
      {action === "addBoard" && (
        <AddBoardForm
          addBoard={addBoard}
          handleClick={handleClick}
          toggleOpen={toggleOpen}
        />
      )}
      {action === "addColumn" && (
        <AddColumnForm
          addColumn={addColumn}
          handleClick={handleClick}
          toggleOpen={toggleOpen}
        />
      )}
      {action === "addTask" && (
        <AddTaskForm
          addTask={addTask}
          handleClick={handleClick}
          toggleOpen={toggleOpen}
          activeBoard={activeBoard}
        />
      )}
      {action === "editTask" && (
        <EditTaskForm
          updateTask={updateTask}
          editingTask={editingTask}
          handleClick={handleClick}
          toggleOpen={toggleOpen}
          activeBoard={activeBoard}
        />
      )}
      {action === "editBoard" && (
        <EditBoardForm
          updateBoard={updateBoard}
          editingTask={editingTask}
          handleClick={handleClick}
          toggleOpen={toggleOpen}
          activeBoard={activeBoard}
          deleteBoard={deleteBoard}
        />
      )}
    </StyledModal>
  );
}

export default Modal;
