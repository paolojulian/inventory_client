import type { Product } from '@/domain/product.domain';
import type { Warehouse } from '@/domain/warehouse.domain';

export type InventoryItem = {
  product: Product;
  warehouse: Warehouse;
  stock: number;
};
