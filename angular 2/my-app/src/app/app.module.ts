import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ScrollSpyModule } from 'ng2-scrollspy'; //https://www.npmjs.com/package/ng2-scrollspy
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix.directive';

import {
  HomeComponent,
  AboutUsComponent,
  DiscussionComponent,
  ArticleComponent,
  SlidersComponent,
  AccountComponent,
  CreateComponent
 } from './pages';




import { WowSliderComponent } from './shared/wow-slider/wow-slider.component';
import { Carousel3dComponent } from './shared/carousel-3d/carousel-3d.component';
import { AccordionComponent } from './shared/accordion/accordion.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    DiscussionComponent,
    ArticleComponent,
    HomeComponent,
    SlidersComponent,
    WowSliderComponent,
    Carousel3dComponent,
    AccountComponent,
    CreateComponent,
    AccordionComponent,
    ScrollSpyAffixDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
