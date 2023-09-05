import React, { useState, useEffect } from "react";
import './MessageBar.css'

const MessageBar = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // Hide the message after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [message, onClose]);

  return (
    <div className={`message-bar ${visible ? "visible" : "hidden"}`}>
      <p>{message}</p>
    </div>
  );
};

export default MessageBar;
