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
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "3em 1em",
      backgroundColor: "#f8f9fa",
    },
    header: {
      textAlign: "center",
      marginBottom: "2em",
    },
    h2: {
      fontSize: "36px",
      color: "#333",
    },
    p: {
      fontSize: "18px",
      color: "#555",
      maxWidth: "700px",
      margin: "0 auto",
    },
    form: {
      backgroundColor: "#fff",
      padding: "2em",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      marginBottom: "3em",
    },
    formGroup: {
      marginBottom: "1.5em",
    },
    label: {
      display: "block",
      fontSize: "16px",
      color: "#333",
      marginBottom: "0.5em",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      color: "#333",
      backgroundColor: "#f4f4f4",
      transition: "border-color 0.3s ease",
    },
    inputFocus: {
      borderColor: "#00796b",
      backgroundColor: "#fff",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "16px",
      color: "#333",
      backgroundColor: "#f4f4f4",
      transition: "border-color 0.3s ease",
      resize: "none",
    },
    button: {
      backgroundColor: "#00796b",
      color: "#fff",
      border: "none",
      padding: "12px 30px",
      fontSize: "18px",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#004d40",
      transform: "translateY(-3px)",
    },
    contactInfo: {
      backgroundColor: "#fff",
      padding: "2em",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    ul: {
      listStyleType: "none",
      padding: "0",
    },
    li: {
      marginBottom: "1em",
    },
    a: {
      color: "#00796b",
      textDecoration: "none",
    }
  };

  return (
    <div style={styles.container}>
      <section style={styles.contact}>
        <div style={styles.header}>
          <h2 style={styles.h2}>Contact Us</h2>
          <p style={styles.p}>If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.</p>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
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
              placeholder="Enter the subject"
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
              placeholder="Write your message here"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style = styles.buttonHover)}
          >
            Send Message
          </button>
        </form>
      </section>

      <section style={styles.contactInfo}>
        <h3>Reach Us</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Email: <a href="mailto:kp3344550@gmail.com" style={styles.a}>kp3344550@gmail.com</a>
          </li>
          <li style={styles.li}>
            Phone: <a href="tel:+19059622308" style={styles.a}>+1 905-962-2308</a>
          </li>
          <li style={styles.li}>Address: 7 Wooliston Crescent, Brampton, ON</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
