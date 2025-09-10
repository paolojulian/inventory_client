import type { Product } from '@/domain/product.domain';
import type { SortBy, SortTypes } from '@/pages/Products';
import type { ProductFilters } from '@/stores/product.store';

export type ProductListCommonProps = {
  onEditProduct: (product: Product) => void;
  onSort: (props: [sortBy: SortBy, sortType: SortTypes]) => void;
  setCurrentPage: (page: number) => void;
  items: Product[];
  sort: [ProductFilters['sortBy'], ProductFilters['sortOrder']];
  currentPage: number;
  totalPages: number;
};
