import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// hero components
import {
  HeroComponent,
  HeroListComponent,
  HeroDetailComponent } from '.';

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
