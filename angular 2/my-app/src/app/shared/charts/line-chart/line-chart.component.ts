import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

import { Chart } from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterContentInit {

@ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.ChartObject;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // const options: Highcharts.Options = {
    //   chart: {
    //     type: 'bar'
    //   },
    //   title: {
    //     text: 'Fruit Consumption'
    //   },
    //   xAxis: {
    //     categories: ['Apples', 'Bananas', 'Oranges']
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Fruit eaten'
    //     }
    //   },
    //   series: [{
    //     name: 'Jane',
    //     data: [1, 0, 4]
    //   }, {
    //     name: 'John',
    //     data: [5, 7, 3]
    //   }]
    // };

    // this.chart = chart(this.chartTarget.nativeElement, options);
  }

}
