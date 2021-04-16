import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-pietura',
  templateUrl: './pietura.component.html',
  styleUrls: ['./pietura.component.css']
})
export class PieturaComponent implements OnInit {
  peopleInPietura: Person[] = [
    {name: 'Olga', jobPosition: 'Full Stack Developer', surname: 'A'},
    {name: 'Janis', address: 'Bay Area, San Francisco, CA', surname: 'B'},
  ];

  @Output() cilveksGribIekaptAutobusa = new EventEmitter();
  @Output() pieturaPilna = new EventEmitter<boolean>();
  pieturasIetilpiba = 7;

  constructor() {
  }

  ngOnInit(): void {
  }

  pienacaCilveks(keyboardEvent: any): void {
    if (this.peopleInPietura.length < this.pieturasIetilpiba) {
      this.ieliktCilvekuPietura({name: keyboardEvent.target.value});
      keyboardEvent.target.value = '';
    }
  }

  ieliktCilvekuPietura(person: Person): void {
    this.peopleInPietura.push(person);
    this.pieturaPilna.emit(this.peopleInPietura.length >= this.pieturasIetilpiba);
    this.parbauditVaiPieturaPilna();
  }

  aizgajaProm(personaKasGribAiziet: Person): void {
    this.peopleInPietura = this.peopleInPietura.filter(
      personaPietura => personaPietura !== personaKasGribAiziet
    );
    this.parbauditVaiPieturaPilna();
  }

  parbauditVaiPieturaPilna(): void {
    this.pieturaPilna.emit(this.peopleInPietura.length >= this.pieturasIetilpiba);
  }

  gribIekapt(cilveks: Person): void {
    this.cilveksGribIekaptAutobusa.emit(cilveks);
    this.peopleInPietura = this.peopleInPietura.filter(
      personaPietura => personaPietura !== cilveks
    );
  }
}
