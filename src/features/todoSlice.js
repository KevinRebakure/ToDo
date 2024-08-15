import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { value: JSON.parse(localStorage.getItem("todos")) || [] },
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
    complete: (state, action) => {
      state.value = state.value.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
    edit: (state, action) => {
      state.value = state.value.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, edit: !todo.edit };
        }
        return todo;
      });
    },
    update: (state, action) => {
      state.value = state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.task };
        }
        return todo;
      });
    },
    clear: (state, action) => {
      if (action.payload) {
        state.value = state.value.filter((todo) => !todo.done);
      } else {
        state.value = state.value.filter((todo) => todo.done);
      }
    },
  },
});

export const { add, remove, complete, edit, update, clear } = todoSlice.actions;
export default todoSlice.reducer;
