import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { ArticleComponent } from './pages/article/article.component';

import { AppRoutingModule } from './app-routing.module';
import { Sib1Component } from './data-transfer/sib1/sib1.component';
import { Sib2Component } from './data-transfer/sib2/sib2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    DiscussionComponent,
    ArticleComponent,
    Sib1Component,
    Sib2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
