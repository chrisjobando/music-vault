import type { Database } from './schema/database';

export type IInputProfiles = Database['public']['Tables']['profiles']['Insert'];
export type IUpdateProfiles = Database['public']['Tables']['profiles']['Update'];
export type IProfiles = Database['public']['Tables']['profiles']['Row'];

export type IUserProfile = Pick<IProfiles, 'first_name' | 'display_name'> & {
  last_name: string;
  avatar_url: string;
};

export type IInputRecords = Database['public']['Tables']['records']['Insert'];
export type IUpdateRecords = Database['public']['Tables']['records']['Update'];
export type IRecords = Database['public']['Tables']['records']['Row'];

export type IUserRecord = Pick<IRecords, 'title' | 'artist'> & {
  year: string;
  genre: string;
};
export type IEditRecord = Pick<IRecords, 'id' | 'title' | 'artist' | 'year' | 'genre'>;
export type IDeleteRecord = Pick<IRecords, 'id' | 'title'>;
