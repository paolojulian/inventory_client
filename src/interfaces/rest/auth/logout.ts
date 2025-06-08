import { URLS } from '../../../config/url.const';
import { ErrUnableToLogout } from './errors';

async function LogoutInt(): Promise<Error | null> {
  try {
    const response = await fetch(URLS.rest.v1.logout(), {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw ErrUnableToLogout;
    }

    return null;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToLogout;
  }
}

export default LogoutInt;
