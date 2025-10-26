import { useQuery } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import { withAuth } from '@/utils/auth';
import type { StockEntryListRequest, StockEntryListResponse } from '@/interfaces/rest/stock/stock-entry-list';

const getStockEntryList = async (params: StockEntryListRequest = {}): Promise<StockEntryListResponse> => {
  const queryParams = new URLSearchParams();
  if (params.limit) {
    queryParams.append('limit', params.limit.toString());
  }
  
  const queryString = queryParams.toString();
  const url = URLS.rest.v1.stockEntries.list(queryString);
  
  const response = await fetch(url, {
    method: 'GET',
    headers: withAuth(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch stock entries');
  }

  return response.json();
};

export const useGetStockEntryList = (params: StockEntryListRequest = {}) => {
  return useQuery({
    queryKey: ['stock-entries', params],
    queryFn: () => getStockEntryList(params),
  });
};
