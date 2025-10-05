import { useMutation } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import type { StockEntryDeleteResponse } from '@/interfaces/rest/stock/stock-entry-delete';

const deleteStockEntry = async (id: string): Promise<StockEntryDeleteResponse> => {
  const token = localStorage.getItem('token');
  
  const response = await fetch(URLS.rest.v1.stockEntries.delete(id), {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to delete stock entry');
  }

  return response.json();
};

export const useDeleteStockEntry = () => {
  return useMutation({
    mutationFn: deleteStockEntry,
  });
};
