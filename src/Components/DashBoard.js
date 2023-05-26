import React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import TodoList from './TodoList.js';
import CompleteList from './CompleteList.js';
import AddTodo from './AddTodo.js';
import './DashBoard.css';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const DashBoard = () => {
  const [todos, setTodos] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [completeList, setCompleted] = useState([]);
  const [noTodos, setNotodos] = useState(true);
  return (
    <div className="DashBoard">
      <h1 className="heading1">Todo </h1>
      <h1 className="heading2"> List</h1>
      <p>What do you want to get done today?</p>

      <AddTodo
        todos={todos}
        todoList={todoList}
        setTodos={setTodos}
        setTodoList={setTodoList}
        setNotodos={setNotodos}
      />
      <h3 className="taskListHeading">TaskList</h3>
      {noTodos == true && (
        <h4 className="noTasks">
          No Tasks added yet
          <SentimentDissatisfiedIcon />
        </h4>
      )}
      <TodoList
        todoList={todoList}
        completeList={completeList}
        setTodoList={setTodoList}
        setCompleted={setCompleted}
        noTodos={noTodos}
        setNotodos={setNotodos}
      />
      <CompleteList
        todoList={todoList}
        completeList={completeList}
        setTodoList={setTodoList}
        setCompleted={setCompleted}
        noTodos={noTodos}
        setNotodos={setNotodos}
      />
    </div>
  );
};

export default DashBoard;
