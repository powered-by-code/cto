import ReferralProgram from "@/components/ReferralProgram";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Referral Program | Cube Unity",
  description: "Join the Cube Unity Referral Program and help connect startups with expert tech leadership while earning rewards.",
};

export default function ReferralProgramPage() {
  return (
    <PageLayout>
      <ReferralProgram />
    </PageLayout>
  );
} 