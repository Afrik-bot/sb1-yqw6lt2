import { Bot, Cpu, LineChart, Shield } from 'lucide-react';
import type { Solution } from '../types/solutions';

export const solutions: Solution[] = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Transform your business operations with intelligent automation solutions that streamline workflows, reduce manual tasks, and boost productivity.',
    features: [
      'Intelligent Process Automation (IPA)',
      'Natural Language Processing',
      'Robotic Process Automation (RPA)',
      'Cognitive Document Processing'
    ],
    benefits: [
      'Reduce operational costs by up to 60%',
      'Minimize human error in repetitive tasks',
      'Accelerate process completion times',
      'Improve customer satisfaction through faster response times'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Harness the power of advanced machine learning models to extract valuable insights from your data and make informed business decisions.',
    features: [
      'Deep Learning Algorithms',
      'Neural Network Architecture',
      'Transfer Learning Capabilities',
      'Automated Model Training'
    ],
    benefits: [
      'Uncover hidden patterns in complex data',
      'Improve decision-making accuracy',
      'Automate pattern recognition tasks',
      'Scale AI capabilities efficiently'
    ],
    image: 'https://images.unsplash.com/photo-1501526029524-a8ea952b15be?auto=format&fit=crop&q=80'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Leverage advanced analytics to forecast trends, optimize strategies, and stay ahead of market changes with data-driven insights.',
    features: [
      'Real-time Data Analysis',
      'Trend Forecasting',
      'Anomaly Detection',
      'Prescriptive Recommendations'
    ],
    benefits: [
      'Anticipate market trends and opportunities',
      'Optimize resource allocation',
      'Reduce operational risks',
      'Enhance strategic planning'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Protect your systems and data with next-generation AI security protocols that adapt to emerging threats and ensure compliance.',
    features: [
      'Adaptive Threat Detection',
      'Behavioral Analysis',
      'Automated Response Systems',
      'Compliance Monitoring'
    ],
    benefits: [
      'Proactive threat prevention',
      'Real-time security monitoring',
      'Automated incident response',
      'Regulatory compliance assurance'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  }
];