const TOKEN_KEY = 'token';

export const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

export const setAuthToken = (token: string): void => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // noop
  }
};

export const removeAuthToken = (): void => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    // noop
  }
};

export const withAuth = (headers: HeadersInit = {}): HeadersInit => {
  const token = getAuthToken();
  if (!token) return headers;
  return {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
};

export const jsonHeaders = (headers: HeadersInit = {}): HeadersInit => {
  return {
    'Content-Type': 'application/json',
    ...headers,
  };
};

export const jsonAuthHeaders = (headers: HeadersInit = {}): HeadersInit => {
  return withAuth(jsonHeaders(headers));
};


