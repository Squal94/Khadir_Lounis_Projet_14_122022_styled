import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
  isClose: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    open: (state) => {
      state.isOpened = true;
      state.isClose = false;
    },
    close: (state) => {
      state.isOpened = false;
      state.isClose = true;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
