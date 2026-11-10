import { Routes } from '@angular/router';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { ExampleTwoComponent } from './components/example-two/example-two.component';
import { ExampleThreeComponent } from './components/example-three/example-three.component';
import { ExampleFourComponent } from './components/example-four/example-four.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'example-one',
        pathMatch: 'full',
    },
    {
        path: 'example-one',
        component: ExampleOneComponent,
    },
    {
        path: 'example-two',
        component: ExampleTwoComponent,
    },
    {
        path: 'example-three',
        component: ExampleThreeComponent,
    },
    {
        path: 'example-four',
        component: ExampleFourComponent,
    }
];
