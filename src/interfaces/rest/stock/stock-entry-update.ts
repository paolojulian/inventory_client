export interface StockEntryUpdateRequest {
  quantity_delta?: number;
  reason?: string;
  product_id?: string;
  warehouse_id?: string;
}

export interface StockEntryUpdateResponse {
  message: string;
  stock_entry: StockEntry;
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
