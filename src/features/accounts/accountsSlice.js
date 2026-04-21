// アカウントのログイン状態を管理するRedux Toolkit用のスライスファイル

// console.log("Users Initialized");

const savedUserId = JSON.parse(localStorage.getItem("currentUserId"));

const initialState = {
  currentUserId: savedUserId || null,
  isAuthenticated: !!savedUserId,
  // isAuthenticated: true,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/createUser":
      return {
        ...state,
        isAuthenticated: true,
        currentUserId: action.payload,
      };
    case "users/login":
      return {
        ...state,
        currentUserId: action.payload,
        isAuthenticated: true,
      };
    case "users/logout":
      return {
        ...state,
        currentUserId: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export function login(currentUserId) {
  return { type: "users/login", payload: currentUserId };
}

export function logout() {
  return {
    type: "users/logout",
  };
}
