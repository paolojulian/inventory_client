import { URLS } from '../../../config/url.const';
import { ErrUnableToLogin, ErrUnauthorizedLogin } from './errors';

type LoginIntInput = {
  username: string;
  password: string;
};

async function LoginInt(input: LoginIntInput): Promise<Error | null> {
  try {
    const response = await fetch(URLS.rest.v1.login(), {
      method: 'POST',
      body: JSON.stringify(input),
      credentials: 'include',
    });
    if (!response.ok) {
      throw ErrUnableToLogin;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToLogin;
  }
  throw ErrUnauthorizedLogin;
}

export default LoginInt;
