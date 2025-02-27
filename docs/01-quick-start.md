# Quick Start

The AI Angkor Intelligence chatbot is an advanced web application designed to provide intelligent conversational capabilities for your business needs. This platform is built with modern technologies to ensure performance, scalability, and ease of use.

### Pre-requisites:

- GitHub/GitLab/Bitbucket account
- API Key from OpenAI
- PostgreSQL database
- Node.js 18 or later

### Installation

To set up the AI Angkor Intelligence chatbot:

1. Clone the repository from your version control system:

```bash
git clone https://github.com/<username>/<repository>
cd <repository>
pnpm install
```

2. Set up your environment variables in a `.env.local` file:

```
AUTH_SECRET=your_auth_secret
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
BLOB_READ_WRITE_TOKEN=your_blob_token
```

3. Start the development server:

```bash
pnpm dev
```

The AI Angkor Intelligence chatbot will be available at `http://localhost:3000`.

### Deployment

For production deployment, build the application:

```bash
pnpm build
pnpm start
```

Contact the AI Angkor Intelligence team for assistance with cloud deployment options.
