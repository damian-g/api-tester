import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'list-page',
  templateUrl: './list.page.html'
})
export class ListPage {
  private posts: Post[];

  constructor(
    private api: ApiService
  ) {
    api.getPosts().subscribe(res => this.posts = res);
  }
}
