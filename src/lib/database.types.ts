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
      event_info: {
        Row: {
          id: string
          name: string
          description: string
          start_date: string
          end_date: string
          location: string
          registration_deadline: string
          logo: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          start_date: string
          end_date: string
          location: string
          registration_deadline: string
          logo?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          start_date?: string
          end_date?: string
          location?: string
          registration_deadline?: string
          logo?: string
          created_at?: string
        }
      }
      registrations: {
        Row: {
          id: string
          user_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          gender: string
          college: string
          department: string
          year: string
          student_id: string
          events_interested: string[]
          t_shirt_size: string
          dietary_restrictions: string[]
          special_requirements: string | null
          hear_about_us: string
          status: string
          payment_status: string
          registration_type: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          gender: string
          college: string
          department: string
          year: string
          student_id: string
          events_interested: string[]
          t_shirt_size: string
          dietary_restrictions: string[]
          special_requirements?: string | null
          hear_about_us: string
          status?: string
          payment_status?: string
          registration_type?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          gender?: string
          college?: string
          department?: string
          year?: string
          student_id?: string
          events_interested?: string[]
          t_shirt_size?: string
          dietary_restrictions?: string[]
          special_requirements?: string | null
          hear_about_us?: string
          status?: string
          payment_status?: string
          registration_type?: string
          created_at?: string
        }
      }
    }
  }
}