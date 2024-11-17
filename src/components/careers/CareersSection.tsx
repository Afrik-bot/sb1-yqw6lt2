import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import JobCard from './JobCard';
import JobFilters from './JobFilters';
import ApplicationModal from './ApplicationModal';
import { jobs, type Department } from '../../data/jobs';

export default function CareersSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <section id="careers" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Help us shape the future of AI technology. We're looking for passionate
            individuals who want to make a difference.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>
            <JobFilters
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
            />
          </div>

          <div className="grid gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))
            ) : (
              <div className="text-center py-12 bg-white/5 rounded-lg">
                <p className="text-gray-400">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Don't see a position that fits?</h3>
          <p className="text-gray-400 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll
            keep you in mind for future opportunities.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all"
          >
            Submit General Application
          </button>
        </div>
      </div>

      <ApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}