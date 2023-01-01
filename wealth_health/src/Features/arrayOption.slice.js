import { createSlice } from "@reduxjs/toolkit";
// import {}

const initialState = {
  length: "",
  numberLine: "",
};

export const arraySlice = createSlice({
  name: "arrayOption",
  initialState: initialState,
  reducers: {
    numberChoice: (state, action) => {
      state.length = action.payload[0];
      state.numberLine = action.payload[1];
    },
  },
});

export const { numberChoice } = arraySlice.actions;

export default arraySlice.reducer;
