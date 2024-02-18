import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, of} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PostService} from "@client/post/data-access/services/post.service";
import {getPosts, getPostsFailed, getPostsSuccess} from "@client/post/data-access/store/post.action";

@Injectable()
export class PostEffects {
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(getPosts),
        mergeMap(() => this.postService.getPosts()),
        map(posts => getPostsSuccess({posts: posts})),
        catchError(error => of(getPostsFailed({error})))
    ));

    constructor(
        private actions$: Actions,
        private postService: PostService,
    ) {

    }
}