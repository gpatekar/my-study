import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import 'assets/js/wowslider.js';
import initWowSlider from 'assets/js/init-wowslider.js';

@Component({
  selector: 'app-wow-slider',
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
