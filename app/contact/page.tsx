import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare, Send, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h1>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Organization</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select className="w-full px-3 py-2 border rounded-md bg-background">
                  <option>&lt; $10k</option>
                  <option>$10k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground">
                  Phnom Penh, Cambodia<br />
                  Available for remote consultations worldwide
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <Link href="tel:+85592332554" className="text-muted-foreground hover:text-primary transition-colors">
                      +855 092 33 25 54
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <Link href="https://wa.me/85592332554" className="text-muted-foreground hover:text-primary transition-colors">
                      WhatsApp: +855 092 33 25 54
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-primary" />
                    <Link href="https://t.me/Nicolas110101" className="text-muted-foreground hover:text-primary transition-colors">
                      Telegram: @Nicolas110101
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-primary" />
                    <Link href="https://github.com/khopilot" className="text-muted-foreground hover:text-primary transition-colors">
                      GitHub: khopilot
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for Google Map */}
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Google Map Embed</p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to schedule a call?
                </p>
                <Link href="https://calendly.com/d/cq84-j6j-v64/30-minute-meeting?share_attribution=customize_once_and_share">
                  <Button variant="outline" className="w-full">
                    Book 30-min Discovery Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}