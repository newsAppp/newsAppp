import React from "react";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! For any inquiries, please reach out to us at:
      </p>
      <p style={styles.email}>
        <a href="mailto:luckyrathore.hi@gmail.com">luckyrathore.hi@gmail.com</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  email: {
    fontSize: "18px",
  },
};

export default ContactUs;
