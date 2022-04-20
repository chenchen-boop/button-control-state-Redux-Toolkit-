import { createSlice } from "@reduxjs/toolkit";

export const assistSlice = createSlice({
  name: "assist",
  initialState: {
    assist: 0,
   
  },
  reducers: {
    Aincrement: (state) => {
      state.assist += 1;
    },
    Adecrement: (state) => {
      state.assist -= 1;
    },
    AincrementByAmount: (state, action) => {
      state.assist += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { Aincrement, Adecrement, AincrementByAmount } = assistSlice.actions;

export default assistSlice.reducer;
