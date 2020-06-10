import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
  }

  const handleChange = (e) => setValue(e.target.value);
  return (
    <form action="" onSubmit={handleSubmit}>
        <input
            type="text"
            ClassName="todoInput"
            value={value}
            onChange={handleChange}
            /><br/>
            <button type="submit">Submit</button>
    </form>
  );
}
