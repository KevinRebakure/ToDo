import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import formSlice from "./features/formSlice.js";
import todoSlice from "./features/todoSlice.js";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    form: formSlice,
    // count: count,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
