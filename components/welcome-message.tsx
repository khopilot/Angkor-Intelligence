'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Logo } from './logo';

export function WelcomeMessage() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state once on client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // During SSR or before hydration, render a static version
  if (!isMounted) {
    return (
      <div className="max-w-3xl mx-auto mt-12 mb-8 px-4">
        <div className="rounded-xl p-6 flex flex-col gap-6 bg-black/50 backdrop-blur-md border border-green-500/30 shadow-lg">
          <div className="flex items-center justify-center gap-4">
            <div className="size-12"></div>
            <h1 className="text-3xl font-bold text-green-400">AI Angkor Intelligence</h1>
          </div>
          <div className="space-y-4 text-center">
            <p className="text-green-300">
              សួស្តី (Sua s&apos;dei)! Welcome to the AI Angkor Intelligence Chatbot.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-3xl mx-auto mt-12 mb-8 px-4"
    >
      <div className="rounded-xl p-6 flex flex-col gap-6 bg-black/50 backdrop-blur-md border border-green-500/30 shadow-lg">
        <div className="flex items-center justify-center gap-4">
          <Logo size={60} />
          <h1 className="text-3xl font-bold text-green-400">AI Angkor Intelligence</h1>
        </div>
        
        <div className="space-y-4 text-center">
          <p className="text-green-300">
            សួស្តី (Sua s&apos;dei)! Welcome to the AI Angkor Intelligence Chatbot.
          </p>
          
          <p className="text-white">
            This advanced AI system is designed to assist with a wide range of tasks, 
            from answering questions about Cambodian culture to helping with code, 
            document creation, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-green-400 font-semibold mb-2">Features</h3>
              <ul className="text-white text-sm space-y-1 text-left">
                <li>• Multiple AI models for different tasks</li>
                <li>• Document creation and editing</li>
                <li>• Code generation and execution</li>
                <li>• Weather information</li>
                <li>• Secure chat history</li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-green-400 font-semibold mb-2">Try Asking</h3>
              <ul className="text-white text-sm space-y-1 text-left">
                <li>• &quot;Tell me about Angkor Wat&quot;</li>
                <li>• &quot;Write code for a simple calculator&quot;</li>
                <li>• &quot;What&apos;s the weather in Phnom Penh?&quot;</li>
                <li>• &quot;Create a document about Cambodian cuisine&quot;</li>
                <li>• &quot;Help me plan a trip to Cambodia&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 