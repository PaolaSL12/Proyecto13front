import { useEffect } from 'react';
import './Message.css'

const Message = ({ message, type, clearMessage }) => {

    useEffect(() => {

      const timer = setTimeout(() => {
        clearMessage();
      }, 34535000);
  
      return () => clearTimeout(timer);
    }, [message, clearMessage]);
  
    if (!message) return null;
  
    return (
      <div className={`message-box ${type}`}>
        {message}
      </div>
    );
  };
  
  export default Message;