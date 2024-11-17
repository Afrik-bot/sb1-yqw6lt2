import type { Job } from '../types/jobs';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the development of our core AI systems and collaborate with cross-functional teams to implement innovative solutions.',
    requirements: [
      '5+ years of experience in AI/ML development',
      'Strong background in Python and deep learning frameworks',
      'Experience with large-scale distributed systems',
      'Track record of leading technical projects',
      'MS/PhD in Computer Science or related field'
    ]
  },
  {
    id: '2',
    title: 'Machine Learning Researcher',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time',
    description: 'Research and develop cutting-edge machine learning algorithms to solve complex business problems.',
    requirements: [
      'PhD in Machine Learning, Computer Science, or related field',
      'Publication record in top-tier conferences',
      'Experience with PyTorch or TensorFlow',
      'Strong mathematical and statistical background',
      'Excellent research and analytical skills'
    ]
  },
  {
    id: '3',
    title: 'AI Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Drive the product vision and strategy for our AI solutions, working closely with engineering and design teams.',
    requirements: [
      '4+ years of product management experience',
      'Experience with AI/ML products',
      'Strong technical background',
      'Excellent communication and leadership skills',
      'MBA or technical degree preferred'
    ]
  },
  {
    id: '4',
    title: 'UI/UX Designer - AI Interfaces',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Design intuitive and beautiful interfaces for our AI-powered products, focusing on user experience and accessibility.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Strong portfolio demonstrating complex interface design',
      'Experience with Figma and modern design tools',
      'Understanding of AI/ML concepts',
      'Excellent visual design skills'
    ]
  },
  {
    id: '5',
    title: 'AI Security Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop and implement security measures for our AI systems, ensuring data privacy and protection.',
    requirements: [
      '4+ years of security engineering experience',
      'Experience with AI/ML security',
      'Knowledge of cryptography and security protocols',
      'Background in penetration testing',
      'Security certifications preferred'
    ]
  }
];