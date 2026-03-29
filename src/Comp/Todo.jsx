import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { markComplete, markIncomplete, removeTask,editTask } from '../../TodoSlice'

function todo(props) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task.text);

  const handleCompletion = (event) => {
    if (event.target.checked) {
      dispatch(markComplete({ id: props.task.id }));
    } else {
      dispatch(markIncomplete({ id: props.task.id }));
    }
  };

  const handleDeletion = () => {
    return dispatch(removeTask({id :props.task.id }));
  }

  const handleClick = () => {
    setEditedText(props.task.text);
    setIsEditing(true);
  }

  const handleEdit = () => {
    const nextText = editedText.trim();
    if (nextText === '') {
      return;
    }

    dispatch(editTask({ id: props.task.id, text: nextText }));
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        className="todo-check"
        type="checkbox"
        checked={props.task.iscomplete}
        onChange={handleCompletion}
      />
      {isEditing ? (
        <input
          className="task-input"
          type="text"
          value={editedText}
          onChange={(event) => setEditedText(event.target.value)}
        />
      ) : (
        <div className={`todo-text ${props.task.iscomplete ? 'todo-text-completed' : ''}`}>
          {props.task.text}
        </div>
      )}
      <div className="todo-actions">
        <button
          onClick={isEditing ? handleEdit : handleClick}
          className="todo-btn todo-btn-edit"
          type="button"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={handleDeletion} className="todo-btn todo-btn-delete" type="button">Delete</button>
      </div>
    </div>
  )
}

export default todo
