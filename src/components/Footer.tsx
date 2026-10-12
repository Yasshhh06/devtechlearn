import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Globe, Sparkles } from 'lucide-react';
import { allPrograms } from '../data/programs';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand Info with Official Logo */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="DevTech IT Solution Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-bold text-white block leading-tight">
                DevTech IT Solution
              </span>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                Your Vision. Our Tech.
              </span>
            </div>
          </div>

          {/* Quick Curriculum Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-xs">
              Syllabus Tracks:
            </span>
            {allPrograms.map((program) => (
              <Link
                key={program.id}
                to={program.route}
                className="hover:text-blue-400 transition-colors"
              >
                {program.title}
              </Link>
            ))}
          </div>

          {/* Direct Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.devtechitsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Company Website</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://www.devtechitsolution.com/devtechprograms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-xs transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Training Registration</span>
              <ExternalLink className="w-3 h-3 text-blue-200" />
            </a>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} DevTech IT Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Support:</span>
            <a 
              href="mailto:support@devtechitsolution.com" 
              className="text-slate-400 hover:text-blue-400 transition-colors font-medium"
            >
              support@devtechitsolution.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
