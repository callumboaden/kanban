import React from "react";
import Column from "./Column";
import Button from "./Button";
import { ReactComponent as IconOptions } from "../images/icon-options.svg";
import { Container, Header, Main, Title } from "./styles/Board.styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board({
  title,
  columns,
  tasks,
  columnOrder,
  handleOnDragEnd,
  handleDialogOpen,
  handleEditTask,
}) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          {title && (
            <>
              <Button
                primary
                text="Add Task"
                handleClick={() => handleDialogOpen("addTask")}
              ></Button>
              <IconOptions onClick={() => handleDialogOpen("editBoard")} />
            </>
          )}
        </div>
      </Header>
      {columns && (
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
                      handleEditTask={handleEditTask}
                    />
                  );
                })}
                <button
                  text="Add column"
                  onClick={() => handleDialogOpen("addColumn")}
                >
                  +New Column
                </button>
                {provided.placeholder}
              </Main>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </Container>
  );
}

export default Board;
