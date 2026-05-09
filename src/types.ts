// Core portfolio data types with detailed job tasks structure

export interface Task {
  id: string;
  title: string;
  description: string;
  category: 'technical' | 'regulatory' | 'training' | 'research' | 'coordination' | 'quality';
  status: 'completed' | 'ongoing' | 'recurring';
  impact?: string;
  metrics?: string[];
  tools?: string[];
}

export interface JobResponsibility {
  area: string;
  tasks: Task[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  responsibilities?: JobResponsibility[];
  achievements?: Achievement[];
  keyMetrics?: Metric[];
}

export interface Achievement {
  title: string;
  description: string;
  impact?: string;
  date?: string;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  title: string;
  tool: string;
  description: string;
  details?: string[];
  image: string;
  technologies?: string[];
  outcomes?: string[];
  timeline?: string;
  role?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  gpa?: string;
  achievements?: string[];
}

export interface Volunteering {
  role: string;
  organization: string;
  period: string;
  description: string;
  impact?: string;
}

export interface UserData {
  name: string;
  title: string;
  about: string;
  topSkills: string[];
  modalities: string[];
  experience: Experience[];
  education: Education[];
  volunteering: Volunteering[];
  projects: Project[];
  certifications?: Certification[];
  publications?: Publication[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  date: string;
  doi?: string;
  url?: string;
}
