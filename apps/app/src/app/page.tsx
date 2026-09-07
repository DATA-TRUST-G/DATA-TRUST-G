const states = [
  ['CONFIRMED ALLOCATION', '—', 'Allocation appears here only after verified administrator confirmation.'],
  ['PENDING', '—', 'Submitted payment evidence remains pending until reviewed.'],
  ['ORDERS', '—', 'Your purchase history will appear here.'],
];

export default function InvestorPortal() {
  return <main className="portal"><header><strong>DATATRUST</strong><span>INVESTOR PORTAL / PHASE I</span></header><section className="hero"><div><small>OWNERSHIP / CONTROLLED STATE</small><h1>Know exactly where your participation stands.</h1><p>The investor portal distinguishes confirmed allocation from submitted or unverified payment evidence. No editable wallet balance is presented.</p></div><a href="/account">Account security →</a></section><section className="grid">{states.map(([label,value,copy]) => <article key={label}><small>{label}</small><strong>{value}</strong><p>{copy}</p></article>)}</section><section className="notice"><small>IMPORTANT</small><p>A transaction hash is evidence submitted for review. It is not confirmation of funds received or allocation.</p></section></main>;
}
