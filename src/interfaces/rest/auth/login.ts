import { URLS } from '../../../config/url.const';
import { setAuthToken, jsonHeaders } from '@/utils/auth';
import { ErrUnableToLogin, ErrUnauthorizedLogin } from './errors';

type LoginIntInput = {
  username: string;
  password: string;
};

type LoginResponse = {
  message: string;
  token: string;
};

async function LoginInt(input: LoginIntInput): Promise<Error | null> {
  try {
    const response = await fetch(URLS.rest.v1.login(), {
      method: 'POST',
      headers: jsonHeaders(),
      body: JSON.stringify(input),
    });
    if (response.status === 401) {
      throw ErrUnauthorizedLogin;
    }

    if (!response.ok) {
      throw ErrUnableToLogin;
    }

    const data: LoginResponse = await response.json();
    
    setAuthToken(data.token);

    return null;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }

    throw ErrUnableToLogin;
  }
}

export default LoginInt;
