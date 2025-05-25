'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
}

export default function AccordionFAQ({ items }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="font-semibold">{item.question}</h3>
            <ChevronDown 
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div 
              id={`faq-answer-${index}`}
              className="px-6 pb-4 text-muted-foreground"
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}