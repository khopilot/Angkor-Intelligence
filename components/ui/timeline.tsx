'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-start gap-4"
          >
            {/* Timeline dot */}
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm z-10">
              {item.year}
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-3">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {item.description && (
                <p className="text-muted-foreground mt-1">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}