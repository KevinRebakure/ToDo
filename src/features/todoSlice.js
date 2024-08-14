import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {
      state.value = [
        {
          task: action.payload,
          done: false,
          id: uuidv4(),
          edit: false,
        },
        ...state.value,
      ];
    },
    remove: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    complete: (state, action) => {},
    edit: (state, action) => {},
    update: (state, action) => {},
    clear: (state, action) => {},
  },
});

// console.log(todoSlice)

export const { add, remove, complete, edit, update, clear } = todoSlice.actions;
export default todoSlice.reducer;
