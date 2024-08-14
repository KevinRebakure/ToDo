import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { value: { todo: 0, completed: 0 } },
  reducers: {
    count_todo: (state, action) => {
      state.value = { ...state.value, todo: action };
    },
    count_complete: (state, action) => {
      state.value = { ...state.value, completed: action };
    },
  },
});
export const { count_todo, count_complete } = countSlice.actions;
export default countSlice.reducer;
