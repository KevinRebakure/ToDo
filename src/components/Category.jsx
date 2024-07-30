import { ACTIONS } from "../App";
import { useEffect, useState } from "react";
import ToDo from "./ToDo";

export default function Category({
  count,
  dispatch,
  section,
  todos,
  completed,
}) {
  const [getTodos, setGetTodos] = useState([]);

  useEffect(() => {
    if (section === "completed") {
      setGetTodos(
        todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <ToDo
              todo={todo}
              key={todo.id}
              dispatch={dispatch}
              category={false}
            />
          )),
      );
    } else if (section === "todo") {
      setGetTodos(
        todos
          .filter((todo) => todo.done)
          .map((todo) => {
            return (
              <ToDo
                todo={todo}
                key={todo.id}
                dispatch={dispatch}
                category={true}
              />
            );
          }),
      );
    }
  }, [section, todos]);

  return (
    <div
      className={`relative h-max w-full space-y-3 rounded-xl border-2 ${completed ? "border-green-500" : "border-orange-500"} p-3`}
    >
      <h1 className="text-2xl font-semibold">Tasks</h1>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CLEAR, payload: { completed } })
        }
        className={`gap-x-2 font-semibold ${completed ? "text-green-500 hover:text-green-600" : "text-orange-500 hover:text-orange-600"}`}
      >
        Clear
      </button>
      {getTodos}
      <p
        className={`${completed ? "bg-green-500" : "bg-orange-500"} absolute right-[-10px] top-[-20px] flex size-[35px] items-center font-semibold justify-center rounded-full text-sm text-white`}
      >
        {completed ? count.completed : count.todo}
      </p>
    </div>
  );
}
