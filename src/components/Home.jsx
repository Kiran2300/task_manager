import React from "react";

const Home = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2em 1em",
      backgroundColor: "#f9f9f9", // Lighter background for contrast
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      marginBottom: "2em", // Added margin to separate from footer
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5em",
    },
    title: {
      fontSize: "28px",
      color: "#333",
    },
    subtitle: {
      fontSize: "16px",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto 1em",
    },
    featureList: {
      listStyleType: "none",
      padding: "0",
      margin: "2em 0",
    },
    featureItem: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "1em",
      position: "relative",
      paddingLeft: "25px",
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
      fontSize: "18px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      display: "inline-block", // Center button-style block
    },
    footer: {
      textAlign: "center",
      padding: "1em",
      backgroundColor: "#00796b",
      color: "#fff",
      position: "relative", // Position relative to avoid overlap
      marginTop: "2em", // Ensure footer has space above
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome to TASK MANAGER 3</h2>
          <p style={styles.subtitle}>
            Effortlessly manage your tasks and boost productivity with our user-friendly app.
          </p>
        </div>

        <h3 style={{ ...styles.title, margin: "1.5em 0" }}>Key Features</h3>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>
            <span style={styles.bullet}></span>
            Quick task addition to streamline your workflow.
          </li>
          <li style={styles.featureItem}>
            <span style={styles.bullet}></span>
            Smart prioritization to help you focus on what matters.
          </li>
          <li style={styles.featureItem}>
            <span style={styles.bullet}></span>
            Custom reminders to keep you on track.
          </li>
        </ul>

        <div style={styles.callToAction}>
          <h3>Get Started!</h3>
          <p>
            Sign up today and take control of your tasks. Stay organized and achieve your goals with ease!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
