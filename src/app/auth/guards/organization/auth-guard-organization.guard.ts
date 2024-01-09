import { CanActivateFn } from '@angular/router';

export const authGuardOrganizationGuard: CanActivateFn = (route, state) => {
  return true;
};
