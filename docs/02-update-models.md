# Updating Models

The AI Angkor Intelligence chatbot supports multiple AI models. This guide explains how to update or add new models to the platform.

## Available Models

The chatbot currently supports the following models:

- Small model (GPT-4o-mini): Fast and efficient for lightweight tasks
- Large model (GPT-4o): More powerful for complex, multi-step tasks
- Reasoning model (DeepSeek): Specialized for advanced reasoning tasks
- Grok model (coming soon): X.AI's Grok model (currently using fallback)

## Adding or Updating Models

To add or update models, you'll need to modify the `lib/ai/models.ts` file:

```typescript
// lib/ai/models.ts
import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { customProvider } from 'ai';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o'),
    // Add your new model here
    'chat-model-new': openai('your-new-model'),
  },
  // ...
});

export const chatModels = [
  // ...
  // Add your new model to the UI
  {
    id: 'chat-model-new',
    name: 'New Model',
    description: 'Description of your new model',
  },
];
```

## Using Different Model Providers

The AI Angkor Intelligence platform is designed to work with multiple AI providers. To add a new provider:

1. Install the required package:
   ```bash
   pnpm add @ai-sdk/your-provider
   ```

2. Import and use the provider in `models.ts`:
   ```typescript
   import { yourProvider } from '@ai-sdk/your-provider';
   
   export const myProvider = customProvider({
     languageModels: {
       'chat-model-custom': yourProvider('model-name'),
       // ...
     },
   });
   ```

## Testing New Models

After adding a new model, test it thoroughly to ensure it works as expected with the AI Angkor Intelligence platform. Pay attention to:

- Response quality
- Response time
- Cost implications
- Compatibility with existing features

For assistance with integrating new models, contact the AI Angkor Intelligence support team.
