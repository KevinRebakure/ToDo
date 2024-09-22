import { useEffect, useReducer, useState } from "react";
import Form from "./components/Form";
import reducer from "./reducer";
import Category from "./components/Category";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { MultiBackend, TouchTransition } from "react-dnd-multi-backend";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETE_TODO: "complete-todo",
  UNCOMPLETE_TODO: "uncomplete-todo",
  EDIT_TODO: "edit-todo",
  UPDATE_TODO: "update-todo",
  CLEAR: "clear",
};

const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
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
    <div className="mx-auto w-[640px] overflow-hidden rounded-xl shadow-lg">
      <Form dispatch={dispatch} setInput={setInput} input={input} />

      {todos.length > 0 ? (
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <div className="mt-5 flex gap-x-5 p-5">
            <Category
              completed={false}
              dispatch={dispatch}
              todos={todos}
              section="todo"
              count={count}
            />
            <Category
              completed={true}
              dispatch={dispatch}
              todos={todos}
              section="completed"
              count={count}
            />
          </div>
        </DndProvider>
      ) : (
        <>
          <div className="p-10">
            <p className="text-center">No tasks</p>
            <p className="text-center">Double click on text to update it</p>
          </div>
        </>
      )}
    </div>
  );
}
