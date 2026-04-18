const initialState = {
  tasks: [],
  currentUserId: null,
  editingTaskId: null,
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "/":
      return {
        ...state,
      };
    case "tasks/createTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "tasks/updateTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          action.payload.id === task.id ? action.payload : task,
        ),
      };
    case "tasks/finishEdit":
      return {
        ...state,
        editingTaskId: null,
      };
    default:
      return state;
  }
}

export function finishEdit() {
  return { type: "tasks/editedTask" };
}

export function createTask(newTask) {
  return { type: "tasks/createTask", payload: newTask };
}

export function updateTask(updatedTask) {
  return { type: "tasks/updateTask", payload: updatedTask };
}
