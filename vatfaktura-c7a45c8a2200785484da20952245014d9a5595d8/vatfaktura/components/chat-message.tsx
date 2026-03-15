'use client';

import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import { UIMessage } from 'ai';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content?: string;
  parts?: UIMessage['parts'];
}

export function ChatMessage({ role, content, parts }: ChatMessageProps) {
  const isAssistant = role === 'assistant';
  
  // Extract text from parts array if present (AI SDK 6 format)
  let displayContent = content;
  if (!displayContent && parts) {
    displayContent = parts
      .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
      .map((p) => p.text)
      .join('');
  }

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
        <p className="whitespace-pre-wrap break-words">{displayContent}</p>
      </div>
      {!isAssistant && (
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center">
          <User size={16} />
        </div>
      )}
    </div>
  );
}
