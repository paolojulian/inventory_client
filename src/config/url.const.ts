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
        list: (queryString: string = '') =>
          `${URLS.rest.v1.products.base()}?${queryString}`,
        update: (id: string) => `${URLS.rest.v1.products.base()}/${id}`,
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
      inventory: '/inventory',
    },
  },
};
