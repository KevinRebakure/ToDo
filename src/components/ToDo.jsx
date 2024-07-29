import { ACTIONS } from "../App";

export default function ToDo({ todo, dispatch }) {
  return (
    <div className="flex items-center justify-start gap-x-3 rounded-lg border border-gray-400 p-5">
      <p className={`${todo.done && "line-through"}`}>{todo.task}</p>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
        className="ml-auto border border-gray-500 px-3 py-1"
      >
        Delete
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })
        }
        className="border border-gray-500 px-3 py-1"
      >
        {todo.done ? "Uncheck" : "Check"}
      </button>
    </div>
  );
}
