import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
   
  const isAuthenticated = true;

  return (
    isAuthenticated || router.createUrlTree(['/login'])
  );
};
