import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Message } from '../types';
import { marked } from 'marked';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  const icon = isBot ? (
    <Bot size={20} aria-label="Bot" />
  ) : (
    <MessageCircle size={20} aria-label="User" />
  );

  return (
    <div 
      className={`flex gap-4 p-4 rounded-lg ${isBot ? 'bg-gray-50' : ''} transition-colors duration-200`} 
      role="listitem"
    >
      <div 
        className={`w-10 h-10 rounded-full flex items-center justify-center 
          ${isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <div className="font-medium text-sm mb-1">
          {isBot ? 'CDP Assistant' : 'You'}
        </div>
        <div 
          className="text-gray-700 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: marked(message.content, { breaks: true }) 
          }}
        />
      </div>
    </div>
  );
};
