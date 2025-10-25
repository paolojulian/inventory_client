const API_URL = import.meta.env.VITE_REST_API_V1;

export const URLS = {
  rest: {
    v1: {
      base: () => API_URL,
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
      inventory: {
        base: () => `${URLS.rest.v1.base()}/inventory`,
        list: (queryString: string = '') =>
          `${URLS.rest.v1.inventory.base()}/all-stock?${queryString}`,
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
      stockEntries: {
        index: '/stock-entries',
        add: '/stock-entries/add',
      },
      inventory: '/inventory',
    },
  },
};
