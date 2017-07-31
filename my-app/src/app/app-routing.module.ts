import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import App components
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ArticleComponent } from './pages/article/article.component';



const appRoutes : Routes = [
  { path: '', component: AboutUsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'article', component: ArticleComponent}
];

@NgModule({
  imports: [ 
     RouterModule.forRoot(appRoutes)
  ],
  exports:
  [
      RouterModule
  ]
})

export class AppRoutingModule { }
