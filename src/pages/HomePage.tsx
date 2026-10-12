import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Layers, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { allPrograms } from '../data/programs';
import { ProgramCard } from '../components/ProgramCard';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'DevTech IT Solution — Internship Curriculum & Technical Roadmaps';
  }, []);

  // Filter programs by title, short description, and key technologies
  const filteredPrograms = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return allPrograms;

    return allPrograms.filter((program) => {
      const matchTitle = program.title.toLowerCase().includes(q);
      const matchDesc = program.shortDescription.toLowerCase().includes(q);
      const matchTech = program.keyTechnologies.some((tech) =>
        tech.toLowerCase().includes(q)
      );
      return matchTitle || matchDesc || matchTech;
    });
  }, [searchQuery]);

  return (
    <div className="flex-1 pb-16">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 pt-12 pb-16 sm:pt-16 sm:pb-20 relative overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading (Exact user requirement) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Explore Our Internship Curriculums
          </h1>

          {/* Subtitle (Exact user requirement) */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover your learning roadmap, explore course modules, and understand the technical skills covered in your DevTech IT Solution internship program.
          </p>

          {/* Value Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verified Technical Syllabus</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Full Lesson & Topic Breakdown</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Hands-on Industry Projects</span>
            </div>
          </div>

          {/* Interactive Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs by name, technology (e.g. React, Python, AWS, SQL)..."
                className="w-full pl-12 pr-11 py-3.5 text-sm sm:text-base bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder:text-slate-400 transition-all"
                aria-label="Search curriculums by keyword or technology"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick search tags */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500">
              <span className="font-semibold text-slate-600">Popular:</span>
              {['React', 'Python', 'AWS', 'Docker', 'Power BI', 'Node.js', 'Machine Learning'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subject Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Internship Programs & Syllabus
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {filteredPrograms.length} of {allPrograms.length} programs available
            </p>
          </div>
        </div>

        {/* Four Subject Cards Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white border border-slate-200 rounded-2xl p-10 sm:p-14 text-center max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No matching programs found
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              We couldn't find any curriculum matching &ldquo;<span className="font-semibold text-slate-700">{searchQuery}</span>&rdquo;. Try searching for &ldquo;Full Stack&rdquo;, &ldquo;Python&rdquo;, &ldquo;AWS&rdquo;, or &ldquo;SQL&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
            >
              Clear Search Query
            </button>
          </div>
        )}

        {/* Academic Rigor & Verification Banner */}
        <div className="mt-16 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  DevTech IT Solution Curriculum Assurance
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Every curriculum module in our internship is meticulously designed and structured by DevTech IT Solution. Students explore genuine lecture units, live projects, and hands-on toolsets.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.devtechitsolution.com/devtechprograms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors"
              >
                <span>Training Registration</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.devtechitsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <span>Company Website</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
