import React from "react";
import "./style.css";

export default function TodoCard(props) {
  return (
    <div>
      {props.todos.map((todo,idx)=> <li key={idx}>{todo}</li>)}
    </div>
  );
}
