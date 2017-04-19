import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    URLSearchParams,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../interfaces/post.interface';

import 'rxjs/add/operator/map';

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

}