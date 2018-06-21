import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, DashboardComponent, ApplyLeaveComponent } from './../pages/';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'apply-leaves', component: ApplyLeaveComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
     RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
  ,
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
