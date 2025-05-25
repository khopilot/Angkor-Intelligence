import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "SmartHospital Chatbot",
      year: "2025",
      context: "Phnom Penh private hospital's hotline overloaded.",
      solution: "Tri-lingual GPT-4 via secure RAG.",
      impact: "↓ call volume 42%, ↑ patient NPS +28",
      tags: ["LLM", "Healthcare"],
      slug: "smart-hospital"
    },
    {
      title: "Khmer-Native LLM",
      year: "2024-2025",
      context: "Building Cambodia's first Khmer-native large language model.",
      solution: "Public-good AI for 16 million voices.",
      impact: "50M+ tokens processed, open research",
      tags: ["LLM", "Research"],
      slug: "khmer-llm"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Projects
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <strong>Context:</strong> {project.context}
                </div>
                <div>
                  <strong>Solution:</strong> {project.solution}
                </div>
                <div>
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}