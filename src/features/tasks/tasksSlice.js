// タスク関連の状態を管理するRedux Toolkit用のスライスファイル

const initialState = {
  tasks: [],
  editingTaskId: null,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
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
    case "tasks/setTasks":
      return {
        ...state,
        tasks: action.payload,
      };
    // 再リロードによりステート情報消失するため没
    // case "tasks/setEditingTaskId":
    //   return {
    //     ...state,
    //     editingTaskId: action.payload,
    //   };
    case "tasks/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
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
  return { type: "tasks/finishEdit" };
}
export function createTask(newTask) {
  return { type: "tasks/createTask", payload: newTask };
}
export function updateTask(updatedTask) {
  return { type: "tasks/updateTask", payload: updatedTask };
}
export function setTasks(updateTask) {
  return { type: "tasks/setTasks", payload: updateTask };
}
// export function setEditingTaskId(taskId) {
//   return { type: "tasks/setEditingTaskId", payload: taskId };
// }
export function deleteTask(id) {
  return { type: "tasks/deleteTask", payload: id };
}
