import { URLS } from '../../../config/url.const';
import { removeAuthToken, jsonAuthHeaders } from '@/utils/auth';
import { ErrUnableToLogout } from './errors';

async function LogoutInt(): Promise<Error | null> {
  try {
    const response = await fetch(URLS.rest.v1.logout(), {
      method: 'POST',
      headers: jsonAuthHeaders(),
    });

    // Remove token from localStorage regardless of server response
    removeAuthToken();

    if (!response.ok) {
      throw ErrUnableToLogout;
    }

    return null;
  } catch (e) {
    // Always remove token even if request fails
    removeAuthToken();
    
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToLogout;
  }
}

export default LogoutInt;
