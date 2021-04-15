import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieturaCilvekuSarakstsComponent } from './pietura-cilveku-saraksts.component';

describe('PieturaCilvekuSarakstsComponent', () => {
  let component: PieturaCilvekuSarakstsComponent;
  let fixture: ComponentFixture<PieturaCilvekuSarakstsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieturaCilvekuSarakstsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieturaCilvekuSarakstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
