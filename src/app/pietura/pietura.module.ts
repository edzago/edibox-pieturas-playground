import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieturaComponent } from './pietura.component';
import { PieturaStatistikaComponent } from './pietura-statistika/pietura-statistika.component';
import { PieturaCilvekuSarakstsComponent } from './pietura-cilveku-saraksts/pietura-cilveku-saraksts.component';

@NgModule({
  declarations: [
    PieturaComponent,
    PieturaStatistikaComponent,
    PieturaCilvekuSarakstsComponent
  ],
  exports: [
    PieturaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PieturaModule {
}
