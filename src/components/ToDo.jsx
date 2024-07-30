import { useState } from "react";
import { ACTIONS } from "../App";
import { useDrag } from "react-dnd";

export default function ToDo({ todo, dispatch, category }) {
  const [update, setUpdate] = useState(todo.task);
  function handleDoubleClick() {
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } });
  }

  function handleOnChange(e) {
    setUpdate(e.target.value);
  }

  function handleBlur() {
    dispatch({
      type: ACTIONS.UPDATE_TODO,
      payload: { id: todo.id, task: update },
    });
  }

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: {
      id: todo.id,
      category,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div
      ref={dragRef}
      className={`flex items-center justify-start gap-x-3 border-l-2 ${category == "completed" ? "border-green-500 bg-green-50" : "border-orange-500 bg-orange-50"} py-1 pl-3 pr-1`}
    >
      {todo.edit ? (
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === "Enter" && handleBlur()}
          value={update}
          type="text"
          name=""
          id=""
          className="outline-none pl-3"
        />
      ) : (
        <button
          onDoubleClick={() => {
            handleDoubleClick();
          }}
          className={`${todo.done && "text-green-500 line-through"} text-start`}
        >
          {todo.task}
        </button>
      )}
      {category == "completed" && (
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })
          }
          className="ml-auto"
        >
          {todo.done ? (
            <img src="./checked (1) 1.svg" alt="" className="size-[20px]" />
          ) : (
            <img src="./circle.png" alt="" className="size-[20px]" />
          )}
        </button>
      )}
      <button
        // onClick={() =>
        //   dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        // }
        className={category == "todo" ? "ml-auto" : ""}
      >
        <img src="./delete.png" alt="" className="size-[20px]" />
      </button>
    </div>
  );
}
