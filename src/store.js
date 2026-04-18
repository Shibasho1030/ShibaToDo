import { combineReducers, createStore } from "redux";
import tasksReducer from "./features/tasks/tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});
const store = createStore(rootReducer);

export default store;
