import {Routes} from '@angular/router';
import {HomeComponent} from "@client/home/feature/home/home.component";

export const homeRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
];