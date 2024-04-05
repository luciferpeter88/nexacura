/**
 * The reducer function handles different action types to update the state in a JavaScript application.
 * @param state - The `state` parameter in the `reducer` function represents the current state of the
 * application. It is an object that contains the data that the reducer operates on.
 * @param action - The `action` parameter in the `reducer` function represents an object that contains
 * information about the action being dispatched. It typically has a `type` property that describes the
 * type of action being performed and a `payload` property that carries any necessary data for the
 * action. The reducer function uses this
 * @returns The reducer function is returning a new state object based on the action type provided.
 * Depending on the action type, it updates different properties of the state object. The updated state
 * object is returned at the end of the switch statement.
 */
function reducer(state, action) {
  switch (action.type) {
    /* The `case "LOGIN"` block in the reducer function is handling the action type "LOGIN". It checks
    the value of `action.payload.isAuthenticated` to determine whether the user is authenticated or
    not. If `action.payload.isAuthenticated` is true, it updates the state object by setting
    `isAuthenticated` to true and updating the `user` property with the user data from
    `action.payload.user`. If `action.payload.isAuthenticated` is false, it sets `isAuthenticated`
    to false while still updating the `user` property with the user data from `action.payload.user`.
    This block essentially manages the state update related to user authentication based on the
    value of `action.payload.isAuthenticated`. */
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
    /* The `case "PROFILE_UPDATE"` block in the reducer function is handling the action type
    "PROFILE_UPDATE". */
    case "PROFILE_UPDATE":
      console.log(action.payload.user, "coming from reducer");

      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    /* The `case "DASHBOARD_LOGOUT"` block in the reducer function is handling the action type
    "DASHBOARD_LOGOUT". When this action is dispatched, it updates the state object to reflect that
    the user is no longer authenticated. It sets the `isAuthenticated` property to `false` and keeps
    the `user` property intact by spreading the existing user data from the current state. This
    block essentially handles the logout functionality by updating the authentication status to
    false while maintaining the user data in the state. */
    case "DASHBOARD_LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: {
          ...state.user,
        },
      };
    /* The `case "AVATAR_ANSWER"` block in the reducer function is handling the action type
   "AVATAR_ANSWER". When this action is dispatched, it updates the state object by adding or
   updating the `avatarAnswer` property with the data provided in `action.payload`. The new state
   object returned from this block includes all existing state properties spread using `...state`,
   and the `avatarAnswer` property is set to the value passed in `action.payload`. This block
   essentially manages the state update related to avatar answers in the application. If the action
   type does not match any of the defined cases, the reducer function returns the current state
   without any modifications. */
    case "AVATAR_ANSWER":
      return {
        ...state,
        avatarAnswer: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
