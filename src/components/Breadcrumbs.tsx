import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentProgramTitle?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentProgramTitle }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-2 text-sm text-slate-500">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 -mx-1"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </Link>
        </li>

        <li className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors font-medium text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1 -mx-1"
          >
            Internship Programs
          </Link>
        </li>

        {currentProgramTitle && (
          <li className="flex items-center gap-2" aria-current="page">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 bg-slate-100/80 px-2 py-0.5 rounded text-xs sm:text-sm">
              {currentProgramTitle}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
};
