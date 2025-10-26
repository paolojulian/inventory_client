import { useQuery } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import { withAuth } from '@/utils/auth';
import type { StockEntryGetResponse } from '@/interfaces/rest/stock/stock-entry-get';

const getStockEntry = async (id: string): Promise<StockEntryGetResponse> => {
  const response = await fetch(URLS.rest.v1.stockEntries.get(id), {
    method: 'GET',
    headers: withAuth(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch stock entry');
  }

  return response.json();
};

export const useGetStockEntry = (id: string) => {
  return useQuery({
    queryKey: ['stock-entry', id],
    queryFn: () => getStockEntry(id),
    enabled: !!id,
  });
};
