import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-autobus',
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.css']
})
export class AutobusComponent implements OnInit, OnChanges, AfterViewInit {
  brivasVietas = 0;
  @Input() jaunsPasazieris: Person = null;
  @Output() cilveksGribIzkaptNoAutobusa = new EventEmitter<Person>();

  get aiznemtasVietas(): number {
    return this.kopejaIetilpiba - this.brivasVietas;
  }

  kopejaIetilpiba = 16;

  peopleInAutobusa: Person[] = [
    {name: 'Edgars'}
  ];

  edgarsIrAtnacis = false;

  constructor() {
    console.log('😋 Autobusa JS construtor');

    this.brivasVietas = this.kopejaIetilpiba;
    // this.pieturasCilvekuSkaits = this.pieturasIetilpiba;
  }

  ngOnInit(): void {
    console.log('😋 Autobuss ir inicializēts angular komponents ar templatie');
  }

  ngAfterViewInit(): void {
    console.log('😋 Autobuss ir katavs zīmēt angular komponents ar templatie');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('😋 Autobusam kaut kas notiek ar inputu', changes.jaunsPasazieris.currentValue)
    if (changes.jaunsPasazieris && changes.jaunsPasazieris.currentValue) {
      this.peopleInAutobusa.push(changes.jaunsPasazieris.currentValue);
    }
  }

  iekapa(): void {
    this.brivasVietas--;
  }

  izkapa(): void {
    this.brivasVietas++;
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
