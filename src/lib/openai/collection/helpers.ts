import type { IUserRecord } from '$lib/types';

export function parseRecordString(gptResponse: string): IUserRecord {
  // API will return a string like this: '{ "title": "Thriller", "artist": "Michael Jackson", "year": 1982, "genre": "Pop" }'
  const parsedYearString = gptResponse.match(/"year": (.*?),/)?.[1] ?? '';
  const parsedYearInt = parseInt(parsedYearString, 10);
  const validParsedYear = !isNaN(parsedYearInt) && parsedYearInt > 0;

  const recordObject: IUserRecord = {
    title: gptResponse.match(/"title": "(.*?)"/)?.[1] ?? '',
    artist: gptResponse.match(/"artist": "(.*?)"/)?.[1] ?? '',
    year: validParsedYear ? parsedYearInt : null,
    genre: gptResponse.match(/"genre": "(.*?)"/)?.[1] ?? ''
  };

  return recordObject;
}
