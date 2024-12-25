export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      car_features: {
        Row: {
          car_id: number;
          feature: string;
          id: number;
        };
        Insert: {
          car_id: number;
          feature: string;
          id?: never;
        };
        Update: {
          car_id?: number;
          feature?: string;
          id?: never;
        };
        Relationships: [
          {
            foreignKeyName: "car_features_car_id_fkey";
            columns: ["car_id"];
            isOneToOne: false;
            referencedRelation: "cars";
            referencedColumns: ["id"];
          }
        ];
      };
      car_images: {
        Row: {
          car_id: number;
          id: number;
          image_url: string;
        };
        Insert: {
          car_id: number;
          id?: never;
          image_url: string;
        };
        Update: {
          car_id?: number;
          id?: never;
          image_url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "car_images_car_id_fkey";
            columns: ["car_id"];
            isOneToOne: false;
            referencedRelation: "cars";
            referencedColumns: ["id"];
          }
        ];
      };
      car_listings: {
        Row: {
          car_id: number;
          id: number;
          listed_at: string | null;
          status: string;
          updated_at: string | null;
        };
        Insert: {
          car_id: number;
          id?: never;
          listed_at?: string | null;
          status: string;
          updated_at?: string | null;
        };
        Update: {
          car_id?: number;
          id?: never;
          listed_at?: string | null;
          status?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "car_listings_car_id_fkey";
            columns: ["car_id"];
            isOneToOne: false;
            referencedRelation: "cars";
            referencedColumns: ["id"];
          }
        ];
      };
      car_makes: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: never;
          name: string;
        };
        Update: {
          id?: never;
          name?: string;
        };
        Relationships: [];
      };
      car_videos: {
        Row: {
          car_id: number;
          id: number;
          video_url: string | null;
        };
        Insert: {
          car_id: number;
          id?: never;
          video_url?: string | null;
        };
        Update: {
          car_id?: number;
          id?: never;
          video_url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "car_videos_car_id_fkey";
            columns: ["car_id"];
            isOneToOne: false;
            referencedRelation: "cars";
            referencedColumns: ["id"];
          }
        ];
      };
      cars: {
        Row: {
          created_at: string;
          description: string;
          engine_type: string;
          id: number;
          image_url: string | null;
          make: string;
          mileage: number;
          model: string;
          price: number;
          sold: boolean;
          transmission: string;
          updated_at: string | null;
          user_id: string;
          year: number;
        };
        Insert: {
          created_at?: string;
          description: string;
          engine_type: string;
          id?: never;
          image_url?: string | null;
          make: string;
          mileage: number;
          model: string;
          price: number;
          sold?: boolean;
          transmission: string;
          updated_at?: string | null;
          user_id?: string;
          year: number;
        };
        Update: {
          created_at?: string;
          description?: string;
          engine_type?: string;
          id?: never;
          image_url?: string | null;
          make?: string;
          mileage?: number;
          model?: string;
          price?: number;
          sold?: boolean;
          transmission?: string;
          updated_at?: string | null;
          user_id?: string;
          year?: number;
        };
        Relationships: [];
      };
      inquiries: {
        Row: {
          car_id: number;
          created_at: string | null;
          id: number;
          message: string;
          user_id: string;
        };
        Insert: {
          car_id: number;
          created_at?: string | null;
          id?: never;
          message: string;
          user_id: string;
        };
        Update: {
          car_id?: number;
          created_at?: string | null;
          id?: never;
          message?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "inquiries_car_id_fkey";
            columns: ["car_id"];
            isOneToOne: false;
            referencedRelation: "cars";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          full_name: string | null;
          id: string;
        };
        Insert: {
          full_name?: string | null;
          id: string;
        };
        Update: {
          full_name?: string | null;
          id?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          car_id: number;
          comment: string | null;
          created_at: string | null;
          id: number;
          rating: number | null;
          user_id: string;
        };
        Insert: {
          car_id: number;
          comment?: string | null;
          created_at?: string | null;
          id?: never;
          rating?: number | null;
          user_id: string;
        };
        Update: {
          car_id?: number;
          comment?: string | null;
          created_at?: string | null;
          id?: never;
          rating?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_car_id_fkey";
            columns: ["car_id"];
            isOneToOne: false;
            referencedRelation: "cars";
            referencedColumns: ["id"];
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
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
