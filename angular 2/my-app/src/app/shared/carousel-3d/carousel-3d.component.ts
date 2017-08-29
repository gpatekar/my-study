import { Component, OnInit, ElementRef, NgZone  } from '@angular/core';
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
