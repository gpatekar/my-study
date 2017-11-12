import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

// hero components
import {
  WowSliderComponent,
  Carousel3dComponent,
  AccordionComponent,
  GoogleMapComponent,
  GeoMapComponent,
  GoogleChartMapComponent} from '.';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot(),
    AgmSnazzyInfoWindowModule,
    Ng2GoogleChartsModule,
  ],
  declarations: [
    WowSliderComponent,
    Carousel3dComponent,
    AccordionComponent,
    GoogleMapComponent,
    GeoMapComponent,
    GoogleChartMapComponent
  ],
  exports: [
    WowSliderComponent,
    Carousel3dComponent,
    AccordionComponent,
    GoogleMapComponent,
    GeoMapComponent,
    GoogleChartMapComponent
  ]
})
export class SharedModule { }
