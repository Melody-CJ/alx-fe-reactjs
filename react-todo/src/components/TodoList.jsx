// src/components/TodoList.jsx
import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
    { id: 3, text: 'Write Tests', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id, e) => {
    e.stopPropagation();
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
          data-testid="todo-input"
        />
        <button type="submit" className="add-button" data-testid="add-button">
          Add Todo
        </button>
      </form>

      <ul className="todo-list" data-testid="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
            data-testid={`todo-item-${todo.id}`}
          >
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={(e) => deleteTodo(todo.id, e)}
              className="delete-button"
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="todo-stats">
        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        <p>Pending: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;