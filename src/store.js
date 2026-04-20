import { combineReducers, createStore } from "redux";
import tasksReducer from "./features/tasks/tasksSlice";
import usersReducer from "./features/accounts/accountsSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});
const store = createStore(rootReducer);

export default store;
