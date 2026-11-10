import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const numberGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const id = route.params['id'];

  if (!isNaN(Number(id))) {
    return true;
  }

  router.navigate(['/404']);
  return false;
};
