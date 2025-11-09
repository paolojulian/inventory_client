import { URLS } from '@/config/url.const';
import { ErrUnableToAddStockEntry } from '@/interfaces/rest/stock/errors';
import { jsonAuthHeaders } from '@/utils/auth';

export type StockEntryAddParams = {
  quantity_delta: number;
  reason: string;
  product_id: string;
  warehouse_id: string;
};

export interface StockEntryAddResponse {
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

export async function StockEntryAddInt(
  params: StockEntryAddParams
): Promise<StockEntryAddResponse> {
  try {
    const response = await fetch(URLS.rest.v1.stockEntries.add(), {
      method: 'POST',
      headers: jsonAuthHeaders(),
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error('Failed to add stock entry');
    }

    const data: StockEntryAddResponse = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToAddStockEntry;
  }
}
