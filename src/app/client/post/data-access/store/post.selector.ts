import {PostState} from "@client/post/data-access/store/post.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const featurePost = createFeatureSelector<PostState>('feature_post');

export const postsSelector = createSelector(featurePost, state => state.items);
export const currentPostSelector = createSelector(featurePost, state => state.currentItem);
export const postStatusSelector = createSelector(featurePost, state => state.status);
// export const postsSelector = (state: PostState) => state.items;
// export const currentPostSelector = (state: PostState) => state.currentItem;
// export const postStatusSelector = (state: PostState) => state.status;


