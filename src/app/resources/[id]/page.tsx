import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define resource details
const resources = [
  {
    id: "cto-guide-for-startups",
    title: "The Complete Guide to Fractional CTO Services for Startups",
    category: "Technical Leadership",
    description:
      "Learn how a fractional CTO can help your startup build scalable technology, make strategic decisions, and accelerate growth - without the full-time executive cost.",
    image: "/images/resource-cto-guide.jpg",
    date: "June 15, 2023",
    author: "Michael Chen",
    content: `
      <h2>Introduction: The Technical Leadership Gap in Startups</h2>
      <p>Every successful startup reaches a critical inflection point in its technical journey. You've validated your idea, built an MVP, and perhaps secured initial funding. Now you're facing increasingly complex technical decisions that will determine your ability to scale, your product's reliability, and ultimately, your company's success.</p>
      
      <p>This is the moment when many founders realize they need strategic technical leadership—but hiring a full-time CTO can be prohibitively expensive, with compensation packages often exceeding $250,000 annually plus equity. This guide explores how fractional CTO services provide a powerful solution to this challenge, offering expert technical leadership tailored to your specific needs and growth stage.</p>
      
      <h2>What is a Fractional CTO?</h2>
      <p>A fractional CTO is an experienced technology executive who provides part-time strategic and technical leadership to companies that need CTO-level expertise but aren't ready for a full-time executive hire. Think of it as having access to seasoned technical leadership on a flexible basis—whether that's a few hours per week or several days per month.</p>
      
      <p>Unlike technical consultants who typically focus on specific projects or technologies, a fractional CTO takes a holistic view of your technology strategy, serving as a trusted advisor and partner in your business growth. They bring the experience gained from building and scaling multiple technical organizations, allowing you to benefit from lessons learned across diverse scenarios.</p>
      
      <h2>The Business Case for a Fractional CTO</h2>
      <p>Engaging a fractional CTO delivers several compelling advantages for startups and growing companies:</p>
      
      <h3>Cost-Effectiveness</h3>
      <ul>
        <li>Gain access to CTO-level expertise at a fraction of the cost of a full-time hire</li>
        <li>Avoid expensive benefits, equity packages, and long-term commitments</li>
        <li>Scale engagement up or down based on your changing needs</li>
      </ul>
      
      <h3>Immediate Impact</h3>
      <ul>
        <li>Bring in ready-made experience that would take years to develop internally</li>
        <li>Implement best practices from day one, avoiding costly mistakes</li>
        <li>Accelerate technology initiatives with proven methodologies</li>
      </ul>
      
      <h3>Objective Perspective</h3>
      <ul>
        <li>Benefit from an outside perspective free from internal politics</li>
        <li>Receive honest assessments of technical capabilities and gaps</li>
        <li>Get unbiased advice on technology decisions</li>
      </ul>
      
      <h3>Access to a Broader Network</h3>
      <ul>
        <li>Tap into the fractional CTO's professional network of developers, specialists, and vendors</li>
        <li>Connect with potential technology partners and service providers</li>
        <li>Leverage relationships built across multiple companies and industries</li>
      </ul>
      
      <h2>When to Consider a Fractional CTO</h2>
      <p>Several scenarios indicate that your organization might benefit from fractional CTO services:</p>
      
      <h3>Growing Beyond the Founding Team's Technical Expertise</h3>
      <p>You've built an initial product, but now face more complex challenges like scaling, security, or compliance that exceed your team's experience.</p>
      
      <h3>Bridging the Gap Before a Full-Time Hire</h3>
      <p>You know you'll eventually need a full-time CTO but aren't quite ready for that investment. A fractional CTO can build the foundation and help define the role for when you're ready to hire.</p>
      
      <h3>Technical Due Diligence for Fundraising</h3>
      <p>You're preparing for a funding round and need to strengthen your technical story and ensure your architecture can support your growth projections.</p>
      
      <h3>Managing a Technical Transition or Pivot</h3>
      <p>Your business is undergoing a significant change—like a pivot, major product evolution, or technology migration—that requires experienced oversight.</p>
      
      <h3>Non-Technical Founder Needing Technical Guidance</h3>
      <p>You're a non-technical founder who needs help making informed technology decisions and effectively managing development resources.</p>
      
      <h2>Core Services Provided by a Fractional CTO</h2>
      <p>While engagements vary based on company needs, most fractional CTO services include some combination of the following:</p>
      
      <h3>Technical Strategy Development</h3>
      <ul>
        <li>Creating a technology roadmap aligned with business objectives</li>
        <li>Making build vs. buy decisions for core systems</li>
        <li>Planning for scalability, security, and performance</li>
        <li>Balancing short-term delivery with long-term architectural needs</li>
      </ul>
      
      <h3>Technology Stack Selection</h3>
      <ul>
        <li>Evaluating and selecting appropriate technologies</li>
        <li>Ensuring stack cohesion and alignment with business needs</li>
        <li>Planning for future integration and scaling requirements</li>
        <li>Avoiding common technology selection pitfalls</li>
      </ul>
      
      <h3>Team Building and Management</h3>
      <ul>
        <li>Defining technical roles and team structure</li>
        <li>Establishing hiring processes and technical assessments</li>
        <li>Implementing engineering best practices and processes</li>
        <li>Mentoring technical leads and team members</li>
      </ul>
      
      <h3>Technical Debt Management</h3>
      <ul>
        <li>Assessing and quantifying existing technical debt</li>
        <li>Developing strategies to address critical issues</li>
        <li>Creating processes to prevent excessive debt accumulation</li>
        <li>Balancing new feature development with maintenance needs</li>
      </ul>
      
      <h2>How to Work Effectively with a Fractional CTO</h2>
      <p>To maximize the value of your fractional CTO relationship, consider these best practices:</p>
      
      <h3>Define Clear Objectives and Expectations</h3>
      <p>Establish specific goals and deliverables for the engagement, whether that's developing a technical roadmap, improving system reliability, or building a scalable architecture.</p>
      
      <h3>Integrate Them into Your Team</h3>
      <p>While not a full-time employee, your fractional CTO should attend key meetings, have access to necessary systems, and be introduced as a leadership team member.</p>
      
      <h3>Establish Regular Communication Rhythms</h3>
      <p>Schedule consistent check-ins and updates, ensuring alignment and providing opportunities to address emerging challenges.</p>
      
      <h3>Be Transparent About Challenges</h3>
      <p>Share the full picture of your technical situation, including problems and constraints, to enable the most effective guidance.</p>
      
      <h3>Leverage Their Network and Resources</h3>
      <p>Ask for introductions to potential hires, service providers, or partners who might benefit your business.</p>
      
      <h2>Finding the Right Fractional CTO</h2>
      <p>Not all fractional CTOs are created equal. Here's what to look for when selecting the right partner:</p>
      
      <h3>Relevant Industry Experience</h3>
      <p>While technical leadership skills are transferable, domain knowledge in your specific industry can accelerate impact.</p>
      
      <h3>Growth Stage Alignment</h3>
      <p>Ensure they have experience working with companies at your stage of development—the needs of a seed-stage startup differ from those of a scaling Series B company.</p>
      
      <h3>Technical Depth and Breadth</h3>
      <p>Look for both deep expertise in critical areas and broad knowledge across the technical landscape.</p>
      
      <h3>Business Acumen</h3>
      <p>The best fractional CTOs understand business constraints and can make technology recommendations that balance ideal solutions with practical realities.</p>
      
      <h3>Leadership and Communication Skills</h3>
      <p>They should be able to effectively communicate technical concepts to non-technical stakeholders and inspire your technical team.</p>
      
      <h2>Conclusion: Strategic Technical Leadership for Every Growth Stage</h2>
      <p>Fractional CTO services represent a powerful model for accessing the strategic technical leadership your company needs, precisely when you need it. By providing experienced guidance at a fraction of the cost of a full-time hire, this approach enables startups and growing companies to make confident technology decisions, build scalable systems, and accelerate their path to success.</p>
      
      <p>Whether you're a non-technical founder seeking guidance, a technical founder looking to complement your skills, or a growing company navigating a complex transition, a fractional CTO can provide the expertise, perspective, and leadership to help you achieve your technology and business goals.</p>
      
      <p>Remember that the right fractional CTO isn't just a technical advisor—they're a strategic partner in your business growth, bringing the experience and insights needed to turn your technology challenges into competitive advantages.</p>
    `,
  },
  {
    id: "tech-stack-decisions",
    title: "Making Technology Stack Decisions That Won't Haunt You Later",
    category: "Technology Strategy",
    description:
      "Avoid costly technology mistakes with this guide to selecting the right tech stack for your business needs, future scalability, and resource constraints.",
    image: "/images/resource-tech-stack.jpg",
    date: "April 18, 2023",
    author: "James Wilson",
    content: `
      <h2>Introduction: Why Tech Stack Decisions Matter</h2>
      <p>The technology stack you choose today will shape your product's capabilities, your team's productivity, and your company's agility for years to come. Make the right choices, and your technology becomes a competitive advantage that enables rapid innovation and scalable growth. Make the wrong choices, and you'll face mounting technical debt, increasing development costs, and potentially even the need for painful rewrites.</p>
      
      <p>Despite their importance, many founders and technology leaders make stack decisions based on familiarity, trending technologies, or isolated recommendations without considering the full business context. This guide provides a structured approach to making technology decisions that align with your business needs and will serve you well as your company evolves.</p>
      
      <h2>Understanding the Full Impact of Stack Decisions</h2>
      <p>Your technology stack influences far more than just how your application functions. It affects:</p>
      
      <h3>Development Velocity</h3>
      <ul>
        <li>How quickly new features can be implemented</li>
        <li>The ease of maintaining and extending existing functionality</li>
        <li>The learning curve for new team members</li>
      </ul>
      
      <h3>Operational Costs</h3>
      <ul>
        <li>Infrastructure and hosting expenses</li>
        <li>Licensing fees for commercial components</li>
        <li>Monitoring and maintenance requirements</li>
      </ul>
      
      <h3>Talent Acquisition and Retention</h3>
      <ul>
        <li>The availability of developers with relevant skills</li>
        <li>Market rates for specialists in your chosen technologies</li>
        <li>Developer satisfaction and interest in working with your stack</li>
      </ul>
      
      <h3>Business Flexibility</h3>
      <ul>
        <li>Ability to pivot or expand product offerings</li>
        <li>Capability to integrate with other systems and services</li>
        <li>Potential limitations on business models or pricing structures</li>
      </ul>
      
      <h2>A Framework for Making Stack Decisions</h2>
      <p>Rather than jumping directly to technology selection, follow this strategic framework:</p>
      
      <h3>Step 1: Define Your Business Requirements</h3>
      <p>Start by clearly articulating what your business needs from technology:</p>
      <ul>
        <li>Performance requirements (speed, throughput, latency)</li>
        <li>Scalability expectations (user growth, data volume)</li>
        <li>Security and compliance needs</li>
        <li>Integration requirements with other systems</li>
        <li>Time-to-market constraints</li>
        <li>Budget limitations</li>
      </ul>
      
      <h3>Step 2: Consider Your Team and Talent Strategy</h3>
      <p>Evaluate the human factors that will influence success:</p>
      <ul>
        <li>Your current team's skills and experience</li>
        <li>Your hiring plan and talent market</li>
        <li>Need for specialized expertise</li>
        <li>Training requirements and learning curves</li>
      </ul>
      
      <h3>Step 3: Assess Technology Options Against Multiple Criteria</h3>
      <p>For each component of your stack, evaluate options across dimensions such as:</p>
      <ul>
        <li>Maturity and stability</li>
        <li>Community size and activity</li>
        <li>Documentation quality</li>
        <li>Performance characteristics</li>
        <li>Scalability patterns</li>
        <li>Security track record</li>
        <li>Licensing and cost model</li>
        <li>Available talent pool</li>
        <li>Long-term viability</li>
      </ul>
      
      <h3>Step 4: Make Deliberate Tradeoffs</h3>
      <p>Acknowledge that no technology is perfect for all scenarios, and explicitly decide which factors you're prioritizing:</p>
      <ul>
        <li>Speed of development vs. long-term maintainability</li>
        <li>Cutting-edge features vs. proven stability</li>
        <li>Performance optimization vs. developer productivity</li>
        <li>Custom solutions vs. off-the-shelf components</li>
      </ul>
      
      <h3>Step 5: Plan for Evolution</h3>
      <p>Recognize that your stack will need to evolve:</p>
      <ul>
        <li>Identify potential bottlenecks or limitations</li>
        <li>Design with modularity to allow component replacement</li>
        <li>Establish clear interfaces between system parts</li>
        <li>Consider future scaling needs</li>
      </ul>
      
      <h2>Common Pitfalls in Stack Selection</h2>
      <p>Avoid these frequent mistakes when making technology decisions:</p>
      
      <h3>Chasing the New and Shiny</h3>
      <p>Selecting technologies primarily because they're trending or exciting, without sufficient evaluation of their appropriateness for your specific needs.</p>
      
      <h3>Overengineering Early</h3>
      <p>Building for hypothetical scale or complexity before it's needed, creating unnecessary overhead and slowing initial development.</p>
      
      <h3>Underestimating Operational Complexity</h3>
      <p>Focusing solely on development aspects while neglecting deployment, monitoring, and maintenance requirements.</p>
      
      <h3>Failing to Consider the Ecosystem</h3>
      <p>Evaluating technologies in isolation without considering how they integrate with other components and systems.</p>
      
      <h3>Prioritizing Familiarity Over Fit</h3>
      <p>Choosing technologies simply because the team knows them, even when they're suboptimal for the problem at hand.</p>
      
      <h2>Key Technology Stack Decisions by Area</h2>
      <p>Let's examine the major areas where stack decisions have significant impact:</p>
      
      <h3>Frontend Technology</h3>
      <p>Consider factors such as:</p>
      <ul>
        <li>Single-page application vs. server-rendered approaches</li>
        <li>Framework maturity and community support</li>
        <li>Mobile requirements (responsive web vs. native apps)</li>
        <li>Performance on target devices</li>
        <li>SEO requirements</li>
      </ul>
      
      <h3>Backend Framework and Language</h3>
      <p>Evaluate based on:</p>
      <ul>
        <li>Performance characteristics</li>
        <li>Developer productivity and familiarity</li>
        <li>Available libraries and ecosystem</li>
        <li>Concurrency model and scalability</li>
        <li>Deployment options and requirements</li>
      </ul>
      
      <h3>Data Storage Solutions</h3>
      <p>Select according to:</p>
      <ul>
        <li>Data structure and relationship complexity</li>
        <li>Query patterns and access requirements</li>
        <li>Scaling needs (vertical vs. horizontal)</li>
        <li>Consistency and availability requirements</li>
        <li>Operational complexity and management overhead</li>
      </ul>
      
      <h3>Infrastructure and Deployment</h3>
      <p>Consider these factors:</p>
      <ul>
        <li>Cloud provider selection and lock-in concerns</li>
        <li>Container orchestration needs</li>
        <li>Serverless vs. traditional deployment models</li>
        <li>Geographic distribution requirements</li>
        <li>Compliance and security constraints</li>
      </ul>
      
      <h2>Case Study: Evolving a Stack Through Growth Stages</h2>
      <p>Let's examine how technology stack decisions might evolve for a typical B2B SaaS company:</p>
      
      <h3>MVP Stage</h3>
      <p>Focus: Speed to market and validating hypotheses with minimal investment</p>
      <p>Appropriate choices might include:</p>
      <ul>
        <li>Monolithic architecture for simplicity</li>
        <li>Productive framework with strong conventions</li>
        <li>Managed services to reduce operational overhead</li>
        <li>Simple relational database for most data</li>
      </ul>
      
      <h3>Early Growth Stage</h3>
      <p>Focus: Supporting increased usage while continuing rapid feature development</p>
      <p>Evolution might include:</p>
      <ul>
        <li>Breaking out select high-load components</li>
        <li>Implementing caching strategies</li>
        <li>Adding monitoring and performance visibility</li>
        <li>Automating deployment and testing</li>
      </ul>
      
      <h3>Scale-up Stage</h3>
      <p>Focus: Supporting larger customers and enterprise requirements</p>
      <p>Changes might include:</p>
      <ul>
        <li>Moving toward microservices for critical components</li>
        <li>Implementing more sophisticated data partitioning</li>
        <li>Adding specialized databases for specific workloads</li>
        <li>Enhancing security and compliance capabilities</li>
      </ul>
      
      <h2>Conclusion: Strategic Thinking for Long-term Success</h2>
      <p>Making effective technology stack decisions requires balancing immediate needs with long-term vision, technical considerations with business realities, and current capabilities with future aspirations. By approaching these decisions with a structured framework and careful deliberation, you can create a foundation that supports your business as it grows rather than constraining it.</p>
      
      <p>Remember that the goal isn't to pick the "best" technologies in absolute terms, but to select the right technologies for your specific context and needs. And while changing direction becomes increasingly costly as you scale, building with modularity and clear interfaces from the beginning can give you the flexibility to evolve your stack as your requirements change.</p>
      
      <p>Finally, recognize that technology selection is not a one-time decision but an ongoing process of evaluation and refinement. By regularly reassessing your stack against evolving business needs and emerging technologies, you can ensure your technical foundation continues to support rather than hinder your growth.</p>
    `,
  },
  // Additional resources would be defined here
];

export default function ResourcePage(params :  { id: string } ) {
  console.log(params.id);
  const resource = resources.find((r) => r.id === params.id);

  if (!resource) {
    notFound();
  }

  // For resources not defined in detail, show a coming soon message
  const isContentAvailable = resource.content !== undefined;

  return (
    <PageLayout>
      <div className="py-12">
        <div className="mb-8">
          <Link
            href="/resources"
            className="text-primary flex items-center gap-2"
          >
            <span>←</span> Back to Resources
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <div>
            <div className="text-sm badge badge-primary mb-2">
              {resource.category}
            </div>
            <h1 className="text-4xl font-bold">{resource.title}</h1>
          </div>
          <div className="text-sm">
            <div>{resource.date}</div>
            {resource.author && (
              <div className="font-medium">By {resource.author}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {isContentAvailable ? (
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: resource.content }}
              />
            ) : (
              <div className="prose max-w-none">
                <p className="text-lg font-medium mb-6">
                  {resource.description}
                </p>
                <div className="alert alert-info">
                  <p>
                    Full content for this resource is coming soon. Please check
                    back later or subscribe to our newsletter to be notified
                    when it's available.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg sticky top-8">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">
                    {resource.category}
                  </span>
                </div>
              </figure>

              <div className="card-body">
                <h3 className="card-title">Share this Resource</h3>
                <div className="flex gap-2 my-4">
                  <button className="btn btn-circle btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </button>
                </div>

                <div className="divider"></div>

                <h3 className="card-title">Download</h3>
                <button className="btn btn-primary w-full my-4">
                  Download PDF
                </button>

                <div className="divider"></div>

                <h3 className="card-title">Related Resources</h3>
                <ul className="mt-4 space-y-2">
                  {resource.id === "cto-guide-for-startups" && (
                    <>
                      <li>
                        <Link
                          href="/resources/tech-team-building"
                          className="text-primary hover:underline"
                        >
                          Building High-Performance Technical Teams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resources/tech-stack-decisions"
                          className="text-primary hover:underline"
                        >
                          Making Technology Stack Decisions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resources/cto-assessment"
                          className="text-primary hover:underline"
                        >
                          Do You Need a CTO? Take the Assessment
                        </Link>
                      </li>
                    </>
                  )}
                  {resource.id === "tech-stack-decisions" && (
                    <>
                      <li>
                        <Link
                          href="/resources/technical-debt-management"
                          className="text-primary hover:underline"
                        >
                          Technical Debt: When to Pay It Down
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resources/cloud-cost-optimization"
                          className="text-primary hover:underline"
                        >
                          Cloud Cost Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resources/cto-guide-for-startups"
                          className="text-primary hover:underline"
                        >
                          The Complete Guide to Fractional CTO Services
                        </Link>
                      </li>
                    </>
                  )}
                </ul>

                <div className="divider"></div>

                <h3 className="card-title">Get Expert Help</h3>
                <p className="mt-4 mb-6 text-sm">
                  Need personalized guidance on this topic? Schedule a free
                  consultation with our fractional CTO team.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
