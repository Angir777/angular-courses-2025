import { Routes } from '@angular/router';
import { HomeComponent } from './views/private/home/home.component';
import { NotFoundComponent } from './views/error/not-found/not-found.component';
import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './views/public/login/login.component';
import { PrivateComponent } from './layout/private/private.component';
import { ErrorComponent } from './layout/error/error.component';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login',
        },
      }
    ]
  },
  {
    path: '',
    component: PrivateComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home',
        },
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./views/private/users/users.routes').then(
                m => m.usersRoutes
              ),
          },
        ],
      },
    ]
  },
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
