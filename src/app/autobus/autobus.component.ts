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


  peopleInAutobusa: Person[] = [];


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
    return true;
    // return this.peopleInPietura.length >= this.pieturasIetilpiba || this.aiznemtasVietas === 0;
  }

  nevarIekapt(): boolean | null {
    return true;
    // return this.peopleInPietura.length === 0 || this.brivasVietas === 0;
  }

  sayMyName(person: Person): void {
    alert(`Your name is ${person.name}`);
  }



  iekapaCilveks(personKasGribIekapt: Person): void {
    this.iekapa();
    this.peopleInAutobusa.push(personKasGribIekapt);
    // this.peopleInPietura = this.peopleInPietura.filter(
    //   personaPietura => personaPietura !== personKasGribIekapt
    // );
  }


  izkapaCilveks(personKasGribIzkapt: Person): void {
    this.izkapa();
    // this.peopleInPietura.push(personKasGribIzkapt);
    this.peopleInAutobusa = this.peopleInAutobusa.filter(
      personaPietura => personaPietura !== personKasGribIzkapt
    );
  }
}
