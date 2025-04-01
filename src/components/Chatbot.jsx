import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { processDocument, sendChatMessage } from '../services/gemini';
import { readDocument } from '../services/documentService';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isInitialized) {
      initializeChat();
    }
  }, [isOpen, isInitialized]);

  const initializeChat = async () => {
    try {
      setIsLoading(true);
      await readDocument(); 
      
      setMessages([{ 
        type: 'bot', 
        content: "👋 Hello! I'm your AI assistant for Dr. DV Ramana's portfolio. How can I help you today? Feel free to ask me anything about his experience, achievements, or expertise!" 
      }]);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing chat:', error);
      setMessages([{ 
        type: 'bot', 
        content: "👋 Hello! I'm here to help you learn about Dr. DV Ramana. How can I assist you today?" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(userMessage, messages);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: '😔 I encountered an error. Please try asking your question again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message) => {
    const sanitizedHtml = DOMPurify.sanitize(marked(message.content));
    const isBot = message.type === 'bot';
    
    return (
      <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
        {isBot && (
          <div className="w-8 h-8 mr-2 rounded-full bg-accent-color/20 backdrop-blur-sm flex items-center justify-center">
            <FaRobot className="text-accent-color text-sm" />
          </div>
        )}
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`
            max-w-[80%] rounded-2xl p-4 shadow-lg
            ${isBot 
              ? 'bg-gradient-to-br from-gray-700 to-gradient-end/90 backdrop-blur-lg shadow-3xl border-gray-400' 
              : 'bg-accent-color text-bg-primary'
            }
          `}
        >
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }} 
          />
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 group z-50"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative z-50">
          <div className="absolute inset-0 rounded-full z-50 bg-accent-color blur-lg group-hover:blur-xl transition-all" />
          <div className="relative w-14 h-14 rounded-full z-50 bg-accent-color flex items-center justify-center shadow-lg">
            <FaRobot className="text-2xl text-bg-primary" />
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-bg-primary/80 backdrop-blur-xl  rounded-2xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-gradient-start/30 to-gradient-end/30 border-b border-border-color backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-accent-color/50 blur-md" />
                    <div className="relative w-10 h-10 rounded-full bg-accent-color flex items-center justify-center">
                      <FaRobot className="text-bg-primary text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">AI Assistant</h3>
                    <p className="text-sm opacity-70">Always here to help</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gradient-start/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>
            </div>

            {/* Chat Messages */}
            <div 
              className="flex-1 p-4 overflow-y-auto scroll-smooth"
              ref={chatRef}
              style={{ scrollbarWidth: 'thin' }}
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {renderMessage(message)}
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-center p-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaSpinner className="text-2xl text-accent-color" />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gradient-to-r from-gradient-start/30 to-gradient-end/30 border-t border-gray-400 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 p-3 rounded-xl bg-bg-primary/50  focus:outline-none focus:border-accent-color transition-colors placeholder-text-primary/50"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-3 rounded-xl bg-accent-color text-bg-primary hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className={`${isLoading ? 'opacity-0' : 'opacity-100'}`} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;