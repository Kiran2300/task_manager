import React from "react";

const About = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2em 1em",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5em",
    },
    title: {
      fontSize: "32px",
      color: "#333",
      marginBottom: "0.5em",
    },
    paragraph: {
      fontSize: "16px",
      color: "#555",
      lineHeight: "1.6",
      maxWidth: "700px",
      margin: "0 auto 1.5em",
    },
    subheading: {
      fontSize: "24px",
      color: "#00796b",
      marginBottom: "0.5em",
    },
    featureList: {
      listStyleType: "none",
      padding: "0",
      marginBottom: "1.5em",
    },
    featureItem: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "0.5em",
      paddingLeft: "20px",
      position: "relative",
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
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>About Task Manager</h2>
        <p style={styles.paragraph}>
          Task Manager is your essential tool for organizing and prioritizing tasks, designed to simplify your busy life and help you achieve your goals.
        </p>
      </div>

      <h3 style={styles.subheading}>Features</h3>
      <ul style={styles.featureList}>
        <li style={styles.featureItem}>
          <span style={styles.bullet}></span>
          Customizable Task Lists: Tailor your task lists to fit your priorities.
        </li>
        <li style={styles.featureItem}>
          <span style={styles.bullet}></span>
          Smart Deadline Tracking: Get reminders and track your progress effortlessly.
        </li>
        <li style={styles.featureItem}>
          <span style={styles.bullet}></span>
          Collaboration Tools: Share tasks and manage group projects seamlessly.
        </li>
      </ul>

      <h3 style={styles.subheading}>Our Team</h3>
      <p style={styles.paragraph}>
        We are a passionate team of developers and designers committed to making task management intuitive and effective. Join us in enhancing your productivity journey!
      </p>
    </div>
  );
};

export default About;
