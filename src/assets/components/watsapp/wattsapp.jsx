import React from 'react';
import './wattsapp.css'; // Ensure the CSS path is correct
import img from '../../assets/whatsapp.png'; // Path to your WhatsApp icon image

const WattsApp = () => {
  return (
    <a
      href="https://wa.me/919030006090?text=Hello%20Aryavarta%20Developers%20I%20need%20to%20Contact%20You🤝" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="wattsapp-button"
    >
      <img src={img} alt="WhatsApp" className="wattsapp-icon" />
      <div className="message-bubble">
        <div className="typing-effect">Message...</div>
      </div>
    </a>
  );
};

export default WattsApp;
