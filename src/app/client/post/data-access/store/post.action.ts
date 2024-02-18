import {ActionType, createAction, props} from "@ngrx/store";
import {Post} from "@client/post/data-access/models/post";

export const GET_POSTS = '@Post/GetAll'
export const GET_POSTS_SUCCESS = '@Post/GetAllSuccess'
export const GET_POSTS_FAILED = '@Post/GetAllFailed'
export const GET_POST = '@Post/Get'
export const CREATE_POST = '@Post/Create'
export const UPDATE_POST = '@Post/Update'
export const GET_POST_SUCCESS = '@Post/GetSuccess'
export const GET_POST_FAILED = '@Post/GetFailed'

export const getPosts = createAction(GET_POSTS)
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS, props<{ posts: Post[] }>())
export const getPostsFailed = createAction(GET_POSTS_FAILED, props<{ error: string }>())
export const getPost = createAction(GET_POST, props<{ id: number }>())
export const getPostSuccess = createAction(GET_POST_SUCCESS, props<{ post: Post }>())
export const getPostFailed = createAction(GET_POST_FAILED, props<{ error: string }>())
export const createPost = createAction(CREATE_POST, props<{ post: Post }>())
export const updatePost = createAction(CREATE_POST, props<{ post: Partial<Post> }>())

// export type PostAction = ActionType<typeof getPosts>
//     | ActionType<typeof getPostsSuccess>
//     | ActionType<typeof getPostsFailed>