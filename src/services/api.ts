import { RegistrationFormData, ApiResponse } from '../types';
import { supabase } from '../lib/supabase';

const api = {
  submitRegistration: async (formData: RegistrationFormData): Promise<ApiResponse> => {
    try {
      const {
        data: { user },
        error: authError
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error('Authentication required');
      }

      const { data, error } = await supabase
        .from('registrations')
        .insert([{
          user_id: user.id,
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          gender: formData.gender,
          college: formData.college.trim(),
          department: formData.department.trim(),
          year: formData.year,
          student_id: formData.studentId.trim(),
          events_interested: formData.eventsInterested,
          t_shirt_size: formData.tShirtSize,
          dietary_restrictions: formData.dietaryRestrictions || [],
          special_requirements: formData.specialRequirements?.trim() || null,
          hear_about_us: formData.hearAboutUs,
          registration_type: 'student',
          status: 'pending',
          payment_status: 'pending'
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        success: true,
        message: 'Registration successful!',
        data
      };
    } catch (error) {
      console.error('Registration submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit registration'
      };
    }
  },

  getEventInfo: async (): Promise<ApiResponse> => {
    try {
      const { data, error } = await supabase
        .from('event_info')
        .select('*')
        .single();

      if (error) throw error;

      return {
        success: true,
        message: 'Event information retrieved successfully',
        data
      };
    } catch (error) {
      console.error('Error fetching event info:', error);
      return {
        success: false,
        message: 'Failed to load event information'
      };
    }
  }
};

export default api;