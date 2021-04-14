import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() iekapaEdgars = new EventEmitter();
  @Output() atnacaDavis = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.name === 'Edgars') {
      this.iekapaEdgars.emit('Oi, te ir edgars!');
    }
    if (this.name === 'Davis') {
      this.atnacaDavis.emit('Oi, te ir davis!');
    }
  }

}
