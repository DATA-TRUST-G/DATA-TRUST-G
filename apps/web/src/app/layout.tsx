import type { Metadata } from 'next';
import './globals.css';
import './home.css';
import './portal.css';

export const metadata: Metadata = {
  title: 'DataTrust — Ethical Data Infrastructure for the AI Economy',
  description: 'DataTrust is building infrastructure around data rights, consent, provenance, access and participation for the AI economy.',
  icons: { icon: '/datatrust-mark.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
