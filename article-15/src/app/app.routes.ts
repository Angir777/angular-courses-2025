import { Routes } from '@angular/router';
import { FormOneComponent } from './components/form-one/form-one.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { FormThreeComponent } from './components/form-three/form-three.component';

export const routes: Routes = [
    {
        path: 'form-one',
        component: FormOneComponent,
    },
    {
        path: 'form-two',
        component: FormTwoComponent,
    },
    {
        path: 'form-three',
        component: FormThreeComponent,
    }
];
