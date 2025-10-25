import { URLS } from '@/config/url.const';

export const getCreateButtonLink = (url: string) => {
  switch (url) {
    case URLS.links.v1.products.index:
      return URLS.links.v1.products.add;
    case URLS.links.v1.stockEntries.index:
      return URLS.links.v1.stockEntries.add;
    default:
      return '#';
  }
};
