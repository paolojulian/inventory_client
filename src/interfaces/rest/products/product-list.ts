import { ErrUnableToGetProductList } from '@/interfaces/rest/products/errors';
import { URLS } from '../../../config/url.const';
import { withAuth } from '@/utils/auth';
import type { PagerInput, PagerOutput } from '@/interfaces/rest.types';
import type { Product } from '@/domain/product.domain';

export type ProductListResponse = {
  message: string;
  products: Product[];
  pager: PagerOutput;
};

export type ProductListParams = {
  pager: PagerInput;
  filter?: {
    search_text?: string;
    is_active?: boolean;
  };
};

export async function ProductListInt(
  params: ProductListParams
): Promise<ProductListResponse> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('page', params.pager.page.toString());
    queryParams.append('size', params.pager.size.toString());

    if (typeof params.filter?.is_active === 'boolean') {
      queryParams.append(
        'filter.is_active',
        params.filter.is_active ? '1' : '0'
      );
    }

    if (params.filter?.search_text) {
      queryParams.append('filter.search_text', params.filter.search_text);
    }

    const queryString = queryParams.toString();

    const response = await fetch(URLS.rest.v1.products.list(queryString), {
      method: 'GET',
      headers: withAuth(),
    });
    if (!response.ok) {
      throw ErrUnableToGetProductList;
    }

    const data: ProductListResponse = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToGetProductList;
  }
}
