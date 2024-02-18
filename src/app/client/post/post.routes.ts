import {Routes} from '@angular/router';
import {postReducer} from "@client/post/data-access/store/post.reducer";
import {provideState} from '@ngrx/store';
import {PostComponent} from "@client/post/feature/post/post.component";
import {provideEffects} from "@ngrx/effects";
import {PostEffects} from "@client/post/data-access/store/post.effects";

export const postRoutes: Routes = [
    {
        path: 'post', // route every undefined route to the root of this feature
        component: PostComponent,
        providers: [
            provideState({name: 'feature_post', reducer: postReducer}),
            provideEffects([PostEffects])
        ]
    }
];