# AI Chat Application Boilerplate

A modern, full-stack AI chat application built with Next.js 15, featuring authentication, database integration, and multiple AI provider support.

## Features

- 🤖 Multi-provider AI chat (OpenAI, X.AI, Fireworks)
- 🔐 Secure authentication system
- 💾 Persistent chat history
- 🎨 Modern, responsive UI
- 🌙 Dark theme optimized
- 📱 Mobile-friendly design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js v5
- **UI**: Tailwind CSS + Radix UI components
- **AI**: Vercel AI SDK with multiple provider support
- **Deployment**: Vercel

## Getting Started

1. **Clone and install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys and database URL.

3. **Set up the database**
   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Authentication secret
AUTH_SECRET=your-auth-secret

# AI Provider API Keys
OPENAI_API_KEY=your-openai-key
XAI_API_KEY=your-xai-key (optional)
FIREWORKS_API_KEY=your-fireworks-key (optional)

# Database
DATABASE_URL=your-database-url

# Blob storage (for file uploads)
BLOB_READ_WRITE_TOKEN=your-blob-token
```

## Development

- **Linting**: `pnpm lint`
- **Formatting**: `pnpm format`
- **Database Studio**: `pnpm db:studio`
- **Type Checking**: `pnpm build`

## Deployment

The application is configured for deployment on Vercel. Simply connect your repository to Vercel and set the environment variables in the dashboard.

## License

MIT License 