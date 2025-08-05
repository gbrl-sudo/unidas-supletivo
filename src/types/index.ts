// TypeScript Types for the project

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  modality: string[];
  subjects: string[];
  requirements: string[];
  benefits: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  course: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}

export interface Stats {
  studentsGraduated: string;
  yearsExperience: string;
  approvalRate: string;
  satisfaction: string;
}

// Form validation schemas
export interface FormErrors {
  [key: string]: string | undefined;
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}