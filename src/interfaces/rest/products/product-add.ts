import type { Product } from '@/domain/product.domain';
import { ErrUnableToAddProduct } from '@/interfaces/rest/products/errors';
import { URLS } from '../../../config/url.const';

type ProductAddResponse = {
  product: Product;
};

type ProductAddData = {
  name?: string;
  description?: string;
  price?: number;
  sku?: string;
};

export type ProductAddParams = {
  data: ProductAddData;
};

export async function ProductAddInt(
  params: ProductAddParams
): Promise<ProductAddResponse> {
  try {
    const response = await fetch(URLS.rest.v1.products.add(), {
      method: 'POST',
      body: JSON.stringify(params.data),
    });

    if (!response.ok) {
      throw ErrUnableToAddProduct;
    }

    const data: ProductAddResponse = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToAddProduct;
  }
}
