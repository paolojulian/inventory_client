import { ErrUnableToDeleteProduct } from '@/interfaces/rest/products/errors';
import { URLS } from '../../../config/url.const';
import { withAuth } from '@/utils/auth';

export type ProductDeleteParams = {
  id: string;
};

export async function ProductDeleteInt(
  params: ProductDeleteParams
): Promise<void> {
  try {
    const response = await fetch(URLS.rest.v1.products.delete(params.id), {
      method: 'DELETE',
      headers: withAuth(),
    });

    if (!response.ok) {
      throw ErrUnableToDeleteProduct;
    }

    return;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToDeleteProduct;
  }
}
