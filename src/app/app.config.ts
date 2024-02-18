import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from '@app/app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        provideAnimations(),
        provideStore(),
        provideEffects(),
        // provideState({name: 'feature_post', reducer: postReducer}),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode()
        }),

    ]
};
