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


}
