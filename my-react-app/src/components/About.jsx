import React from "react";

const About = () => {
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "3em 1em",
      backgroundColor: "#f1f1f1",
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
        <h2 style={styles.h2}>About</h2>
        <p style={styles.p}>
          Welcome to Task Manager, your ultimate tool for organizing, tracking, and prioritizing tasks. Our platform was born out of a simple need: to help people streamline their busy lives and achieve their goals effortlessly. 
          We believe that a well-organized life is the key to unlocking personal and professional potential.
        </p>
      </div>

      <h3 style={styles.h3}>Our Features</h3>
      <p style={styles.p}>
        Task Manager is packed with features that cater to users from all walks of life. Whether you're a student balancing assignments, a freelancer managing multiple clients, or a busy parent keeping track of errands, we’ve got you covered.
        Key features include:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Customizable Task Lists:</strong> Create, edit, and prioritize tasks based on urgency or importance.
        </li>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Smart Deadline Tracking:</strong> Stay on top of your deadlines with automatic reminders and visual progress indicators.
        </li>
        <li style={styles.li}>
          <span style={styles.bullet}></span>
          <strong style={styles.strong}>Collaboration Tools:</strong> Share tasks with teammates, assign responsibilities, and track group progress in real-time.
        </li>
      </ul>
  
      <h3 style={styles.h3}>Our Team</h3>
      <p style={styles.p}>
        We are a group of passionate developers, designers, and productivity enthusiasts, each with our own story of how better task management has changed our lives. Our diverse backgrounds in technology, psychology, and design help us approach task management in a way that’s not just functional but also thoughtful and user-friendly.
      </p>
      
      <p style={styles.p}>
        Join us on this journey to better organization, focus, and productivity. Task Manager is more than just a tool—it’s a partner in your success.
      </p>
    </div>
  );
};

export default About;
