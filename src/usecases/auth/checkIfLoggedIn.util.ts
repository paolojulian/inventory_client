import { URLS } from '../../config/url.const';
import { USECASES_AUTH_ERRORS } from './errors';

export default async function checkIfLoggedIn(): Promise<boolean> {
  try {
    const result = await fetch(URLS.rest.v1.me(), {
      method: 'POST',
      credentials: 'include',
    });

    if (result.status === 401) {
      return false;
    }

    if (!result.ok) {
      throw USECASES_AUTH_ERRORS.ErrUnknownError();
    }

    return true;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw USECASES_AUTH_ERRORS.ErrUnknownError();
  }
}
