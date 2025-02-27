# Integrating Grok with the AI Angkor Intelligence Chatbot

This document outlines the steps needed to properly integrate X.AI's Grok model with the AI Angkor Intelligence Chatbot platform.

## Current Challenges

There are currently type compatibility issues between the AI packages when trying to integrate Grok directly into the existing provider setup. This is due to version mismatches between the dependencies.

## Integration Steps

To properly integrate Grok, follow these steps:

1. **Install specific compatible versions of AI packages**:
   ```bash
   pnpm add ai@4.1.44 @ai-sdk/openai@1.1.12 @ai-sdk/fireworks@0.1.12 @ai-sdk/xai@1.1.12
   ```

   If compatibility issues persist, try:
   ```bash
   pnpm add ai@latest @ai-sdk/openai@latest @ai-sdk/fireworks@latest @ai-sdk/xai@latest
   ```

2. **Set up your X.AI API key**:
   Add your X.AI API key to the `.env.local` file:
   ```
   XAI_API_KEY=your_xai_api_key_here
   ```

3. **Ensure TypeScript configuration is correct**:
   Make sure your `tsconfig.json` has `"skipLibCheck": true` in the compiler options to bypass type checking in node_modules.

4. **Uncomment the Grok provider code**:
   Once you've resolved the compatibility issues, uncomment the code in `lib/ai/grok-provider.ts`.

5. **Modify the chat component**:
   Update your chat component to conditionally use the Grok provider when the Grok model is selected.

## Troubleshooting Compatibility Issues

If you continue to experience compatibility issues:

1. **Isolate the Grok provider**:
   Keep the Grok provider in a separate file and only import it when needed.

2. **Use type assertions if necessary**:
   In extreme cases, you might need to use TypeScript's `as any` to bypass type checking for specific components.

3. **Check for version conflicts**:
   Run `pnpm list @ai-sdk/provider` to see if multiple versions of the provider package are installed.

4. **Clean and reinstall**:
   Try removing node_modules and reinstalling:
   ```bash
   rm -rf node_modules
   pnpm install
   ```

## Example Implementation

Here's a simplified example of how to implement a separate provider for Grok:

```typescript
// lib/ai/grok-provider.ts
import { xai } from '@ai-sdk/xai';
import { customProvider } from 'ai';

export const grokProvider = customProvider({
  languageModels: {
    'grok-model': xai('grok-beta'),
    'grok-2': xai('grok-2-1212'),
  },
});
```

Then in your chat component:

```typescript
// In your chat component
import { myProvider } from '@/lib/ai/models';
import { grokProvider, getGrokFallbackModel } from '@/lib/ai/grok-provider';

// When sending a message
let provider = myProvider;
let modelId = selectedModel;

// Try to use Grok if selected
try {
  if (selectedModel === 'chat-model-grok') {
    // Import dynamically to avoid errors if Grok is not properly configured
    const { grokProvider } = await import('@/lib/ai/grok-provider');
    provider = grokProvider;
    modelId = 'grok-model';
  }
} catch (error) {
  console.error('Error using Grok provider, falling back to OpenAI:', error);
  modelId = getGrokFallbackModel(selectedModel);
}

// Use the appropriate provider and model
const { messages } = await streamText({
  model: provider.languageModel(modelId),
  // other options...
});
```

## Available Grok Models

X.AI offers several Grok models:

- `grok-beta`: The standard Grok model
- `grok-vision-beta`: Grok model with vision capabilities
- `grok-2-1212`: Grok 2 model
- `grok-2-vision-1212`: Grok 2 model with vision capabilities

## Resources

- [X.AI API Documentation](https://docs.x.ai/docs/overview)
- [AI Angkor Intelligence Support](mailto:support@aiangkor.com) 