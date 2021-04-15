import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pietura-statistika',
  templateUrl: './pietura-statistika.component.html',
  styleUrls: ['./pietura-statistika.component.css']
})
export class PieturaStatistikaComponent  {
  @Input() pieturasIetilpiba = 0;
  @Input() peopleInPietura = 0;
}
