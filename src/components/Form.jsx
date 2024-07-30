import { useRef } from "react";
import { ACTIONS } from "../App";

export default function Form({ dispatch, input, setInput }) {
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    insertTodo();
  }

  const insertTodo = () => {
    if (input.trim() !== "") {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { task: input } });
      setInput("");
    }
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="space-y-5 bg-[#FFE9D0] py-3"
    >
      <h1 className="text-center text-4xl font-semibold text-gray-700">ToDo</h1>
      <div className="mx-auto flex w-[60%] items-center rounded-3xl border-2 border-gray-400 bg-white overflow-hidden gap-5">
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Hit ENTER to add a new task"
          className="w-full outline-none px-5 py-2 bg-inherit"
        />
        <img src="./add.png" alt="" className="size-[15px] mr-5" onClick={() => { insertTodo() }} />
      </div>
    </form>
  );
}
