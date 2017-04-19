import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../interfaces/post.interface';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private baseUrl = 'http://jsonplaceholder.typicode.com/';

    constructor(
        private http: Http
    ) { }

    getPosts(): Observable<Post[]> {
        return this.http.get(this.baseUrl + 'posts')
            .map(res => res.json());
    }

}