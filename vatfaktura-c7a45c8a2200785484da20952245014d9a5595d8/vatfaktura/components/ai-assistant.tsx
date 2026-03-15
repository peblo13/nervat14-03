'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AIChat } from './ai-chat';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white`}
        aria-label={isOpen ? 'Zamknij asystenta' : 'Otwórz asystenta'}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            <h2 className="font-bold text-lg">Asystent VAT Faktura</h2>
            <p className="text-sm opacity-90">Jestem tu, aby Ci pomóc</p>
          </div>
          <AIChat onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
