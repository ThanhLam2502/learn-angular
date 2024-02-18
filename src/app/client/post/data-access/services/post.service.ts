import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "@client/post/data-access/models/post";
import {EndpointPostService} from "@client/post/data-access/endpoints/endpoint-post.service";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(
        private httpClient: HttpClient,
        private endpointPost: EndpointPostService
    ) {
    }

    getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.endpointPost.posts())
    }

    getPost(id: number): Observable<Post> {
        return this.httpClient.get<Post>(this.endpointPost.post(id))
    }

    createPost(post: Post) {
        return this.httpClient.post(this.endpointPost.posts(), post)
    }

    updatePost(post: Post) {
        return this.httpClient.patch(this.endpointPost.posts(), post)
    }


}
