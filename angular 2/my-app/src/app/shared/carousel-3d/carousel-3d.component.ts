import { Component, OnInit, ElementRef, NgZone  } from '@angular/core';

import 'assets/js/3d-carousel/FWDPage.js';
import 'assets/js/3d-carousel/FWDSlidersMenu.js';
import 'assets/js/3d-carousel/FWDSlidersMenuButton.js';
import 'assets/js/3d-carousel/FWDSlider.js';
import 'assets/js/3d-carousel/FWDFloatSlider.js';
import 'assets/js/3d-carousel/FWDPageMenuButton.js';
import 'assets/js/3d-carousel/FWDPageThumbs.js';
import 'assets/js/3d-carousel/FWDPageThumb.js';
import 'assets/js/3d-carousel/FWDPageSimpleButton.js';
import 'assets/js/3d-carousel/FWDOnOffButton.js';
import 'assets/js/3d-carousel/FWDPageComboBox.js';
import 'assets/js/3d-carousel/FWDResetButton.js';


import 'assets/js/3d-carousel/FWDUltimate3DCarousel.js';
import carousel3d from 'assets/js/3d-carousel/init-3dcarousel.js';

@Component({
  selector: 'app-carousel-3d',
  templateUrl: './carousel-3d.component.html',
  styleUrls: ['./carousel-3d.component.css']
})
export class Carousel3dComponent implements OnInit {

  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      this.zone.runOutsideAngular(() => {
      carousel3d(this.el.nativeElement);
    });
  }

}