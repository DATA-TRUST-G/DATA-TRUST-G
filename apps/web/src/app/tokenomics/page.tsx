import { datatrustConfig } from '@datatrust/config';
import { Reveal, SiteShell } from '../../components/site-shell';

const purpose: Record<string,string> = {
  'User rewards': 'Reserved for mechanisms that recognize participant contribution and ecosystem activity, subject to final program design.',
  'Ecosystem': 'Supports infrastructure, integrations, product development and ecosystem initiatives as the network evolves.',
  'Team': 'Aligns the core team with long-term execution and responsible stewardship of the protocol.',
  'Strategic partnerships': 'Provides capacity for strategic relationships that expand utility, distribution and infrastructure reach.',
  'Treasury': 'Maintains a controlled reserve for future protocol needs, operating resilience and approved ecosystem decisions.',
};

export default function TokenomicsPage(){
  const a=datatrustConfig.token.allocation;
  const rows=[['User rewards',a.userRewards],['Ecosystem',a.ecosystem],['Team',a.team],['Strategic partnerships',a.strategicPartnerships],['Treasury',a.treasury]] as const;
  return <SiteShell><main className="shell">
    <section className="pageHero"><div className="pageKicker"><i/> $DTR / TOKENOMICS</div><h1>Capital architecture with a stated purpose.</h1><p>The token model is presented as a system of roles, not a decorative percentage chart. Fixed supply and canonical allocation are preserved exactly; unconfirmed vesting terms are not invented.</p></section>
    <section className="section" style={{borderTop:0}}><Reveal><div className="splitSection"><div><div className="eyebrow">FIXED SUPPLY</div><div className="priceValue">{datatrustConfig.token.fixedSupply.toLocaleString()} <small>$DTR</small></div><p className="priceDisclaimer">Fixed Phase I supply.</p></div><div><div className="statList"><div><span>User rewards</span><strong>{a.userRewards}%</strong></div><div><span>Ecosystem</span><strong>{a.ecosystem}%</strong></div><div><span>Team</span><strong>{a.team}%</strong></div><div><span>Strategic partnerships</span><strong>{a.strategicPartnerships}%</strong></div><div><span>Treasury</span><strong>{a.treasury}%</strong></div></div></div></div></Reveal>
      <div className="allocationTable">{rows.map(([name,value])=><Reveal key={name}><div className="allocationRow"><strong>{value}%</strong><span>{name}</span><div className="allocationBar"><i style={{width:`${value}%`}}/></div></div></Reveal>)}</div>
    </section>
    <section className="section"><Reveal><div className="eyebrow">ALLOCATION LOGIC</div><h2>Why each layer exists.</h2></Reveal><div className="detailGrid">{rows.map(([name,value],i)=><Reveal key={name}><article className="detailCard"><span className="num">0{i+1} / {value}%</span><h3>{name}</h3><p>{purpose[name]}</p></article></Reveal>)}</div></section>
    <section className="section"><Reveal><div className="eyebrow">RELEASE DISCIPLINE</div><h2>Precision before promises.</h2><p>Vesting, unlock schedules, distribution mechanics and any future supply changes remain subject to canonical documentation and formal decision. This page deliberately does not convert unknowns into investor claims.</p><div className="qualityStrip"><span>Canonical supply</span><span>Allocation preserved</span><span>Unknowns disclosed</span><span>No invented yield</span></div></Reveal></section>
  </main></SiteShell>
}
