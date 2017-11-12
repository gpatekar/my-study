import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// hero components
import {
  HeroComponent,
  HeroListComponent,
  HeroDetailComponent } from '.';

  const appRoutes: Routes = [
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
    CommonModule
  ],
  declarations: [
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent
  ]
})
export class HeroModule { }
