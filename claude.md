# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint checks
- `pnpm type-check` - Run TypeScript type checking without emitting files
- `pnpm db:generate` - Generate Drizzle database schema
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio for database management
- `pnpm db:push` - Push schema changes to database

## Architecture Overview

This is a Next.js 15 application being transformed from an AI chat boilerplate into the AI Angkor Intelligence consultancy website. The codebase uses:

### Core Stack
- **Framework**: Next.js 15 with App Router and Turbo mode
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js v5
- **AI Integration**: Vercel AI SDK with multi-provider support (OpenAI, X.AI, Fireworks)
- **Deployment**: Configured for Vercel

### Key Architectural Patterns
- App Router with TypeScript
- Server components by default
- Client components marked with 'use client'
- Database operations through Drizzle ORM
- Absolute imports using `@/*` path mapping
- Dark theme forced globally via ThemeProvider

### Content Strategy
- **MDX-driven content**: All page content should be stored in `/content/en/*.mdx` files
- **Componentized design**: Reusable components for Timeline, StatsCounter, Steps, AccordionFAQ
- **Framer Motion**: Used for animations and micro-interactions
- **Responsive masonry layouts**: For news feeds and project showcases

### Project Transformation Context
The current codebase is a basic AI chat boilerplate that needs to be transformed into a full consultancy website for AI Angkor Intelligence, Cambodia's first boutique AI consultancy. The transformation involves:

1. **Content-driven architecture**: Moving from hardcoded content to MDX-based pages
2. **Brand transformation**: From generic AI chat to Khmer-focused AI consultancy
3. **Service showcase**: Highlighting consulting, implementation, and Khmer LLM development
4. **Lead generation**: Contact forms, newsletter signup, and clear CTAs

### Component Conventions
- Use shadcn/ui components as the foundation
- Maintain the `cn()` utility for className merging (in `lib/utils.ts`)
- Follow existing dark theme patterns
- Use Lucide React icons for consistency
- Implement proper TypeScript typing

### Environment Requirements
- Node.js >= 18.0.0
- pnpm as package manager
- PostgreSQL database
- Required environment variables: AUTH_SECRET, OPENAI_API_KEY, DATABASE_URL, BLOB_READ_WRITE_TOKEN

### Quality Standards
- Run `pnpm type-check` before commits
- Maintain strict TypeScript configuration
- Use proper semantic HTML and accessibility patterns
- Target Lighthouse 90+ mobile performance
- Follow existing code style and naming conventions