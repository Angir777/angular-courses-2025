import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const numberGuard: CanActivateFn = (route, state) => {
  // Initializing a Router instance using the `inject` function
  const router = inject(Router);
  
  // We get the `id` parameter from the active route
  const id = route.paramMap.get('id');

  // If `id` is a number, we allow the user to enter the route
  if (!isNaN(Number(id))) {
    return true;
  }

  // If `id` is not a number, we redirect the user to the home page `/home`
  router.navigate(['/home']);
  return false;
};
