import type { PagerInput } from '@/interfaces/rest.types';

export const ProductQueryKeys = {
  base: () => {
    return `products`;
  },
  list: (pager: PagerInput) =>
    `${ProductQueryKeys.base()}&page=${pager.page}&size=${pager.size}`,
};
