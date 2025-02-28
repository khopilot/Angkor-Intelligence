import { motion } from 'framer-motion';
import Link from 'next/link';

import { Logo } from './logo';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <div className="flex flex-row justify-center">
          <Logo size={80} />
        </div>
        <h2 className="text-2xl font-bold">AI Angkor Intelligence Chatbot</h2>
        <p>
          Welcome to the AI Angkor Intelligence Chatbot platform. This advanced conversational AI 
          system is designed to provide intelligent responses and assist with a wide range of tasks.
        </p>
        <p>
          Start a conversation by typing a message below, or explore the various features 
          available in the sidebar.
        </p>
        <p className="text-sm text-muted-foreground">
          For support, please contact{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="mailto:support@aiangkor.com"
          >
            support@aiangkor.com
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
