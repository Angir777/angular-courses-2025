import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { ErrorInterceptor } from './error.interceptor';

/**
 * List of HTTP interceptors loaded in the application.
 */
export const httpInterceptorProviders = [
  // An interceptor that adds a token to requests sent by a logged in user to the API.
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

  // Catches HTTP errors and handles them globally.
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
