import Link from 'next/link';
import data from '@/data.json';
import MeetingButton from './MeetingButton';

const CTA: React.FC = () => {
  // Get meeting link from data.json
  const meetingLink = data.meetingLink;
  
  return (
    <section className="py-12">
      <div className="card bg-base-200 shadow-lg">
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold mb-2">Is Your Startup Ready for Tech Leadership?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Take our 2-minute CTO Needs Assessment to discover if a fractional CTO can help solve your technical challenges and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cto-assessment" className="btn btn-primary">
              Take the Free Assessment
            </Link>
            <MeetingButton variant="outline" text="Talk to a Fractional CTO Now" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 