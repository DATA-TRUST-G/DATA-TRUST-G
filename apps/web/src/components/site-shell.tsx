'use client';

import { useEffect, useState } from 'react';

const nav = [
  ['Why DataTrust', '/why-datatrust'],
  ['Architecture', '/architecture'],
  ['AI Economy', '/ai-economy'],
  ['$DTR', '/dtr'],
  ['Tokenomics', '/tokenomics'],
  ['Roadmap', '/roadmap'],
  ['Whitepaper', '/whitepaper'],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="site">
      <div className="scrollProgress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className="siteHeader">
        <a href="/" className="brand" aria-label="DataTrust home">
          <img src="/datatrust-mark.svg" alt="" width="34" height="34" />
          <span>DataTrust</span>
        </a>
        <nav className="desktopNav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="headerActions">
          <a className="headerSignIn" href="/sign-in">Sign in</a>
          <a className="headerCta" href="/presale">Explore presale <span>↗</span></a>
          <button className="menuButton" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </header>
      {open && <nav className="mobileNav" aria-label="Mobile navigation">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}
        <a href="/sign-in" onClick={() => setOpen(false)}>Sign in <span>→</span></a>
        <a className="mobileCta" href="/presale" onClick={() => setOpen(false)}>Explore the presale <span>↗</span></a>
      </nav>}
      {children}
      <footer className="siteFooter">
        <div className="footerTop">
          <div className="footerBrand">
            <a href="/" className="brand"><img src="/datatrust-mark.svg" alt="" width="40" height="40" /><span>DataTrust</span></a>
            <p>Ethical Data Infrastructure for the AI Economy.</p>
          </div>
          <div className="footerColumns">
            <div><strong>Explore</strong><a href="/why-datatrust">Why DataTrust</a><a href="/architecture">Architecture</a><a href="/ai-economy">AI Economy</a><a href="/dtr">$DTR</a></div>
            <div><strong>Participate</strong><a href="/presale">Presale</a><a href="/sign-up">Create account</a><a href="/sign-in">Sign in</a><a href="/investor">Investor portal</a></div>
            <div><strong>Resources</strong><a href="/tokenomics">Tokenomics</a><a href="/roadmap">Roadmap</a><a href="/whitepaper">Whitepaper</a><a href="/risk">Risk & disclosures</a></div>
            <div><strong>Company</strong><a href="/about">About</a><a href="/contact">Contact</a><a href="/security">Security</a><a href="/status">System status</a></div>
          </div>
        </div>
        <div className="footerBottom"><span>© {new Date().getFullYear()} DataTrust. Phase I.</span><span>Information is not an offer, recommendation or guarantee of returns.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/risk">Disclosures</a></div></div>
      </footer>
    </div>
  );
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal:not(.revealed)'));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${className}`}>{children}</div>;
}
