import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuardUserManager: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(authService.isLoggedIn)
  if (authService.isLoggedIn) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('user/manager/login');
};
