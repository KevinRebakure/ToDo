import ToDo from "./ToDo";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../features/todoSlice";

export default function Category({ completed }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);
  const counts = {
    todo: todos.filter((todo) => !todo.done).length,
    completed: todos.filter((todo) => todo.done).length,
  };
  const displayTodos = completed
    ? todos
        .filter((todo) => todo.done)
        .map((todo) => <ToDo todo={todo} key={todo.id} category={true} />)
    : todos
        .filter((todo) => !todo.done)
        .map((todo) => {
          return <ToDo todo={todo} key={todo.id} category={false} />;
        });
  function handleClear() {
    dispatch(clear(completed));
  }

  return (
    <div
      className={`relative h-max w-full space-y-3 rounded-xl border-2 ${completed ? "border-green-500" : "border-orange-500"} p-3`}
    >
      <h1 className="text-2xl font-semibold">
        {completed ? "Completed" : "Todos"}
      </h1>
      <button
        onClick={handleClear}
        className={`gap-x-2 font-semibold ${completed ? "text-green-500 hover:text-green-600" : "text-orange-500 hover:text-orange-600"}`}
      >
        Clear
      </button>
      {displayTodos}
      <p
        className={`${completed ? "bg-green-500" : "bg-orange-500"} absolute right-[-10px] top-[-20px] flex size-[35px] items-center justify-center rounded-full text-sm font-semibold text-white`}
      >
        {completed ? counts.completed : counts.todo}
      </p>
    </div>
  );
}
