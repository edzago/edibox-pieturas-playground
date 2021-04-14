import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-name',
  template: `
    <h4>{{name}} {{surname}}</h4>
  `,
  styles: []
})
export class PersonNameComponent implements OnInit {
  @Input() name = '';
  @Input() surname = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
