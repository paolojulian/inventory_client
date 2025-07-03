import { ErrUnableToGetProductList } from '@/interfaces/rest/products/errors';
import { URLS } from '../../../config/url.const';

async function ProductListInt(): Promise<Error | null> {
  try {
    const response = await fetch(URLS.rest.v1.products.list());
    if (!response.ok) {
      throw ErrUnableToGetProductList;
    }

    const data = await response.json();
    console.log(data);

    return null;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
