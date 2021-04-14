import { Component, OnInit } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-autobus',
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.css']
})
export class AutobusComponent implements OnInit {
  brivasVietas = 0;
  aiznemtasVietas = 0;
  kopejaIetilpiba = 16;
  pieturasIetilpiba = 7;

  peopleInPietura: Person[] = [];
  edgarsIrAtnacis = false;

  constructor() {
    this.brivasVietas = this.kopejaIetilpiba;
    // this.pieturasCilvekuSkaits = this.pieturasIetilpiba;
  }

  ngOnInit(): void {
  }

  iekapa(): void {
    this.aiznemtasVietas++;
    this.brivasVietas--;
  }

  izkapa(): void {
    this.aiznemtasVietas--;
    this.brivasVietas++;
  }

  nevarIzkapt(): boolean | null {
    return this.aiznemtasVietas === 0;
  }

  nevarIekapt(): boolean | null {
    return this.peopleInPietura.length === 0 || this.brivasVietas === 0;
  }

  pienacaCilveks(keyboardEvent: any): void {
    this.peopleInPietura.push({name: keyboardEvent.target.value});
    console.log(this.peopleInPietura);
  }

  sayMyName(person: Person): void {
    alert(`Your name is ${person.name}`);
  }
}
