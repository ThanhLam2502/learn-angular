import {Routes} from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('@client/home/feature/home.routes').then(feature => feature.homeRoutes)},
    {
        path: '**', // route every undefined route to the root of this feature
        redirectTo: ''
    }
];
