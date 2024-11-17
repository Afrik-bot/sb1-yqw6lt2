import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Solution } from '../../types/solutions';

interface SolutionCardProps extends Solution {
  reverse?: boolean;
}

export default function SolutionCard({ 
  icon: Icon,
  title,
  description,
  features,
  benefits,
  image,
  reverse = false
}: SolutionCardProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:direction-rtl' : ''}`}>
      <div className="space-y-6">
        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <Icon className="h-6 w-6 text-purple-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      
      <div className={`relative ${reverse ? 'md:order-first' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-20" />
        <img
          src={image}
          alt={title}
          className="relative rounded-2xl shadow-2xl w-full"
        />
      </div>
    </div>
  );
}