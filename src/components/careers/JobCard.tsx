import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import type { Job } from '../../types/jobs';
import JobApplicationModal from './JobApplicationModal';

export default function JobCard({
  title,
  department,
  location,
  type,
  description,
  requirements,
  ...job
}: Job) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {department}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {type}
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all whitespace-nowrap"
        >
          Apply Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      <p className="text-gray-400 mb-4">{description}</p>

      <div>
        <h4 className="text-white font-medium mb-2">Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={{ title, department, location, type, description, requirements, ...job }}
      />
    </div>
  );
}