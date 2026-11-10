import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  // Initializing a Router instance using the `inject` function
  const router = inject(Router);

  // Simulation of the logic for checking if a user is logged in
  const isLoggedIn = !localStorage.getItem('authToken');

  if (isLoggedIn) {
    return true; // Access to the route is allowed
  } else {
    router.navigate(['/home']);
    return false; // Access to the route is forbidden
  }
};
