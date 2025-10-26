import type { Product } from '@/domain/product.domain';
import { ErrUnableToUpdateProduct } from '@/interfaces/rest/products/errors';
import { URLS } from '../../../config/url.const';
import { jsonAuthHeaders } from '@/utils/auth';

type ProductUpdateResponse = {
  message: string;
  product: Product;
};

type ProductUpdateData = {
  name?: string;
  description?: string;
  price?: number;
  sku?: string;
};

export type ProductUpdateParams = {
  id: string;
  data: ProductUpdateData;
};

export async function ProductUpdateInt(
  params: ProductUpdateParams
): Promise<ProductUpdateResponse> {
  try {
    const response = await fetch(URLS.rest.v1.products.update(params.id), {
      method: 'PUT',
      headers: jsonAuthHeaders(),
      body: JSON.stringify(params.data),
    });

    if (!response.ok) {
      throw ErrUnableToUpdateProduct;
    }

    const data: ProductUpdateResponse = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToUpdateProduct;
  }
}
