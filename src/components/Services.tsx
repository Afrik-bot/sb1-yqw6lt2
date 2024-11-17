import React from 'react';
import { Bot, Cpu, LineChart, Shield, Users, ArrowRight } from 'lucide-react';
import SolutionCard from './solutions/SolutionCard';
import { solutions } from '../data/solutions';

export default function Services() {
  const scrollToCareers = () => {
    const element = document.getElementById('careers');
    if (element) {
      const navOffset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
            and drive innovation across industries.
          </p>
        </div>

        <div className="grid gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} reverse={index % 2 !== 0} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Join Our Team</h3>
          <div className="bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-4">We're Hiring!</h4>
            <p className="text-gray-400 mb-6">
              Join our team of AI innovators and help shape the future of technology.
              We offer competitive benefits, continuous learning opportunities, and
              a dynamic work environment.
            </p>
            <button 
              onClick={scrollToCareers}
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}