import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ 
        role: 'assistant', 
        content: "Hello! I'm your software license assistant. How can I help you today?" 
      }]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      if (!genAI) {
        throw new Error('API key is missing');
      }

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }]
        }))
      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();
      
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (err) {
      console.error('Chat error:', err);
      setError(err.message);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: err.message === 'API key is missing' 
          ? 'Chat functionality is currently unavailable. Please contact support.'
          : 'I apologize, but I\'m having trouble connecting right now. Please try again later or contact our support team.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white dark:bg-[#1A0F0A] rounded-lg shadow-xl w-96 h-[500px] flex flex-col"
          >
            <div className="p-4 border-b border-[#D4B483] dark:border-[#B38B5A] flex justify-between items-center">
              <h3 className="font-semibold text-[#4A2C2A] dark:text-[#D4B483]">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#4A2C2A] dark:text-[#D4B483] hover:text-[#2C1810] dark:hover:text-[#F5E6D3]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-[#4A2C2A] text-white'
                        : 'bg-[#F5E6D3] dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483]'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#F5E6D3] dark:bg-[#2C1810] rounded-lg p-3">
                    <Loader2 className="w-5 h-5 text-[#4A2C2A] dark:text-[#D4B483] animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-[#D4B483] dark:border-[#B38B5A]">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-[#D4B483] dark:border-[#B38B5A] bg-white dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] focus:ring-2 focus:ring-[#D4B483] dark:focus:ring-[#B38B5A] focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-[#4A2C2A] hover:bg-[#2C1810] dark:bg-[#D4B483] dark:hover:bg-[#B38B5A] text-white rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-[#4A2C2A] hover:bg-[#2C1810] dark:bg-[#D4B483] dark:hover:bg-[#B38B5A] text-white rounded-full p-4 shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default ChatWidget;