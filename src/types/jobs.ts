export type Department = 'Engineering' | 'Data Science' | 'Product' | 'Design';
export type JobType = 'Full-time' | 'Contract' | 'Remote';

export interface Job {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: JobType;
  description: string;
  requirements: string[];
}