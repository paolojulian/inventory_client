class UnauthorizedLoginError extends Error {
  constructor() {
    super();
    this.message = 'Error: Unauthorized Login';
  }
}
export const ErrUnauthorizedLogin = new UnauthorizedLoginError();

class UnableToLoginError extends Error {
  constructor() {
    super();
    this.message = 'Error: Unable to login';
  }
}
export const ErrUnableToLogin = new UnableToLoginError();

class UnableToLogoutError extends Error {
  constructor() {
    super();
    this.message = 'Error: Unable to logout';
  }
}
export const ErrUnableToLogout = new UnableToLogoutError();
