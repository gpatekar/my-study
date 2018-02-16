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
  SlidersComponent,
  PlaygroundComponent
   } from '.';
import { StickyComponent } from './sticky/sticky.component';

// directives
import { ScrollFixDirective } from '../directives';

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
    SlidersComponent,
    PlaygroundComponent,
    StickyComponent,
    ScrollFixDirective
  ],
})
export class PagesModule { }
