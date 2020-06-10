import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }
    return (
        <div>
            <TodoForm addTodo={addTodo}/>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div className="todo" key="index">
                        {todo.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList
