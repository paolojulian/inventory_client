export const AUTH_UC_KEYS = {
  auth: () => ['auth'],
  isLoggedIn: () => [...AUTH_UC_KEYS.auth(), 'is-logged-in'],
};
