export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          AI Chat Boilerplate
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A modern AI chat application built with Next.js 15
        </p>
        <div className="mt-8">
          <a
            href="/chat"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Start Chatting
          </a>
        </div>
      </div>
    </div>
  );
} 