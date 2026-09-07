import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DataTrust Investor Portal',
  description: 'Controlled investor participation and allocation records for DataTrust.',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
