import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieturaStatistikaComponent } from './pietura-statistika.component';

describe('PieturaStatistikaComponent', () => {
  let component: PieturaStatistikaComponent;
  let fixture: ComponentFixture<PieturaStatistikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieturaStatistikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieturaStatistikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
