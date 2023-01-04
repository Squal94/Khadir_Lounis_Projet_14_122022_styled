import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../Features/editArrayContent.slice";
import modalReducer from "../Features/modal.slice";

/**
 * Store Redux allows to store in a single object called "the store" all the states (state)
 * of the application and used to connect actions very simply
 */

/**
 * The configureStore function makes it easier to create the Redux store.
 * This function automatically uses a combineReducer to separate the Redux into several small reducers.
 */

export default configureStore({
  reducer: {
    employee: employeeReducer,
    modal: modalReducer,
  },
});
