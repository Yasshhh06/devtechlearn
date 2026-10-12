import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Brain, 
  Cloud, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { Program } from '../types/curriculum';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const navigate = useNavigate();

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-blue-600" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-blue-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'Code2':
      default:
        return <Code2 className="w-6 h-6 text-blue-600" />;
    }
  };

  const handleCardClick = () => {
    navigate(program.route);
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      tabIndex={0}
      role="link"
      aria-label={`View curriculum for ${program.title}`}
      className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-6 sm:p-7 shadow-sm hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header row: Icon, Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 group-hover:[&>svg]:text-white">
            {getProgramIcon(program.icon)}
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100/80">
            <Layers className="w-3 h-3 text-blue-600" />
            {program.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
          {program.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
          {program.shortDescription}
        </p>

        {/* Verified Course Curriculum Indicator */}
        <div className="mb-4 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Includes {program.courses.length} verified courses</span>
        </div>

        {/* Key Technologies Badges */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Verified Technologies Covered
          </div>
          <div className="flex flex-wrap gap-1.5">
            {program.keyTechnologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-block px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100/90 rounded-md border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
            {program.keyTechnologies.length > 5 && (
              <span className="inline-block px-2 py-1 text-xs font-medium text-slate-500 bg-slate-50 rounded-md">
                +{program.keyTechnologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50/70 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 border border-blue-200/70 hover:border-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
        >
          <span>View Curriculum</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
