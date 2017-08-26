import { Component, OnInit } from '@angular/core';

// export class Hero {
//   id: number;
//   name: string;
// } 

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.css']
})
 
export class Sib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lists  = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  searchTopic(item){
    console.log(item);
  }

}
