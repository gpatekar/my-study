import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// hero components
import {
  WowSliderComponent,
  Carousel3dComponent,
  AccordionComponent} from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WowSliderComponent,
    Carousel3dComponent,
    AccordionComponent
  ],
  exports: [
    WowSliderComponent,
    Carousel3dComponent,
    AccordionComponent
  ]
})
export class SharedModule { }
