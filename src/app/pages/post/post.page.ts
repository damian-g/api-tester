import { Component, } from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';

import { ApiService } from '../../services/api.service';

import { Post } from '../../interfaces/post.interface';
import { Comment } from '../../interfaces/comment.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'post-page',
  templateUrl: './post.page.html'
})
export class PostPage {
  private post: Post;
  private comments: Comment[];
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        const id = params['id'];

        this.api.getPost(id).subscribe(res => this.post = res);
        this.api.getComments(id).subscribe(res => this.comments = res);
        this.api.getUser(id).subscribe(res => this.user = res);
      });
  }
}
