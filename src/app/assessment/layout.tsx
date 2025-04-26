import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional CTO Need Assessment | Free Tool | Cubeunity',
  description: 'Take our free assessment test to determine if your organization would benefit from a fractional CTO, and discover the ideal level of engagement for your needs.',
  keywords: 'fractional CTO assessment, technology leadership evaluation, CTO needs, tech leadership quiz, free tech assessment',
  openGraph: {
    title: 'Fractional CTO Need Assessment | Free Tool | Cubeunity',
    description: 'Take our free assessment test to determine if your organization would benefit from a fractional CTO, and discover the ideal level of engagement for your needs.',
    type: 'website',
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 