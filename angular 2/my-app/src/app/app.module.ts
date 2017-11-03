import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// Shared/Global components
import { AppComponent } from './app.component';

// page module
import { PagesModule } from './pages/pages.module';
// hero module
import { HeroModule } from './hero/hero.module';

// Route
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    HeroModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
