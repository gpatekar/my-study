import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CrisisRoutingModule } from './crisis-center-routing.module';
import { Crisis } from './crisis.service';


// hero components
import {
  CrisisCenterComponent,
  CrisisListComponent,
  CrisisDetailsComponent } from '.';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailsComponent
  ],
  exports: [
    RouterModule
  ],
  // providers: [ Crisis ]
})
export class CrisisModule { }
