import React from "react";
import { FaTrash } from "react-icons/fa";
import "../styles/styles.css"


function ToDoItem(props) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.onToggle(props.id)}
        onClick={(e) => e.stopPropagation()}
        className="todo-checkbox"
      />

      <span
        onClick={() => props.onToggle(props.id)}
        className={`todo-text ${props.completed ? "completed" : ""}`}
      >
        {props.text}
      </span>

      <button
        onClick={() => props.onDelete(props.id)}
        className="delete-button"
        aria-label="Delete"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default ToDoItem;
