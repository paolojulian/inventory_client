import type { AppPillVariant } from '@/components/shared/AppPill/AppPill';
import type { Product } from '@/domain/product.domain';
import type { User } from '@/domain/user.domain';
import type { Warehouse } from '@/domain/warehouse.domain';

export interface StockEntry {
  id: string;
  quantity_delta: number;
  reason: StockEntryReason;
  created_at: string;
  product: Product;
  warehouse: Warehouse;
  user: User;
}

export type StockEntryReason =
  | 'restock'
  | 'sale'
  | 'damage'
  | 'transfer_in'
  | 'transfer_out'
  | 'adjustment';

export function getStockEntryReasonText(
  reason: StockEntryReason,
  quantityDelta: number
): string {
  let reasonText = '--';
  const quantityDeltaPrefix =
    quantityDelta === 0 ? '' : quantityDelta < 0 ? '-' : '+';

  switch (reason) {
    case 'restock':
      reasonText = 'Restock';
      break;
    case 'sale':
      reasonText = 'Sale';
      break;
    case 'damage':
      reasonText = 'Damage';
      break;
    case 'transfer_in':
      reasonText = 'Transfer In';
      break;
    case 'transfer_out':
      reasonText = 'Transfer Out';
      break;
    case 'adjustment':
      reasonText = 'Adjustment';
      break;
    default:
      reasonText = '--';
      break;
  }

  return `${reasonText} (${quantityDeltaPrefix}${Math.abs(quantityDelta)})`;
}
export function getStockEntryReasonPillVariant(
  reason: StockEntryReason
): AppPillVariant {
  switch (reason) {
    case 'restock':
      return 'success';
    case 'sale':
      return 'danger';
    case 'damage':
      return 'warning';
    case 'transfer_in':
      return 'success';
    case 'transfer_out':
      return 'blue';
    case 'adjustment':
      return 'grey';
    default:
      return 'black';
  }
}
