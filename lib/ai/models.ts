import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
// Import commented out due to type compatibility issues
// import { xai } from '@ai-sdk/xai';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

// Main provider without Grok
export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o'),
    'chat-model-reasoning': wrapLanguageModel({
      // Using OpenAI model instead of Fireworks to avoid type compatibility issues
      model: openai('gpt-4o'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': openai('gpt-4o-mini'),
    'artifact-model': openai('gpt-4o-mini'),
    // For Grok integration, see docs/grok-integration.md
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

// Grok provider is implemented in a separate file
// See lib/ai/grok-provider.ts and docs/grok-integration.md

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'Apsara Model',
    description: 'Swift and graceful like the celestial dancers of Angkor',
  },
  {
    id: 'chat-model-large',
    name: 'Bayon Model',
    description: 'Powerful and detailed like the many faces of Bayon Temple',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Preah Vihear Model',
    description: 'Elevated wisdom from the mountain temple of knowledge',
  },
  // Grok model kept in UI but will use OpenAI as fallback until integration is complete
  {
    id: 'chat-model-grok',
    name: 'Tonlé Sap Model',
    description: 'Adaptable intelligence that flows with changing conditions',
  },
];
