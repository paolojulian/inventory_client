import { useMutation } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import type { StockEntryUpdateRequest, StockEntryUpdateResponse } from '@/interfaces/rest/stock/stock-entry-update';

const updateStockEntry = async ({ id, data }: { id: string; data: StockEntryUpdateRequest }): Promise<StockEntryUpdateResponse> => {
  const token = localStorage.getItem('token');
  
  const response = await fetch(URLS.rest.v1.stockEntries.update(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update stock entry');
  }

  return response.json();
};

export const useUpdateStockEntry = () => {
  return useMutation({
    mutationFn: updateStockEntry,
  });
};
