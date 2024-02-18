import {Post} from "@client/post/data-access/models/post";

export interface PostState {
    items: Post[]
    currentItem: Post | null
    status: 'idle' | 'loading' | 'loaded' | 'error'
    error: string
}