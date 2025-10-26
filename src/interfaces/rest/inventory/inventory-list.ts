import type { InventoryItem } from '@/domain/inventory.domain';
import type { PagerInput, PagerOutput } from '@/interfaces/rest.types';
import { ErrUnableToGetInventoryList } from '@/interfaces/rest/inventory/errors';
import { URLS } from '../../../config/url.const';
import { withAuth } from '@/utils/auth';

export type InventoryListResponse = {
  message: string;
  stocks: InventoryItem[];
  pager: PagerOutput;
};

export type ProductListParams = {
  pager: PagerInput;
};

export async function InventoryListInt(
  params: ProductListParams
): Promise<InventoryListResponse> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('page', params.pager.page.toString());
    queryParams.append('size', params.pager.size.toString());

    // if (typeof params.filter?.is_active === 'boolean') {
    //   queryParams.append(
    //     'filter.is_active',
    //     params.filter.is_active ? '1' : '0'
    //   );
    // }

    // if (params.filter?.search_text) {
    //   queryParams.append('filter.search_text', params.filter.search_text);
    // }

    const queryString = queryParams.toString();

    const response = await fetch(URLS.rest.v1.inventory.list(queryString), {
      method: 'GET',
      headers: withAuth(),
    });
    if (!response.ok) {
      throw ErrUnableToGetInventoryList;
    }

    const data: InventoryListResponse = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToGetInventoryList;
  }
}
