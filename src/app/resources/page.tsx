'use client';

import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import data from '@/data.json';
import { useState } from 'react';

export default function ResourcesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(data.resources.flatMap(resource => resource.tags)));

  // Filter resources based on selected service and tag
  const filteredResources = data.resources.filter(resource => {
    if (selectedService && resource.serviceId !== selectedService) return false;
    if (selectedTag && !resource.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <PageLayout>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Access our collection of guides, templates, case studies, and video content designed to help you build and scale your technical organization effectively.
        </p>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <button 
              className={`btn btn-sm ${!selectedService ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedService(null)}
            >
              All Services
            </button>
            {data.services.map(service => (
              <button
                key={service.id}
                className={`btn btn-sm ${selectedService === service.id ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedService(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              className={`btn btn-xs ${!selectedTag ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedTag(null)}
            >
              All Topics
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`btn btn-xs ${selectedTag === tag ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="card bg-base-200 shadow-lg">
              <figure className="relative h-48">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                  <span className="badge badge-primary">{resource.type}</span>
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                </div>
                <h3 className="card-title text-xl">{resource.title}</h3>
                <p className="mt-2">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline badge-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/resources/${resource.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Podcasts Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Podcast Episodes</h2>
          <p className="text-lg mb-12 max-w-3xl">
            Watch our latest podcast episodes featuring interviews with industry experts, technical deep dives, and practical advice for technology leaders.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.podcastURLs && data.podcastURLs.slice(0, 8).map((url, index) => (
              <div key={index} className="card bg-base-200 shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe 
                    src={url} 
                    title={`Podcast Episode ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Episode {index + 1}</h3>
                  <p>Watch this episode to learn from our experts about technical leadership and building effective engineering teams.</p>
                </div>
              </div>
            ))}
          </div>
          
          {data.podcastURLs && data.podcastURLs.length > 6 && (
            <div className="text-center mt-8">
              <Link href="/resources/podcasts" className="btn btn-primary">
                View All Episodes
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 