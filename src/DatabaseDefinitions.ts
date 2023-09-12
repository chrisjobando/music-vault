export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      records: {
        Row: {
          ' artist ': string;
          ' condition ': string | null;
          ' genre ': string | null;
          ' notes': string | null;
          ' title ': string;
          ' user_id ': string;
          ' year ': number | null;
          'id ': string;
        };
        Insert: {
          ' artist ': string;
          ' condition '?: string | null;
          ' genre '?: string | null;
          ' notes'?: string | null;
          ' title ': string;
          ' user_id ': string;
          ' year '?: number | null;
          'id '?: string;
        };
        Update: {
          ' artist '?: string;
          ' condition '?: string | null;
          ' genre '?: string | null;
          ' notes'?: string | null;
          ' title '?: string;
          ' user_id '?: string;
          ' year '?: number | null;
          'id '?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'records_ user_id _fkey';
            columns: [' user_id '];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          first_name: string;
          id: string;
          last_name: string | null;
          user_id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          first_name: string;
          id?: string;
          last_name?: string | null;
          user_id: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          first_name?: string;
          id?: string;
          last_name?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'users_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
