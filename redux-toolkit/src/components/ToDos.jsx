import { useSelector, useDispatch } from "react-redux";
import './ToDos.css';
import { removeToDo } from "../features/todo/todoSlice";


const ToDos = () => {

const todos = useSelector(state => state.todos);
const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <div className="todos-title">ToDos</div>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span>{todo.text}</span>
            <button className="remove-todo-btn" onClick={() => dispatch(removeToDo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDos