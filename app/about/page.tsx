'use client';

import { Button } from '@/components/ui/button';
import AccordionFAQ from '@/components/ui/accordion-faq';
import AngkorCollage from '@/components/ui/angkor-collage';
import GlyphCloud from '@/components/ui/glyph-cloud';
import { 
  Zap,
  TrendingUp,
  Eye,
  Heart,
  RotateCcw,
  Download,
  Calendar,
  Linkedin,
  Award,
  Shield,
  Users,
  Play,
  ExternalLink,
  Mail,
  Target
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);

  const values = [
    {
      title: 'Innovation',
      proof: 'Weekly prototypes & R&D sprints keep us ahead of the curve.',
      icon: Zap,
      anecdote: 'We open-sourced our vector-DB scripts so local students could learn.'
    },
    {
      title: 'Practical Impact',
      proof: 'If a feature doesn\'t move a KPI, we rip it out.',
      icon: TrendingUp,
      anecdote: 'Removed 40% of features from our first chatbot to focus on what users actually needed.'
    },
    {
      title: 'Transparency',
      proof: 'Open code repos, clear pricing, no black-box magic.',
      icon: Eye,
      anecdote: 'All our pricing is public. No hidden fees, no surprise overages.'
    },
    {
      title: 'Respect for Khmer Culture',
      proof: 'Language first, heritage always: Khmer copy, Khmer UI, Khmer datasets.',
      icon: Heart,
      anecdote: 'We work with Khmer linguists to ensure cultural authenticity in every model.'
    },
    {
      title: 'Continuous Learning',
      proof: 'Monthly team "Failure Fridays" share mistakes—then fix them.',
      icon: RotateCcw,
      anecdote: 'Last month we learned why our model was biased against rural dialects—and fixed it.'
    }
  ];

  const timeline = [
    {
      year: 2019,
      title: 'Freelance Experiments',
      description: 'Nicolas builds first tourism-chatbot prototype on Facebook.',
      image: null
    },
    {
      year: 2023,
      title: 'AI Angkor Intelligence Incorporated',
      description: 'First two SME deployments; company registered in Phnom Penh.',
      image: null
    },
    {
      year: 2024,
      title: 'Institutional Consulting',
      description: 'Institut Français du Cambodge engagement; hospital virtual-assistant POC.',
      image: null
    },
    {
      year: 2025,
      title: 'Khmer LLM Project Kick-off',
      description: 'Public-private coalition formed; corpus collection begins.',
      image: null
    },
    {
      year: 2030,
      title: 'Target Vision',
      description: 'Southeast-Asia AI hub, 1,000 clients, 10,000 trained professionals.',
      image: null
    }
  ];

  const team = [
    {
      name: 'Nicolas Delrieu',
      role: 'Founder & Lead Consultant',
      bio: 'Full-stack dev & AI consultant with 15 yrs in hospitality tech.',
      fullBio: 'Nicolas started as a web developer in France before moving to Cambodia in 2019. He specializes in making AI accessible to non-technical stakeholders and has deployed chatbots for hotels, hospitals, and government agencies across Southeast Asia.',
      funFact: 'Speaks 4 languages and can debug code while riding a motorcycle.',
      linkedin: 'https://www.linkedin.com/in/nicolas-delrieu-a61a60224',
      avatar: null
    },
    {
      name: 'Sokha Chea',
      role: 'AI Engineer',
      bio: 'ML specialist focused on Southeast Asian language models.',
      fullBio: 'Sokha graduated from RUPP with a degree in Computer Science and completed an ML fellowship at Stanford. She leads our technical team and specializes in training multilingual models for low-resource languages.',
      funFact: 'Has contributed to 3 open-source NLP libraries and maintains a blog on Khmer NLP.',
      linkedin: '#',
      avatar: null
    },
    {
      name: 'Linda Sorn',
      role: 'Data Lead',
      bio: 'Data scientist specializing in Khmer corpus curation.',
      fullBio: 'Linda has a Master\'s in Linguistics from the University of Sydney and returned to Cambodia to work on language preservation through technology. She oversees all data collection and cleaning for our Khmer LLM project.',
      funFact: 'Can identify 12 different Khmer dialects and has digitized 500+ hours of oral history.',
      linkedin: '#',
      avatar: null
    },
    {
      name: 'Vannak Lim',
      role: 'Operations Lead',
      bio: 'Business operations & client success manager.',
      fullBio: 'Vannak brings 8 years of consulting experience from PwC Cambodia. He ensures our projects stay on time and budget while maintaining the highest quality standards.',
      funFact: 'Former national chess champion and can solve a Rubik\'s cube in under 60 seconds.',
      linkedin: '#',
      avatar: null
    }
  ];

  const processPoints = [
    'Lean Discovery → Prototype in ≤ 10 days → Ship to Prod',
    'Async-first; daily 15-min stand-ups; weekly retrospective',
    '"Red-Team Fridays" for security & safety tests of all models',
    'Open-source first: contribute back to the community',
    'Cultural review: every model tested by native Khmer speakers'
  ];

  const processFaqs = [
    {
      question: 'Do you hire interns?',
      answer: 'Yes! We offer 3-month paid internships for computer science students from Cambodian universities. We\'ve mentored 12 students who now work at tech companies across ASEAN.'
    },
    {
      question: 'Remote vs on-site work?',
      answer: 'We\'re hybrid by default. Core hours are 9-12 PM Phnom Penh time for collaboration, but most work can be done remotely. We meet in person for sprint planning and client presentations.'
    },
    {
      question: 'Open-source contribution policy?',
      answer: 'We contribute 20% of our development time to open-source projects, especially those benefiting Khmer language processing. All team members get Friday afternoons for open-source work.'
    }
  ];

  const pressItems = [
    {
      outlet: 'Phnom Penh Post',
      title: 'Cambodia\'s AI Pioneers to Watch 2025',
      url: '#'
    },
    {
      outlet: 'Khmer Times', 
      title: 'Khmer LLM Aims to Close Digital Divide',
      url: '#'
    },
    {
      outlet: 'Cambodia ICT Awards',
      title: 'Best AI Innovation 2024 - Finalist',
      url: '#'
    }
  ];

  const scrollToTeam = () => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Identity Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0">
          <AngkorCollage />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 font-serif text-primary">
              Who We Are & Why We Build
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Mission-driven technologists bringing Khmer language and culture to the heart of modern AI.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Button 
                onClick={scrollToTeam}
                size="lg" 
                className="transform transition-transform active:translate-y-px"
              >
                <Users className="w-5 h-5 mr-2" />
                Connect With The Team
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transform transition-transform active:translate-y-px"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Culture Deck
              </Button>
            </div>
            
            {/* Badge Strip */}
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-sm" aria-label="SOC 2 compliance in progress">
                <Shield className="w-5 h-5" />
                <span>SOC 2 in-progress</span>
              </div>
              <div className="flex items-center gap-2 text-sm" aria-label="NVIDIA Inception partner">
                <Award className="w-5 h-5" />
                <span>NVIDIA Inception</span>
              </div>
              <div className="flex items-center gap-2 text-sm" aria-label="AWS Partner certification">
                <Award className="w-5 h-5" />
                <span>AWS Partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & North-Star Metric */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Democratise advanced AI for Cambodian and ASEAN organisations.
                    We solve real problems—not science-fair demos—so local businesses 
                    and institutions can compete globally.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Khmer at the heart of every digital experience.
                    By 2030 every Cambodian should be able to learn, work and create 
                    with AI—in their own language.
                  </p>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">North-Star Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">10,000+</div>
                      <div className="text-sm text-muted-foreground">professionals trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">1,000</div>
                      <div className="text-sm text-muted-foreground">businesses empowered</div>
                    </div>
                  </div>
                  <div className="text-center mt-2 text-sm text-muted-foreground">by 2030</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <GlyphCloud />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group border rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-card cursor-pointer"
                title={value.anecdote}
              >
                <value.icon className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.proof}</p>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-muted-foreground italic">{value.anecdote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story Timeline */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">From prototype to production</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <div className="flex gap-8 min-w-max px-4 md:grid md:grid-cols-5 md:min-w-0 md:px-0">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-64 md:w-auto text-center"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-4">
                        {item.year}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-16 w-full h-px bg-border"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet The Team</h2>
            <p className="text-xl text-muted-foreground">The humans behind the AI</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(212, 175, 124, 0.1)" }}
                className="group border rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-card cursor-pointer text-center"
                onClick={() => setSelectedTeamMember(selectedTeamMember === i ? null : i)}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {member.name === 'Nicolas Delrieu' ? (
                    <Image 
                      src="/niko-web-imasge.jpeg" 
                      alt="Nicolas Delrieu" 
                      width={80} 
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Users className="w-10 h-10 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                {selectedTeamMember === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t pt-4 mt-4"
                  >
                    <p className="text-sm text-muted-foreground mb-3">{member.fullBio}</p>
                    <p className="text-xs text-primary italic mb-3">Fun fact: {member.funFact}</p>
                  </motion.div>
                )}
                
                <Link 
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">Process & culture that delivers results</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Process Principles</h3>
              <ul className="space-y-4">
                {processPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="w-full h-64 bg-muted/20 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                <div className="text-center">
                  <Play className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground/60 text-sm">90-sec Office Video</p>
                  <p className="text-xs text-muted-foreground/40">Remote stand-ups, whiteboard sketches</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Team FAQ</h3>
            <AccordionFAQ items={processFaqs} />
          </div>
        </div>
      </section>

      {/* Media & Recognition */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Media & Recognition</h2>
            <p className="text-xl text-background/70">Featured across ASEAN tech media</p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Press Coverage</h3>
              <div className="space-y-4">
                {pressItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link 
                      href={item.url}
                      className="block p-4 border border-background/20 rounded-lg hover:bg-background/5 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-background/60 text-sm">{item.outlet}</div>
                          <div className="font-semibold group-hover:text-primary transition-colors">{item.title}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-background/40 group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Downloads</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent border-background/20 text-background hover:bg-background/10">
                  <Download className="w-4 h-4 mr-2" />
                  Press Kit (ZIP)
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent border-background/20 text-background hover:bg-background/10">
                  <Download className="w-4 h-4 mr-2" />
                  One-Pager PDF
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Recent Mentions</h3>
              <ul className="space-y-3 text-sm text-background/70">
                <li>"Cambodia's AI Pioneers to Watch 2025" (ICTWatch)</li>
                <li>"Khmer LLM Aims to Close Digital Divide" (ASEAN Tech)</li>
                <li>"Best AI Innovation 2024" (Cambodia ICT Awards - Finalist)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/60 dark:bg-background/60 backdrop-blur-xl rounded-2xl p-8 border text-center relative overflow-hidden">
              {/* Khmer border pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <pattern id="khmer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 20 Q20 12 28 20 Q20 28 12 20" fill="currentColor" opacity="0.3" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#khmer-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to put Khmer-centric AI to work?</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss how AI can transform your organization while respecting your culture.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://calendly.com/d/cq84-j6j-v64/30-minute-meeting?share_attribution=customize_once_and_share">
                    <Button size="lg" className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Book a Discovery Call
                    </Button>
                  </Link>
                  <Button variant="ghost" size="lg" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Sponsor the Khmer LLM
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AI Angkor Intelligence",
            "description": "Cambodia's first boutique AI consultancy building chatbots, LLM agent systems and bespoke automations for ASEAN SMEs and institutions.",
            "url": "https://ai-angkor.com",
            "foundingDate": "2023",
            "founders": [
              {
                "@type": "Person",
                "name": "Nicolas Delrieu",
                "jobTitle": "Founder & Lead Consultant"
              }
            ],
            "employee": team.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role
            })),
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Phnom Penh",
              "addressCountry": "Cambodia"
            }
          })
        }}
      />
    </div>
  );
}