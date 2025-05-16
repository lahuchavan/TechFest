export interface RegistrationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  
  // Academic Information
  college: string;
  department: string;
  year: string;
  studentId: string;
  
  // Event Preferences
  eventsInterested: string[];
  tShirtSize: string;
  dietaryRestrictions: string[];
  
  // Additional Information
  specialRequirements?: string;
  hearAboutUs: string;
  agreeToTerms: boolean;
}

export interface EventInfo {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  registration_deadline: string;
  logo: string;
  created_at: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}