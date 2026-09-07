const pillars = [
  { n: '01', title: 'Rights become infrastructure', copy: 'Data rights are most useful when they can be represented, evaluated and carried into the access decision—not buried in policy text.' },
  { n: '02', title: 'Consent becomes a control plane', copy: 'Purpose, permission and revocation can become explicit inputs to how data is accessed and used.' },
  { n: '03', title: 'Provenance becomes evidence', copy: 'A stronger data economy needs a visible relationship between origin, conditions, verification and downstream access.' },
  { n: '04', title: 'Participation closes the loop', copy: 'When contributors create economic value, the infrastructure should make the relationship between contribution and participation legible.' },
];

const layers = [
  ['01', 'Rights', 'Participant-level authority and identity context'],
  ['02', 'Consent', 'Purpose, scope and permission state'],
  ['03', 'Provenance', 'Origin, lineage and verification signals'],
  ['04', 'Access', 'Permissioned enterprise data pathways'],
  ['05', 'Coordination', '$DTR as an ecosystem economic layer'],
];

const faq = [
  ['Is DataTrust a data marketplace today?', 'No. Phase I focuses on the investor experience, presale operations and the foundation for a future data infrastructure network. A full production marketplace remains future scope.'],
  ['Is the presale currently accepting funds?', 'The software is designed for the complete order and payment-evidence workflow, but live-funds acceptance remains gated until canonical commercial routes and the required legal and operational approvals are confirmed.'],
  ['What is $DTR?', '$DTR is the proposed economic coordination layer for the DataTrust ecosystem. Specific utility is presented only where supported by canonical project documentation.'],
  ['How should allocation be understood?', 'A confirmed internal allocation is derived from the allocation ledger. It is not represented as an on-chain wallet balance unless an actual on-chain distribution has occurred.'],
];

export function InvestorDepth() {
  return <>
    <section className="section shell investor-depth" id="intelligence">
      <div className="eyebrow">09 / SYSTEM INTELLIGENCE</div>
      <div className="depthIntro">
        <div><h2>The opportunity is not another token. It is the infrastructure around the data economy.</h2></div>
        <p>DataTrust is built around a simple observation: as AI increases the economic value of useful data, the systems governing who can use it, why they can use it and how participation is recorded become increasingly important.</p>
      </div>
      <div className="pillarGrid">{pillars.map(p => <article className="pillarCard" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.copy}</p><i aria-hidden>↗</i></article>)}</div>
    </section>

    <section className="section shell trust-architecture" id="trust-stack">
      <div className="eyebrow">10 / TRUST STACK</div>
      <div className="depthIntro"><h2>One system. Five connected layers.</h2><p>The architecture is deliberately modular: each layer answers a different trust question while remaining connected to the economic and operational model.</p></div>
      <div className="layerStack">{layers.map(([n, title, copy]) => <div className="layerRow" key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p><b>↗</b></div>)}</div>
    </section>

    <section className="section shell intelligence-dashboard" id="market-model">
      <div className="eyebrow">11 / DATA ECONOMY MODEL</div>
      <div className="dashboardHeader"><div><h2>Value moves through the system.</h2><p>Instead of presenting invented market statistics, DataTrust uses a transparent model of the forces shaping the opportunity.</p></div><span className="statusBadge"><i/> MODEL / STRUCTURAL</span></div>
      <div className="flowDiagram">
        <div className="flowColumn"><small>INPUT</small><strong>Data contribution</strong><span>Useful information enters a governed environment.</span></div>
        <div className="flowArrow">→</div>
        <div className="flowColumn active"><small>TRUST</small><strong>Consent + provenance</strong><span>Permissions and evidence travel with access decisions.</span></div>
        <div className="flowArrow">→</div>
        <div className="flowColumn"><small>DEMAND</small><strong>Enterprise intelligence</strong><span>Permissioned access connects useful data with demand.</span></div>
        <div className="flowArrow">→</div>
        <div className="flowColumn"><small>PARTICIPATION</small><strong>Economic coordination</strong><span>The ecosystem records value relationships and participation.</span></div>
      </div>
      <div className="signalChart" aria-label="Illustrative structural data value curve">
        <div className="chartGrid"/><svg viewBox="0 0 1000 280" preserveAspectRatio="none" role="img"><defs><linearGradient id="dtCurve" x1="0" x2="1"><stop offset="0" stopColor="#6f91ff"/><stop offset="1" stopColor="#b7a1ff"/></linearGradient></defs><path className="chartFill" d="M0 230 C100 215 145 205 210 210 C290 216 315 158 390 170 C470 185 500 118 570 132 C650 148 690 72 770 88 C850 103 895 48 1000 58 L1000 280 L0 280 Z"/><path className="chartLine" d="M0 230 C100 215 145 205 210 210 C290 216 315 158 390 170 C470 185 500 118 570 132 C650 148 690 72 770 88 C850 103 895 48 1000 58"/></svg><div className="chartLabels"><span>DATA DEMAND</span><span>TRUST COMPLEXITY</span><span>ENTERPRISE ACCESS</span></div></div>
    </section>

    <section className="section shell economics" id="economic-layer">
      <div className="eyebrow">12 / ECONOMIC LAYER</div>
      <div className="economicsGrid"><div><h2>$DTR sits downstream of the system—not ahead of it.</h2><p>The economic narrative starts with infrastructure. $DTR is presented as the coordination layer that can connect participation, ecosystem activity and supported utility as the network develops.</p><a className="textLink" href="/dtr">Explore the $DTR model <span>→</span></a></div><div className="economicsPanel"><div><small>FIXED SUPPLY</small><strong>1,000,000,000</strong><span>$DTR</span></div><div><small>ALLOCATION</small><strong>5</strong><span>defined categories</span></div><div><small>PRICE STATE</small><strong>$0.001—$0.003</strong><span>requested illustrative band</span></div></div></div>
      <p className="microDisclosure">The displayed price band is an illustrative decision-state range supplied for product design. It is not presented as a live market price, guaranteed return or prediction. A single canonical starting price must be confirmed before live presale pricing is enabled.</p>
    </section>

    <section className="section shell investor-path" id="investor-path">
      <div className="eyebrow">13 / INVESTOR PATH</div><div className="depthIntro"><h2>From first impression to informed participation.</h2><p>Every step should answer the next question before asking the investor to take the next action.</p></div>
      <div className="pathRail">{['Discover', 'Understand', 'Verify', 'Participate', 'Track', 'Engage'].map((x,i) => <div key={x}><span>0{i+1}</span><strong>{x}</strong>{i<5&&<i>→</i>}</div>)}</div>
      <div className="pathDetail"><div><small>DISCOVERY</small><h3>Understand the structural problem.</h3><p>Why data rights, consent and provenance are becoming part of the AI infrastructure stack.</p></div><div><small>PARTICIPATION</small><h3>See exactly what happens next.</h3><p>Order creation, payment evidence, review, confirmation and allocation are explicit states—not black boxes.</p></div><div><small>CONTINUITY</small><h3>Keep the relationship after purchase.</h3><p>Investor history, notices, documentation and allocation records remain available through the account experience.</p></div></div>
    </section>

    <section className="section shell faq-section" id="faq">
      <div className="eyebrow">14 / QUESTIONS</div><div className="depthIntro"><h2>Questions investors should not have to chase.</h2><p>Clear answers are part of the product.</p></div>
      <div className="faqList">{faq.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </section>
  </>;
}
