export const URLS = {
  rest: {
    v1: {
      base: () =>
        (typeof process !== 'undefined' && process?.env?.REST_API_V1) ||
        'http://localhost:8080',
      login: () => `${URLS.rest.v1.base()}/auth/login`,
      me: () => `${URLS.rest.v1.base()}/auth/me`,
    },
  },
};
