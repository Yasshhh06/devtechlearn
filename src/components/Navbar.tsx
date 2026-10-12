import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ExternalLink, GraduationCap, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { allPrograms } from '../data/programs';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <Link 
              to="/" 
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:scale-105 transition-all overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="DevTech IT Solution Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  DevTech IT Solution
                </span>
                <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                  Your Vision. Our Tech.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 sm:gap-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Home
              </Link>

              {/* Internship Programs Dropdown */}
              <div className="relative group">
                <Link
                  to="/"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/programs')
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>Internship Programs</span>
                  <ChevronRight className="w-4 h-4 rotate-90 text-slate-400 group-hover:text-blue-600 transition-transform" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 hidden group-hover:block transition-all animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Select Curriculum
                  </div>
                  {allPrograms.map((program) => (
                    <Link
                      key={program.id}
                      to={program.route}
                      className="flex items-center justify-between px-3.5 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
                    >
                      <span className="font-medium">{program.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAboutModal(true)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                About Us
              </button>

              <div className="h-5 w-px bg-slate-200 mx-1" />

              {/* Company Website Link */}
              <a
                href="https://www.devtechitsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <span>Company Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Training Registration CTA */}
              <a
                href="https://www.devtechitsolution.com/devtechprograms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow transition-all group"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Training Registration</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <div className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Internship Curriculums
              </div>
              <div className="space-y-1">
                {allPrograms.map((program) => (
                  <Link
                    key={program.id}
                    to={program.route}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                  >
                    <span>{program.title}</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {program.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowAboutModal(true);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              >
                About DevTech IT Solution
              </button>

              <a
                href="https://www.devtechitsolution.com/devtechprograms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Training Registration</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://www.devtechitsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <span>Visit Company Website</span>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* About Us Modal with official logo, support email, and registration link */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              type="button"
              onClick={() => setShowAboutModal(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shadow-xs overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="DevTech IT Solution Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">About DevTech IT Solution</h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Your Vision. Our Tech.
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed">
              <p>
                <strong>DevTech IT Solution</strong> is a premier technology development and training organization dedicated to bridging the divide between academic learning and industry engineering demands.
              </p>
              <p>
                Our rigorous internship curriculum provides structured, source-verified learning roadmaps across four in-demand disciplines: <strong>Full Stack Web Development</strong>, <strong>AI & Machine Learning Engineering</strong>, <strong>DevOps & Cloud Engineering</strong>, and <strong>Data Analysis & Business Intelligence</strong>.
              </p>
              <div className="bg-blue-50/70 rounded-xl p-3.5 border border-blue-100/80 flex items-start gap-3 text-xs text-blue-900">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  All module roadmaps are strictly curated and verified to ensure students acquire relevant, battle-tested technical proficiencies and career-ready engineering skills.
                </span>
              </div>

              {/* Support Email & Registration Contact Box */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-slate-500 font-medium">Contact & Support Email:</span>
                  <a 
                    href="mailto:support@devtechitsolution.com" 
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    support@devtechitsolution.com
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-700 pt-1 border-t border-slate-200/60">
                  <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-500 font-medium">Internship Program Enrollment:</span>
                  <a
                    href="https://www.devtechitsolution.com/devtechprograms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Training Programs Registration</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <a
                href="https://www.devtechitsolution.com/devtechprograms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                <span>Register for Internship</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setShowAboutModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
