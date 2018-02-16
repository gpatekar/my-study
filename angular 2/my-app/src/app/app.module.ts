import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './hero/hero.module';
import { CrisisModule } from './crisis-center/crisis.module';

// Pages
import { PagesModule } from './pages/pages.module';

// plugins
import { ScrollSpyModule } from 'ng2-scrollspy'; //https://www.npmjs.com/package/ng2-scrollspy
import { ScrollSpyAffixDirective } from 'ng2-scrollspy/dist/plugin/affix.directive';

// directives
import { ScrollFixDirective } from './directives';

// table plugin
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    HeroModule,
   // NgxDatatableModule,
    ScrollSpyModule.forRoot(),
    CrisisModule
  ],
  declarations: [
    AppComponent,
    ScrollSpyAffixDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
