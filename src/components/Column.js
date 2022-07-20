import React from "react";
import Task from "./Task";
import Button from "./Button";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #000;
`;

const Title = styled.div`
  margin-bottom: 2rem;
`;

const TaskList = styled.div``;

function Column({ id, title, taskIds, tasks, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{title}</Title>
          <Droppable droppableId={id} type="task">
            {(provided) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                {taskIds.map((taskId, index) => {
                  const task = tasks[taskId];
                  return (
                    <Task {...task} key={taskId} id={taskId} index={index} />
                  );
                })}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <Button text="Add Task"></Button>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
