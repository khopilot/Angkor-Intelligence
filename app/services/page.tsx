'use client';

import { Button } from '@/components/ui/button';
import AccordionFAQ from '@/components/ui/accordion-faq';
import CircuitPattern from '@/components/ui/circuit-pattern';
import AngkorTexture from '@/components/ui/angkor-texture';
import { 
  Laptop2, 
  Bot, 
  Code2, 
  Puzzle, 
  Presentation,
  Download,
  Calendar,
  Award,
  Shield,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {

  const services = [
    {
      id: 'consulting',
      icon: Laptop2,
      title: 'AI Strategy Consulting',
      hook: 'Map pain-points → quantify ROI → pick the quickest win.',
      facts: 'Typical duration: 2 weeks • Deliverable: 25-page roadmap.',
      pain: 'Unclear where to start, fear of costly dead-ends.',
      deliverables: [
        'Current-state audit',
        'ROI forecast spreadsheet', 
        '6-month action roadmap',
        'Executive workshop'
      ],
      metric: 'Clients cut POC time by -40% on average',
      cta: 'Book Audit Sprint'
    },
    {
      id: 'implementation',
      icon: Bot,
      title: 'Custom AI Implementation',
      hook: 'From concept to production-ready AI systems.',
      facts: 'Timeline: 6-12 weeks • Stack: React, LangChain, Qdrant.',
      pain: 'Need proven AI solutions deployed at scale.',
      deliverables: [
        'Khmer chatbots',
        'RAG knowledge bases',
        'Vision models',
        'Production APIs'
      ],
      metric: 'Tourism client boosted lead capture +57%',
      cta: 'Start Implementation'
    },
    {
      id: 'engineering',
      icon: Code2,
      title: 'AI Engineering & MLOps',
      hook: 'Bulletproof pipelines for production AI systems.',
      facts: 'Focus: CI/CD, cost optimization • Platform: GCP, AWS.',
      pain: 'Models break in production, costs spiral out of control.',
      deliverables: [
        'Container hardening',
        'GPU autoscaling',
        'Nightly eval suites',
        'Cost monitoring'
      ],
      metric: 'Average 60% reduction in inference costs',
      cta: 'Optimize Pipeline'
    },
    {
      id: 'agents',
      icon: Puzzle,
      title: 'LLM Agent Systems',
      hook: 'Autonomous agents chaining reasoning + tools.',
      facts: 'Scope: Lead generation, research, reporting • Compliance: sandboxed.',
      pain: 'Repetitive tasks consuming valuable human time.',
      deliverables: [
        'Lead generation agents',
        'Research automation',
        'Report generation',
        'Human oversight controls'
      ],
      metric: '3x faster research and outreach workflows',
      cta: 'Deploy Agents'
    },
    {
      id: 'training',
      icon: Presentation,
      title: 'Training & Upskilling',
      hook: 'From prompt basics to fine-tuning mastery.',
      facts: 'Formats: 1-day exec brief, 3-day bootcamp • Materials included.',
      pain: 'Team lacks AI skills to execute internal projects.',
      deliverables: [
        'Executive briefings',
        '3-day hands-on bootcamp',
        'Curriculum materials',
        'Project mentoring'
      ],
      metric: '98% of alumni shipped a chatbot in < 3 weeks',
      cta: 'Book Training'
    }
  ];

  const engagementModels = [
    {
      model: 'Sprint Audit',
      duration: '2 weeks',
      bestFor: 'First-time AI adopters',
      price: 'USD 5–8k'
    },
    {
      model: 'MVP Build',
      duration: '6–10 weeks', 
      bestFor: 'Proven concept, need prod launch',
      price: 'USD 18–40k'
    },
    {
      model: 'Retainer',
      duration: '6–12 mo',
      bestFor: 'Scaling & optimization',
      price: 'from USD 4k/mo'
    }
  ];

  const deliverySteps = [
    { step: 'Discover', description: 'Deep-dive workshops to map current state and objectives' },
    { step: 'Prototype', description: 'Rapid MVP development with weekly demos' },
    { step: 'Deploy', description: 'Production rollout with monitoring and optimization' },
    { step: 'Optimize', description: 'Continuous improvement based on real usage data' }
  ];

  const toolchain = {
    models: ['OpenAI API', 'Claude', 'Ollama', 'NVIDIA NIM', 'LangChain', 'LlamaIndex', 'Ray Serve'],
    infrastructure: ['Postgres + pgvector', 'Qdrant', 'BigQuery', 'Cloud Run', 'Vercel', 'GCP Vertex'],
    devops: ['Terraform', 'GitHub Actions', 'Argo CD', 'Docker', 'Kubernetes']
  };

  const faqs = [
    {
      question: 'How long until we see ROI?',
      answer: 'Typical MVP deployment takes less than 60 days. We focus on quick wins that demonstrate value early, then build towards larger transformative projects.'
    },
    {
      question: 'Can you work with on-premises data only?',
      answer: 'Yes, we can deploy air-gapped pipelines and work within your security constraints. We have experience with SOC 2 compliance and strict data governance requirements.'
    },
    {
      question: 'What security certifications do you maintain?',
      answer: 'We maintain SOC 2 work-papers, use standard NDAs, implement code-signing practices, and follow enterprise security protocols for all client engagements.'
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes, we offer flexible retainer arrangements for ongoing optimization, monitoring, and feature development. Most clients continue with us post-launch.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in enterprise integrations and can work with your existing APIs, databases, and workflows to ensure seamless adoption.'
    },
    {
      question: 'What makes your approach different?',
      answer: 'We combine deep technical expertise with cultural understanding of the ASEAN market, plus our unique experience building the first Khmer-native LLM.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <AngkorTexture />
          <CircuitPattern />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 font-serif text-primary">
              From Idea to Impact:<br />End-to-End AI Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Strategy, engineering, and continuous optimization—delivered by the team building Cambodia's first Khmer LLM.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Button 
                asChild 
                size="lg" 
                className="transform transition-transform active:translate-y-px"
              >
                <Link href="https://calendly.com/d/cq84-j6j-v64/30-minute-meeting?share_attribution=customize_once_and_share">Schedule a Strategy Call</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transform transition-transform active:translate-y-px"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Service Deck (PDF)
              </Button>
            </div>
            
            {/* Badges Row */}
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5" />
                <span>AWS Partner</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5" />
                <span>NVIDIA Inception</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-5 h-5" />
                <span>OpenAI Solution Provider</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Snapshot Grid */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI solutions from strategy to deployment
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  borderBottomColor: '#D4AF7C',
                  borderBottomWidth: '4px'
                }}
                className="group border rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-card cursor-pointer border-b-2 border-b-transparent"
                onClick={() => scrollToSection(service.id)}
              >
                <service.icon className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm italic">"{service.hook}"</p>
                <p className="text-xs text-muted-foreground mb-6">{service.facts}</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>Read details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/5'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <div className="flex items-center gap-3 mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-destructive mb-2">The Pain Point</h3>
                    <p className="text-muted-foreground">{service.pain}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">What You Get</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-semibold text-primary">{service.metric}</p>
                  </div>
                  
                  <Button className="w-full md:w-auto">
                    {service.cta}
                  </Button>
                </div>
              </motion.div>
              
              {/* Illustration Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex items-center justify-center`}
              >
                <div className="w-full h-64 bg-muted/20 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <div className="text-center">
                    <service.icon className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                    <p className="text-muted-foreground/60 text-sm">Service Illustration</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Engagement Models Table */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Engagement Models</h2>
            <p className="text-xl text-muted-foreground">Flexible approaches to fit your timeline and budget</p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Model</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    <th className="px-6 py-4 text-left font-semibold">Price Guide*</th>
                  </tr>
                </thead>
                <tbody>
                  {engagementModels.map((model, i) => (
                    <motion.tr 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="border-t border-border hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold">{model.model}</td>
                      <td className="px-6 py-4 text-muted-foreground">{model.duration}</td>
                      <td className="px-6 py-4 text-muted-foreground">{model.bestFor}</td>
                      <td className="px-6 py-4 font-semibold text-primary">{model.price}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Price guide shows transparency; exact quote provided after scoping call
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Delivery Process</h2>
            <p className="text-xl text-muted-foreground">Proven methodology for AI project success</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {deliverySteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                      {i + 1}
                    </div>
                    {i < deliverySteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-px bg-border"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.step}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolchain & Certifications */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Toolchain</h2>
            <p className="text-xl text-muted-foreground">Enterprise-grade tools and frameworks</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Bot className="w-6 h-6 text-primary" />
                  Models & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolchain.models.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Data & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolchain.infrastructure.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  DevOps & Deployment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolchain.devops.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications & Partnerships
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">AWS Solutions Architect</div>
                    <div className="text-sm text-muted-foreground">Professional certification</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">GCP Professional ML Engineer</div>
                    <div className="text-sm text-muted-foreground">Machine learning expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Strip */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Proven Impact</h2>
            <p className="text-muted-foreground">Results that matter to your bottom line</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">42%</div>
              <p className="text-muted-foreground">Avg. call-center load reduction across 3 clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt; $0.7</div>
              <p className="text-muted-foreground">Median inference cost per 1k queries after optimization</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">≈ 94</div>
              <p className="text-muted-foreground">Mean CSAT score for deployed chatbots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Block */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/60 dark:bg-background/60 backdrop-blur-xl rounded-2xl p-8 border text-center">
              <h3 className="text-3xl font-bold mb-4">Still mapping your AI journey?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                Grab a free 30-minute strategy session with Nicolas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Free Strategy Call
                </Button>
                <Button variant="outline" size="lg">
                  <span>Or email us directly</span>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                No sales pitch. Just actionable insights for your specific use case.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about working with us</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <AccordionFAQ items={faqs} />
          </div>
          
          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl font-bold">Get the complete service overview</h3>
              <p className="text-muted-foreground">Download our detailed capabilities deck</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Service Deck
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Service deck last updated January 2025
          </p>
        </div>
      </section>
    </div>
  );
}