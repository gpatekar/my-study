import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared-module';
// hero components
import {
  AboutUsComponent,
  DiscussionComponent,
  ArticleComponent,
  HomeComponent,
  AccountComponent,
  CreateComponent,
  SlidersComponent
   } from '.';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutUsComponent,
    DiscussionComponent,
    ArticleComponent,
    HomeComponent,
    AccountComponent,
    CreateComponent,
    SlidersComponent
  ],
})
export class PagesModule { }
