import React from "react";

const TaskList = () => {
  const tasks = [
    { id: 1, task: "Finish Web Development Assignment", priority: "High" },
    { id: 2, task: "Study for Upcoming UXD Quiz", priority: "Medium" },
    { id: 3, task: "Submit Capstone Project Draft", priority: "High" },
    { id: 4, task: "Read CSS Framework Research", priority: "Low" },
    { id: 5, task: "Group Meeting for Task Manager Project", priority: "Medium" },
  ];

  return (
    <div className="tasklist">
      <h2>Course Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.task}</span> - <strong>{task.priority} Priority</strong>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .tasklist {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          background-color: #f3f3f3;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          color: #333;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        .task-item {
          padding: 10px;
          background-color: #fff;
          margin-bottom: 10px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .task-item span {
          font-size: 16px;
        }
        .task-item strong {
          color: #444;
        }
      `}</style>
    </div>
  );
};

export default TaskList;











