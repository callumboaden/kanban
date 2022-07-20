import { useState } from "react";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";
import initialData from "./initialData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [boards, setBoards] = useState(initialData.boards);
  const [boardIds, setBoardIds] = useState(initialData.boardOrder);
  const [activeBoardId, setActiveBoardId] = useState(boards[boardIds[0]].id);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      !destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Rearrange column order
    if (type === "column") {
      const newColumnOrder = Array.from(boards[activeBoardId].columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newBoard = {
        ...boards[activeBoardId],
        columnOrder: newColumnOrder,
      };

      setBoards((prevState) => ({
        ...prevState,
        [boards[activeBoardId].id]: newBoard,
      }));
      return;
    }

    const start = boards[activeBoardId].columns[source.droppableId];
    const finish = boards[activeBoardId].columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };
      const newBoard = {
        ...boards[activeBoardId],
        columns: {
          ...boards[activeBoardId].columns,
          [newColumn.id]: newColumn,
        },
      };

      setBoards((prevState) => ({
        ...prevState,
        [boards[activeBoardId].id]: newBoard,
      }));
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newBoard = {
      ...boards[activeBoardId],
      columns: {
        ...boards[activeBoardId].columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setBoards((prevState) => ({
      ...prevState,
      [boards[activeBoardId].id]: newBoard,
    }));
  };

  return (
    <div className="App" data-theme="dark">
      <Container>
        <Sidebar
          boards={boards}
          boardIds={boardIds}
          activeBoard={boards[activeBoardId]}
        />
        <Board {...boards[activeBoardId]} handleOnDragEnd={handleOnDragEnd} />
      </Container>
    </div>
  );
}

export default App;
