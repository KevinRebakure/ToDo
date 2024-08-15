import { useDispatch } from "react-redux";
import { complete, edit, remove, update } from "../features/todoSlice";

export default function ToDo({ todo, category }) {
  const dispatch = useDispatch();
  const handleBlur = () => dispatch(edit(todo.id));
  const handleChange = (e) =>
    dispatch(update({ id: todo.id, task: e.target.value }));
  const handleEdit = () => dispatch(edit(todo.id));
  const handleDelete = () => dispatch(remove(todo.id));
  const handleComplete = () => dispatch(complete(todo.id));

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
          onDoubleClick={handleEdit}
          className={`${todo.done && "text-green-500 line-through"} text-start`}
        >
          {todo.task}
        </button>
      )}
      <button onClick={handleDelete} className="ml-auto">
        <img src="./delete.png" alt="" className="size-[20px]" />
      </button>
      <button onClick={handleComplete}>
        {todo.done ? (
          <img src="./checked (1) 1.svg" alt="" className="size-[20px]" />
        ) : (
          <img src="./circle.png" alt="" className="size-[20px]" />
        )}
      </button>
    </div>
  );
}
