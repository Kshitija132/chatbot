import React, { useState, useEffect } from 'react';
import { MessageSquareCode } from 'lucide-react';
import { Message, CDPs } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { generateResponse } from './utils/chatbot';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `Hello! I'm your CDP Assistant. I can help you with questions about:

${CDPs.map(cdp => `- **${cdp.name}**: ${cdp.description}`).join('\n')}

How can I assist you today?`,
      timestamp: new Date()
    }
  ]);

  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    // Add user message to state
    setMessages(prev => [...prev, userMessage]);

    // Show bot typing indicator
    setIsBotTyping(true);

    // Generate bot response asynchronously
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateResponse(content),
        timestamp: new Date()
      };

      // Update messages with bot response and stop typing indicator
      setMessages(prev => [...prev, botResponse]);
      setIsBotTyping(false);
    }, 1000); // Simulate delay for bot response (can replace with actual async logic)
  };

  useEffect(() => {
    // Auto scroll to the latest message
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <MessageSquareCode className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">CDP Support Assistant</h1>
            <p className="text-sm text-gray-500">
              Ask me anything about Segment, mParticle, Lytics, or Zeotap
            </p>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div
        id="chat-container"
        className="flex-1 overflow-y-auto px-4 py-8 space-y-6 max-w-4xl mx-auto"
      >
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {/* Bot typing indicator */}
        {isBotTyping && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t p-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
