import { Program } from '../types/curriculum';
import { fullStackCurriculum } from './fullStackCurriculum';
import { aiMlCurriculum } from './aiMlCurriculum';
import { devopsCurriculum } from './devopsCurriculum';
import { dataAnalystCurriculum } from './dataAnalystCurriculum';

export const allPrograms: Program[] = [
  fullStackCurriculum,
  aiMlCurriculum,
  devopsCurriculum,
  dataAnalystCurriculum
];

export const getProgramBySlug = (slug: string): Program | undefined => {
  return allPrograms.find((program) => program.slug === slug);
};

export const calculateProgramStats = (program: Program) => {
  let totalModules = 0;
  let totalLessons = 0;
  let totalTopics = 0;
  let totalProjects = 0;

  program.courses.forEach((course) => {
    totalModules += course.modules.length;
    course.modules.forEach((mod) => {
      totalLessons += mod.lessonTitles.length;
      totalTopics += mod.topics.length;
      if (mod.practicalProjects) {
        totalProjects += mod.practicalProjects.length;
      }
    });
  });

  return {
    coursesCount: program.courses.length,
    modulesCount: totalModules,
    lessonsCount: totalLessons,
    topicsCount: totalTopics,
    projectsCount: totalProjects
  };
};
