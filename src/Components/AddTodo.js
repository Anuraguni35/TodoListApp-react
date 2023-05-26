import React from 'react';
import './AddTodo.css';
const AddTodo = ({ todos, todoList, setTodos, setTodoList, setNotodos }) => {
  return (
    <div>
      <input
        className="inputTag"
        type="text"
        value={todos}
        onChange={(e) => {
          setTodos(e.target.value);
        }}
      />
      <button
        className="addBtn"
        onClick={() => {
          setTodoList([...todoList, todos]);
          setTodos('');
          setNotodos(false);
        }}
      >
        + Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
