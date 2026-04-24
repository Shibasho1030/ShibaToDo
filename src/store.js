import tasksReducer from "./features/tasks/tasksSlice";
import usersReducer from "./features/accounts/accountsSlice";
import { configureStore } from "@reduxjs/toolkit";

// 各Reducerを統合し、Reduxストアを作成
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});

// 旧Reduxの方法
// const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   users: usersReducer,
// });
// const store = createStore(rootReducer);

export default store;
