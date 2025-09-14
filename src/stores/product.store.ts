import type { Product } from '@/domain/product.domain';
import { create } from 'zustand';

export type FilterPriceRange = {
  min?: number;
  max?: number;
};
export type FilterStatus = 'all' | 'active' | 'inactive';

export interface ProductFilters {
  search: string;
  status: FilterStatus;
  sortBy: 'name' | 'price' | 'sku' | 'status';
  sortOrder: 'asc' | 'desc' | 'default';
  priceRange: FilterPriceRange;
}

export interface ProductStore {
  products: Product[];
  filters: ProductFilters;
  loading: boolean;
  error: string | null;

  selectedViewProduct: Product | null;
  selectedEditProduct: Product | null;

  // Actions
  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  updateFilters: (filters: Partial<ProductFilters>) => void;
  updateStatusFilter: (status: FilterStatus) => void;
  updatePriceRangeFilter: (min?: number, max?: number) => void;
  updatePriceRangeMinFilter: (min?: number) => void;
  updatePriceRangeMaxFilter: (max?: number) => void;
  resetFilters: () => void;
  setSelectedEditProduct: (product: Product | null) => void;
  setSelectedViewProduct: (product: Product | null) => void;

  // Computed
  filteredProducts: () => Product[];
}

const initialFilters: ProductFilters = {
  search: '',
  status: 'all',
  sortBy: 'name',
  sortOrder: 'asc',
  priceRange: {
    min: undefined,
    max: undefined,
  },
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filters: initialFilters,
  loading: false,
  error: null,

  selectedViewProduct: null,
  selectedEditProduct: null,

  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  updateFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  updateStatusFilter: (status) =>
    set((state) => ({
      filters: { ...state.filters, status },
    })),
  updatePriceRangeFilter: (min, max) =>
    set((state) => ({
      filters: {
        ...state.filters,
        priceRange: {
          min,
          max,
        },
      },
    })),
  updatePriceRangeMinFilter: (min) =>
    set((state) => ({
      filters: {
        ...state.filters,
        priceRange: {
          ...state.filters.priceRange,
          min,
        },
      },
    })),
  updatePriceRangeMaxFilter: (max) =>
    set((state) => ({
      filters: {
        ...state.filters,
        priceRange: {
          ...state.filters.priceRange,
          max,
        },
      },
    })),
  resetFilters: () => set({ filters: initialFilters }),

  setSelectedEditProduct: (product) => set({ selectedEditProduct: product }),
  setSelectedViewProduct: (product) => set({ selectedViewProduct: product }),

  filteredProducts: () => {
    const { products, filters } = get();
    let filtered = [...products];

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.sku.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by status
    if (filters.status !== 'all') {
      filtered = filtered.filter(
        (product) => product.status === filters.status
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (filters.sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price.cents;
          bValue = b.price.cents;
          break;
        case 'sku':
          aValue = a.sku.toLowerCase();
          bValue = b.sku.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (aValue < bValue) return filters.sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return filters.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  },
}));
