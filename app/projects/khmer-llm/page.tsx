import { Button } from '@/components/ui/button';

export default function KhmerLLMPage() {
  const roadmapSteps = [
    { step: 1, title: "Data Collection", status: "completed", description: "50M+ tokens of high-quality Khmer text" },
    { step: 2, title: "Preprocessing", status: "in-progress", description: "Cleaning and tokenization pipeline" },
    { step: 3, title: "Model Architecture", status: "pending", description: "Transformer design optimization" },
    { step: 4, title: "Initial Training", status: "pending", description: "Base model training phase" },
    { step: 5, title: "Fine-tuning", status: "pending", description: "Task-specific optimization" },
    { step: 6, title: "Public Release", status: "pending", description: "Open-source model release" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Building Cambodia's First Khmer-Native Large Language Model
          </h1>
          <p className="text-xl text-muted-foreground">
            A public-good AI for 16 million voices.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why It Matters */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Why It Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2%</div>
                <p className="text-muted-foreground">Khmer content online</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">16M</div>
                <p className="text-muted-foreground">Khmer speakers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <p className="text-muted-foreground">Native Khmer LLMs</p>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Development Roadmap</h2>
            <div className="space-y-6">
              {roadmapSteps.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                    item.status === 'completed' ? 'bg-green-500 text-white' :
                    item.status === 'in-progress' ? 'bg-yellow-500 text-white' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className={`px-2 py-1 text-xs rounded ${
                    item.status === 'completed' ? 'bg-green-100 text-green-800' :
                    item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {item.status.replace('-', ' ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Stack */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Technical Architecture</h2>
            <div className="border rounded-lg p-8 bg-muted/50">
              <div className="text-center text-muted-foreground">
                Technical architecture diagram will be displayed here
                <br />
                <span className="text-sm">/images/khmer-llm-arch.svg</span>
              </div>
            </div>
          </section>

          {/* Get Involved */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Button className="h-auto p-6 flex-col">
                <span className="font-semibold mb-2">Sponsor a Compute Node</span>
                <span className="text-sm opacity-80">Help fund training infrastructure</span>
              </Button>
              <Button variant="outline" className="h-auto p-6 flex-col">
                <span className="font-semibold mb-2">Donate Data</span>
                <span className="text-sm opacity-80">Contribute Khmer text datasets</span>
              </Button>
              <Button variant="outline" className="h-auto p-6 flex-col">
                <span className="font-semibold mb-2">Join Research Slack</span>
                <span className="text-sm opacity-80">Collaborate with our team</span>
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How big will the model be?", a: "We're targeting 7B-13B parameters for optimal performance-efficiency balance." },
                { q: "What's the licensing?", a: "Open-source under Apache 2.0 license for maximum accessibility." },
                { q: "How do you ensure safety?", a: "Comprehensive bias testing and safety evaluations throughout development." }
              ].map((faq, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}