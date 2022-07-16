import React,{useState} from "react";
import "./style.css";

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const dummyTodos = ['Breakfast' ,'Homework'];

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);

  const getTodo = (todo) =>{
    setTodos([...todos,todo]);
  }

  return (
    <div>
      <AddTodo getTodo={getTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}