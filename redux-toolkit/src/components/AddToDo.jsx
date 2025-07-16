import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";
import "./AddToDo.css";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitToDo = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  return (
    <form onSubmit={submitToDo} className="add-todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        className="add-todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
