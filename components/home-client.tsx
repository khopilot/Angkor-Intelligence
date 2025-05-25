'use client';

import { Button } from '@/components/ui/button';
import StatsCounter from '@/components/ui/stats-counter';
import HeroParticles from '@/components/ui/hero-particles';
import AngkorOutline from '@/components/ui/angkor-outline';
import { Laptop2, Bot, Code2, Puzzle, Presentation, AlertTriangle, CheckCircle, Info, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { NewsArticle } from '@/lib/mdx';

interface HomeClientProps {
  newsArticles: NewsArticle[];
}

export default function HomeClient({ newsArticles }: HomeClientProps) {
  const [email, setEmail] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: string, content: string}[]>([]);

  const services = [
    { 
      icon: Laptop2, 
      title: "AI Strategy Consulting", 
      description: "We start where you are—then build a roadmap that 10×'s efficiency.",
      benefit: "Get clear direction and ROI projections for your AI journey."
    },
    { 
      icon: Bot, 
      title: "Custom Implementation", 
      description: "From data ingestion to production APIs.",
      benefit: "Khmer chatbots and predictive dashboards that actually drive action."
    },
    { 
      icon: Code2, 
      title: "AI Engineering & MLOps", 
      description: "Your model is only as good as the pipeline that supports it.",
      benefit: "Realtime retraining and CI/CD that keeps costs predictable."
    },
    { 
      icon: Puzzle, 
      title: "Agent Systems", 
      description: "Let agents handle repetitive ops while your team focuses on decisions.",
      benefit: "Automate report writing, lead scraping, and follow-ups."
    },
    { 
      icon: Presentation, 
      title: "Training & Upskilling", 
      description: "Hands-on workshops from prompt engineering to fine-tuning.",
      benefit: "98% of attendees deployed a chatbot within 3 weeks."
    }
  ];

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { role: 'user', content: chatInput },
      { role: 'assistant', content: 'សូមអរគុណសម្រាប់សំណួររបស់អ្នក។ យើងកំពុងអភិវឌ្ឍ។ (Thank you for your question. We are currently developing.)' }
    ];
    
    setChatMessages(newMessages);
    setChatInput('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90">
          <AngkorOutline />
          <HeroParticles />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 font-serif">
              Khmer Ingenuity Meets<br />Frontier AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We build real-world AI that speaks your language—literally.<br />
              Cambodia's first boutique AI consultancy for the ASEAN market.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                asChild 
                size="lg" 
                className="transform transition-transform active:translate-y-px active:shadow-lg"
              >
                <Link href="https://calendly.com/d/cq84-j6j-v64/30-minute-meeting?share_attribution=customize_once_and_share">Book a Discovery Call</Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg"
                className="transform transition-transform active:translate-y-px"
              >
                <Link href="/services">Explore Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Clients Call Us - Problem → Solution */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">The Problems We Solve</h2>
              <div className="space-y-6">
                {[
                  "Slow manual workflows drain productivity",
                  "English-only AI excludes 16 million Khmer speakers", 
                  "Data silos block intelligent automation"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold">
                      {problem.split(' ').map((word, j) => 
                        ['manual', 'workflows', 'English-only', 'AI', 'silos'].includes(word) ? 
                        <span key={j} className="text-primary">{word} </span> : 
                        word + ' '
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Our Solutions</h2>
              <div className="space-y-6">
                {[
                  "Khmer chatbots that understand context",
                  "LLM agents that automate workflows",
                  "RAG knowledge bases that scale expertise"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold">
                      {solution.split(' ').map((word, j) => 
                        ['Khmer', 'chatbots', 'LLM', 'agents', 'RAG', 'knowledge'].includes(word) ? 
                        <span key={j} className="text-primary">{word} </span> : 
                        word + ' '
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <p className="text-xl font-bold text-primary text-center">
                  "We turn messy data into quiet profit."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Snapshot */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions designed for Cambodian and ASEAN businesses
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="group border rounded-xl p-8 hover:ring-2 hover:ring-primary/20 transition-all duration-300 bg-card h-full flex flex-col"
              >
                <div className="text-center mb-6">
                  <service.icon className="w-12 h-12 mb-4 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm font-medium text-primary">{service.benefit}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    href="/services" 
                    className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Strip */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <StatsCounter value={12} label="SMEs automated" />
            <StatsCounter value={4} label="Industries served" />
            <StatsCounter value={1} label="Khmer LLM in progress" />
          </div>
        </div>
      </section>

      {/* Live Demo - Khmer LLM Alpha */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/60 dark:bg-background/60 backdrop-blur-xl rounded-2xl p-8 border">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold">Ask the Khmer LLM (Alpha)</h3>
                <Info className="w-5 h-5 text-muted-foreground cursor-help" />
              </div>
              
              <div className="space-y-4 mb-6 min-h-[200px] max-h-[300px] overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-muted-foreground py-12">
                    <p>Try asking a question in English or Khmer!</p>
                    <p className="text-sm mt-2">Example: "What is AI?" or "AI ជាអ្វី?"</p>
                  </div>
                ) : (
                  chatMessages.map((message, i) => (
                    <div key={i} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="Ask something in English or Khmer..."
                  className="flex-1 px-4 py-2 border rounded-lg bg-background"
                  maxLength={256}
                />
                <Button onClick={handleChatSubmit} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                Alpha quality. Do not rely for health or legal advice. Messages logged anonymously for model improvement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI News & Insights Feed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">AI News & Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with our latest thoughts on AI trends and practical implementations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="border rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-card"
              >
                <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full mb-4">
                  {article.metadata.tag}
                </span>
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{article.metadata.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.metadata.description}</p>
                <Link 
                  href={`/news/${article.slug}`} 
                  className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
                >
                  Read more →
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/news" className="text-primary hover:underline font-medium">
              View all insights →
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-8">Trusted by leading organizations</p>
            <div className="flex justify-center items-center gap-12 opacity-60 hover:opacity-80 transition-opacity">
              {['IFC', 'CamEd', 'Smart Axiata'].map((client, i) => (
                <div key={i} className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-help" title={`${client} - Engagement 2024-25`}>
                  {client}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Stay Ahead of AI</h2>
            <p className="text-xl text-muted-foreground mb-8">
              One practical AI idea every Friday – join 300+ Cambodian professionals already leveling-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border rounded-lg bg-background"
                aria-describedby="privacy-note"
              />
              <Button className="px-8">Subscribe</Button>
            </div>
            <p id="privacy-note" className="text-sm text-muted-foreground mt-4">
              We never spam. Unsubscribe anytime. <Link href="/privacy" className="text-primary hover:underline">Privacy policy</Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}