import React from "react";

const Home = () => {
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "3em 1em",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "2em",
    },
    h2: {
      fontSize: "36px",
      color: "#333",
      marginBottom: "0.5em",
    },
    p: {
      fontSize: "18px",
      color: "#555",
      lineHeight: "1.6",
      maxWidth: "700px",
      margin: "0 auto 2em",
    },
    h3: {
      fontSize: "28px",
      color: "#00796b",
      marginBottom: "1em",
    },
    ul: {
      listStyleType: "none",
      padding: "0",
      marginBottom: "2em",
    },
    li: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "1em",
      paddingLeft: "20px",
      position: "relative",
    },
    strong: {
      color: "#00796b",
    },
    bullet: {
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      width: "8px",
      height: "8px",
      backgroundColor: "#00796b",
      borderRadius: "50%",
    },
    callToAction: {
      textAlign: "center",
      marginTop: "2em",
      padding: "1em",
      backgroundColor: "#00796b",
      color: "#fff",
      borderRadius: "8px",
      fontSize: "20px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    callToActionHover: {
      backgroundColor: "#004d40",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.h2}>Welcome to TASK MANAGER 2</h2>
        <p style={styles.p}>
          Discover the next generation of task organization with <strong>TASK MANAGER 2</strong>, 
          your ultimate solution for managing daily tasks, deadlines, and long-term goals. Designed 
          for individuals, teams, and businesses, our app makes task management seamless and stress-free.
        </p>
      </div>
     
      <h3 style={styles.h3}>Key Features</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Quick Task Addition:</strong> Add tasks in seconds with our intuitive task input feature.
        </li>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Smart Task Prioritization:</strong> Organize tasks by priority, so you always know what to focus on first.
        </li>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Custom Reminders:</strong> Set reminders to keep track of important deadlines and appointments.
        </li>
      </ul>

      <h3 style={styles.h3}>Why TASK MANAGER 2?</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Efficiency:</strong> Designed to save you time, with a minimalistic design and smart features.
        </li>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Customization:</strong> Personalize your workspace with themes and task views that suit your style.
        </li>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Productivity Boost:</strong> Features like reminders, prioritization, and progress tracking help you stay focused.
        </li>
      </ul>

      <div style={styles.callToAction}>
        <h3>Get Started Today!</h3>
        <p>
          Ready to take control of your schedule? Sign up for TASK MANAGER 2 and experience how simple 
          task management can be. Stay organized, stay productive, and reach your goals effortlessly!
        </p>
      </div>
    </div>
  );
};

export default Home;
