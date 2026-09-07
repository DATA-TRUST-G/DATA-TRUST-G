import { datatrustConfig } from '@datatrust/config';
import { Reveal, SiteShell } from '../components/site-shell';
import { InvestorDepth } from '../components/investor-depth';

const signals = [
  ['01', 'DATA DEMAND', 'AI expands the quantity of useful data required to train, evaluate and operate intelligent systems.'],
  ['02', 'CONSENT', 'Permission, purpose and participant choice increasingly belong in the architecture—not in a footnote.'],
  ['03', 'PROVENANCE', 'Enterprise intelligence needs a clearer chain between data origin, access conditions and permitted use.'],
  ['04', 'PARTICIPATION', 'A durable data economy needs mechanisms for contributors to participate in the value they help create.'],
];

const architecture = [
  ['01', 'Individual', 'Rights begin with the participant.'], ['02', 'Consent', 'Access is shaped by explicit permission.'], ['03', 'Data', 'Useful information remains the underlying asset.'], ['04', 'Privacy', 'Sensitive information is treated as a design constraint.'], ['05', 'Verification', 'Claims and actions can be evaluated against defined rules.'], ['06', 'Enterprise', 'Permissioned access connects infrastructure to demand.'], ['07', 'Participation', 'Economic coordination closes the loop.'],
];

const allocation = [['40%', 'User rewards'], ['20%', 'Ecosystem'], ['15%', 'Team'], ['15%', 'Strategic partnerships'], ['10%', 'Treasury']];

export default function HomePage() {
  const range = datatrustConfig.presale.priceRange;
  return <SiteShell>
    <main>
      <section className="hero shell" id="top">
        <Reveal><div className="eyebrow">DATATRUST / PHASE I / DATA INFRASTRUCTURE</div></Reveal>
        <Reveal><h1>THE TRUST LAYER<br /><em>FOR DATA</em><br />IN THE AI ECONOMY.</h1></Reveal>
        <Reveal><p className="heroLead">Data is becoming more valuable—and harder to govern. DataTrust is designing infrastructure around rights, consent, provenance, permissioned access and economic participation.</p></Reveal>
        <Reveal className="heroActions"><div><a className="button primary" href="/presale">Explore participation <span>↗</span></a><a className="button secondary" href="/whitepaper">Read the whitepaper <span>→</span></a></div></Reveal>
        <div className="heroSignalPanel" aria-hidden="true"><span className="heroDataPoint"/><span className="heroDataPoint"/><span className="heroDataPoint"/><span className="heroDataPoint"/><span className="heroDataPoint"/></div>
        <div className="heroMeta"><span>01 / THE INFLECTION</span><span>RIGHTS · CONSENT · PROVENANCE · PARTICIPATION</span></div>
      </section>

      <section className="section shell" id="thesis">
        <Reveal><div className="eyebrow">01 / WHY DATATRUST</div><h2>The data economy is becoming an infrastructure problem.</h2><p>AI creates more demand for useful data at the same time that privacy expectations, consent requirements, provenance and enterprise governance become harder to treat as afterthoughts.</p></Reveal>
        <div className="dataMetricGrid"><Reveal><div className="dataMetric"><b>4</b><span>System pressures</span></div></Reveal><Reveal><div className="dataMetric"><b>01</b><span>Trust architecture</span></div></Reveal><Reveal><div className="dataMetric"><b>∞</b><span>Potential data flows</span></div></Reveal><Reveal><div className="dataMetric"><b>$DTR</b><span>Economic layer</span></div></Reveal></div>
        <div className="signalGrid">{signals.map(([n,t,c]) => <Reveal key={n}><article className="signalCard"><span className="cardIndex">{n}</span><h3>{t}</h3><p>{c}</p></article></Reveal>)}</div>
      </section>

      <section className="section shell architecture" id="architecture">
        <Reveal><div className="eyebrow">02 / THE DATATRUST ARCHITECTURE</div><div className="architectureHeader"><h2>Make trust legible at the system level.</h2><p>DataTrust's long-term architecture connects individual rights and consent with privacy-aware data access, verification, enterprise intelligence and economic participation.</p></div></Reveal>
        <div className="systemMap" aria-label="DataTrust architecture visualization"><div className="mapCore"><div><strong>DATATRUST</strong><small>TRUST LAYER</small></div></div><div className="mapNode"><b>Individual</b><span>Rights + identity context</span></div><div className="mapNode"><b>Enterprise</b><span>Permissioned intelligence</span></div><div className="mapNode"><b>Verification</b><span>Rules + provenance</span></div><div className="mapNode"><b>Participation</b><span>Economic coordination</span></div></div>
        <div className="architectureRail">{architecture.map(([n,t,c],i) => <Reveal key={n}><article className="architectureNode"><span>{n}</span><strong>{t}</strong><small>{c}</small>{i<architecture.length-1&&<i aria-hidden>→</i>}</article></Reveal>)}</div>
      </section>

      <section className="section shell" id="ai-economy">
        <Reveal><div className="eyebrow">03 / THE AI ECONOMY</div><h2>AI changes the economics of useful data.</h2><p>As models become more capable, the value of high-quality, appropriately governed data increases. The infrastructure challenge is no longer only collecting information. It is creating reliable conditions for permission, traceability, access and participation.</p></Reveal>
        <div className="detailGrid"><Reveal><article className="detailCard"><span className="num">01 / SHIFT</span><h3>From extraction to permission</h3><p>Data access can be designed around defined rights and purposes rather than assumed availability.</p></article></Reveal><Reveal><article className="detailCard"><span className="num">02 / SHIFT</span><h3>From opaque origin to provenance</h3><p>Data quality and legitimacy become easier to reason about when origin and access conditions are represented.</p></article></Reveal><Reveal><article className="detailCard"><span className="num">03 / SHIFT</span><h3>From contribution to participation</h3><p>The people and systems that contribute useful data can have a clearer place in the economic model.</p></article></Reveal></div>
        <div className="editorialBand"><div><strong>Rights</strong><span>Defined at the edge of access</span></div><div><strong>Trust</strong><span>Made visible through evidence</span></div></div>
      </section>

      <section className="section shell" id="dtr">
        <Reveal><div className="eyebrow">04 / $DTR</div><h2>The economic layer follows the architecture.</h2></Reveal>
        <div className="tokenPanel"><div><p className="tokenKicker">DATATRUST TOKEN / $DTR</p><p className="tokenCopy">$DTR is positioned as the economic coordination layer for the DataTrust ecosystem. Specific utility is activated only where supported by canonical project documentation and the applicable system state.</p><div className="qualityStrip"><span>Fixed supply</span><span>Purpose-led allocation</span><span>Canonical configuration</span></div><div className="tokenLinks"><a href="/dtr">Explore $DTR <span>→</span></a><a href="/tokenomics">View tokenomics <span>→</span></a></div></div><div className="supply"><span>FIXED SUPPLY</span><strong>{datatrustConfig.token.fixedSupply.toLocaleString()}</strong><small>$DTR</small></div></div>
      </section>

      <section className="section shell" id="tokenomics">
        <Reveal><div className="eyebrow">05 / TOKENOMICS</div><h2>Allocation with a stated purpose.</h2><p>The Phase I allocation is fixed in the canonical configuration. The presentation below does not imply vesting terms where those terms have not been confirmed.</p></Reveal>
        <div className="allocationTable">{allocation.map(([pct,label]) => <div className="allocationRow" key={label}><strong>{pct}</strong><span>{label}</span><div className="allocationBar"><i style={{width:pct}} /></div></div>)}</div>
        <a className="textLink" href="/tokenomics">Open full tokenomics <span>→</span></a>
      </section>

      <section className="section shell" id="presale">
        <Reveal><div className="eyebrow">06 / PARTICIPATION</div><h2>A serious participation flow, before a payment flow.</h2><p>The presale interface is designed around explicit order states, payment evidence, manual verification and a derived allocation ledger. The current live-funds gate remains closed until the canonical price, routes and legal/operational clearance are confirmed.</p></Reveal>
        <div className="priceCard"><div><div className="eyebrow">ILLUSTRATIVE PRICE BAND</div><div className="priceValue">${range.min.toFixed(3)} <small>— ${range.max.toFixed(3)} / $DTR</small></div><div className="priceRange"><span>Lower bound</span><span>Upper bound</span></div><p className="priceDisclaimer">The requested range is recorded as a decision-state range. A single canonical starting price must be confirmed before live pricing is enabled; this visualization is not a market forecast.</p></div><div className="priceChart"><svg viewBox="0 0 600 180" preserveAspectRatio="none" role="img" aria-label="Illustrative DTR price range chart"><defs><linearGradient id="priceStroke" x1="0" x2="1"><stop offset="0" stopColor="#8ea7ff"/><stop offset="1" stopColor="#b59bff"/></linearGradient><linearGradient id="priceArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7f9cff" stopOpacity=".18"/><stop offset="1" stopColor="#7f9cff" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 145 C70 115 105 125 150 92 S240 50 300 92 S390 132 430 72 S510 35 600 58 L600 180 L0 180 Z"/><path d="M0 145 C70 115 105 125 150 92 S240 50 300 92 S390 132 430 72 S510 35 600 58"/></svg></div></div>
        <div className="participationGrid"><Reveal><div><span>01</span><h3>Review</h3><p>Understand round, price, accepted assets, networks and restrictions.</p></div></Reveal><Reveal><div><span>02</span><h3>Create an order</h3><p>Lock the applicable terms to the order instead of changing them retroactively.</p></div></Reveal><Reveal><div><span>03</span><h3>Submit evidence</h3><p>Provide the transaction reference. Submission is not confirmation.</p></div></Reveal><Reveal><div><span>04</span><h3>Verification</h3><p>Administrative review produces the final state and auditable allocation record.</p></div></Reveal></div>
        <a className="button primary" href="/presale">Enter presale experience <span>↗</span></a>
      </section>

      <section className="section shell" id="roadmap">
        <Reveal><div className="eyebrow">07 / ROADMAP</div><h2>Build the foundation. Then extend the network.</h2><p>Phase I establishes the investor experience and operational primitives required before broader protocol infrastructure is introduced.</p></Reveal>
        <div className="roadmapLine"><div><span>COMPLETED</span><strong>Foundation</strong><p>Architecture, canonical content, public experience and core operational design.</p></div><div><span>CURRENT</span><strong>Phase I</strong><p>Investor onboarding, presale workflow, verification, allocation and audit infrastructure.</p></div><div><span>NEXT</span><strong>Protocol expansion</strong><p>Validator, governance and institutional integration capabilities remain planned.</p></div><div><span>FUTURE</span><strong>Data network</strong><p>Broader data marketplace and production intelligence infrastructure remain future scope.</p></div></div>
      </section>

      <section className="section shell closing" id="docs">
        <Reveal><div className="eyebrow">08 / DOCUMENTATION & RISK</div><h2>Serious systems deserve serious documentation.</h2><p>Read the whitepaper, tokenomics, presale terms and risk disclosures as the primary source for project claims. Vision, current implementation and planned infrastructure are deliberately separated.</p><div className="docActions"><a className="button secondary" href="/whitepaper">Read whitepaper <span>→</span></a><a className="button secondary" href="/risk">Review risk & disclosures <span>→</span></a></div></Reveal></section>

      <InvestorDepth />
    </main>
  </SiteShell>;
}
