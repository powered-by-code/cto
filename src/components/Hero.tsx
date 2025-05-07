"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import MeetingButton from "./MeetingButton";
import { Check, Play, X } from "lucide-react";

const videoUrl = "https://www.youtube.com/watch?v=Jk3nRw8otmk";
const videoId = videoUrl.split("v=")[1];

const video = {
  url: videoUrl,
  thumbnails: {
    max: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    fallback: `https://img.youtube.com/vi/${videoId}/0.jpg`,
  },
};

const heroData = {
  video,
  header: {
    tagline: "Helping Startups & Growing Businesses",
    title: "Fractional CTO Solutions & Tech Leadership",
    description:
      "Get the strategic technical guidance you need, exactly when you need it. Our fractional CTO services help startups and scaling companies make informed tech decisions, build scalable systems, and accelerate growth.",
  },
  cta: {
    primary: {
      text: "Schedule a Free Consultation",
    },
    secondary: {
      text: "Explore Our Services",
      link: "/services",
    },
  },
  features: [
    {
      text: "Flexible engagement options",
      delay: "0s",
    },
    {
      text: "Transparent monthly pricing",
      delay: "0.5s",
    },
    {
      text: "No long-term commitments",
      delay: "1s",
    },
  ],
};

const Hero: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const embedUrl = heroData.video.url.replace("watch?v=", "embed/");

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
          const newIframe = document.createElement("iframe");
          newIframe.src = embedUrl;
          newIframe.className = "w-full h-full";
          newIframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          newIframe.allowFullscreen = true;
          parentElement.appendChild(newIframe);
          // Update the ref to point to the new iframe
          iframeRef.current = newIframe;
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalRef.current?.open) {
        modalRef.current.close();
      }
    };

    window.addEventListener("keydown", handleEscape);
    modal?.addEventListener("close", handleClose);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      modal?.removeEventListener("close", handleClose);
    };
  }, [embedUrl]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleOpen = () => {
    if (iframeRef.current) {
      // Add autoplay parameter when opening
      iframeRef.current.src = `${embedUrl}?autoplay=1`;
    }
    modalRef.current?.showModal();
  };

  return (
    <div className="hero py-16 relative overflow-hidden">
      <div className="hero-content relative z-10 flex-col lg:flex-row items-stretch justify-between w-full gap-8">
        <div className="order-2 lg:order-1 text-left lg:max-w-xl flex flex-col gap-4">
          <div className="inline-block px-3 py-1 rounded-full text-primary font-medium text-sm mb-2 animate-pulse">
            {heroData.header.tagline}
          </div>
          <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {heroData.header.title}
          </h1>
          <p className="py-4 text-lg">{heroData.header.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MeetingButton text={heroData.cta.primary.text} />
            <Link
              href={heroData.cta.secondary.link}
              className="btn btn-outline btn-secondary hover:bg-secondary/20"
            >
              {heroData.cta.secondary.text}
            </Link>
          </div>

          {/* Add Clutch Widget */}
          <div className="mt-4 flex justify-start">
            <div
              className="clutch-widget"
              data-url="https://widget.clutch.co"
              data-widget-type="13"
              data-height="50"
              data-nofollow="true"
              data-expandifr="true"
              data-scale="100"
              data-clutchcompany-id="2439017"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-y-2 items-center text-sm">
            {heroData.features.map((feature, index) => (
              <div key={index} className="flex items-center mr-4">
                <div
                  className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mr-2 animate-pulse-glow"
                  style={{ animationDelay: feature.delay }}
                >
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="order-1 lg:order-2 bg-base-300 rounded-xl w-full lg:w-1/2 cursor-pointer relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02] shadow-xl"
          onClick={handleOpen}
          style={{
            boxShadow:
              "0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <picture className="block h-full">
            <source srcSet={heroData.video.thumbnails.max} />
            <source srcSet={heroData.video.thumbnails.high} />
            <img
              src={heroData.video.thumbnails.medium}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = heroData.video.thumbnails.fallback;
              }}
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/30 to-black/50 hover:from-black/40 hover:to-black/60 transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 animate-pulse-glow">
              <Play className="w-8 h-8 text-white" fill="currentColor" />
            </div>
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
                <X className="h-10 w-10" />
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
