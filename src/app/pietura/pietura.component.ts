import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-pietura',
  templateUrl: './pietura.component.html',
  styleUrls: ['./pietura.component.css']
})
export class PieturaComponent implements OnInit {
  @Input() peopleInPietura = [];
  @Output() cilveksGribIekaptAutobusa = new EventEmitter();
  pieturasIetilpiba = 7;

  constructor() {
  }

  ngOnInit(): void {
  }

  pienacaCilveks(keyboardEvent: any): void {
    if (this.peopleInPietura.length < this.pieturasIetilpiba) {
      this.peopleInPietura.push({name: keyboardEvent.target.value});
      keyboardEvent.target.value = '';
    }
  }

  aizgajaProm(personaKasGribAiziet: Person): void {
    this.peopleInPietura = this.peopleInPietura.filter(
      personaPietura => personaPietura !== personaKasGribAiziet
    );
  }

}
