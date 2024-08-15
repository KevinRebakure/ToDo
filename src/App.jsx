import Form from "./components/Form";
import Category from "./components/Category";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function App() {
  const todos = useSelector((state) => state.todo.value);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="mx-auto w-[640px] overflow-hidden rounded-xl shadow-lg">
      <Form />

      {todos.length > 0 ? (
        <div className="mt-5 flex gap-x-5 p-5">
          <Category completed={false} />
          <Category completed={true} />
        </div>
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
