import { Component, OnInit, ElementRef, NgZone } from '@angular/core'; 
import jQuery from "jQuery";
import initWowSlider  from 'assets/js/init-wowslider.js';   

@Component({
  selector: 'app-wow-slider',
  //template: `<ng-content></ng-content>`,
   templateUrl: './wow-slider.component.html',
  styleUrls: ['./wow-slider.component.css']
})
export class WowSliderComponent implements OnInit {

  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }
   

  ngAfterViewInit() { 
     this.zone.runOutsideAngular(() => {    
      initWowSlider(this.el.nativeElement);
    });
    
  }

}
