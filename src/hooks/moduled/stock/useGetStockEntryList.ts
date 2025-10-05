import { useQuery } from '@tanstack/react-query';
import { URLS } from '@/config/url.const';
import type { StockEntryListRequest, StockEntryListResponse } from '@/interfaces/rest/stock/stock-entry-list';

const getStockEntryList = async (params: StockEntryListRequest = {}): Promise<StockEntryListResponse> => {
  const token = localStorage.getItem('token');
  
  const queryParams = new URLSearchParams();
  if (params.limit) {
    queryParams.append('limit', params.limit.toString());
  }
  
  const queryString = queryParams.toString();
  const url = URLS.rest.v1.stockEntries.list(queryString);
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
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
