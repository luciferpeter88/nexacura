function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.isAuthenticated) {
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
        };
      } else {
        return {
          ...state,
          isAuthenticated: false,
          user: action.payload.user,
        };
      }
    default:
      return state;
  }
}

export default reducer;
