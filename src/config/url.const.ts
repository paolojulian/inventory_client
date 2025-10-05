export const URLS = {
  rest: {
    v1: {
      base: () =>
        (typeof process !== 'undefined' && process?.env?.REST_API_V1) ||
        'http://localhost:8080',
      login: () => `${URLS.rest.v1.base()}/auth/login`,
      logout: () => `${URLS.rest.v1.base()}/auth/logout`,
      me: () => `${URLS.rest.v1.base()}/auth/me`,
      products: {
        base: () => `${URLS.rest.v1.base()}/products`,
        add: () => `${URLS.rest.v1.products.base()}`,
        list: (queryString: string = '') =>
          `${URLS.rest.v1.products.base()}?${queryString}`,
        update: (id: string) => `${URLS.rest.v1.products.base()}/${id}`,
        delete: (id: string) => `${URLS.rest.v1.products.base()}/${id}`,
      },
      stockEntries: {
        base: () => `${URLS.rest.v1.base()}/stock-entries`,
        add: () => `${URLS.rest.v1.stockEntries.base()}`,
        list: (queryString: string = '') =>
          `${URLS.rest.v1.stockEntries.base()}?${queryString}`,
        get: (id: string) => `${URLS.rest.v1.stockEntries.base()}/${id}`,
        update: (id: string) => `${URLS.rest.v1.stockEntries.base()}/${id}`,
        delete: (id: string) => `${URLS.rest.v1.stockEntries.base()}/${id}`,
      },
    },
  },
  links: {
    v1: {
      login: '/login',
      dashboard: '/',
      products: {
        index: '/products',
        add: '/products/add',
      },
      stockEntries: '/stock-entries',
      stockEntriesAdd: '/stock-entries/add',
      inventory: '/inventory',
    },
  },
};
