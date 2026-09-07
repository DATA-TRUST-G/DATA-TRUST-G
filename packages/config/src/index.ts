export const datatrustConfig = {
  brand: {
    name: 'DataTrust',
    positioning: 'Ethical Data Infrastructure for the AI Economy.',
  },
  token: {
    symbol: '$DTR',
    fixedSupply: 1_000_000_000,
    allocation: {
      userRewards: 40,
      ecosystem: 20,
      team: 15,
      strategicPartnerships: 15,
      treasury: 10,
    },
  },
  presale: {
    status: 'CONFIGURATION_REQUIRED' as const,
    liveFundsEnabled: false,
    legalGate: 'REQUIRES_LEGAL_AND_OPERATIONAL_CLEARANCE' as const,
    round: null,
    price: null,
    acceptedAssets: [],
    networks: [],
    receivingRoutes: [],
  },
  contentState: {
    current: true,
    planned: true,
    proposed: true,
    conflictsRequireDecision: true,
  },
} as const;

export type DataTrustConfig = typeof datatrustConfig;
