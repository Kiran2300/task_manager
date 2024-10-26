// src/components/TaskList.jsx
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Import an icon for the delete button

function TaskList({ tasks, toggleComplete, deleteTask, showCompleted }) {
  return (
    <div className="task-list">
      {tasks
        .filter((task) => showCompleted || !task.completed)
        .map((task, index) => (
          <div key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              aria-label={`Mark task "${task.task}" as completed`}
              className="task-checkbox"
            />
            <span className="task-text">
              {task.task} - Priority: {['Low', 'Medium', 'High'][task.priority - 1]}
            </span>
            <button onClick={() => deleteTask(index)} className="delete-button" aria-label={`Delete task "${task.task}"`}>
              <FaTrash />
            </button>
          </div>
        ))}
      
      <style jsx>{`
        .task-list {
          padding: 10px; /* Add padding to the task list */
          background-color: #f9f9f9; /* Background color to match the theme */
          border-radius: 8px; /* Rounded corners */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        }

        .task-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px; /* Spacing between tasks */
          padding: 10px; /* Padding for each task item */
          background-color: #ffffff; /* White background for each task */
          border: 1px solid #ddd; /* Light border */
          border-radius: 5px; /* Rounded corners */
          transition: background-color 0.3s; /* Smooth background transition */
        }

        .task-item:hover {
          background-color: #f1f1f1; /* Light gray on hover */
        }

        .task-checkbox {
          margin-right: 10px; /* Space between checkbox and text */
          cursor: pointer; /* Pointer cursor for better UX */
        }

        .task-text {
          flex: 1; /* Allow text to take available space */
          font-size: 16px; /* Consistent font size */
          color: #333; /* Text color */
          text-decoration: none; /* No underline */
        }

        .task-item.completed .task-text {
          text-decoration: line-through; /* Line-through for completed tasks */
          color: #888; /* Gray color for completed tasks */
        }

        .delete-button {
          background: none; /* Remove default button styles */
          border: none; /* Remove border */
          color: #e74c3c; /* Delete button color */
          cursor: pointer; /* Pointer cursor for better UX */
          transition: color 0.3s; /* Smooth color transition */
        }

        .delete-button:hover {
          color: #c0392b; /* Darker red on hover */
        }
      `}</style>
    </div>
  );
}

export default TaskList;
