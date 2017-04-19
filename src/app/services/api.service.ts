import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    URLSearchParams,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../interfaces/post.interface';
import { Comment } from '../interfaces/comment.interface';
import { User } from '../interfaces/user.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ApiService {
    private baseUrl = 'http://jsonplaceholder.typicode.com/';

    constructor(
        private http: Http
    ) { }

    getPosts(page: number, limit: number, filter?: string): Observable<{ posts: Post[], total: number }> {
        let params: URLSearchParams = new URLSearchParams();

        params.set('_page', page.toString());
        params.set('_limit', limit.toString());
        params.set('title_like', filter);

        return this.http.get(this.baseUrl + 'posts', { search: params })
            .map((res: Response) => {
                const headers: Headers = res.headers;
                const total = parseInt(headers.get('x-total-count'));

                return { posts: res.json(), total: total };
            });
    }

    getPost(id: number): Observable<Post> {
        return this.http.get(this.baseUrl + 'posts/' + id)
            .map((res: Response) => res.json());
    }

    getComments(id: number): Observable<Comment[]> {
        return this.http.get(this.baseUrl + 'posts/' + id + '/comments')
            .map((res: Response) => res.json());
    }

    getUser(id: number): Observable<User> {
        return this.getPost(id).switchMap(res => {
            return this.http.get(this.baseUrl + 'users/' + res.userId)
                .map((res: Response) => res.json());
        });
    }

}