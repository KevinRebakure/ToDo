import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { value: "" },
  reducers: {
    input: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { input } = formSlice.actions;
export default formSlice.reducer;
