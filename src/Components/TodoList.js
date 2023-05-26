import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './TodoList.css';
const TodoList = ({
  todoList,
  completeList,
  setTodoList,
  setCompleted,
  noTodos,
  setNotodos,
}) => {
  const handleDelete = (val) => {
    let list = todoList;
    let newList = list.filter((e) => {
      return e !== val;
    });
    setTodoList(newList);
  };

  const handleComplete = (val) => {
    let list = todoList;
    let newList = list.filter((e) => {
      return e !== val;
    });
    setTodoList(newList);
    setCompleted([...completeList, val]);
  };
  return (
    <Grid container spacing={2}>
      {todoList.map((element, index) => {
        return (
          <Grid key={index} xs={4}>
            <div className="todoCard">
              <div className="todoCard_head">#Task {index + 1}-</div>
              <div className="todoCard_content">{element}</div>
              <div className="todoCard_btnSec">
                <button
                  onClick={() => {
                    handleComplete(element);
                  }}
                  className="MarkDone"
                >
                  Mark as done
                </button>
                <button
                  onClick={() => {
                    handleDelete(element);
                  }}
                  className="delete_Btn"
                >
                  delete
                </button>
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TodoList;
