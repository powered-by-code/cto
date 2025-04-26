import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Budget Optimizer | Free Cost Savings Calculator | Cubeunity',
  description: 'Discover how much your organization could save by switching from commercial tools to open source alternatives with our free IT Budget Optimizer tool.',
  keywords: 'IT budget calculator, open source savings, technology cost reduction, IT cost optimization, free IT tool',
  openGraph: {
    title: 'IT Budget Optimizer | Free Cost Savings Calculator | Cubeunity',
    description: 'Discover how much your organization could save by switching from commercial tools to open source alternatives with our free IT Budget Optimizer tool.',
    type: 'website',
  },
};

export default function ITBudgetOptimizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 