import Form from "./components/Form";
import Category from "./components/Category";
import { useSelector } from "react-redux";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETE_TODO: "complete-todo",
  EDIT_TODO: "edit-todo",
  UPDATE_TODO: "update-todo",
  CLEAR: "clear",
};

export default function App() {
  const counters = useSelector((state) => state.count.value);
  const todos = useSelector((state) => state.todo.value);

  console.log(counters);

  return (
    <div className="mx-auto w-[640px] overflow-hidden rounded-xl shadow-lg">
      <Form />

      {todos.length > 0 ? (
        <div className="mt-5 flex gap-x-5 p-5">
          <Category
            completed={false}
            todos={todos}
            section="completed"
            count={counters.todo}
          />
          <Category
            completed={true}
            todos={todos}
            section="todo"
            count={counters.completed}
          />
        </div>
      ) : (
        <>
          <div className="p-10">
            <p className="text-center">No tasks</p>
            <p className="text-center">Double click on text to update it</p>
          </div>
        </>
      )}
    </div>
  );
}
