import React from "react";
import "./style.css";

import TodoCard from './TodoCard';

export default function TodoList(props) {
  return (
    <ul>
      <TodoCard todos={props.todos}/>
    </ul>
  );
}
