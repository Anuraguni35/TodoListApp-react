import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './CompleteList.css';
import VerifiedIcon from '@mui/icons-material/Verified';

const CompleteList = ({
  todoList,
  completeList,
  setTodoList,
  setCompleted,
  noTodos,
  setNotodos,
}) => {
  const handleDelete = (val) => {
    let list = completeList;
    let newList = list.filter((e) => {
      return e !== val;
    });
    setCompleted(newList);
  };
  const handleUndo = (val) => {
    let list = completeList;
    let newList = list.filter((e) => {
      return e !== val;
    });
    setCompleted(newList);
    setTodoList([...todoList, val]);
  };
  return (
    <Grid container spacing={2}>
      {completeList.map((element, index) => {
        return (
          <Grid key={index} xs={4}>
            <div className="CompleteCards">
              <div className="CompleteTag">
                Completed
                <VerifiedIcon />
              </div>
              {element}
              <div className="CompleteCard_btnSec">
                <button
                  onClick={() => {
                    handleUndo(element);
                  }}
                  className="UndoBtn"
                >
                  Undo
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

export default CompleteList;
