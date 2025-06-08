import React from "react";
import { FaTrash } from "react-icons/fa";

function ToDoItem(props) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",              // equal gap between all 3 elements
        padding: "8px 12px",
        cursor: "default",
        maxWidth: "600px",        // optional max width for better layout control
      }}
    >
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.onToggle(props.id)}
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: "pointer", flexShrink: 0 }}
      />

      <span
        onClick={() => props.onToggle(props.id)}
        style={{
          textDecoration: props.completed ? "line-through" : "none",
          userSelect: "none",
          cursor: "pointer",
          flexGrow: 1,         // text takes remaining space
          flexShrink: 1,       // text can shrink if needed
          minWidth: 0,         // allows text to shrink properly in flex container
          overflowWrap: "break-word",  // break long words to prevent overflow
        }}
      >
        {props.text}
      </span>

      <button
        onClick={() => props.onDelete(props.id)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#ff4d4d",
          fontSize: "18px",
          flexShrink: 0,       // prevent button from shrinking
          padding: "4px",
        }}
        aria-label="Delete"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default ToDoItem;
