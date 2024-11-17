import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Financial Forecasting Revolution',
    client: 'Global Banking Corp',
    description: 'Implemented AI-driven predictive analytics resulting in 40% improved accuracy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    title: 'Healthcare Process Automation',
    client: 'MediCare Solutions',
    description: 'Reduced administrative workload by 60% through intelligent automation',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    title: 'Supply Chain Optimization',
    client: 'LogiTech Industries',
    description: 'Cut operational costs by 35% using AI-powered logistics management',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve remarkable results through AI implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full h-full rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">{study.client}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Read Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}