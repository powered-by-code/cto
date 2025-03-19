import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <PageLayout showCTA={false}>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Ready to start your sustainability journey? Our team of experts is here to help. Get in touch with us to discuss your challenges and explore how we can support your organization.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company</span>
                </label>
                <input type="text" placeholder="Your company" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">What services are you interested in?</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>Select a service</option>
                  <option>Sustainability Consulting</option>
                  <option>Climate Risk Assessment</option>
                  <option>ESG Integration</option>
                  <option>Sustainable Finance</option>
                  <option>Net Zero Strategy</option>
                  <option>Other/Not Sure</option>
                </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-32" placeholder="How can we help you?"></textarea>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                <p className="mb-1">123 Sustainability Street</p>
                <p className="mb-1">London, EC1A 1BB</p>
                <p className="mb-1">United Kingdom</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="mb-1">+44 (0) 20 1234 5678</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="mb-1">info@example.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h3 className="font-bold">London</h3>
                    <p className="text-sm">123 Sustainability Street<br/>London, EC1A 1BB<br/>United Kingdom</p>
                  </div>
                </div>
                <div className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h3 className="font-bold">New York</h3>
                    <p className="text-sm">456 Green Avenue<br/>New York, NY 10001<br/>United States</p>
                  </div>
                </div>
                <div className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h3 className="font-bold">Singapore</h3>
                    <p className="text-sm">789 Eco Boulevard<br/>Singapore 018956<br/>Singapore</p>
                  </div>
                </div>
                <div className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h3 className="font-bold">Sydney</h3>
                    <p className="text-sm">101 Climate Street<br/>Sydney, NSW 2000<br/>Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" defaultChecked={true} /> 
              <div className="collapse-title text-xl font-medium">
                What services do you offer?
              </div>
              <div className="collapse-content"> 
                <p>We offer a comprehensive range of technical leadership services, including fractional CTO services, tech team building, technical pivot support, tech cost optimization, and technical due diligence. Visit our <Link href="/services" className="text-primary">Services page</Link> to learn more.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                Which industries do you work with?
              </div>
              <div className="collapse-content"> 
                <p>We work across a diverse range of technology-enabled industries, including SaaS, FinTech, marketplaces, e-commerce, health tech, and AI/ML startups. Our industry-specific expertise allows us to provide tailored technical leadership solutions that address the unique challenges and opportunities in each sector.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                How do you typically engage with clients?
              </div>
              <div className="collapse-content"> 
                <p>Our engagement models are flexible and tailored to each client's needs. We offer project-based consulting, retainer arrangements, and ongoing advisory services. We typically start with an initial assessment to understand your specific challenges and objectives, followed by a proposal outlining our recommended approach, timeline, and investment.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                How quickly can you start working on our project?
              </div>
              <div className="collapse-content"> 
                <p>Our availability varies depending on our current engagements, but we typically can begin new projects within 2-4 weeks of contract signing. For urgent matters, we may be able to accommodate faster timelines. Please contact us to discuss your specific needs and timeline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 