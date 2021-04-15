import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieturaComponent } from './pietura.component';

describe('PieturaComponent', () => {
  let component: PieturaComponent;
  let fixture: ComponentFixture<PieturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
