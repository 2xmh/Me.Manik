
export interface Project {
  title: string;
  description: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationDetail {
  degree: string;
  institution: string;
  status: string;
  subjects: string[];
}
