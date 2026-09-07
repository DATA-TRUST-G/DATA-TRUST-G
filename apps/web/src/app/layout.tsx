import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DataTrust — Ethical Data Infrastructure for the AI Economy',
  description: 'DataTrust is building infrastructure around data rights, consent, provenance, access and participation for the AI economy.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
