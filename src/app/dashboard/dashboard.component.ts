import { Component, OnInit } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  people: Person[] = [
    {name: 'Olga', jobPosition: 'Full Stack Developer', surname: 'A'},
    {name: 'Janis', address: 'Bay Area, San Francisco, CA', surname: 'B'},
  ];


  jaieliekCilveksAutobusa(person: Person): void {
    alert('NJu, dabu tagad mani autobusā');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
