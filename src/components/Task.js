import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #000;
  padding: 1rem;
`;

function Task({ title, id, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {title}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
