import {Routes} from '@angular/router';
import {postRoutes} from "@client/post/post.routes";

export const routes: Routes = [
    {path: '', loadChildren: () => import('@client/home/home.routes').then(feature => feature.homeRoutes)},
    {path: '', loadChildren: () => import('@client/post/post.routes').then(feature => feature.postRoutes)},
    {
        path: '**', // route every undefined route to the root of this feature
        redirectTo: ''
    }
];
