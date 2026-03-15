'use client';

import React from 'react';
import { MessageCircle, User } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isAssistant = role === 'assistant';

  return (
    <div className={`flex gap-2 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      {isAssistant && (
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
          <MessageCircle size={16} />
        </div>
      )}
      <div
        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
          isAssistant
            ? 'bg-blue-100 text-blue-900 rounded-bl-none'
            : 'bg-gray-700 text-white rounded-br-none'
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
      {!isAssistant && (
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center">
          <User size={16} />
        </div>
      )}
    </div>
  );
}
