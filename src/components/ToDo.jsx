import { ACTIONS } from "../App";

export default function ToDo({ todo, dispatch }) {
  return (
    <div className="flex items-center justify-start gap-x-3 pr-1 border-l-2 border-orange-500 bg-orange-50 py-1 pl-3">
      <p className={`${todo.done && "line-through"}`}>{todo.task}</p>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
        className="ml-auto"
      >
        <img src="./delete.png" alt="" className="size-[20px]" />
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })
        }
      >
        {/* {todo.done ? "Uncheck" : "Check"} */}
        {todo.done ? (
          <img src="./checked (1) 1.svg" alt="" className="size-[20px]" />
        ) : (
          <img src="./circle.png" alt="" className="size-[20px]" />
        )}
      </button>
    </div>
  );
}
