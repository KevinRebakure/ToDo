import { useEffect, useReducer, useState } from "react";
import Form from "./components/Form";
import reducer from "./reducer";
import Category from "./components/Category";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETE_TODO: "complete-todo",
  EDIT_TODO: "edit-todo",
  UPDATE_TODO: "update-todo",
  CLEAR: "clear",
};

export default function App() {
  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || [],
  );
  const [input, setInput] = useState("");
  const [count, setCount] = useState({
    todo: 0,
    completed: 0,
  });

  useEffect(() => {
    setCount({
      todo: todos.filter((todo) => !todo.done).length,
      completed: todos.filter((todo) => todo.done).length,
    });
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="mx-auto w-[800px] space-y-5 overflow-hidden rounded-xl shadow-lg">
      <Form dispatch={dispatch} setInput={setInput} input={input} />

      <div className="flex gap-x-5 p-5">
        <Category
          completed={false}
          dispatch={dispatch}
          todos={todos}
          section="completed"
          count={count}
        />
        <Category
          completed={true}
          dispatch={dispatch}
          todos={todos}
          section="todo"
          count={count}
        />
      </div>
    </div>
  );
}
