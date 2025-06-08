import React from "react";
import { FaTrash } from "react-icons/fa";

function ToDoItem(props) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",          // smaller gap for better mobile fit
        padding: "8px 12px",
        cursor: "default",
        maxWidth: "100%",     // full width on small screens
        flexWrap: "wrap",     // allow items to wrap if needed
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
          flexGrow: 1,
          flexShrink: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          marginTop: "4px",    // space if wrapped
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
          flexShrink: 0,
          padding: "4px",
          marginTop: "4px",    // consistent spacing if wrapped
        }}
        aria-label="Delete"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default ToDoItem;
