import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Budget Optimizer',
  description: 'Calculate your potential savings by switching to open source alternatives',
};

export default function ITBudgetOptimizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-8">
      {children}
    </div>
  );
} 