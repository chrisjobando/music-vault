import type OpenAI from 'openai';
import type { ChatCompletionCreateParamsBase } from 'openai/resources/chat/completions';

export const createChatCompletion = async (
  openAi: OpenAI,
  systemPrompt: string,
  userPrompt: string,
  openAiModel?: ChatCompletionCreateParamsBase['model']
) => {
  const response = await openAi.chat.completions.create({
    model: openAiModel ?? 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: `Context: """${userPrompt}"""`
      }
    ],
    temperature: 0.7,
    max_tokens: 256
  });

  if (!response || !response.choices || !response.choices[0]) {
    throw new Error('Invalid response from OpenAI');
  }

  return response.choices[0].message.content;
};
