import { createSlice } from "@reduxjs/toolkit";
import { TextInput } from "react-native";
export const playersSlice = createSlice({
  name: "players",
  initialState: {
    name: '',
    number:null,
    height:null,
    weight:null,
   
  },
  reducers: {
    rename: (state) => {
      
    },
    
  }
});

// Action creators are generated for each case reducer function
export const { Aincrement, Adecrement, AincrementByAmount } = assistSlice.actions;

export default assistSlice.reducer;
