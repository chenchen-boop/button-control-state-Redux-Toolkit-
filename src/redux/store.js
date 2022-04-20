import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import assistReducer from "./assist";

export default configureStore({
  reducer: {
    counter: counterReducer,
    assist:assistReducer,

  }
});
