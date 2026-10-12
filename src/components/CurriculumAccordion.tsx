import React, { useState, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  FolderGit2,
  ListOrdered,
  Database,
  Code2,
  Globe,
  Terminal,
  Cloud,
  Brain,
  BarChart3,
  Layers,
  ArrowRight,
  Check,
  LayoutGrid
} from 'lucide-react';
import { ProgramCourse } from '../types/curriculum';

interface CurriculumAccordionProps {
  courses: ProgramCourse[];
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ courses }) => {
  // Default to the first course
  const [selectedCourseId, setSelectedCourseId] = useState<string>(courses[0]?.courseId || 'all');
  
  // Ref to smoothly scroll down to the syllabus view when a card is selected
  const syllabusSectionRef = useRef<HTMLDivElement>(null);

  // Collect all module IDs for expand/collapse all
  const allModuleIds = courses.flatMap((course) => 
    course.modules.map((mod) => mod.moduleId)
  );

  // Default to expanding the first 2 modules of the active course
  const defaultExpanded = courses[0]?.modules.slice(0, 2).map((m) => m.moduleId) || [];
  const [expandedModules, setExpandedModules] = useState<string[]>(defaultExpanded);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleExpandAll = () => {
    setExpandedModules(allModuleIds);
  };

  const handleCollapseAll = () => {
    setExpandedModules([]);
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    // Expand the first module of the chosen course automatically
    const targetCourse = courses.find((c) => c.courseId === courseId);
    if (targetCourse && targetCourse.modules.length > 0) {
      setExpandedModules([targetCourse.modules[0].moduleId]);
    }
    // Smooth scroll down to the syllabus viewer
    if (syllabusSectionRef.current) {
      syllabusSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to get tailored icons based on course title keywords
  const getCourseIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('sql') || t.includes('database') || t.includes('dbms') || t.includes('oracle')) {
      return <Database className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes('mern') || t.includes('web development') || t.includes('fullstack') || t.includes('django') || t.includes('flask')) {
      return <Globe className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes('react')) {
      return <Code2 className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes('devops') || t.includes('aws') || t.includes('cloud') || t.includes('docker') || t.includes('kubernetes')) {
      return <Cloud className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes('ai') || t.includes('ml') || t.includes('deep learning') || t.includes('nlp') || t.includes('gen ai') || t.includes('machine learning')) {
      return <Brain className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes('data analysis') || t.includes('power bi') || t.includes('tableau') || t.includes('excel')) {
      return <BarChart3 className="w-6 h-6 text-blue-600" />;
    }
    if (t.includes('python') || t.includes('dsa') || t.includes('linux')) {
      return <Terminal className="w-6 h-6 text-blue-600" />;
    }
    return <Layers className="w-6 h-6 text-blue-600" />;
  };

  const displayedCourses = selectedCourseId === 'all'
    ? courses
    : courses.filter((c) => c.courseId === selectedCourseId);

  const activeCourse = courses.find((c) => c.courseId === selectedCourseId);

  return (
    <div className="space-y-10">
      {/* 1. ATTRACTIVE COURSE SELECTION CARDS GRID */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Courses Included in this Program
              </h3>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Click any course card below to view its full syllabus, modules, and lecture roadmap.
            </p>
          </div>

          {courses.length > 1 && (
            <button
              onClick={() => setSelectedCourseId('all')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCourseId === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Show All Courses Combined ({courses.length})</span>
            </button>
          )}
        </div>

        {/* Responsive Grid of Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, idx) => {
            const isSelected = selectedCourseId === course.courseId;

            return (
              <div
                key={course.courseId}
                onClick={() => handleSelectCourse(course.courseId)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectCourse(course.courseId);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`Select ${course.courseTitle} to view syllabus`}
                className={`group relative rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between cursor-pointer focus-ring ${
                  isSelected
                    ? 'bg-white border-2 border-blue-600 shadow-lg shadow-blue-500/10 ring-4 ring-blue-600/10 -translate-y-1'
                    : 'bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-card-hover hover:-translate-y-0.5'
                }`}
              >
                {/* Active indicator top bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl" />
                )}

                <div>
                  {/* Top Row: Icon + Course Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 [&>svg]:text-white'
                        : 'bg-blue-50 border border-blue-100/80 group-hover:bg-blue-600 group-hover:text-white group-hover:[&>svg]:text-white'
                    }`}>
                      {getCourseIcon(course.courseTitle)}
                    </div>

                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      isSelected 
                        ? 'bg-blue-50 text-blue-700 border-blue-200' 
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      Course {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h4 className={`text-lg font-bold transition-colors leading-snug mb-2 ${
                    isSelected ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {course.courseTitle}
                  </h4>

                  {/* Modules count and duration badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      <ListOrdered className="w-3.5 h-3.5 text-blue-600" />
                      <span>{course.modules.length} Modules</span>
                    </span>

                    {course.duration && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate max-w-[130px]">{course.duration}</span>
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-5">
                    {course.courseDescription}
                  </p>
                </div>

                {/* Card CTA Action */}
                <div className="pt-3 border-t border-slate-100">
                  <div className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Active Course Syllabus</span>
                      </>
                    ) : (
                      <>
                        <span>View Course Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. SYLLABUS VIEWER HEADER & ACCORDION */}
      <div ref={syllabusSectionRef} className="pt-4 scroll-mt-24">
        {/* Top Control Bar for Modules */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Detailed Module Roadmap
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {selectedCourseId === 'all'
                  ? `All Courses (${courses.length} Courses • ${allModuleIds.length} Total Modules)`
                  : `${activeCourse?.courseTitle || 'Course Modules'} (${displayedCourses[0]?.modules.length} Modules)`}
              </h3>
            </div>
          </div>

          {/* Master Expand/Collapse Action Buttons */}
          <div className="flex items-center gap-2.5 self-end md:self-auto shrink-0">
            <button
              type="button"
              onClick={handleExpandAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100/90 hover:bg-blue-50 rounded-xl border border-slate-200 transition-colors focus-ring"
            >
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Expand All Modules</span>
            </button>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100/90 hover:bg-blue-50 rounded-xl border border-slate-200 transition-colors focus-ring"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Collapse All Modules</span>
            </button>
          </div>
        </div>

        {/* Detailed Accordion Modules List */}
        <div className="space-y-8">
          {displayedCourses.map((course, courseIndex) => (
            <section
              key={course.courseId}
              aria-labelledby={`course-heading-${course.courseId}`}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
            >
              {/* Course Header Banner */}
              <div className="bg-slate-50/90 border-b border-slate-200 px-6 py-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      #{courseIndex + 1}
                    </div>
                    <div>
                      <h4 
                        id={`course-heading-${course.courseId}`}
                        className="text-lg sm:text-xl font-bold text-slate-900"
                      >
                        {course.courseTitle}
                      </h4>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        {course.modules.length} Detailed Curriculum Modules
                      </div>
                    </div>
                  </div>

                  {course.duration && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{course.duration}</span>
                    </span>
                  )}
                </div>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed max-w-4xl">
                  {course.courseDescription}
                </p>
              </div>

              {/* Accordion Modules inside this Course */}
              <div className="divide-y divide-slate-100">
                {course.modules.map((mod) => {
                  const isExpanded = expandedModules.includes(mod.moduleId);

                  return (
                    <div 
                      key={mod.moduleId} 
                      className="transition-colors hover:bg-slate-50/40"
                    >
                      {/* Module Header Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.moduleId)}
                        aria-expanded={isExpanded}
                        aria-controls={`module-panel-${mod.moduleId}`}
                        id={`module-btn-${mod.moduleId}`}
                        className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-blue-50/50"
                      >
                        <div className="flex items-center gap-3.5 pr-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                            isExpanded 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {mod.moduleNumber}
                          </div>
                          <div>
                            <h5 className="text-base font-semibold text-slate-900 leading-snug">
                              {mod.moduleTitle}
                            </h5>
                            <span className="text-xs text-slate-500 font-medium">
                              {mod.lessonTitles.length} Lectures
                              {mod.topics && mod.topics.length > 0 && ` • ${mod.topics.length} Syllabus Topics`}
                              {mod.practicalProjects && mod.practicalProjects.length > 0 && (
                                <span className="text-blue-600 font-semibold ml-2">
                                  • {mod.practicalProjects.length} Practical Project
                                </span>
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {/* Collapsible Content */}
                      {isExpanded && (
                        <div
                          id={`module-panel-${mod.moduleId}`}
                          role="region"
                          aria-labelledby={`module-btn-${mod.moduleId}`}
                          className="px-6 pb-6 pt-2 bg-slate-50/30 border-t border-slate-100 animate-in fade-in duration-150"
                        >
                          <div className="space-y-5">
                            {/* Lessons List */}
                            <div>
                              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                                <ListOrdered className="w-3.5 h-3.5 text-blue-600" />
                                <span>Curriculum Lectures</span>
                              </div>
                              <ul className="space-y-2 pl-1">
                                {mod.lessonTitles.map((lesson, lIdx) => (
                                  <li 
                                    key={lIdx}
                                    className="flex items-start gap-2.5 text-sm text-slate-700"
                                  >
                                    <BookOpen className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{lesson}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Topics & Subtopics Grid */}
                            {mod.topics && mod.topics.length > 0 && (
                              <div>
                                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                  <span>Topics & Coverage</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                                  {mod.topics.map((topic, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="flex items-start gap-2 text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80"
                                    >
                                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                      <span className="leading-normal">{topic}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Practical Projects */}
                            {mod.practicalProjects && mod.practicalProjects.length > 0 && (
                              <div className="pt-2">
                                <div className="bg-blue-50/70 border border-blue-200/70 rounded-xl p-3.5">
                                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wide mb-1.5">
                                    <FolderGit2 className="w-4 h-4 text-blue-600" />
                                    <span>Practical Industry Project</span>
                                  </div>
                                  <div className="space-y-1">
                                    {mod.practicalProjects.map((proj, pIdx) => (
                                      <div 
                                        key={pIdx}
                                        className="text-xs font-semibold text-blue-800 flex items-center gap-2"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                        <span>{proj}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
