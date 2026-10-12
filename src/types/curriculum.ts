export interface CourseModule {
  moduleId: string;
  moduleNumber: number;
  moduleTitle: string;
  lessonTitles: string[];
  topics: string[];
  practicalProjects?: string[];
}

export interface ProgramCourse {
  courseId: string;
  courseTitle: string;
  duration?: string;
  courseDescription: string;
  modules: CourseModule[];
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  route: string;
  badge: string;
  shortDescription: string;
  overview: string;
  isVerified: boolean;
  verificationNotice: string;
  keyTechnologies: string[];
  icon: string;
  courses: ProgramCourse[];
}
