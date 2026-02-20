import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us</h2>

        {sent && (
          <p className="success-message">
            Message was sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;