/* This code snippet is creating a new context in React using the `createContext` function from the
React library. The `createContext` function is used to create a new context object, which can be
used to pass data through the component tree without having to pass props down manually at every
level. */
import { createContext } from "react";

const authContext = createContext();

export default authContext;
