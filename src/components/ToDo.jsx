import { useDispatch } from "react-redux";
import { complete, edit, remove, update } from "../features/todoSlice";

export default function ToDo({ todo, category }) {
  const dispatch = useDispatch();

  function handleBlur() {
    dispatch(edit(todo.id));
  }

  function handleChange(e) {
    dispatch(update({ id: todo.id, task: e.target.value }));
  }

  return (
    <div
      className={`flex items-center justify-start gap-x-3 border-l-2 ${category ? "border-green-500 bg-green-50" : "border-orange-500 bg-orange-50"} py-1 pl-3 pr-1`}
    >
      {todo.edit ? (
        <input
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === "Enter" && handleBlur()}
          value={todo.task}
          type="text"
          name=""
          id=""
          className="pl-3 outline-none"
        />
      ) : (
        <button
          onDoubleClick={() => {
            dispatch(edit(todo.id));
          }}
          className={`${todo.done && "text-green-500 line-through"} text-start`}
        >
          {todo.task}
        </button>
      )}
      <button
        onClick={() => {
          dispatch(remove(todo.id));
        }}
        className="ml-auto"
      >
        <img src="./delete.png" alt="" className="size-[20px]" />
      </button>
      <button
        onClick={() => {
          dispatch(complete(todo.id));
        }}
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
