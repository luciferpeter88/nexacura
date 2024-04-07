import React, { useReducer } from "react";
import initialState from "./initialState"; // Imports the initial state of your application's global state.
import reducer from "./reducer"; // Imports the reducer function that will manage changes to the state.
import authContext from "./authenticationContext"; // Imports the Context you created for authentication.

/**
 * Wraps the application's components, providing them access to the global state.
 * @param {Object} props - The properties passed to the AppContext component, including 'children'.
 */
function AppContext({ children }) {
  // Sets up the reducer with the initial state and returns the current state and dispatch function.
  const [initial, dispatch] = useReducer(reducer, initialState);

  return (
    // Provides the state and dispatch function to the component tree via the Context.Provider.
    <authContext.Provider value={{ initial, dispatch }}>
      {children}{" "}
      {/* Renders children components, allowing them to access the global state. */}
    </authContext.Provider>
  );
}

export default AppContext;
