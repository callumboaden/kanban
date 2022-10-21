import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: rgb(${({ theme }) => theme.colors.bg.primary});
  box-shadow: 0 3px 0px rgba(${({ theme }) => theme.colors.border.primary} / 1);

  div {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: rgb(${({ theme }) => theme.colors.text.secondary});
  }
`;

function Task({
  title,
  id,
  index,
  subtasks,
  handleEditTask,
  columnId,
  subtaskOrder,
}) {
  const subtaskArr = Object.values(subtasks);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={() => handleEditTask(id, columnId)}
        >
          <div>{title}</div>
          <p>{`${
            subtaskArr.filter((subtask) => subtask.isComplete).length
          } of ${subtaskArr.length} subtasks`}</p>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
