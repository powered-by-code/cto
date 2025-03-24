import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/data.json";
import MeetingButton from "@/components/MeetingButton";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

// Define resource content types
interface CaseStudyContent {
  challenge: string;
  solution: string[];
  results: string[];
}

interface GuideContent {
  introduction: string;
  sections: {
    title: string;
    content: string;
    keyPoints: string[];
  }[];
  conclusion: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  readTime: string;
  image: string;
  serviceId: string;
  tags: string[];
  content?: CaseStudyContent | GuideContent;
}

export default function ResourcePage({ params }: { params: { id: string } }) {
  const resource = data.resources.find((r) => r.id === params.id) as Resource;
  const service = data.services.find((s) => s.id === resource?.serviceId);

  if (!resource) {
    notFound();
  }

  // Find related resources based on service and tags
  const relatedResources = data.resources
    .filter((r) => r.id !== resource.id)
    .filter((r) => {
      // Include resources from the same service
      if (r.serviceId === resource.serviceId) return true;
      // Include resources with matching tags
      if (r.tags.some((tag) => resource.tags.includes(tag))) return true;
      return false;
    })
    .slice(0, 3);

  // Helper function to check if content is case study type
  const isCaseStudy = (content: any): content is CaseStudyContent => {
    return content && 'challenge' in content && 'solution' in content && 'results' in content;
  };

  // Helper function to check if content is guide type
  const isGuide = (content: any): content is GuideContent => {
    return content && 'introduction' in content && 'sections' in content && 'conclusion' in content;
  };

  return (
    <PageLayout>
      <div className="py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-primary flex items-center gap-2">
            <span>←</span> Back to Resources
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <div>
            <div className="flex gap-2 mb-2">
              <span className="badge badge-primary">{resource.type}</span>
              {resource.tags.map((tag, index) => (
                <span key={index} className="badge badge-outline">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold">{resource.title}</h1>
          </div>
          <div className="text-sm">
            <div>{resource.readTime}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg font-medium mb-6">{resource.description}</p>
           
              <div className="card bg-base-200 mb-8">
                <div className="card-body">
                  <h2 className="card-title">Content</h2>
                  <div className="mt-4">
                    {resource.content && isCaseStudy(resource.content) ? (
                      <>
                        <strong>Challenge:</strong> {resource.content.challenge}
                        <br /><br />
                        <strong>Solution:</strong>
                        <ul className="list-disc pl-6 mt-2">
                          {resource.content.solution.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <br />
                        <strong>Results:</strong>
                        <ul className="list-disc pl-6 mt-2">
                          {resource.content.results.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : resource.content && isGuide(resource.content) ? (
                      <div className="space-y-8">
                        <p className="text-lg">{resource.content.introduction}</p>

                        {resource.content.sections.map((section, index) => (
                          <div key={index} className="space-y-4">
                            <h3 className="text-xl font-semibold">{section.title}</h3>
                            <p>{section.content}</p>
                            <div className="pl-6">
                              <h4 className="font-medium mb-2">Key Points:</h4>
                              <ul className="list-disc space-y-1">
                                {section.keyPoints.map((point, pointIndex) => (
                                  <li key={pointIndex}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}

                        <div className="mt-8 p-4 bg-base-300 rounded-lg">
                          <p className="font-medium">{resource.content.conclusion}</p>
                        </div>
                      </div>
                    ) : (
                      <p>This resource provides detailed insights and practical guidance on {resource.title.toLowerCase()}. The content is designed to help you understand and implement best practices in your organization.</p>
                    )}
                  </div>
                </div>
              </div>
                 
              {service && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Related Service</h2>
                  <ServiceCard 
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    image={service.image}
                  />
              </div>
            )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg sticky top-8">
              <figure className="h-48 bg-gray-300">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
              </figure>

              <div className="card-body">
                <h3 className="card-title">Share this Resource</h3>
                <div className="flex gap-2 my-4">
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </button>
                </div>

                <div className="divider"></div>

                <h3 className="card-title">Related Resources</h3>
                <ul className="mt-4 space-y-2">
                  {relatedResources.map((related) => (
                    <li key={related.id}>
                      <Link href={`/resources/${related.id}`} className="text-primary hover:underline">
                        {related.title}
                        </Link>
                      </li>
                  ))}
                </ul>

                <div className="divider"></div>

                <h3 className="card-title">Get Expert Help</h3>
                <p className="mt-4 mb-6 text-sm">
                  Need personalized guidance on this topic? Schedule a free consultation with our fractional CTO team.
                </p>
                <MeetingButton text="Book a Consultation" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}