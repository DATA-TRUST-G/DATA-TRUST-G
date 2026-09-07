export const isPositiveDecimal = (value: string) => /^\d+(\.\d+)?$/.test(value) && Number(value) > 0;
export const isTransactionHash = (value: string) => /^[A-Za-z0-9:_-]{16,200}$/.test(value.trim());
export const isSupportedNetworkCode = (value: string) => /^[A-Z0-9_-]{2,32}$/.test(value);

export function assertOrderInput(input: { purchaseValue: string; purchaseCurrency: string; roundId: string }) {
  if (!isPositiveDecimal(input.purchaseValue)) throw new Error('Purchase value must be a positive decimal.');
  if (!input.purchaseCurrency || input.purchaseCurrency.length > 16) throw new Error('Invalid purchase currency.');
  if (!input.roundId) throw new Error('Round is required.');
}

export function assertPaymentInput(input: { amount: string; assetCode: string; networkCode: string; transactionHash: string }) {
  if (!isPositiveDecimal(input.amount)) throw new Error('Payment amount must be positive.');
  if (!/^[A-Z0-9]{2,16}$/.test(input.assetCode)) throw new Error('Invalid asset code.');
  if (!isSupportedNetworkCode(input.networkCode)) throw new Error('Invalid network code.');
  if (!isTransactionHash(input.transactionHash)) throw new Error('Invalid transaction reference.');
}
