import { datatrustConfig } from '@datatrust/config';

const problemSignals = [
  ['01', 'Data demand', 'AI systems increase the value and volume of useful data.'],
  ['02', 'Permission', 'Consent and legitimate access become infrastructure constraints.'],
  ['03', 'Provenance', 'Enterprise intelligence needs stronger traceability around data origin and use.'],
  ['04', 'Participation', 'The people and systems contributing data need a clearer economic model.'],
];

const architecture = ['Individual', 'Consent', 'Data', 'Privacy', 'Verification', 'Enterprise access', 'Participation'];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <a href="#top" className="wordmark" aria-label="DataTrust home">DATATRUST</a>
        <nav aria-label="Primary navigation">
          <a href="#thesis">Thesis</a>
          <a href="#architecture">Architecture</a>
          <a href="#token">$DTR</a>
          <a href="#docs">Whitepaper</a>
        </nav>
        <a className="navCta" href="/presale">Explore the presale <span aria-hidden>↗</span></a>
      </header>

      <section id="top" className="hero shell">
        <div className="eyebrow">ETHICAL DATA INFRASTRUCTURE / PHASE I</div>
        <h1>ETHICAL DATA<br /><em>INFRASTRUCTURE</em><br />FOR THE AI ECONOMY.</h1>
        <p className="heroLead">AI is increasing the value of data. DataTrust is building an architecture around the rights, consent, provenance, access and participation that increasingly shape that value.</p>
        <div className="heroActions">
          <a className="button primary" href="/presale">Explore the presale <span>↗</span></a>
          <a className="button secondary" href="/whitepaper">Read the whitepaper <span>→</span></a>
        </div>
        <div className="signalField" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
      </section>

      <section id="thesis" className="section shell">
        <div className="sectionIntro">
          <div className="eyebrow">01 / WHY DATATRUST</div>
          <h2>The data economy is becoming an infrastructure problem.</h2>
          <p>AI creates more demand for useful data while privacy, consent, ownership, quality and enterprise governance become harder to treat as afterthoughts.</p>
        </div>
        <div className="signalGrid">
          {problemSignals.map(([index, title, copy]) => (
            <article className="signalCard" key={index}>
              <span className="cardIndex">{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="section architecture shell">
        <div className="eyebrow">02 / THE DATATRUST ARCHITECTURE</div>
        <div className="architectureHeader">
          <h2>Make trust legible at the system level.</h2>
          <p>DataTrust's long-term architecture connects individual rights and consent with verification, permissioned enterprise access and economic participation.</p>
        </div>
        <div className="architectureRail" role="list" aria-label="DataTrust architecture layers">
          {architecture.map((item, index) => (
            <div className="architectureNode" role="listitem" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              {index < architecture.length - 1 && <i aria-hidden>→</i>}
            </div>
          ))}
        </div>
      </section>

      <section id="token" className="section tokenSection shell">
        <div className="tokenPanel">
          <div>
            <div className="eyebrow">03 / $DTR</div>
            <h2>The economic layer follows the architecture.</h2>
            <p>$DTR is positioned as the economic coordination layer for the DataTrust ecosystem. Its utility is presented only where supported by canonical project documentation.</p>
          </div>
          <div className="supply">
            <span>FIXED SUPPLY</span>
            <strong>{datatrustConfig.token.fixedSupply.toLocaleString()}</strong>
            <small>$DTR</small>
          </div>
        </div>
      </section>

      <section id="docs" className="section closing shell">
        <div className="eyebrow">04 / SOURCE OF TRUTH</div>
        <h2>Understand the system before deciding whether to participate.</h2>
        <p>Whitepaper, tokenomics, presale terms and risk disclosures are maintained as canonical project content. Financial and operational claims are not scattered across the interface.</p>
        <a className="textLink" href="/whitepaper">Open documentation <span>→</span></a>
      </section>

      <footer className="footer shell">
        <span>DATATRUST</span>
        <span>Ethical Data Infrastructure for the AI Economy.</span>
        <span>Phase I / {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
