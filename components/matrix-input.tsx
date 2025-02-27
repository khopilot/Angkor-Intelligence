'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from './ui/button';

interface MatrixInputProps {
  onSubmit: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MatrixInput({ onSubmit, placeholder = 'Type a message...', disabled = false }: MatrixInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state once on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSubmit(input);
      setInput('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const adjustHeight = useCallback(() => {
    if (!isMounted) return;
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      adjustHeight();
    }
  }, [input, isMounted, adjustHeight]);

  return (
    <div className="relative w-full">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-black/50 border border-green-500/30 rounded-lg py-3 pl-4 pr-12 text-white placeholder:text-green-300/50 focus:outline-none focus:ring-2 focus:ring-green-500/30 resize-none min-h-[50px] max-h-[200px] overflow-y-auto"
        rows={1}
      />
      <Button
        onClick={handleSubmit}
        disabled={!input.trim() || disabled}
        className="absolute right-2 bottom-2 bg-green-600 hover:bg-green-700 text-black p-2 rounded-md"
        aria-label="Send message"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </Button>
      
      {/* Matrix-style border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-green-300/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
    </div>
  );
} 