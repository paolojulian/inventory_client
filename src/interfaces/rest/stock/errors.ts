export interface StockEntryError {
  error: string;
}

export const STOCK_ENTRY_ERRORS = {
  INVALID_INPUT: 'Invalid Input',
  INVALID_REASON: 'Invalid reason provided',
  STOCK_ENTRY_NOT_FOUND: 'Stock entry not found',
  UNAUTHORIZED: 'User not authenticated',
  INTERNAL_ERROR: 'Internal server error',
} as const;
