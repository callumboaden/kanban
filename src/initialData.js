const initialData = {
  boards: {
    "board-1": {
      id: "board-1",
      title: "General",
      columns: {
        "column-1": {
          id: "column-1",
          title: "Todo",
          taskIds: ["task-1", "task-2", "task-3"],
        },
        "column-2": {
          id: "column-2",
          title: "Doing",
          taskIds: ["task-4", "task-5", "task-6"],
        },
      },
      tasks: {
        "task-1": {
          id: "task-1",
          isComplete: false,
          title: "Task 1",
          description: "Description for task 1",
          subtasks: {
            "subtask-1": {
              id: "subtask-1",
              isComplete: false,
              title: "Subtask 1",
            },
            "subtask-2": {
              id: "subtask-2",
              isComplete: false,
              title: "Subtask 2",
            },
            "subtask-3": {
              id: "subtask-3",
              isComplete: false,
              title: "Subtask 3",
            },
            "subtask-4": {
              id: "subtask-4",
              isComplete: false,
              title: "Subtask 4",
            },
          },
          subtaskOrder: ["subtask-1", "subtask-2", "subtask-3", "subtask-4"],
        },
        "task-2": {
          id: "task-2",
          isComplete: false,
          title: "Task 2",
          description: "Description for task 2",
          subtasks: {
            "subtask-1": {
              id: "subtask-1",
              isComplete: false,
              title: "Subtask 1",
            },
            "subtask-2": {
              id: "subtask-2",
              isComplete: false,
              title: "Subtask 2",
            },
            "subtask-3": {
              id: "subtask-3",
              isComplete: false,
              title: "Subtask 3",
            },
            "subtask-4": {
              id: "subtask-4",
              isComplete: false,
              title: "Subtask 4",
            },
          },
          subtaskOrder: ["subtask-1", "subtask-2", "subtask-3", "subtask-4"],
        },
        "task-3": {
          id: "task-3",
          isComplete: false,
          title: "Task 3",
          description: "Description for task 3",
          subtasks: {
            "subtask-1": {
              id: "subtask-1",
              isComplete: false,
              title: "Subtask 1",
            },
            "subtask-2": {
              id: "subtask-2",
              isComplete: false,
              title: "Subtask 2",
            },
            "subtask-3": {
              id: "subtask-3",
              isComplete: false,
              title: "Subtask 3",
            },
            "subtask-4": {
              id: "subtask-4",
              isComplete: false,
              title: "Subtask 4",
            },
          },
          subtaskOrder: ["subtask-1", "subtask-2", "subtask-3", "subtask-4"],
        },
        "task-4": {
          id: "task-4",
          isComplete: false,
          title: "Task 4",
          description: "Description for task 4",
          subtasks: {
            "subtask-1": {
              id: "subtask-1",
              isComplete: false,
              title: "Subtask 1",
            },
            "subtask-2": {
              id: "subtask-2",
              isComplete: false,
              title: "Subtask 2",
            },
            "subtask-3": {
              id: "subtask-3",
              isComplete: false,
              title: "Subtask 3",
            },
            "subtask-4": {
              id: "subtask-4",
              isComplete: false,
              title: "Subtask 4",
            },
          },
          subtaskOrder: ["subtask-1", "subtask-2", "subtask-3", "subtask-4"],
        },
        "task-5": {
          id: "task-5",
          isComplete: false,
          title: "Task 5",
          description: "Description for task 5",
          subtasks: {
            "subtask-1": {
              id: "subtask-1",
              isComplete: false,
              title: "Subtask 1",
            },
            "subtask-2": {
              id: "subtask-2",
              isComplete: false,
              title: "Subtask 2",
            },
            "subtask-3": {
              id: "subtask-3",
              isComplete: false,
              title: "Subtask 3",
            },
            "subtask-4": {
              id: "subtask-4",
              isComplete: false,
              title: "Subtask 4",
            },
          },
          subtaskOrder: ["subtask-1", "subtask-2", "subtask-3", "subtask-4"],
        },
        "task-6": {
          id: "task-6",
          isComplete: false,
          title: "Task 6",
          description: "Description for task 6",
          subtasks: {
            "subtask-1": {
              id: "subtask-1",
              isComplete: false,
              title: "Subtask 1",
            },
            "subtask-2": {
              id: "subtask-2",
              isComplete: false,
              title: "Subtask 2",
            },
            "subtask-3": {
              id: "subtask-3",
              isComplete: false,
              title: "Subtask 3",
            },
            "subtask-4": {
              id: "subtask-4",
              isComplete: false,
              title: "Subtask 4",
            },
          },
          subtaskOrder: ["subtask-1", "subtask-2", "subtask-3", "subtask-4"],
        },
      },
      columnOrder: ["column-1", "column-2"],
    },
  },
  boardOrder: ["board-1"],
};

export default initialData;
