import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    
  },
  reducers: {
    increseOne: (state) => {
      state.count += 1;
    },
    decreseOne: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increseOne, decreseOne, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
