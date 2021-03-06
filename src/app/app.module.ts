import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';

import { ListPage } from './pages/list/list.page';
import { PostPage } from './pages/post/post.page';
import { FormPage } from './pages/form/form.page';

import { ApiService } from './services/api.service';

import { SubStrPipe } from './pipes/substr.pipe';

const appRoutes: Routes = [
  { path: '', component: ListPage },
  { path: 'post/:id', component: PostPage },
  { path: 'form', component: FormPage },
];

@NgModule({
  declarations: [
    AppComponent,
    ListPage,
    PostPage,
    FormPage,
    SubStrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
