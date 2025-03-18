import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define resource details
const resources = [
  {
    id: 'net-zero-guide',
    title: 'The Complete Guide to Net Zero Strategy',
    category: 'guides',
    description: 'A comprehensive guide to developing and implementing credible net zero strategies for organizations across sectors.',
    image: '/images/resource-net-zero.jpg',
    date: 'May 10, 2023',
    author: 'Dr. Sarah Johnson',
    content: `
      <h2>Introduction to Net Zero</h2>
      <p>As the global community races to address climate change, organizations across sectors are increasingly committing to achieve net zero emissions. But what exactly does "net zero" mean, and how can organizations develop and implement credible strategies to get there?</p>
      
      <p>This comprehensive guide aims to demystify the concept of net zero and provide organizations with a practical roadmap for developing and implementing effective net zero strategies. Whether you're just beginning your climate journey or looking to enhance your existing approach, this guide offers valuable insights and actionable steps.</p>
      
      <h2>Understanding Net Zero</h2>
      <p>Net zero refers to achieving a balance between the greenhouse gases put into the atmosphere and those taken out. This state occurs when the amount of greenhouse gas emissions produced equals the amount removed from the atmosphere.</p>
      
      <p>It's important to distinguish between carbon neutrality and net zero. Carbon neutrality typically focuses on offsetting emissions through carbon credits, without necessarily reducing emissions. Net zero, on the other hand, emphasizes deep emissions reductions across the value chain, with offsets used only for residual emissions that cannot be eliminated.</p>
      
      <h2>The Business Case for Net Zero</h2>
      <p>Developing a net zero strategy isn't just about addressing climate change—it also makes good business sense. Benefits include:</p>
      
      <ul>
        <li>Risk management: Mitigating transition risks related to policy changes, market shifts, and technology disruptions</li>
        <li>Cost savings: Identifying efficiency improvements and reducing resource consumption</li>
        <li>Innovation: Driving product and business model innovation</li>
        <li>Stakeholder expectations: Meeting growing demands from investors, customers, employees, and regulators</li>
        <li>Competitive advantage: Differentiating in the marketplace and preparing for a low-carbon future</li>
      </ul>
      
      <h2>Developing a Net Zero Strategy: A Step-by-Step Approach</h2>
      
      <h3>1. Establish a Baseline</h3>
      <p>The first step in any net zero journey is to understand your current emissions profile. This involves:</p>
      
      <ul>
        <li>Conducting a comprehensive greenhouse gas inventory across Scopes 1, 2, and 3</li>
        <li>Identifying emission hotspots and key drivers</li>
        <li>Establishing data collection systems and processes</li>
        <li>Setting the baseline year against which progress will be measured</li>
      </ul>
      
      <h3>2. Set Science-Based Targets</h3>
      <p>Once you understand your emissions profile, the next step is to set ambitious, science-based targets aligned with limiting global warming to 1.5°C. This includes:</p>
      
      <ul>
        <li>Setting a long-term net zero target date (e.g., 2040, 2050)</li>
        <li>Establishing interim targets (e.g., 50% reduction by 2030)</li>
        <li>Ensuring targets cover all material emissions across Scopes 1, 2, and 3</li>
        <li>Consider validating targets through the Science Based Targets initiative (SBTi)</li>
      </ul>
      
      <h3>3. Develop a Decarbonization Roadmap</h3>
      <p>With targets in place, organizations need to develop a detailed roadmap outlining how they will achieve these targets. This should include:</p>
      
      <ul>
        <li>Identifying and prioritizing emission reduction opportunities across operations, supply chain, and products</li>
        <li>Assessing financial implications, including required investments and potential returns</li>
        <li>Developing implementation timelines and assigning responsibilities</li>
        <li>Creating a governance structure to oversee implementation</li>
      </ul>
      
      <h3>4. Implement and Monitor</h3>
      <p>Implementation is where many net zero strategies falter. Successful implementation requires:</p>
      
      <ul>
        <li>Integrating climate considerations into business processes and decision-making</li>
        <li>Building internal capabilities and awareness</li>
        <li>Establishing robust monitoring and reporting systems</li>
        <li>Regularly reviewing progress and adjusting strategies as needed</li>
      </ul>
      
      <h3>5. Engage Stakeholders</h3>
      <p>Achieving net zero requires collaboration across the value chain. Effective stakeholder engagement includes:</p>
      
      <ul>
        <li>Engaging with suppliers on emissions reduction</li>
        <li>Collaborating with customers on product use phase emissions</li>
        <li>Participating in industry initiatives and partnerships</li>
        <li>Communicating progress transparently to investors and other stakeholders</li>
      </ul>
      
      <h2>Addressing Common Challenges</h2>
      <p>Organizations often face several challenges in their net zero journey. Here's how to address some of the most common ones:</p>
      
      <h3>Data Quality and Availability</h3>
      <p>Particularly for Scope 3 emissions, data can be difficult to obtain and verify. Strategies include:</p>
      
      <ul>
        <li>Starting with high-level estimates and refining over time</li>
        <li>Using industry benchmarks and averages where specific data isn't available</li>
        <li>Engaging with suppliers to improve data collection</li>
        <li>Investing in data management systems and technologies</li>
      </ul>
      
      <h3>Balancing Short-term and Long-term Priorities</h3>
      <p>Climate action often requires upfront investments for long-term returns. Approaches to address this include:</p>
      
      <ul>
        <li>Identifying "quick wins" that deliver both emissions reductions and cost savings</li>
        <li>Integrating climate considerations into capital allocation processes</li>
        <li>Developing internal carbon pricing mechanisms</li>
        <li>Communicating the strategic importance of climate action to shareholders</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Developing and implementing a credible net zero strategy is a complex but necessary undertaking for organizations committed to addressing climate change and preparing for a low-carbon future. By following the steps outlined in this guide and learning from leading practices, organizations can develop strategies that not only contribute to global climate goals but also create business value and competitive advantage.</p>
      
      <p>Remember that the journey to net zero is a marathon, not a sprint. It requires sustained commitment, continuous improvement, and collaboration across the value chain. But the rewards—for your organization, society, and the planet—make it a journey worth taking.</p>
    `
  },
  {
    id: 'climate-risk-report',
    title: 'Climate Risk and Financial Disclosure: 2023 Outlook',
    category: 'reports',
    description: 'An analysis of emerging trends in climate risk assessment and disclosure, with practical insights for financial institutions and corporations.',
    image: '/images/resource-climate-risk.jpg',
    date: 'March 15, 2023',
    author: 'Dr. Amina Osei',
    content: `
      <h2>Executive Summary</h2>
      <p>Climate risk disclosure has evolved from a voluntary initiative to an increasingly mandatory requirement across major economies. This report examines the current state of climate risk assessment and disclosure, emerging regulatory developments, best practices from leading organizations, and practical recommendations for enhancing climate-related financial disclosure.</p>
      
      <p>Key findings include:</p>
      <ul>
        <li>Regulatory requirements for climate disclosure are accelerating globally, with the EU, UK, US, and other jurisdictions implementing or considering mandatory disclosure frameworks</li>
        <li>Investors are increasingly using climate disclosures to inform capital allocation decisions, with implications for cost of capital and access to financing</li>
        <li>Most organizations still face significant challenges in scenario analysis, quantification of financial impacts, and addressing value chain (Scope 3) emissions</li>
        <li>Technology solutions are emerging to support more sophisticated climate risk assessment and reporting</li>
        <li>Leading organizations are moving beyond compliance to use climate risk assessment as a strategic tool for business transformation</li>
      </ul>
      
      <h2>Introduction</h2>
      <p>As climate change intensifies, its financial implications for organizations across sectors are becoming increasingly apparent. Physical risks—such as extreme weather events and long-term climate shifts—and transition risks—related to policy changes, market shifts, and technological developments—pose significant challenges to business models, assets, and operations.</p>
      
      <p>In response, investors, regulators, and other stakeholders are demanding greater transparency on how organizations are assessing and managing these risks. The Task Force on Climate-related Financial Disclosures (TCFD) has emerged as the global standard for climate risk disclosure, with its recommendations increasingly being incorporated into regulatory frameworks.</p>
      
      <h2>Regulatory Landscape: Moving Toward Mandatory Disclosure</h2>
      
      <h3>European Union</h3>
      <p>The EU continues to lead in climate disclosure regulation through:</p>
      <ul>
        <li>The Corporate Sustainability Reporting Directive (CSRD), which expands reporting requirements to nearly 50,000 companies</li>
        <li>The European Sustainability Reporting Standards (ESRS), which provide detailed reporting requirements aligned with TCFD</li>
        <li>The Sustainable Finance Disclosure Regulation (SFDR), which requires financial market participants to disclose sustainability risks and impacts</li>
      </ul>
      
      <h3>United Kingdom</h3>
      <p>The UK has implemented:</p>
      <ul>
        <li>Mandatory TCFD-aligned disclosure for premium listed companies, large private companies, and financial institutions</li>
        <li>The UK Green Taxonomy, defining environmentally sustainable activities</li>
        <li>Climate-related stress testing for banks and insurers through the Bank of England</li>
      </ul>
      
      <h3>United States</h3>
      <p>The US is moving toward greater regulation through:</p>
      <ul>
        <li>The SEC's proposed rules requiring climate risk disclosure from public companies</li>
        <li>State-level initiatives, particularly in California and New York</li>
        <li>Increasing climate risk oversight from financial regulators</li>
      </ul>
      
      <h3>Other Jurisdictions</h3>
      <p>Similar developments are occurring in Canada, Japan, Singapore, Australia, and other countries, creating a complex global patchwork of requirements.</p>
      
      <h2>Investor Expectations and Market Trends</h2>
      <p>Investors are increasingly integrating climate considerations into their decision-making processes:</p>
      
      <ul>
        <li>Major asset managers like BlackRock, Vanguard, and State Street are strengthening their climate voting policies and engagement strategies</li>
        <li>Climate Action 100+, representing investors with over $60 trillion in assets, is driving corporate climate action through shareholder pressure</li>
        <li>Credit rating agencies are incorporating climate risks into their methodologies</li>
        <li>Banks are assessing climate risks in their loan portfolios and adjusting financing terms accordingly</li>
      </ul>
      
      <h2>Best Practices in Climate Risk Assessment and Disclosure</h2>
      
      <h3>Governance</h3>
      <p>Leading organizations are:</p>
      <ul>
        <li>Establishing board-level oversight of climate risks and opportunities</li>
        <li>Integrating climate considerations into risk management frameworks</li>
        <li>Linking executive compensation to climate performance</li>
        <li>Building climate expertise at both board and management levels</li>
      </ul>
      
      <h3>Strategy</h3>
      <p>Best practices include:</p>
      <ul>
        <li>Conducting robust climate scenario analysis using multiple scenarios</li>
        <li>Quantifying financial impacts under different climate pathways</li>
        <li>Identifying climate-related opportunities alongside risks</li>
        <li>Integrating climate considerations into strategic planning processes</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>Leading approaches involve:</p>
      <ul>
        <li>Developing comprehensive risk identification and assessment methodologies</li>
        <li>Integrating climate risks into enterprise risk management systems</li>
        <li>Conducting asset-level vulnerability assessments for physical risks</li>
        <li>Implementing climate risk screening for major investments and M&A activities</li>
      </ul>
      
      <h3>Metrics and Targets</h3>
      <p>Best practices include:</p>
      <ul>
        <li>Reporting comprehensive greenhouse gas emissions across Scopes 1, 2, and 3</li>
        <li>Setting science-based emissions reduction targets</li>
        <li>Developing metrics to track exposure to physical and transition risks</li>
        <li>Reporting on progress and performance over time</li>
      </ul>
      
      <h2>Emerging Challenges and Solutions</h2>
      
      <h3>Data Quality and Availability</h3>
      <p>Organizations continue to face challenges with data quality, particularly for Scope 3 emissions and physical risk assessments. Solutions include:</p>
      <ul>
        <li>Leveraging emerging data providers and technologies</li>
        <li>Engaging with suppliers on data collection</li>
        <li>Using proxy data and models where primary data isn't available</li>
        <li>Implementing robust data governance processes</li>
      </ul>
      
      <h3>Scenario Analysis</h3>
      <p>Effective scenario analysis remains challenging for many organizations. Improvements can come from:</p>
      <ul>
        <li>Using standardized scenarios (e.g., NGFS, IEA) as a starting point</li>
        <li>Developing sector-specific overlays to standard scenarios</li>
        <li>Building internal capabilities for scenario analysis</li>
        <li>Collaborating with peers on methodologies and approaches</li>
      </ul>
      
      <h2>Looking Ahead: The Future of Climate Risk Disclosure</h2>
      <p>Looking toward 2024 and beyond, we anticipate several key developments:</p>
      
      <ul>
        <li>Further convergence of global disclosure standards, potentially under the IFRS Sustainability Disclosure Standards</li>
        <li>Increased focus on biodiversity and broader nature-related risks alongside climate</li>
        <li>Greater emphasis on double materiality, considering both financial impacts on the organization and the organization's impacts on climate</li>
        <li>Enhanced integration of climate considerations into financial statements and audit processes</li>
        <li>Technological advancements enabling more sophisticated risk assessment and reporting</li>
      </ul>
      
      <h2>Recommendations for Organizations</h2>
      <p>Based on our analysis, we recommend organizations:</p>
      
      <ul>
        <li>Prepare for mandatory disclosure by strengthening data collection systems and processes</li>
        <li>Invest in building internal capabilities for climate risk assessment and management</li>
        <li>Move beyond compliance to use climate risk assessment as a strategic tool</li>
        <li>Engage proactively with investors and other stakeholders on climate strategy</li>
        <li>Monitor regulatory developments closely and participate in consultations where possible</li>
        <li>Collaborate with industry peers on methodologies and best practices</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Climate risk assessment and disclosure have moved from the periphery to the mainstream of corporate governance and reporting. Organizations that develop robust approaches to understanding, managing, and disclosing climate risks and opportunities will be better positioned to navigate the transition to a low-carbon economy, meet stakeholder expectations, and create long-term value.</p>
      
      <p>As disclosure requirements continue to evolve, the focus is shifting from whether to disclose to how to provide decision-useful information that accurately reflects an organization's climate risks, opportunities, and strategic response. Those that embrace this challenge will not only meet compliance requirements but also gain valuable insights that can inform strategy and build resilience in a changing climate.</p>
    `
  }
  // Additional resources would be defined here
];

export default function ResourcePage({ params }: { params: { id: string } }) {
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
          <Link href="/resources" className="text-primary flex items-center gap-2">
            <span>←</span> Back to Resources
          </Link>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-sm badge badge-primary mb-2">{resource.category}</span>
            <h1 className="text-4xl font-bold">{resource.title}</h1>
          </div>
          <div className="text-sm text-right">
            <div>{resource.date}</div>
            {resource.author && <div className="font-medium">By {resource.author}</div>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {isContentAvailable ? (
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: resource.content }} />
            ) : (
              <div className="prose max-w-none">
                <p className="text-lg font-medium mb-6">{resource.description}</p>
                <div className="alert alert-info">
                  <p>Full content for this resource is coming soon. Please check back later or contact us for more information.</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg sticky top-8">
              <figure className="h-48 bg-gray-300">
                {/* Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-primary/10">
                  <span className="text-lg font-medium">{resource.category}</span>
                </div>
              </figure>
              
              <div className="card-body">
                <h3 className="card-title">Share this Resource</h3>
                <div className="flex gap-2 my-4">
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
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
                  <li>
                    <Link href="/resources/esg-integration-webinar" className="text-primary hover:underline">
                      ESG Integration in Investment Decision-Making
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/sustainability-reporting" className="text-primary hover:underline">
                      Navigating the Evolving Landscape of Sustainability Reporting
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/climate-scenario-analysis" className="text-primary hover:underline">
                      Climate Scenario Analysis for Business Strategy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 