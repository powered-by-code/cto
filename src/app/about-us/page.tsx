import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';
import MeetingButton from '@/components/MeetingButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Our Team and Values | Cubeunity',
  description: 'Learn about Cubeunity\'s team of expert technical leaders, our values, and our approach to providing fractional CTO services.',
  keywords: 'fractional CTO, tech leadership team, tech consulting, Cubeunity team',
  openGraph: {
    title: 'About Us | Our Team and Values | Cubeunity',
    description: 'Learn about Cubeunity\'s team of expert technical leaders, our values, and our approach to providing fractional CTO services.',
    type: 'website',
  },
};

export default function AboutUsPage() {
  // Get data from data.json
  const { teamMembers, companyValues, companyStory, companyApproach } = data;
  
  return (
    <PageLayout showCTA={false}>
      <div className="py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
     
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{companyStory.headline}</h2>
          <div className="prose max-w-none">
            {companyStory.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{companyApproach.headline}</h2>
          <div className="prose max-w-none">
            {companyApproach.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-base-200 shadow-lg">
                <figure className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-primary">{member.title}</p>
                  <p className="mt-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mt-16">
          <div className="card bg-base-200 shadow-lg p-8 text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Do you need a help with your project?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Schedule a consultation to discuss how our team can help solve your technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MeetingButton text="Schedule a Free Consultation" />
              <Link href="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
} 