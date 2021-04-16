import { Component, OnInit } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cilveksDurvis: Person = null;
  nevarIzkaptJoPieturaPilna = false;
  pieturaIrPilna = false;

  jaieliekCilveksAutobusa(person: Person): void {
    this.cilveksDurvis = person;
  }

  jaieliekCilveksPietura(person: Person): void {
    this.cilveksDurvis = person;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
