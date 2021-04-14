import { Component } from '@angular/core';

export interface Person {
  name: string;
  jobPosition?: string;
  address?: string;
  surname?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people: Person[] = [
    {name: 'Olga', jobPosition: 'Full Stack Developer', surname: 'A'},
    {name: 'Janis', address:'Bay Area, San Francisco, CA', surname: 'B'},
  ];

  title = 'edibox';
}
