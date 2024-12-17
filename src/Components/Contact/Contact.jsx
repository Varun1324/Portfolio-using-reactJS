import React, { useState } from 'react';
import './Contact.css';
import { Button } from 'evergreen-ui';

function Contact() {
  const [formData, setFormData] = useState({
    userEmail: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPassword = prompt('please enter your app password:');
    if (!userPassword) {
      alert('Password is required!');
      return;
    }

    const { userEmail, subject, message } = formData;

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, subject, message, userPassword }),
      });

      const result = await response.json();
      alert(result.message);

      // Clear the form
      setFormData({ userEmail: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send email.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact-section">
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit} id="myform">
        <div className="formGroup">
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>
        <div className="formGroup">
          <fieldset>
            <legend>Subject</legend>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>
        <div className="formGroup">
          <fieldset>
            <legend>Message</legend>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </fieldset>
        </div>
        <div className="formGroup">
          <Button type="submit" marginRight={16} appearance="primary" intent="success">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
