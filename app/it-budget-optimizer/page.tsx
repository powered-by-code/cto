'use client';

import { Suspense } from 'react';
import CostCalculator from '@/components/CostCalculator';

export default function ITBudgetOptimizerPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading calculator...</div>}>
      <CostCalculator />
    </Suspense>
  );
} 