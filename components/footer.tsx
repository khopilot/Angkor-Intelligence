import Link from 'next/link';
import { Linkedin, Github, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Media Mentions Strip */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-background/70 mb-6">Featured in</p>
            <div className="flex justify-center items-center gap-8 opacity-70">
              <span className="text-lg font-semibold">Phnom Penh Post</span>
              <span className="text-lg font-semibold">Khmer Times</span>
              <span className="text-lg font-semibold">Cambodia Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <Image 
                src="/ai-logo-nobg-2.png" 
                alt="AI Angkor Intelligence" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-lg text-background">AI Angkor Intelligence</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Cambodia's first boutique AI consultancy bringing Khmer-native solutions to the ASEAN market.
            </p>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-background/80 hover:text-background transition-colors">About</Link></li>
              <li><Link href="/services" className="text-background/80 hover:text-background transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-background/80 hover:text-background transition-colors">Projects</Link></li>
              <li><Link href="/careers" className="text-background/80 hover:text-background transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/news" className="text-background/80 hover:text-background transition-colors">AI Insights</Link></li>
              <li><Link href="/projects/khmer-llm" className="text-background/80 hover:text-background transition-colors">Khmer LLM FAQ</Link></li>
              <li><Link href="/press-kit" className="text-background/80 hover:text-background transition-colors">Press Kit</Link></li>
              <li><Link href="/documentation" className="text-background/80 hover:text-background transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-background/80">Phnom Penh, Cambodia</p>
                <p className="text-background/80">Remote consultations worldwide</p>
              </div>
              <div>
                <p className="text-background/80">hello@ai-angkor.com</p>
                <p className="text-background/80">+855 092 33 25 54</p>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="https://www.linkedin.com/in/nicolas-delrieu-a61a60224" className="text-background/80 hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://github.com/khopilot" className="text-background/80 hover:text-background transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://t.me/Nicolas110101" className="text-background/80 hover:text-background transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Khmer Ornamental Border */}
      <div className="border-t border-primary/30 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* Legal Row */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70 text-sm">
              © 2025 AI Angkor Intelligence. Powered by caffeine & code.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-background/70 hover:text-background transition-colors">Privacy</Link>
              <Link href="/terms" className="text-background/70 hover:text-background transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}