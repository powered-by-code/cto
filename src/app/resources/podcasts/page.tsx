import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import data from '@/data.json';

export default function PodcastsPage() {
  return (
    <PageLayout>
      <div className="py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-primary flex items-center gap-2">
            <span>←</span> Back to Resources
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">CTO Prime Podcast</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Our podcast features in-depth conversations with technical leaders, founders, and experts. 
          Learn practical strategies for building effective engineering teams, making technology decisions, 
          and scaling your technical organization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.podcastURLs && data.podcastURLs.map((url, index) => (
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
                <div className="card-actions mt-4">
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Podcast</h2>
          <p className="mb-6">Never miss an episode! Subscribe to our podcast on your favorite platform.</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.youtube.com/channel/UC-example" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              YouTube
            </a>
            <a 
              href="https://podcasts.apple.com/us/podcast/example" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Apple Podcasts
            </a>
            <a 
              href="https://open.spotify.com/show/example" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 