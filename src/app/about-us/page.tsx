import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

// Define team members
const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'CEO & Founder',
    bio: 'Sarah has over 20 years of experience in sustainability and climate strategy. Prior to founding our company, she served as Global Head of Sustainability at a Fortune 100 company and held senior positions at leading environmental organizations. She holds a PhD in Environmental Science from Stanford University.',
    image: '/images/team-sarah.jpg'
  },
  {
    name: 'Michael Chen',
    title: 'Chief Strategy Officer',
    bio: 'Michael brings 15 years of experience in sustainable finance and ESG integration. Before joining our team, he was a Partner at a global management consulting firm, leading their sustainability practice. He holds an MBA from Harvard Business School and is a CFA charterholder.',
    image: '/images/team-michael.jpg'
  },
  {
    name: 'Dr. Amina Osei',
    title: 'Head of Climate Risk',
    bio: 'Amina is an expert in climate science and risk assessment. She previously worked at the IPCC and as a climate researcher at Oxford University. She holds a PhD in Atmospheric Physics and has published extensively on climate modeling and adaptation strategies.',
    image: '/images/team-amina.jpg'
  },
  {
    name: 'James Rodriguez',
    title: 'Head of Sustainable Finance',
    bio: 'James has extensive experience in sustainable finance and impact investing. Prior to joining our team, he worked at a leading investment bank, where he developed innovative green finance products. He holds an MSc in Environmental Economics from LSE.',
    image: '/images/team-james.jpg'
  },
  {
    name: 'Emma Wilson',
    title: 'Head of ESG Advisory',
    bio: 'Emma specializes in ESG strategy and reporting. She previously led ESG integration at a global asset management firm and served as an advisor to the UN Global Compact. She holds an MA in International Relations and is a GRI certified sustainability professional.',
    image: '/images/team-emma.jpg'
  },
  {
    name: 'Dr. Raj Patel',
    title: 'Head of Innovation',
    bio: 'Raj focuses on technological solutions for sustainability challenges. Before joining our firm, he founded a cleantech startup and served as an innovation advisor to governments and multinational corporations. He holds a PhD in Engineering from MIT.',
    image: '/images/team-raj.jpg'
  }
];

// Define company values
const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our work, providing objective advice and maintaining independence in our recommendations.'
  },
  {
    title: 'Innovation',
    description: 'We continuously seek new approaches and solutions to complex sustainability challenges, combining scientific rigor with creative thinking.'
  },
  {
    title: 'Impact',
    description: 'We are dedicated to creating measurable positive environmental and social outcomes through our work with clients and partners.'
  },
  {
    title: 'Inclusion',
    description: 'We value diverse perspectives and experiences, fostering an inclusive culture both within our organization and in our approach to stakeholder engagement.'
  }
];

export default function AboutUsPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="prose max-w-none">
              <p>
                Founded in 2015, our company emerged from a simple yet powerful vision: to bridge the gap between sustainability aspirations and practical business solutions. Our founder, Dr. Sarah Johnson, recognized that while many organizations were increasingly aware of sustainability challenges, they often lacked the strategic guidance and technical expertise to effectively address these issues.
              </p>
              <p>
                Starting with a small team of experts in climate science, finance, and business strategy, we set out to create a consultancy that combines rigorous analysis with practical implementation support. Over the years, we've grown to a global team of over 100 professionals serving clients across industries and regions.
              </p>
              <p>
                Today, we're recognized as a leading sustainability consultancy, known for our science-based approach, innovative solutions, and commitment to driving measurable positive impact. As we continue to grow, we remain dedicated to our core purpose: accelerating the transition to a more sustainable and resilient economy.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="prose max-w-none">
              <p>
                Our approach is founded on three core principles:
              </p>
              <ul>
                <li>
                  <strong>Science-based:</strong> We ground our work in the latest scientific research and evidence, ensuring that our recommendations are aligned with planetary boundaries and social foundations.
                </li>
                <li>
                  <strong>Business-aligned:</strong> We understand that sustainability initiatives must create business value to be truly sustainable. We help clients identify and capture the strategic opportunities in addressing environmental and social challenges.
                </li>
                <li>
                  <strong>Implementation-focused:</strong> We don't just provide strategies on paper; we work alongside our clients to implement solutions, build internal capabilities, and drive lasting change.
                </li>
              </ul>
              <p>
                This approach enables us to develop tailored solutions that address the specific sustainability challenges and opportunities of each client, while contributing to broader systemic change.
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div key={index} className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-base-200 shadow-lg">
              <figure className="h-64 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{member.name}</span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{member.name}</h3>
                <div className="text-sm font-medium text-primary mb-2">{member.title}</div>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-6">
            We're always looking for passionate and talented individuals to join our mission of accelerating the transition to a sustainable future.
          </p>
          <Link href="/careers" className="btn btn-primary">
            View Open Positions
          </Link>
        </div>
      </div>
    </PageLayout>
  );
} 