import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EndpointPostService {
    private readonly apiUrl = `${environment.apiUrl}/posts`

    constructor() {
    }

    posts(): string {
        return `${this.apiUrl}`
    }

    post(id: number) {
        return `${this.apiUrl}/${id}`
    }
}
