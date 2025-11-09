import { ProductQueryKeys } from '@/hooks/moduled/products/products.query-keys';
import { StockEntryAddInt } from '@/interfaces/rest/stock/stock-entry-add';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddStockEntry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: StockEntryAddInt,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ProductQueryKeys.list()] });
    },
  });
};
