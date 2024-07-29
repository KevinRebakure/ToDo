import { ACTIONS } from "../App";

export default function Form({ dispatch, input, setInput }) {
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: input } });
    setInput("");
  }

  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-semibold">ToDo</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Add a new ToDo"
          className="rounded-lg border border-gray-400 px-5 py-2 outline-none"
        />
      </form>
    </div>
  );
}
