import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { PagesModule } from './pages/pages.module';

// plugins
import { ScrollSpyModule } from 'ng2-scrollspy'; //https://www.npmjs.com/package/ng2-scrollspy
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix.directive'; 

// table plugin
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyAffixDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
   // NgxDatatableModule,
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
