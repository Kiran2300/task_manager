import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2em",
      backgroundColor: "#f7f9fc",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "2em",
    },
    h2: {
      fontSize: "32px",
      color: "#333",
    },
    p: {
      fontSize: "16px",
      color: "#555",
      lineHeight: "1.5",
      marginBottom: "1.5em",
    },
    form: {
      backgroundColor: "#fff",
      padding: "2em",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    formGroup: {
      marginBottom: "1.5em",
    },
    label: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "0.5em",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      marginBottom: "5px",
      transition: "border-color 0.3s",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      resize: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    contactInfo: {
      textAlign: "center",
      marginTop: "2em",
      padding: "1em",
      borderTop: "1px solid #ccc",
    },
    contactItem: {
      marginBottom: "1.5em",
      fontSize: "16px",
      color: "#333",
    },
    a: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
    },
    aHover: {
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.h2}>Get in Touch</h2>
        <p style={styles.p}>We'd love to hear from you! Fill out the form below to reach us.</p>
      </header>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="John Doe"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="you@example.com"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
            placeholder="Subject of your message"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Type your message here..."
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Send Message
        </button>
      </form>

      <section style={styles.contactInfo}>
        <h3 style={{ fontSize: "24px", marginBottom: "1em" }}>Contact Details</h3>
        <div style={styles.contactItem}>
          <strong>Email:</strong>{" "}
          <a href="mailto:kp3344550@gmail.com" style={styles.a}>kp3344550@gmail.com</a>
        </div>
        <div style={styles.contactItem}>
          <strong>Phone:</strong>{" "}
          <a href="tel:+19059622308" style={styles.a}>+1 905-962-2308</a>
        </div>
        <div style={styles.contactItem}>
          <strong>Address:</strong> 7 Wooliston Crescent, Brampton, ON
        </div>
      </section>
    </div>
  );
};

export default Contact;
