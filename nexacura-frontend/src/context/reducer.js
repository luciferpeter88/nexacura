function reducer(state, action) {
  switch (action.type) {
    // Handles login action.
    case "LOGIN":
      // Updates state based on authentication status.
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };

    // Handles user profile update action.
    case "PROFILE_UPDATE":
      console.log(action.payload.user, "coming from reducer");
      // Updates user information in state.
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };

    // Handles logout action from the dashboard.
    case "DASHBOARD_LOGOUT":
      // Resets user state to log out.
      return {
        ...state,
        isAuthenticated: false,
        user: {
          ...state.user,
        },
      };

    // Updates state with avatar's answer for a specific interaction.
    case "AVATAR_ANSWER":
      return {
        ...state,
        avatarAnswer: action.payload,
      };

    // Default case returns the current state unchanged.
    default:
      return state;
  }
}

export default reducer;
