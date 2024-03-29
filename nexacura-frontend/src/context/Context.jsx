import React, { useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";
import authContext from "./authenticationContext";

function AppContext({ children }) {
  const [initial, dispatch] = useReducer(reducer, initialState);
  return (
    <authContext.Provider value={{ initial, dispatch }}>
      {children}
    </authContext.Provider>
  );
}

export default AppContext;
