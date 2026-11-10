import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

/**
 * Catches HTTP errors and handles them globally.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Our error HTTP:', error.status, error.message);

        if (error.status === 404) {
          alert('404!');
        }

        // You can add more advanced error handling, 
        // e.g. logging the user out on 401
        if (error.status === 401) {
          alert('Unauthorized! Please log in again.');
          localStorage.removeItem('token');
          // You can redirect to the login page here
        }

        return throwError(() => new Error(error.message));
      })
    );
  }
}
