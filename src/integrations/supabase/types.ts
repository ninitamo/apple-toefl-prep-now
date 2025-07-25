export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      individual_practice_tests: {
        Row: {
          audio_url: string | null
          content: string
          created_at: string
          description: string | null
          difficulty_level: string | null
          estimated_duration: number
          id: string
          section_type: string
          task_type: string | null
          title: string
          updated_at: string
        }
        Insert: {
          audio_url?: string | null
          content: string
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          estimated_duration: number
          id?: string
          section_type: string
          task_type?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          audio_url?: string | null
          content?: string
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          estimated_duration?: number
          id?: string
          section_type?: string
          task_type?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      institutions: {
        Row: {
          country: string
          created_at: string
          id: number
          min_score: number | null
          name: string
          updated_at: string
          website: string | null
        }
        Insert: {
          country: string
          created_at?: string
          id?: number
          min_score?: number | null
          name: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          country?: string
          created_at?: string
          id?: number
          min_score?: number | null
          name?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      practice_sessions: {
        Row: {
          completed_at: string
          id: string
          practice_id: string
          practice_type: string
          score: number | null
          session_data: Json | null
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          practice_id: string
          practice_type: string
          score?: number | null
          session_data?: Json | null
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          practice_id?: string
          practice_type?: string
          score?: number | null
          session_data?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      test_passages: {
        Row: {
          audio_duration: number | null
          audio_type: string | null
          audio_url: string | null
          content: string
          created_at: string
          id: string
          order_number: number
          section_type: string
          "sub-type": string | null
          test_id: number
          title: string
          transcript: string | null
        }
        Insert: {
          audio_duration?: number | null
          audio_type?: string | null
          audio_url?: string | null
          content: string
          created_at?: string
          id?: string
          order_number: number
          section_type: string
          "sub-type"?: string | null
          test_id: number
          title: string
          transcript?: string | null
        }
        Update: {
          audio_duration?: number | null
          audio_type?: string | null
          audio_url?: string | null
          content?: string
          created_at?: string
          id?: string
          order_number?: number
          section_type?: string
          "sub-type"?: string | null
          test_id?: number
          title?: string
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "test_passages_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "toefl_tests"
            referencedColumns: ["id"]
          },
        ]
      }
      test_questions: {
        Row: {
          correct_answer: Json | null
          created_at: string
          id: string
          metadata: Json | null
          options: Json | null
          passage_id: string
          question_number: number
          question_text: string
          question_type: string
          section_type: string
          test_id: number
        }
        Insert: {
          correct_answer?: Json | null
          created_at?: string
          id?: string
          metadata?: Json | null
          options?: Json | null
          passage_id: string
          question_number: number
          question_text: string
          question_type: string
          section_type: string
          test_id: number
        }
        Update: {
          correct_answer?: Json | null
          created_at?: string
          id?: string
          metadata?: Json | null
          options?: Json | null
          passage_id?: string
          question_number?: number
          question_text?: string
          question_type?: string
          section_type?: string
          test_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "test_questions_passage_id_fkey"
            columns: ["passage_id"]
            isOneToOne: false
            referencedRelation: "test_passages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_questions_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "toefl_tests"
            referencedColumns: ["id"]
          },
        ]
      }
      test_questions_individual_practice: {
        Row: {
          correct_answer: string
          created_at: string
          explanation: string | null
          id: string
          options: Json | null
          practice_test_id: string
          question_number: number
          question_text: string
          question_type: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          explanation?: string | null
          id?: string
          options?: Json | null
          practice_test_id: string
          question_number: number
          question_text: string
          question_type: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          explanation?: string | null
          id?: string
          options?: Json | null
          practice_test_id?: string
          question_number?: number
          question_text?: string
          question_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_questions_individual_practice_practice_test_id_fkey"
            columns: ["practice_test_id"]
            isOneToOne: false
            referencedRelation: "individual_practice_tests"
            referencedColumns: ["id"]
          },
        ]
      }
      toefl_tests: {
        Row: {
          created_at: string
          description: string | null
          difficulty: string
          duration: string
          id: number
          students_taken: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty: string
          duration: string
          id: number
          students_taken?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty?: string
          duration?: string
          id?: number
          students_taken?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
