import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const userProfileCanMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  
  const userId = '123';
  const requestedId = segments[1]?.path;

  if (userId !== requestedId) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
