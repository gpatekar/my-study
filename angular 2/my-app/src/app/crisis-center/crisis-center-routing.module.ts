import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CrisisCenterComponent,
  CrisisListComponent,
  CrisisDetailsComponent } from '.';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailsComponent
          },
          {
            path: '',
            component: CrisisCenterComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule { }
