import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Get started today</h2>
        <Link href="/consultation" className="btn btn-primary">
          FREE CONSULTATION WITH RUBEN <span className="ml-2">👋</span>
        </Link>
      </div>
    </section>
  );
};

export default CTA; 