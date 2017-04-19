import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

import { Post } from '../../interfaces/post.interface';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'list-page',
  templateUrl: './list.page.html'
})
export class ListPage {
  private posts: Post[];
  private totalItems: number;
  private itemsPerPage: number = 10;

  private filter: string;

  @ViewChild('title') titleInput: ElementRef;

  constructor(
    private api: ApiService
  ) {
    this.getPosts(1, this.itemsPerPage);
  }

  pageChanged(event: { page: number, itemsPerPage: number }) {
    this.getPosts(event.page, this.itemsPerPage);
  }

  getPosts(page: number, limit: number): void {
    this.api.getPosts(page, limit, this.filter).subscribe(res => {
      this.posts = res.posts;
      this.totalItems = res.total;
    });
  }

  ngAfterViewInit() {
    Observable.fromEvent(this.titleInput.nativeElement, 'keyup')
      .debounceTime(300)
      .map(val => val['target'].value)
      .map(val => (val && val.match(/[\w]/g).length) >= 3 ? val : null)
      .subscribe(val => {
        this.filter = val;
        this.getPosts(1, this.itemsPerPage);
      });
  }
}
