import React, { useState } from "react";
import List from "./List";

// var AllthingsTodo = [];

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  // var AllthingsTodo = [];

  function handleClick(event) {
    const next = event.target.name;
    console.log(event.target);
    console.log(next);
    // console.log(todo);
    setItems(prevValue => {
      return [...prevValue, todo];
    });
    setTodo("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setTodo(prevValue => {
      return newValue;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          value={todo}
          name="todoItem"
          placeholder="what's next??"
          type="text"
        />
        <button onClick={handleClick}>
          <span name={todo}>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(List)}</ul>
      </div>
    </div>
  );
}

export default App;
