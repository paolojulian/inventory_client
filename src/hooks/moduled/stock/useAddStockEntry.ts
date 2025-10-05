import { useMutation } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import type { StockEntryAddRequest, StockEntryAddResponse } from '@/interfaces/rest/stock/stock-entry-add';

const addStockEntry = async (data: StockEntryAddRequest): Promise<StockEntryAddResponse> => {
  const token = localStorage.getItem('token');
  
  const response = await fetch(URLS.rest.v1.stockEntries.add(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to add stock entry');
  }

  return response.json();
};

export const useAddStockEntry = () => {
  return useMutation({
    mutationFn: addStockEntry,
  });
};
