import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonNameComponent } from './person-name/person-name.component';
import { AutobusComponent } from './autobus/autobus.component';
import { PieturaModule } from './pietura/pietura.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonNameComponent,
    AutobusComponent,
    HomeComponent,
    DashboardComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    PieturaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
