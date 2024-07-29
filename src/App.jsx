import { useEffect, useReducer, useState } from "react";
import Form from "./components/Form";
import ToDo from "./components/ToDo";
import reducer from "./reducer";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETE_TODO: "complete-todo",
};

export default function App() {
  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || [],
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="mx-auto w-[550px] space-y-5 rounded-xl border border-gray-400 overflow-hidden">
      <Form dispatch={dispatch} setInput={setInput} input={input} />
      <div className="space-y-5">
        {todos.map((todo) => (
          <ToDo todo={todo} key={todo.id} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
