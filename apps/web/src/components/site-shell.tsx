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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 12);
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="site">
      <div className="scrollProgress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className={`siteHeader ${scrolled ? 'isScrolled' : ''}`}>
        <a href="/" className="brand" aria-label="DataTrust home">
          <span className="brandMark"><img src="/datatrust-mark.svg" alt="" width="38" height="38" /></span>
          <span className="brandWord">DataTrust</span>
        </a>
        <nav className="desktopNav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="headerActions">
          <a className="headerSignIn" href="/sign-in">Sign in</a>
          <a className="headerCta" href="/presale">Explore presale <span>↗</span></a>
          <button className={`menuButton ${open ? 'isOpen' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {open && <nav id="mobile-navigation" className="mobileNav" aria-label="Mobile navigation">
        <div className="mobileNavInner">
          {nav.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)}><span><small>0{i + 1}</small>{label}</span><b>↗</b></a>)}
          <a href="/sign-in" onClick={() => setOpen(false)}><span><small>08</small>Sign in</span><b>→</b></a>
          <a className="mobileCta" href="/presale" onClick={() => setOpen(false)}>Explore the presale <span>↗</span></a>
        </div>
      </nav>}
      {children}
      <footer className="siteFooter">
        <div className="footerTop">
          <div className="footerBrand">
            <a href="/" className="brand" aria-label="DataTrust home"><span className="brandMark"><img src="/datatrust-mark.svg" alt="" width="44" height="44" /></span><span className="brandWord">DataTrust</span></a>
            <p>Ethical Data Infrastructure for the AI Economy.</p>
            <span className="footerSignal"><i /> Infrastructure / Rights / Participation</span>
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
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${className}`}>{children}</div>;
}
