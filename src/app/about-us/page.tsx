import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

// Define team members
const teamMembers = [
  {
    name: 'Michael Chen',
    title: 'Founder & Lead CTO',
    bio: '20+ years of experience in technical leadership, with multiple successful exits. Former CTO at TechStart and FinEdge.',
    image: '/images/team/michael-chen.jpg'
  },
  {
    name: 'Sarah Johnson',
    title: 'Senior Technical Advisor',
    bio: 'Expert in cloud architecture and scalable systems. Previously led engineering teams at major tech companies.',
    image: '/images/team/sarah-johnson.jpg'
  },
  {
    name: 'David Kumar',
    title: 'Technical Strategy Lead',
    bio: 'Specializes in technical due diligence and team building. Has helped scale multiple startups from seed to Series C.',
    image: '/images/team/david-kumar.jpg'
  }
];

// Define company values
const companyValues = [
  {
    title: 'Technical Excellence',
    description: 'We maintain the highest standards of technical expertise and stay at the forefront of technology trends.'
  },
  {
    title: 'Business Alignment',
    description: 'Our solutions are always aligned with business objectives, ensuring technology drives growth.'
  },
  {
    title: 'Knowledge Transfer',
    description: 'We believe in empowering teams with knowledge rather than creating dependencies.'
  },
  {
    title: 'Long-term Impact',
    description: 'Our recommendations consider both immediate needs and future scalability.'
  }
];

export default function AboutUsPage() {
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