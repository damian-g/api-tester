import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ListPage } from './pages/list/list.page';

import { ApiService } from './services/api.service';

import { SubStrPipe } from './pipes/substr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPage,
    SubStrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
