export interface StockEntryGetResponse {
  message: string;
  stock_entry: StockEntry;
  product: ProductSummary;
  warehouse: WarehouseSummary;
  user: UserSummary;
}

export interface StockEntry {
  id: string;
  quantity_delta: number;
  reason: string;
  created_at: string;
  product_id: string;
  warehouse_id: string;
  user_id: string;
}

export interface ProductSummary {
  id: string;
  name: string;
  sku: string;
}

export interface WarehouseSummary {
  id: string;
  name: string;
}

export interface UserSummary {
  id: string;
  name: string;
}
