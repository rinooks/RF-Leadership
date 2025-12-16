
export interface Instructor {
  name: string;
  title: string;
  education: string[];
  role: string[];
  specialty: string[];
  imageUrl?: string;
}

export interface CurriculumModule {
  code: string;
  title: string;
  duration: string;
  description: string[];
  method: string;
}

export interface CurriculumProgram {
  id: string;
  title: string;
  description: string;
  modules: CurriculumModule[];
}

export interface CurriculumTrack {
  id: string;
  title: string;
  description: string;
  target: string;
  programs: CurriculumProgram[];
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  items: string[];
}

export interface HistoryItem {
  year: string;
  events: string[];
}

export interface Client {
  name: string;
  logoUrl?: string; // Placeholder for now
}
