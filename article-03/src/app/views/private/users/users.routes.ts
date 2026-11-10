import { Route } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { numberGuard } from '../../../guards/number/number.guard';

/**
 * Users routing
 */
export const usersRoutes: Route[] = [
  {
    path: '',
    component: UsersListComponent,
    data: {
      title: 'Users',
    },
  },
  {
    path: ':id',
    component: UserInfoComponent,
    canActivate: [numberGuard],
    data: {
      title: 'User',
    },
  }
];
