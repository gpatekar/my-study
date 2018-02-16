// https://github.com/gmazzamuto/ng2-google-charts

import { Component, OnInit, ElementRef, NgZone, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent implements OnInit {

public geoChartData: any =  {
    chartType: 'GeoChart',
    dataTable: [
      ['Lat', 'Lng', 'Value'],
    [37.8662, -84.5795, 58],
    [38.1703, -90.7185, 28],
    [39.9688, -82.43, 47]
    ],
    options: {
      region: 'US',
      displayMode: 'markers',
      resolution: 'provinces',
      backgroundColor: '#ffffff',
      datalessRegionColor: '#F7F6F2',
      strokeColor: '#ffffff',
      defaultColor: '#ffffff',
      backgroundColorStroke: '#ffffff',
      colorAxis: {colors: ['#ffffff', '#F0581C']}
    }
  };

  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }

}
