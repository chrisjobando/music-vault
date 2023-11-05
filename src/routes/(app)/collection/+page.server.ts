// OpenAI
import { openAiModel, systemPrompt } from '$lib/openai/collection/constants';
import { parseRecordString } from '$lib/openai/collection/helpers';
import { createChatCompletion } from '$lib/openai/utils';
import OpenAI from 'openai';

// Interfaces
import type { IRecordErrors } from '$lib/schema/validationSchema';
import type { IInputRecords, IRecords, IUpdateRecords, IUserRecord } from '$lib/types';
import type { Actions, PageServerLoad } from './$types';

// Validation
import { RecordSchema } from '$lib/schema/validationSchema';
import { ZodError } from 'zod';

// Utils
import { PUBLIC_OPENAI_KEY } from '$env/static/public';
import { findUpdatedRecordFields } from '$lib/api/collection/helpers';
import { fault, formatError, success } from '$lib/api/utils';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(307, '/auth/signin');
  }

  const user_id = session.user.id;

  // Get user's records
  const { data: userRecordsData, error } = await supabase
    .from('records')
    .select('*')
    .match({ user_id });

  if (error) {
    return fail(500, fault('Server error. Try again later'));
  }

  return {
    userRecordsData: userRecordsData as IRecords[]
  };
};

export const actions: Actions = {
  generateRecord: async ({ request }) => {
    const promptFormData = await request.formData();
    const userPrompt = (promptFormData.get('add_record') as string).trim().toLowerCase();

    if (userPrompt === 'debug') {
      const debugRecord: IUserRecord = {
        title: 'Greatest Hits',
        artist: 'Al Green',
        year: null,
        genre: ''
      };
      return success('', {
        generatedRecord: debugRecord
      });
    }

    const openai = new OpenAI({
      apiKey: PUBLIC_OPENAI_KEY
    });

    const response = await createChatCompletion(openai, systemPrompt, userPrompt, openAiModel);

    if (response === null) {
      return fail(500, fault('OpenAI API call failed'));
    }

    if (response === '{}') {
      return fail(500, fault('Invalid prompt. Please try again'));
    }

    const parsedRecord = parseRecordString(response);
    return success('', { generatedRecord: parsedRecord });
  },
  createRecord: async ({ request, locals: { supabase, getSession } }) => {
    const modalFormData = await request.formData();
    const recordTitle = modalFormData.get('title') as string;
    const recordArtist = modalFormData.get('artist') as string;
    const recordYear = modalFormData.get('year') as string;
    const recordGenre = modalFormData.get('genre') as string;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const parsedRecordYear = recordYear !== '' ? parseInt(recordYear) : null;
    const nullRecordGenre = recordGenre !== '' ? recordGenre : null;

    try {
      RecordSchema.parse({
        artist: recordArtist,
        genre: nullRecordGenre,
        title: recordTitle,
        year: parsedRecordYear
      });
    } catch (err) {
      if (err instanceof ZodError) {
        const errors: IRecordErrors = formatError(err);
        return fail(400, fault('', { errors }));
      }
    }

    const user_id = session.user.id;

    const inputRecord: IInputRecords = {
      title: recordTitle,
      artist: recordArtist,
      year: parsedRecordYear,
      genre: nullRecordGenre,
      user_id
    };

    // Create record in user's collection
    const { error: createRecordError, data: createdRecordData } = await supabase
      .from('records')
      .insert(inputRecord)
      .select();

    if (createRecordError) {
      return fail(500, fault('Server error. Try again later'));
    }

    return success('Your record was created successfully.', {
      createdRecord: createdRecordData[0]
    });
  },
  updateRecord: async ({ request, locals: { supabase, getSession } }) => {
    const modalFormData = await request.formData();
    const recordTitle = modalFormData.get('title') as string;
    const recordArtist = modalFormData.get('artist') as string;
    const recordYear = modalFormData.get('year') as string;
    const recordGenre = modalFormData.get('genre') as string;
    const originalRecord = JSON.parse(modalFormData.get('original_record') as string) as IRecords;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const parsedRecordYear = recordYear !== '' ? parseInt(recordYear) : null;
    const nullRecordGenre = recordGenre !== '' ? recordGenre : null;

    try {
      RecordSchema.parse({
        artist: recordArtist,
        genre: nullRecordGenre,
        title: recordTitle,
        year: parsedRecordYear
      });
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = formatError(err);
        return fail(400, fault('', { errors }));
      }
    }

    const user_id = session.user.id;

    const userRecord: IUpdateRecords = {
      artist: recordArtist,
      genre: nullRecordGenre,
      title: recordTitle,
      year: parsedRecordYear
    };

    const updatedRecord: IUpdateRecords = findUpdatedRecordFields(userRecord, originalRecord);

    // Find and update record in user's collection
    const { error: updatedRecordError, data: updatedRecordData } = await supabase
      .from('records')
      .update(updatedRecord)
      .match({ user_id, id: originalRecord.id })
      .select()
      .maybeSingle();

    if (updatedRecordError) {
      return fail(500, fault('Server error. Try again later'));
    }

    return success('Your record was updated successfully.', {
      updatedRecord: { ...updatedRecordData, id: originalRecord.id }
    });
  },
  deleteRecord: async ({ request, locals: { supabase, getSession } }) => {
    const modalFormData = await request.formData();
    const recordId = modalFormData.get('record_id') as string;

    const session = await getSession();
    if (!session) {
      throw redirect(307, '/auth/signin');
    }

    const user_id = session.user.id;

    // Find and delete record in user's collection
    const { error: deleteRecordError } = await supabase
      .from('records')
      .delete()
      .match({ user_id })
      .eq('id', recordId);

    if (deleteRecordError) {
      return fail(500, fault('Server error. Try again later'));
    }

    return success('Your record was deleted successfully.', {
      deletedRecordId: recordId
    });
  }
};
