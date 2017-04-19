import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'list-page',
  templateUrl: './list.page.html'
})
export class ListPage {
  private posts: Post[];
  private totalItems: number;
  private itemsPerPage: number = 10;

  constructor(
    private api: ApiService
  ) {
    api.getPosts(1, this.itemsPerPage).subscribe(res => {
      this.posts = res.posts;
      this.totalItems = res.total;
    });
  }

  pageChanged(event: { page: number, itemsPerPage: number }) {
    this.api.getPosts(event.page, this.itemsPerPage).subscribe(res => this.posts = res.posts);
  }
}
