"use client"
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import data from '@/data.json';

const Hero: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoUrl = 'https://www.youtube.com/watch?v=JpfvxnNIHx8';
  // Remove autoplay from initial URL - we'll add it when needed
  const embedUrl = videoUrl.replace('watch?v=', 'embed/');
  // Get meeting link from data.json
  const meetingLink = data.meetingLink;

  useEffect(() => {
    // Handle modal close event to stop video
    const modal = modalRef.current;
    
    const handleClose = () => {
      if (iframeRef.current) {
        // First, remove the iframe
        const iframe = iframeRef.current;
        const parentElement = iframe.parentElement;
        if (parentElement) {
          iframe.remove();
          // Create a new iframe
          const newIframe = document.createElement('iframe');
          newIframe.src = embedUrl;
          newIframe.className = 'w-full h-full';
          newIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
          newIframe.allowFullscreen = true;
          parentElement.appendChild(newIframe);
          // Update the ref to point to the new iframe
          iframeRef.current = newIframe;
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalRef.current?.open) {
        modalRef.current.close();
      }
    };

    window.addEventListener('keydown', handleEscape);
    modal?.addEventListener('close', handleClose);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      modal?.removeEventListener('close', handleClose);
    };
  }, [embedUrl]);

  const handleOpen = () => {
    if (iframeRef.current) {
      // Add autoplay parameter when opening
      iframeRef.current.src = `${embedUrl}?autoplay=1`;
    }
    modalRef.current?.showModal();
  };

  return (
    <div className="hero bg-base-100 py-12">
      <div className="hero-content flex-col md:flex-row items-stretch justify-between w-full">
        <div className="text-left max-w-xl flex flex-col gap-4">
          <div className="text-base mb-2 text-primary">
            <span className="font-medium">Expert Technical Leadership for Growing Companies</span>
          </div>
          <h1 className="text-4xl font-bold">Is Your Startup Ready for Tech Leadership?</h1>
          <p className="py-4 text-lg">
            Get the strategic technical guidance you need, when you need it. Our fractional CTO services help startups and growing companies make confident technical decisions, build scalable systems, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={meetingLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
            </Link>
            <Link href="/services" className="btn btn-outline">
              Explore Our Services
            </Link>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="mr-2">✓</span>
            <span>Flexible engagement models</span>
            <span className="mx-2">•</span>
            <span>Fixed monthly pricing</span>
            <span className="mx-2">•</span>
            <span>No long-term contracts</span>
          </div>
        </div>
        <div 
          className="bg-base-300 rounded-lg w-full md:w-1/2 cursor-pointer relative overflow-hidden"
          onClick={handleOpen}
        >
          <picture className="block h-full">
            <source srcSet="https://img.youtube.com/vi/JpfvxnNIHx8/maxresdefault.jpg" />
            <source srcSet="https://img.youtube.com/vi/JpfvxnNIHx8/hqdefault.jpg" />
            <img 
              src={`https://img.youtube.com/vi/JpfvxnNIHx8/mqdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://img.youtube.com/vi/JpfvxnNIHx8/0.jpg`;
              }}
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-[95vw] max-w-7xl h-[90vh] p-8 pt-16 bg-transparent">
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="modal-action absolute top-2 right-2">
            <form method="dialog">
              <button className="btn btn-circle btn-lg bg-base-100 hover:bg-base-200 border-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Hero; 