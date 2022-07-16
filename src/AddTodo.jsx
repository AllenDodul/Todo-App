import React,{useState} from "react";
import "./style.css";

export default function AddTodo(props) {
  const [todo, setTodo] = useState('');

  const handleForm = (e) =>{
    e.preventDefault();
    props.getTodo(todo);
  }
  
  const handleInput = (e) =>{
    setTodo(e.target.value);
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Add Todo" onChange={handleInput} value={todo}/>
      <button>Add</button>
    </form>
  );
}
