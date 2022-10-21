import React from "react";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 1.5rem;
  padding: 0.5rem;
  min-width: 300px;
`;

const Title = styled.h4`
  margin-bottom: 2rem;
`;

const TaskList = styled.div`
  min-height: 60vh;
`;

function Column({ id, title, taskIds, tasks, index, handleEditTask }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>
            {title} ({taskIds.length})
          </Title>
          <Droppable droppableId={id} type="task">
            {(provided) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                {taskIds.map((taskId, index) => {
                  const task = tasks[taskId];
                  return (
                    <Task
                      {...task}
                      key={taskId}
                      columnId={id}
                      id={taskId}
                      index={index}
                      handleEditTask={handleEditTask}
                    />
                  );
                })}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
