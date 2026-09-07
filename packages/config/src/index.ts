export type PresaleStatus = 'CONFIGURATION_REQUIRED' | 'CONFIGURED' | 'PAUSED';
export type LegalGate = 'REQUIRES_LEGAL_AND_OPERATIONAL_CLEARANCE' | 'CLEARED';

export interface DataTrustConfig {
  brand: { name: string; positioning: string };
  token: { symbol: string; fixedSupply: number; allocation: { userRewards: number; ecosystem: number; team: number; strategicPartnerships: number; treasury: number } };
  presale: { status: PresaleStatus; liveFundsEnabled: boolean; legalGate: LegalGate; round: string | null; price: number | null; priceRange: { min: number; max: number; startingPrice: number | null; sourceStatus: 'CONFLICTING_SOURCE_REQUIRES_DECISION' | 'CONFIRMED' }; acceptedAssets: string[]; networks: string[]; receivingRoutes: string[] };
  contentState: { current: boolean; planned: boolean; proposed: boolean; conflictsRequireDecision: boolean };
}

export const datatrustConfig: DataTrustConfig = {
  brand: { name: 'DataTrust', positioning: 'Ethical Data Infrastructure for the AI Economy.' },
  token: { symbol: '$DTR', fixedSupply: 1_000_000_000, allocation: { userRewards: 40, ecosystem: 20, team: 15, strategicPartnerships: 15, treasury: 10 } },
  presale: {
    status: 'CONFIGURATION_REQUIRED', liveFundsEnabled: false, legalGate: 'REQUIRES_LEGAL_AND_OPERATIONAL_CLEARANCE', round: null, price: null,
    priceRange: { min: 0.001, max: 0.003, startingPrice: null, sourceStatus: 'CONFLICTING_SOURCE_REQUIRES_DECISION' },
    acceptedAssets: [], networks: [], receivingRoutes: [],
  },
  contentState: { current: true, planned: true, proposed: true, conflictsRequireDecision: true },
};
