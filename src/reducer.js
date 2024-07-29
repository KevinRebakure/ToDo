import { ACTIONS } from "./App";
import { v4 as uuidv4 } from "uuid";

export default function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newToDo(action.payload.task)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.COMPLETE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case ACTIONS.EDIT_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, edit: !todo.edit };
        }
        return todo;
      });
    case ACTIONS.UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.task, edit: false };
        }
        return todo;
      });
    default:
      return todos;
  }
}

function newToDo(task) {
  return {
    task: task,
    done: false,
    id: uuidv4(),
    edit: false,
  };
}