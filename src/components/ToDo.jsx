import { ACTIONS } from "../App";

export default function ToDo({ todo, dispatch, category }) {
  return (
    <div
      className={`flex items-center justify-start gap-x-3 border-l-2 ${category ? "border-green-500 bg-green-50" : "border-orange-500 bg-orange-50"} py-1 pl-3 pr-1`}
    >
      <p className={`${todo.done && "line-through text-green-500"}`}>{todo.task}</p>
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
        {todo.done ? (
          <img src="./checked (1) 1.svg" alt="" className="size-[20px]" />
        ) : (
          <img src="./circle.png" alt="" className="size-[20px]" />
        )}
      </button>
    </div>
  );
}
