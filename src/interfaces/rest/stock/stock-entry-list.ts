export interface StockEntryListRequest {
  limit?: number;
}

export interface StockEntryListResponse {
  message: string;
  stock_entries: StockEntry[];
  total: number;
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

export interface StockEntryWithDetails extends StockEntry {
  product?: {
    id: string;
    name: string;
    sku: string;
  };
  warehouse?: {
    id: string;
    name: string;
  };
  user?: {
    id: string;
    name: string;
  };
}
