export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string
          first_name: string
          id: string
          last_name: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name: string
          first_name: string
          id?: string
          last_name?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          first_name?: string
          id?: string
          last_name?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      records: {
        Row: {
          artist: string
          condition: string | null
          created_at: string
          genre: string | null
          id: string
          notes: string | null
          title: string
          user_id: string
          year: number | null
        }
        Insert: {
          artist: string
          condition?: string | null
          created_at?: string
          genre?: string | null
          id?: string
          notes?: string | null
          title: string
          user_id: string
          year?: number | null
        }
        Update: {
          artist?: string
          condition?: string | null
          created_at?: string
          genre?: string | null
          id?: string
          notes?: string | null
          title?: string
          user_id?: string
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "records_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
