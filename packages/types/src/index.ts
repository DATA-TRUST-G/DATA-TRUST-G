export type OrderStatus = 'CREATED' | 'AWAITING_PAYMENT' | 'PAYMENT_SUBMITTED' | 'UNDER_REVIEW' | 'CONFIRMED' | 'DTR_ALLOCATED' | 'EXPIRED' | 'REJECTED' | 'FLAGGED' | 'CANCELLED';
export type PaymentSubmissionStatus = 'SUBMITTED' | 'VERIFIED' | 'REJECTED' | 'FLAGGED';
export type AdminAction = 'CONFIRM' | 'REJECT' | 'FLAG' | 'CANCEL' | 'UPDATE_CONFIGURATION';

export interface PresaleOrder {
  id: string;
  orderReference: string;
  investorId: string;
  roundId: string;
  purchaseValue: string;
  purchaseCurrency: string;
  lockedPrice: string;
  lockedPriceCurrency: string;
  expectedDtr: string;
  status: OrderStatus;
  expiresAt: string | null;
  createdAt: string;
}

export interface PaymentSubmission {
  id: string;
  orderId: string;
  paymentRouteId: string;
  amount: string;
  assetCode: string;
  networkCode: string;
  transactionHash: string;
  status: PaymentSubmissionStatus;
  submittedAt: string;
}

export interface Allocation {
  id: string;
  orderId: string;
  investorId: string;
  paymentSubmissionId: string;
  dtrAmount: string;
  allocationReason: string;
  createdAt: string;
}
