import React from 'react';
import type { Department } from '../../types/jobs';

interface JobFiltersProps {
  selectedDepartment: Department | 'all';
  onDepartmentChange: (department: Department | 'all') => void;
}

export default function JobFilters({
  selectedDepartment,
  onDepartmentChange,
}: JobFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
      <FilterButton
        active={selectedDepartment === 'all'}
        onClick={() => onDepartmentChange('all')}
      >
        All
      </FilterButton>
      <FilterButton
        active={selectedDepartment === 'Engineering'}
        onClick={() => onDepartmentChange('Engineering')}
      >
        Engineering
      </FilterButton>
      <FilterButton
        active={selectedDepartment === 'Data Science'}
        onClick={() => onDepartmentChange('Data Science')}
      >
        Data Science
      </FilterButton>
      <FilterButton
        active={selectedDepartment === 'Product'}
        onClick={() => onDepartmentChange('Product')}
      >
        Product
      </FilterButton>
      <FilterButton
        active={selectedDepartment === 'Design'}
        onClick={() => onDepartmentChange('Design')}
      >
        Design
      </FilterButton>
    </div>
  );
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
        active
          ? 'bg-purple-600 text-white'
          : 'bg-white/5 text-gray-400 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}