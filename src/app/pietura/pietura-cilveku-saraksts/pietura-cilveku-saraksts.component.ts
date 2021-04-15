import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../app.component';

@Component({
  selector: 'app-pietura-cilveku-saraksts',
  templateUrl: './pietura-cilveku-saraksts.component.html',
  styleUrls: ['./pietura-cilveku-saraksts.component.css']
})
export class PieturaCilvekuSarakstsComponent implements OnInit {
  @Input() peopleInPietura: Person[] = [];
  @Output() cilveksGribIetProm = new EventEmitter();
  @Output() cilveksGribIekapt = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
