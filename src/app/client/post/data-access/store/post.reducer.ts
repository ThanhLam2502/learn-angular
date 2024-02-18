import {PostState} from "@client/post/data-access/store/post.state";
import {createReducer, on} from "@ngrx/store";
import {
    createPost,
    getPost,
    getPostFailed,
    getPosts,
    getPostsFailed,
    getPostsSuccess,
    getPostSuccess,
    updatePost
} from "@client/post/data-access/store/post.action";

const initialState: PostState = {
    items: [],
    currentItem: null,
    status: 'idle',
    error: ''
}

export const postReducer = createReducer(
    initialState,
    on(getPosts, (state) => ({...state, status: <const>'loading'})),
    on(getPostsSuccess, (state, action) => ({...state, status: <const>'idle', items: action.posts, error: ''})),
    on(getPostsFailed, (state, action) => ({...state, status: <const>'error', items: [], error: action.error})),

    on(getPost, (state) => ({...state, status: <const>'loading'})),
    on(getPostSuccess, (state, action) => ({...state, status: <const>'idle', currentItem: action.post})),
    on(getPostFailed, (state, action) => ({...state, status: <const>'error', currentItem: null, error: action.error})),

    on(createPost, (state, action) => ({...state, status: <const>'idle', currentItem: action.post, error: ''})),
    on(updatePost, (state, action) => ({...state, status: <const>'idle', currentItem: null, error: ''}))
)