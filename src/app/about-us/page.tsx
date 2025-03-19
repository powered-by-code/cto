import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

// Define team members
const teamMembers = [
  {
    name: 'Michael Chen',
    title: 'Founder & Principal CTO',
    bio: 'Former CTO at two successful startups with exits over $100M. 15+ years of experience building and scaling technology teams and products across fintech, SaaS, and marketplaces.',
    image: '/images/team-michael.jpg'
  },
  {
    name: 'Sarah Johnson',
    title: 'Senior Technology Advisor',
    bio: 'Ex-VP of Engineering at a leading cloud infrastructure company. Expert in scalable architectures, cloud optimization, and technical leadership with 12+ years of experience.',
    image: '/images/team-sarah.jpg'
  },
  {
    name: 'David Rodriguez',
    title: 'Technical Strategy Lead',
    bio: 'Serial entrepreneur and technical leader who has built and scaled multiple startups from inception to acquisition. Specialized in helping non-technical founders navigate technical decisions.',
    image: '/images/team-david.jpg'
  },
  {
    name: 'Jennifer Kim',
    title: 'Technology Team Architect',
    bio: 'Former Director of Engineering at a unicorn startup. Expert in building high-performing technical teams, engineering processes, and development workflows.',
    image: '/images/team-jennifer.jpg'
  }
];

// Define company values
const companyValues = [
  {
    title: 'Practical Excellence',
    description: 'We deliver pragmatic solutions that balance technical excellence with business reality. Perfect is the enemy of shipped.'
  },
  {
    title: 'Strategic Perspective',
    description: 'We look beyond the immediate technical challenges to understand how technology decisions support broader business objectives.'
  },
  {
    title: 'Knowledge Transfer',
    description: 'We don\'t just solve problems; we ensure your team understands the solution and can maintain it after we\'re gone.'
  },
  {
    title: 'Transparent Partnership',
    description: 'We build relationships based on honesty, clear communication, and a shared commitment to your success.'
  }
];

export default function AboutUsPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p>CTOprime was born from a simple observation: many promising startups struggle with technical leadership challenges that can make or break their success. While these companies need strategic technical guidance, they often can't justify the expense of a full-time CTO, especially in their earlier stages.</p>
            
            <p>Founded in 2018 by Michael Chen, a veteran CTO with multiple successful exits, CTOprime set out to solve this problem by providing flexible, high-impact technical leadership to startups and growing companies. What began as a solo consultancy has evolved into a team of experienced technology leaders who share a passion for helping founders navigate technical challenges and build successful companies.</p>
            
            <p>Today, we work with clients across industries—from SaaS and fintech to marketplaces and health tech—providing the strategic technical leadership they need, precisely when they need it. Our fractional CTO model has helped dozens of companies make confident technology decisions, build scalable systems, and accelerate their growth trajectory.</p>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <div className="prose max-w-none">
            <p>We believe that technical leadership isn't just about knowing the latest technologies—it's about understanding how technology decisions support business objectives. Our approach combines technical expertise with business acumen, allowing us to provide guidance that's both strategically sound and practically implementable.</p>
            
            <p>Unlike traditional consultants who may specialize in specific technologies or offer cookie-cutter solutions, we take a holistic view of your technology needs. We work to understand your business model, growth stage, and unique challenges before recommending solutions. This ensures that our guidance is always contextual, relevant, and aligned with your specific goals.</p>
            
            <p>We're also committed to knowledge transfer. While we're happy to provide hands-on implementation when needed, our ultimate goal is to build your team's capabilities so you can operate successfully after our engagement ends. We believe in teaching people to fish, not just serving them a meal.</p>
            
            <p>Finally, we understand that technical decisions have long-lasting implications. We're not just focused on what works today—we consider how your technology choices will support your business as it evolves and scales.</p>
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
        
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card card-side bg-base-200 shadow-lg">
                <figure className="w-1/3">
                  {/* Replace with actual images */}
                  <div className="w-full h-full aspect-square flex items-center justify-center bg-primary/10">
                    <span className="text-lg font-medium">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                  </div>
                </figure>
                <div className="card-body w-2/3">
                  <h3 className="card-title">{member.name}</h3>
                  <div className="text-sm font-medium mb-2">{member.title}</div>
                  <p className="text-sm">{member.bio}</p>
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
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
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