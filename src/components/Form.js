// Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks for empty fields
        if (!name) {
            alert('Please fill in name field.');
            return;
        }
        if (!email) {
            alert('Please fill in email field.');
            return;
        }
        if (!message) {
            alert('Please fill in message text.');
            return;
        }
    
        console.log('Submitted:', { name, email, message });
    
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
      };


  return (

    <div>
      <h2 className="form-title">Send Feedback</h2>
    
        <form className="custom-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter a name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter an email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here.."
                rows="4"
            />

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Form;
