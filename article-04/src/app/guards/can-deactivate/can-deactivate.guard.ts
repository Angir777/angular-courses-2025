import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean | Promise<boolean>;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate, currentRoute, currentState, nextState) => {
  // We call the `canDeactivate` method of the component to check if it is possible to leave the page
  return component.canDeactivate ? component.canDeactivate() : true;
};
