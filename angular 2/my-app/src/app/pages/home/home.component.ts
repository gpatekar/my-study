import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';
// import { ScrollSpyAffixDirective, ScrollSpyAffixOptions } from 'ng2-scrollspy/dist/plugin/affix.directive';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  // ngAfterViewInit() {
  //       this.scrollSpyService.getObservable('window').subscribe((e: any) => {
  //           console.log('ScrollSpy::window: ', e);
  //       });
  //   }


  ngOnInit() {
  }

}
