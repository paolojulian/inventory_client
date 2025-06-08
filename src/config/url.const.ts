export const URLS = {
  rest: {
    v1: {
      base: () =>
        (typeof process !== 'undefined' && process?.env?.REST_API_V1) ||
        'http://localhost:8080',
      login: () => `${URLS.rest.v1.base()}/auth/login`,
      logout: () => `${URLS.rest.v1.base()}/auth/logout`,
      me: () => `${URLS.rest.v1.base()}/auth/me`,
    },
  },
  links: {
    v1: {
      login: '/login',
      dashboard: '/',
      products: '/products',
      stockEntries: '/stock-entries',
      inventory: '/inventory',
    },
  },
};
