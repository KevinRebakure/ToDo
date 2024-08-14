import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {},
    remove: (state, action) => {},
    complete: (state, action) => {},
    edit: (state, action) => {},
    update: (state, action) => {},
    clear: (state, action) => {},
  },
});

// console.log(todoSlice)

export const { add, remove, complete, edit, update, clear } = todoSlice.actions;
export default todoSlice.reducer;
