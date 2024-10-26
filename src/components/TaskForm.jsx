// src/components/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(1);
  const [mood, setMood] = useState('😊'); // Default mood
  const maxChars = 50; // Max characters allowed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ task, priority: Number(priority), completed: false, mood });
    setTask('');
    setPriority(1);
    setMood('😊'); // Reset mood
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Enter new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
          maxLength={maxChars}
        />
        <div className="char-count">
          {`${maxChars - task.length} characters remaining`}
        </div>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="mood-select"
        >
          <option value="😊">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😞">Sad</option>
          <option value="😠">Angry</option>
        </select>
        <button type="submit" className="add-task-button">Add Task</button>
      </form>

      <style jsx>{`
        .task-form {
          display: flex;
          align-items: center;
          gap: 15px; /* Increased gap for better spacing */
          margin-bottom: 20px;
          padding: 15px; /* Adjusted padding for a balanced look */
          border: 1px solid #ddd; /* Use a lighter shade if your site uses light backgrounds */
          border-radius: 8px;
          background-color: #ffffff; /* Match background to the overall site */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
        }

        .task-input {
          flex: 1;
          padding: 10px; /* Increased padding for a comfortable feel */
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px; /* Increased font size for better readability */
          transition: border-color 0.3s; /* Smooth transition for focus effect */
        }

        .task-input:focus {
          border-color: #4CAF50; /* Focus color matching the button */
          outline: none; /* Remove default outline */
        }

        .priority-select, .mood-select {
          padding: 10px; /* Increased padding */
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px; /* Increased font size */
          background-color: #f9f9f9; /* Match the overall form background */
        }

        .add-task-button {
          padding: 10px 15px;
          background-color: #4CAF50; /* Primary button color */
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .add-task-button:hover {
          background-color: #45A049; /* Darker shade on hover */
        }

        .char-count {
          font-size: 14px; /* Adjusted font size */
          color: #888; /* Softer color for better integration */
        }
      `}</style>
    </div>
  );
}

export default TaskForm;
