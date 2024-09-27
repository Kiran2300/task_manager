import React, { useState } from 'react';
import './Task.css';  // Import the CSS for Task component

function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);

  // Toggle the completed status of the task
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  // A placeholder function for deleting the task
  const handleDelete = () => {
    alert(`Task "${task.title}" deleted!`);
  };

  return (
    <li className={`task ${isCompleted ? 'completed' : ''}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <button className="complete" onClick={handleComplete}>
          {isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Task;
