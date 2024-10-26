// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = hideCompleted ? tasks.filter(task => !task.completed) : tasks;

  return (
    <Router>
      <div>
        <Navbar />
        <h1>Task Manager</h1>
        <TaskForm addTask={addTask} />
        <div>
          <label>
            <input
              type="checkbox"
              checked={hideCompleted}
              onChange={() => setHideCompleted(!hideCompleted)}
            />
            Hide Completed Tasks
          </label>
        </div>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.mood} {task.task} - Priority: {task.priority} - {task.completed ? 'Completed' : 'Not Completed'}
              </span>
              <button onClick={() => toggleCompletion(index)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>

        <Footer />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* You can add other routes here */}
        </Routes>
      </div>

      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 5px 0;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          margin-left: 10px;
          padding: 5px 10px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </Router>
  );
}

export default App;
