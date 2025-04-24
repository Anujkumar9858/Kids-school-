import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaComment } from 'react-icons/fa';
import './ChatWithUs.css';
import './App.css'; // Assuming you have a global CSS file for styles

const ChatWithUs = () => {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  // Show chat bubble after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setChatOpen(false);
      }
    };

    if (chatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatOpen]);

  const handleChatButtonClick = () => {
    setChatOpen(!chatOpen); // Toggle chat
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
      
      // Simulate bot response after 1 second
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for your message! Our team will get back to you soon.", 
          sender: "bot" 
        }]);
      }, 1000);
    }
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              type: 'spring',
              bounce: 0.5,
            }}
            className="chat-bubble"
            ref={chatRef}
          >
            {!chatOpen ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleChatButtonClick}
                className="bubble-button"
              >
                <FaComment className="chat-icon" /> Chat with us
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="chat-interface"
              >
                <div className="chat-header">
                  <h4>Chat Support</h4>
                  <button 
                    onClick={() => setChatOpen(false)}
                    className="close-button"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <div className="chat-body">
                  <div className="welcome-message">
                    <p>Hello! How can we help you today?</p>
                  </div>
                  
                  {messages.map((msg, index) => (
                    <div 
                      key={index} 
                      className={`message ${msg.sender}`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSendMessage} className="chat-footer">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoFocus
                  />
                  <button type="submit">
                    <FaPaperPlane className="send-icon" />
                  </button>
                </form>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWithUs;