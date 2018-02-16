import { Directive, ElementRef, HostListener, NgZone, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollFix]'
})
export class ScrollFixDirective {

  constructor(el: ElementRef, private zone: NgZone) {
     el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('window:scroll', ['$event']) onScroll($event) {
    this.addAffix();
  }

  ngAfterViewInit() {
      this.zone.runOutsideAngular(() => {
       console.log('yo');
    });
  }

  private addAffix() {
    
  }

}
