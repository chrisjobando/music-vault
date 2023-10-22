import type { ChatCompletionCreateParamsBase } from 'openai/resources/chat/completions';

export const openAiModel: ChatCompletionCreateParamsBase['model'] = 'gpt-3.5-turbo';
export const recordSchema =
  '{ "title": string, "artist": string, "year": number, "genre": string }';
export const systemPrompt = `You are a music database that returns information about albums, with the following schema: ${recordSchema}. All fields are required, so fill them in using your knowledge. If the prompt is invalid, return "{}"`;
