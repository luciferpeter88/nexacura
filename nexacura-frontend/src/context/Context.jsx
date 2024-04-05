/**
 * The `AppContext` function creates a context provider in React using `useReducer` for state
 * management.
 * @returns The `AppContext` component is being returned, which wraps the `children` components with
 * the `authContext.Provider`. The `value` prop of the provider is set to an object containing the
 * `initial` state and `dispatch` function obtained from the `useReducer` hook.
 */
import React, { useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";
import authContext from "./authenticationContext";

/**
 * The `AppContext` function creates a context provider in React that manages state using a reducer and
 * initial state.
 * @returns The `AppContext` component is returning the `authContext.Provider` component with a value
 * prop that contains the `initial` state and `dispatch` function from the useReducer hook. The
 * children of the `AppContext` component are also being rendered within the `authContext.Provider`.
 */
function AppContext({ children }) {
  const [initial, dispatch] = useReducer(reducer, initialState);
  return (
    <authContext.Provider value={{ initial, dispatch }}>
      {children}
    </authContext.Provider>
  );
}

export default AppContext;
