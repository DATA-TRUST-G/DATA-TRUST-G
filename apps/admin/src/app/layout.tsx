import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'DataTrust Operations',description:'Protected DataTrust administrative operations.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
