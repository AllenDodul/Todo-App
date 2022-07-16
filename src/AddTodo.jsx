import React from "react";
import "./style.css";

export default function AddTodo() {
  return (
    <form>
      <input type="text" placeholder="Add Todo" />
      <button>Add</button>
    </form>
  );
}
