import { useMutation } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import { withAuth } from '@/utils/auth';
import type { StockEntryDeleteResponse } from '@/interfaces/rest/stock/stock-entry-delete';

const deleteStockEntry = async (id: string): Promise<StockEntryDeleteResponse> => {
  const response = await fetch(URLS.rest.v1.stockEntries.delete(id), {
    method: 'DELETE',
    headers: withAuth(),
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
