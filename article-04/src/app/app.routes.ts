import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { numberGuard } from './guards/number/number.guard';
import { authGuard } from './guards/auth/auth.guard';
import { FormComponent } from './components/form/form.component';
import { canDeactivateGuard } from './guards/can-deactivate/can-deactivate.guard';
import { userProfileCanMatchGuard } from './guards/user-profile-can-match/user-profile-can-match.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        canActivateChild: [authGuard],
        children: [
            {
                path: 'page-one',
                component: PageOneComponent,
            },
            {
                path: 'page-two',
                component: PageTwoComponent,
            },
            {
                path: 'page-three',
                children: [
                    {
                        path: ':id',
                        component: PageThreeComponent,
                        canActivate: [numberGuard],
                    }
                ]
            }
        ]
    },
    {
        path: 'form',
        component: FormComponent,
        canDeactivate: [canDeactivateGuard]
    },
    {
        path: 'profile/:id',
        component: UserProfileComponent,
        canMatch: [userProfileCanMatchGuard]
    }
];
