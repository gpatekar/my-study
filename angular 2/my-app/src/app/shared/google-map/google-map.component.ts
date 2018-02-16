// https://angular-maps.com/guides/getting-started/#setting-up-angular-google-maps

import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


interface Marker {
  lat: number;
  lng: any;
  label?: string;
  draggable: boolean;
  state: string;
  count: number;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
// google maps zoom level
  zoom: any = 4;
  // initial center position for the map
  lat: any = 37.0902;
  lng: any = -95.7129;

  markers: Marker[] = [
  {
    lat: 37.8662,
    lng: -84.5795,
    label: 'Kentucky',
    draggable: false,
    state: 'Kentucky',
    count: 10,
  },
  {
    lat: 38.1703,
    lng: -90.7185,
    label: 'Missouri',
    draggable: false,
    state: 'Missouri',
    count: 50,
  },
  {
    lat: 39.9688,
    lng: -82.43,
    label: 'Ohio',
    draggable: false,
    state: 'Ohio',
    count: 1000,
  }
  ];

  constructor() { }

  ngOnInit() {
  }
}
