'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur border-b supports-[backdrop-filter]:bg-background/60' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/ai-logo-nobg-2.png" 
            alt="AI Angkor Intelligence" 
            width={40} 
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-lg hidden sm:block">AI Angkor Intelligence</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Button asChild size="sm">
            <Link href="https://calendly.com/d/cq84-j6j-v64/30-minute-meeting?share_attribution=customize_once_and_share">Book Call</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
}