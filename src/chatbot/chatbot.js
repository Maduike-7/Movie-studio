import React, { useState, useRef, useEffect } from 'react';

// import './general.css'



const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatInputRef = useRef(null);
  const chatBoxRef = useRef(null);

  const inputInitHeight = 32; // Set the initial height of the input box here
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace 'YOUR_API_KEY_HERE' with your actual API key

  useEffect(() => {
    chatInputRef.current.style.height = `${inputInitHeight}px`;
  }, []);

  const createChatLi = (message, className) => {
    return (
      <li className={`chatbot__chat ${className}`}>
        {className === 'outgoing' ? (
          <p>{message}</p>
        ) : (
          <>
            <span className="material-symbols-outlined">smart_toy</span>
            <p>{message}</p>
          </>
        )}
      </li>
    );
  };

  const generateResponse = () => {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        message: [{ role: 'user', content: userMessage }],
      }),
    };

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const responseMessage = data.choices[0].message.content;
        setMessages((prevMessages) => [
          ...prevMessages,
          createChatLi(responseMessage, 'incoming'),
        ]);
        chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
      })
      .catch((error) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          createChatLi('Oops! Please try again!', 'error'),
        ]);
        chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
        console.log(error);
      });
  };

  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;
    setUserMessage('');
    chatInputRef.current.style.height = `${inputInitHeight}px`;

    setMessages((prevMessages) => [
      ...prevMessages,
      createChatLi(trimmedMessage, 'outgoing'),
    ]);
    chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        createChatLi('Thinking...', 'incoming'),
      ]);
      chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
      generateResponse();
    }, 600);
  };

  const handleInputHeight = () => {
    chatInputRef.current.style.height = `${inputInitHeight}px`;
    chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <div className="chatbot">
      <button
        className="chatbot__button"
        onClick={() => document.body.classList.toggle('show-chatbot')}
      >
        Toggle Chatbot
      </button>
      <div className="chatbot__box" ref={chatBoxRef}>
        <ul className="chatbot__chat-list">
          {messages.map((message, index) => (
            <React.Fragment key={index}>{message}</React.Fragment>
          ))}
        </ul>
      </div>
      <div className="chatbot__input-box">
        <span className="chatbot__send-btn" onClick={handleChat}>
          Send
        </span>
        <textarea
          className="chatbot__textarea"
          ref={chatInputRef}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onInput={handleInputHeight}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
        />
      </div>
      <span
        className="chatbot__close-btn"
        onClick={() => document.body.classList.remove('show-chatbot')}
      >
        Close
      </span>
    </div>
  );
};

export default Chatbot;