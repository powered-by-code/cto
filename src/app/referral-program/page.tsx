import ReferralProgram from "@/components/ReferralProgram";
import PageLayout from "@/components/PageLayout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Referral Program | Partner With Us | Cubeunity",
  description: "Join the Cubeunity Referral Program and help connect startups with expert tech leadership while earning rewards for your network.",
  keywords: "referral program, tech partnership, fractional CTO referral, earn rewards, partner program",
  openGraph: {
    title: "Referral Program | Partner With Us | Cubeunity",
    description: "Join the Cubeunity Referral Program and help connect startups with expert tech leadership while earning rewards for your network.",
    type: 'website',
  },
};

export default function ReferralProgramPage() {
  return (
    <PageLayout>
      <ReferralProgram />
    </PageLayout>
  );
} 