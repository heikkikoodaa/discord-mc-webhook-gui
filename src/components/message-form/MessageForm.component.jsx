import { useState } from 'react';
import './MessageForm.styles.css';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    const { value } = event.target;

    setMessage(value);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    });
    const data = await response.json();

    if (data.status === 200) {
      alert('Message sent successfully!');
      setMessage('');
    }
  };

  return (
    <div className="message-form-container">
      <h2 className="text-center">Webhook message</h2>
      <form onSubmit={handleSendMessage} className="message-form">
        <textarea
          placeholder="Enter a Realms channel webhook message here"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        <button>Send message</button>
      </form>
    </div>
  );
};

export default MessageForm;
