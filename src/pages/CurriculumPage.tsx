import React, { useMemo, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  Sparkles, 
  FolderGit2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { getProgramBySlug, calculateProgramStats, allPrograms } from '../data/programs';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CurriculumAccordion } from '../components/CurriculumAccordion';
import { ProgramCard } from '../components/ProgramCard';

export const CurriculumPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Robust slug resolution: from route params or current URL path segment
  const programSlug = useMemo(() => {
    if (slug) return slug;
    const segments = location.pathname.split('/').filter(Boolean);
    return segments[segments.length - 1] || '';
  }, [slug, location.pathname]);

  // Lookup program based on resolved slug
  const program = useMemo(() => {
    return programSlug ? getProgramBySlug(programSlug) : undefined;
  }, [programSlug]);

  // Dynamic document title update
  useEffect(() => {
    if (program) {
      document.title = `${program.title} Internship Syllabus | DevTech IT Solution`;
    }
  }, [program]);

  // If invalid program slug, redirect or show error
  if (!program) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Program Curriculum Not Found</h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          The requested internship syllabus could not be located. Please return to the homepage to select from our 4 verified programs.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </Link>
      </div>
    );
  }

  // Calculate dynamic curriculum statistics strictly from data
  const stats = calculateProgramStats(program);

  // Other 3 programs for the related section
  const relatedPrograms = allPrograms.filter((p) => p.id !== program.id);

  return (
    <div className="flex-1 pb-20">
      {/* Top Breadcrumb & Back Bar */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Breadcrumbs currentProgramTitle={program.title} />

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-slate-100/80 hover:bg-blue-50 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors self-start sm:self-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Programs</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Program Header Section */}
      <section className="bg-white border-b border-slate-200/80 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>{program.badge}</span>
              </span>

              {program.isVerified && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Official DevTech Syllabus</span>
                </span>
              )}
            </div>

            {/* Program Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {program.title}
            </h1>

            {/* Program Overview */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              {program.overview}
            </p>

            {/* Key Technology Badges */}
            <div className="mb-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Core Technologies Covered in this Program
              </div>
              <div className="flex flex-wrap gap-2">
                {program.keyTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg border border-slate-200/80 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Program Registration & Company Portal Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.devtechitsolution.com/devtechprograms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow transition-all group"
              >
                <span>Register for this Training Track</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.devtechitsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <span>Company Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Dynamic Curriculum Statistics Cards (Calculated from Data) */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-100">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Courses
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {stats.coursesCount}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Included in internship track
              </div>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Modules
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {stats.modulesCount}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Structured learning units
              </div>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Lessons & Topics
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {stats.lessonsCount + stats.topicsCount}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stats.lessonsCount} lessons • {stats.topicsCount} topics
              </div>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <FolderGit2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Projects
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {stats.projectsCount}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Applied hands-on deliverables
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Syllabus / Curriculum Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Course Curriculum & Module Breakdown
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Explore modules, lessons, core topics, and hands-on projects for each course in the {program.title} program.
          </p>
        </div>

        {/* Dynamic Accordion preserving multi-course curriculum structure */}
        <CurriculumAccordion courses={program.courses} />
      </section>

      {/* Related Programs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="border-t border-slate-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Explore Other Internship Programs
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Discover learning roadmaps in our other 3 engineering tracks
              </p>
            </div>
            <Link
              to="/"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              View All 4 Programs →
            </Link>
          </div>

          {/* 3 Related Cards linking to their respective curriculum pages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPrograms.map((relProg) => (
              <ProgramCard key={relProg.id} program={relProg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
