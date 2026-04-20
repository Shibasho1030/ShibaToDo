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
        isAuthenticated: true,
        currentUserId: action.payload,
      };
    default:
      return state;
  }
}
