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
    <div className="mx-auto w-[550px] space-y-5 overflow-hidden rounded-xl shadow-lg">
      <Form dispatch={dispatch} setInput={setInput} input={input} />
      {todos.length > 0 ? (
        <div className="relative m-3 space-y-3 rounded-xl border-2 border-orange-500 p-3">
          <h1 className="text-2xl font-semibold">Tasks</h1>
          {todos.map((todo) => (
            <ToDo todo={todo} key={todo.id} dispatch={dispatch} />
          ))}
          <p className="absolute right-[-10px] top-[-20px] flex size-[35px] items-center justify-center rounded-full bg-orange-500 text-sm text-white">
            4
          </p>
        </div>
      ) : (
        <p className="p-10 text-center">No tasks yet</p>
      )}
    </div>
  );
}
