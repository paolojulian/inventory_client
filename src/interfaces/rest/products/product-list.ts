import { ErrUnableToGetProductList } from '@/interfaces/rest/products/errors';
import { URLS } from '../../../config/url.const';
import type { PagerInput, PagerOutput } from '@/interfaces/rest.types';
import type { Product } from '@/domain/product.domain';

type ProductListResponse = {
  message: string;
  products: Product[];
  pager: PagerOutput;
};

type ProductListParams = {
  pager: PagerInput;
};

export async function ProductListInt(
  params: ProductListParams
): Promise<Error | ProductListResponse> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('page', params.pager.page.toString());
    queryParams.append('size', params.pager.size.toString());

    const queryString = queryParams.toString();

    const response = await fetch(URLS.rest.v1.products.list(queryString), {
      method: 'GET',
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
