import { Component, OnInit } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cilvkeasKasVelasiekaptTranportLidzekli: Person = null;
  nevarIzkaptJoPieturaPilna = false;
  pieturaIrPilna = false;

  jaieliekCilveksAutobusa(person: Person): void {
    this.cilvkeasKasVelasiekaptTranportLidzekli = person;
  }

  jaieliekCilveksPietura(person: Person): void {
    this.cilvkeasKasVelasiekaptTranportLidzekli = person;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
