import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../App";
import { input } from "../features/formSlice";
import { add } from "../features/todoSlice";

export default function Form() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.value);
  const todos = useSelector((state) => state.todo.value);
  console.log(todos);
  function handleChange(e) {
    dispatch(input(e.target.value));
    dispatch(input(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.trim() !== "") {
      // dispatch({ type: ACTIONS.ADD_TODO, payload: { task: input } });
      dispatch(add(data));
      dispatch(input(""));
      // setInput("");
    }
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="space-y-5 bg-[#FFE9D0] py-3"
    >
      <h1 className="text-center text-4xl font-semibold text-gray-700">ToDo</h1>
      <div className="mx-auto flex w-[70%] items-center rounded-3xl border-2 border-gray-400 bg-white px-5 py-2">
        <input
          onChange={handleChange}
          type="text"
          value={data}
          placeholder="Hit ENTER to add a new task"
          className="w-full outline-none"
        />
        <img src="./add.png" alt="" className="size-[15px]" />
      </div>
    </form>
  );
}
