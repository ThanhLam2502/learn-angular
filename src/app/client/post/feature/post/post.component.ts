import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getPosts} from "@client/post/data-access/store/post.action";

@Component({
    selector: 'app-post',
    standalone: true,
    imports: [],
    templateUrl: './post.component.html',
    styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(getPosts());
    }

}
