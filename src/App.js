import { useState } from "react";
import Board from "./components/Board";
import Sidebar from "./components/Sidebar";
import initialData from "./initialData";
import styled from "styled-components";
import Dialog from "./components/Modal";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import uniqid from "uniqid";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  const [boards, setBoards] = useState(initialData.boards);
  const [boardIds, setBoardIds] = useState(initialData.boardOrder);
  const [activeBoardId, setActiveBoardId] = useState(
    initialData.boardOrder[0] || ""
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(true);
  const [action, setAction] = useState("");
  const [theme, setTheme] = useState("dark");
  const [editingTask, setEditingTask] = useState({});

  const editTask = (id, columnId) => {
    const task = boards[activeBoardId].tasks[id];
    const status = boards[activeBoardId].columns[columnId].id;
    task.status = status;

    setEditingTask(task);
    handleDialogOpen("editTask", task);
  };

  const handleSidebarOpen = () => {
    openSidebar ? setOpenSidebar(false) : setOpenSidebar(true);
  };

  const handleToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggleBoard = (boardId) => {
    boardId !== activeBoardId
      ? setActiveBoardId(boardId)
      : setActiveBoardId(activeBoardId);
  };

  // Update board
  const updateBoard = (obj) => {
    const newBoard = {
      ...boards[activeBoardId],
      title: obj.title,
    };
    setBoards((prevState) => ({
      ...prevState,
      [activeBoardId]: newBoard,
    }));
  };

  // Update task
  const updateTask = (obj) => {
    const newTask = {
      id: obj.id,
      isComplete: false,
      title: obj.title,
      description: obj.description,
      subtasks: obj.subtasks,
    };

    if (obj.prevStatus !== obj.status) {
      const startTaskIds = Array.from(
        boards[activeBoardId].columns[obj.prevStatus].taskIds
      );
      const startTaskIndex = startTaskIds.indexOf(obj.id);
      const finishTaskIds = Array.from(
        boards[activeBoardId].columns[obj.status].taskIds
      );

      startTaskIds.splice(startTaskIndex, 1);
      finishTaskIds.push(obj.id);

      const newBoard = {
        ...boards[activeBoardId],
        columns: {
          ...boards[activeBoardId].columns,
          [obj.prevStatus]: {
            ...boards[activeBoardId].columns[obj.prevStatus],
            taskIds: startTaskIds,
          },
          [obj.status]: {
            ...boards[activeBoardId].columns[obj.status],
            taskIds: finishTaskIds,
          },
        },
      };

      setBoards((prevState) => ({
        ...prevState,
        [activeBoardId]: newBoard,
      }));

      return;
    }

    const newBoard = {
      ...boards[activeBoardId],
      tasks: {
        ...boards[activeBoardId].tasks,
        [obj.id]: newTask,
      },
    };

    setBoards((prevState) => ({
      ...prevState,
      [activeBoardId]: newBoard,
    }));
  };

  // DELETE BOARD
  const deleteBoard = () => {
    const newBoards = boards;
    const newBoardIds = Array.from(boardIds).filter(
      (id) => id !== activeBoardId
    );

    delete newBoards[activeBoardId];

    setBoards(newBoards);
    setBoardIds(newBoardIds);
    setActiveBoardId(boardIds[0]);
  };

  // Add new Board
  const addBoard = (title) => {
    const newBoardId = uniqid("board-");
    const newBoard = {
      id: newBoardId,
      title,
      columns: {},
      tasks: {},
      columnOrder: [],
    };

    const newBoardIds = Array.from(boardIds);
    newBoardIds.push(newBoardId);

    setBoards((prevState) => ({
      ...prevState,
      [newBoardId]: newBoard,
    }));
    setBoardIds(newBoardIds);
    setActiveBoardId(newBoardId);
  };

  // Add new Column
  const addColumn = (title) => {
    const newColumnId = uniqid("column-");
    const newColumn = {
      id: newColumnId,
      title,
      taskIds: [],
    };

    const newColumnOrder = Array.from(boards[activeBoardId].columnOrder);
    newColumnOrder.push(newColumnId);

    const newBoard = {
      ...boards[activeBoardId],
      columns: {
        ...boards[activeBoardId].columns,
        [newColumnId]: newColumn,
      },
      columnOrder: newColumnOrder,
    };

    setBoards((prevState) => ({
      ...prevState,
      [activeBoardId]: newBoard,
    }));
  };

  const addTask = (obj) => {
    const { title, description, subtasks, status } = obj;
    const newTaskId = uniqid("task-");
    const newTaskIds = Array.from(
      boards[activeBoardId].columns[status].taskIds
    );

    newTaskIds.push(newTaskId);

    const newSubtasks = {};
    subtasks.forEach((subtask) => {
      const newSubtaskId = uniqid("subtask-");
      newSubtasks[newSubtaskId] = {
        id: newSubtaskId,
        isComplete: false,
        title: subtask,
      };
    });

    const newTask = {
      id: newTaskId,
      isComplete: false,
      title,
      description,
      subtasks: newSubtasks,
    };

    const newBoard = {
      ...boards[activeBoardId],
      columns: {
        ...boards[activeBoardId].columns,
        [status]: {
          ...boards[activeBoardId].columns[status],
          taskIds: newTaskIds,
        },
      },
      tasks: {
        ...boards[activeBoardId].tasks,
        [newTaskId]: newTask,
      },
    };

    setBoards((prevState) => ({
      ...prevState,
      [activeBoardId]: newBoard,
    }));
  };

  const handleDialogOpen = (input = "") => {
    // setEditingTask(task);
    setAction(input);
    toggleDialogOpen();
  };

  const toggleDialogOpen = () => {
    !openDialog ? setOpenDialog(true) : setOpenDialog(false);
  };

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
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <Sidebar
            boards={boards}
            boardIds={boardIds}
            activeBoard={boards[activeBoardId]}
            activeBoardId={activeBoardId}
            handleDialogOpen={handleDialogOpen}
            handleSidebarOpen={handleSidebarOpen}
            handleToggle={handleToggle}
            addColumn={addColumn}
            toggleBoard={toggleBoard}
            openSidebar={openSidebar}
            theme={theme}
          />
          <Board
            boards={boards}
            {...boards[activeBoardId]}
            handleOnDragEnd={handleOnDragEnd}
            handleEditTask={editTask}
            handleDialogOpen={handleDialogOpen}
            activeBoardId={activeBoardId}
          />
        </Container>
        {openDialog && (
          <Dialog
            activeBoard={boards[activeBoardId]}
            action={action}
            addBoard={addBoard}
            addColumn={addColumn}
            addTask={addTask}
            toggleOpen={toggleDialogOpen}
            editingTask={editingTask}
            updateTask={updateTask}
            updateBoard={updateBoard}
            deleteBoard={deleteBoard}
          />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
