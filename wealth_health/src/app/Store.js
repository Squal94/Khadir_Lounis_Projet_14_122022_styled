import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../Features/editArrayContent.slice";
import modalReducer from "../Features/modal.slice";
import arrayReducer from "../Features/arrayOption.slice";

export default configureStore({
  reducer: {
    employee: employeeReducer,
    array: arrayReducer,
    modal: modalReducer,
  },
});
