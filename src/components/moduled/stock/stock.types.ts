export type StockReason =
  | 'restock'
  | 'sale'
  | 'damage'
  | 'transfer_in'
  | 'transfer_out'
  | 'adjustment';

export const STOCK_REASONS: Record<StockReason, string> = {
  restock: 'Restock',
  sale: 'Sale',
  damage: 'Damage',
  transfer_in: 'Transfer In',
  transfer_out: 'Transfer Out',
  adjustment: 'Adjustment',
};
