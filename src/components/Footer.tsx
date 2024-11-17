import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="text-white text-xl font-bold">Negus AI</span>
            </div>
            <p className="text-gray-400">
              Transforming businesses through innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">AI Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">1142 Florida Street, Suite 5</li>
              <li className="text-gray-400">San Francisco, CA 94110</li>
              <li className="text-gray-400">info@negus.ai</li>
              <li className="text-gray-400">+1 (415) 678-7296</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Negus AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}