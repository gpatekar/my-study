import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HeroService} from './hero-service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// hero components
import {
  HeroComponent,
  HeroListComponent,
  HeroDetailComponent } from '.';

  const heroRoutes: Routes = [
    {
      path: 'hero/:id',
      component: HeroDetailComponent
    },
    {
      path: 'heroes',
      component: HeroListComponent,
      data: { title: 'Heroes List' }
    },
    { path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [ HeroService ]
})
export class HeroModule { }
