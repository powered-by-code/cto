import { Metadata } from 'next';
import '../src/app/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Your Company Name',
    default: 'Your Company Name',
  },
  description: 'Your default site description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 