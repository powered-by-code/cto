// import PageLayout from '@/components/PageLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalEmbed from '@/components/CalEmbed';
import data from '@/data.json';

export const metadata = {
  title: "Contact Us | Fractional CTO Services",
  description:
    "Get in touch with our team of technical experts to discuss how we can help your business grow.",
};

export default function Contact() {
  return (
    <main className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        <Navbar />

        <div className="py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Schedule a call with our technical experts to discuss how we can
            help your business grow.
          </p>

          <div>
            <CalEmbed
              calLink={data.meetingLink.calLink}
              config={{
                theme: "light",
                hideEventTypeDetails: "false",
                layout: "month_view",
              }}
              // TODO: Add posthog recording ID
              posthogRecordingId="contact-page-scheduler"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
