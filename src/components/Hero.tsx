"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
// const { meetingLink } = data;
import MeetingButton from "./MeetingButton";

const Hero: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoUrl = "https://www.youtube.com/watch?v=JpfvxnNIHx8";
  // Remove autoplay from initial URL - we'll add it when needed
  const embedUrl = videoUrl.replace("watch?v=", "embed/");
  // Get meeting link from data.json
  // const meetingLink = data.meetingLink;

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
        <div className="order-2 lg:order-1 text-left lg:max-w-xl flex flex-col gap-4 bg-base-100/80 ">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-2 animate-pulse">
            Expert Technical Leadership for Growing Companies
          </div>
          <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Is Your Startup Ready for Tech Leadership?
          </h1>
          <p className="py-4 text-lg">
            Get the strategic technical guidance you need, when you need it. Our
            fractional CTO services help startups and growing companies make
            confident technical decisions, build scalable systems, and
            accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MeetingButton text="Schedule a Free Consultation" />
            <Link
              href="/services"
              className="btn btn-outline btn-secondary hover:bg-secondary/20"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-y-2 items-center text-sm">
            <div className="flex items-center mr-4">
              <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mr-2 animate-pulse-glow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Flexible engagement models</span>
            </div>
            <div className="flex items-center mr-4">
              <div
                className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mr-2 animate-pulse-glow"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Fixed monthly pricing</span>
            </div>
            <div className="flex items-center">
              <div
                className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mr-2 animate-pulse-glow"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>No long-term contracts</span>
            </div>
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
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/30 to-black/50 hover:from-black/40 hover:to-black/60 transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 animate-pulse-glow">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
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
