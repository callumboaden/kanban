import React from "react";
import Column from "./Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-left: 1px solid #000;
`;

const Header = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #000;
`;

const Main = styled.div`
  display: flex;
  padding: 2rem;
`;

function Board({ title, columns, tasks, columnOrder, handleOnDragEnd }) {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
      </Header>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Main {...provided.droppableProps} ref={provided.innerRef}>
              {columnOrder.map((columnId, index) => {
                const column = columns[columnId];
                return (
                  <Column
                    {...column}
                    key={columnId}
                    id={columnId}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Main>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default Board;
