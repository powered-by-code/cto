import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import data from "@/data.json";
import MeetingButton from "@/components/MeetingButton";
import ServiceCard from "@/components/ServiceCard";
import { CheckIcon } from "lucide-react";

// Get service details from data.json
const serviceDetails = data.services;

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({
    id: s.id,
  }));
}

type Params = Promise<{ id: string }>;

export default async function ServicePage({ params }: { params: Params }) {
  const { id } = await params;
  const service = serviceDetails.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  // Get other services for comparison
  const otherServices = serviceDetails
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <PageLayout showCTA={false}>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <div className="uppercase text-xs tracking-widest mb-4">
                SERVICES
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.heroTitle || service.title}
              </h1>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                {service.description}
              </p>
              <div className="flex justify-center">
                <MeetingButton
                  text="Schedule a Call with Ruben"
                  className="btn-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured CTO Section */}
        <section className="bg-gray-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <p className="text-lg mb-6 max-w-2xl">
                {service.longDescription}
              </p>
              <div className="flex items-center flex-col">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={
                        service.testimonialImage ||
                        "/images/team/default-avatar.jpg"
                      }
                      alt={service.testimonialName || "CTO Profile"}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">
                    {service.testimonialName || "JASON GARY"}
                  </p>
                  <p className="text-xs">
                    {service.testimonialTitle || "CTO at ACME"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        {service.offerings && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                What We Offer
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.offerings.map((offering, index) => (
                  <div
                    key={index}
                    className={`card shadow-lg bg-base-100`}
                  >
                    <div className="card-body">
                      <h3 className="card-title">{offering.title}</h3>
                      <div className="flex justify-center my-6">
                        <div className="relative w-48 h-48">
                          <Image
                            src={
                              offering.image ||
                              `/images/services/placeholder.jpg`
                            }
                            alt={offering.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {offering.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <svg
                              className={`w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTO Comparison Table */}
        {service.comparison && (
          <section className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {service.comparison.title}
              </h2>

              <div className="overflow-x-auto">
                <table className="table w-full bg-white rounded-lg shadow-lg">
                  <thead>
                    <tr className="bg-base-200">
                      <th className="py-4 px-6 text-left">STAGE</th>
                      <th className="py-4 px-6 text-center">TRADITIONAL CTO</th>
                      <th className="py-4 px-6 text-center">FRACTIONAL CTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.comparison.stages.map((stage, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 1 ? "bg-base-100" : ""}
                      >
                        <td className="py-4 px-6 font-semibold">
                          {stage.name}
                        </td>
                        <td className="py-4 px-6">
                          {stage.traditional.map((point, pointIndex) => (
                            <p key={pointIndex}>{point}</p>
                          ))}
                        </td>
                        <td className="py-4 px-6">
                          {stage.fractional.map((point, pointIndex) => (
                            <p key={pointIndex}>{point}</p>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {service.process && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {service.process.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative w-full h-96">
                    <Image
                      src={
                        service.process.image ||
                        "/images/services/process-diagram.jpg"
                      }
                      alt="Our Process"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-6">
                    {service.process.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">
              What You Get
            </h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              {service.resultsHeadline ||
                "An expertly designed solution tailored to your business goals"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => {
                const split = benefit.split("~");

                return(
                <div key={index} className="card bg-white shadow-lg">
                  <div className="card-body">
                    <h3 className="card-title text-lg">{split[0]}</h3>
                    {split.length > 1 && (
                      <p className="text-sm flex items-center gap-2">
                        <CheckIcon className="w-4 h-4" />
                        {split[1]}
                      </p>
                    )}
                  </div>
                </div>
              )})}
            </div>
          </div>
        </section>


        {/* TODO: uncomment this when we have case studies */}
        {/* Case Studies Section */}
        {/* {service.caseStudies && service.caseStudies.length > 0 && (
          <section className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Success Stories
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="card bg-white shadow-lg">
                    <div className="card-body">
                      <h3 className="card-title">{caseStudy.title}</h3>
                      <p className="my-4">{caseStudy.description}</p>
                      <div className="card-actions justify-end">
                        <Link href="#" className="btn btn-outline btn-sm">
                          Read Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* Related Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Related Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.map((otherService) => (
                <ServiceCard
                  key={otherService.id}
                  id={otherService.id}
                  title={otherService.title}
                  description={otherService.description}
                  features={otherService.features}
                  image={otherService.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {service.additionalCTA ? (
                <>
                  <Link
                    href={service.additionalCTA.href}
                    className="btn btn-lg btn-secondary shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {service.additionalCTA.label}
                  </Link>
                  <MeetingButton
                    text="Free Consultation"
                    variant="outline"
                    className="btn-lg"
                  />
                </>
              ) : (
                <MeetingButton
                  text="Free Consultation"
                  className="btn-lg btn-secondary shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
