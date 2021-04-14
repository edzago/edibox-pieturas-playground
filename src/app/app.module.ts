import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonNameComponent } from './person-name/person-name.component';
import { AutobusComponent } from './autobus/autobus.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonNameComponent,
    AutobusComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
