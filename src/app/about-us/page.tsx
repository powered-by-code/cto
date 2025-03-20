import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';

export default function AboutUsPage() {
  // Get data from data.json
  const { meetingLink, teamMembers, companyValues, companyStory, companyApproach } = data;
  
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
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
                    className="object-cover"
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

        <section className="mt-16">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title text-2xl">Ready to Level Up Your Technical Leadership?</h2>
              <p className="my-4">
                Schedule a free consultation to discuss how our fractional CTO services can help your business overcome technical challenges and accelerate growth.
              </p>
              <div className="card-actions">
                <Link href={meetingLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
} 