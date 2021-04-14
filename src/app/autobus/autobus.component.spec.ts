import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusComponent } from './autobus.component';

describe('AutobusComponent', () => {
  let component: AutobusComponent;
  let fixture: ComponentFixture<AutobusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutobusComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('nevar iekapt ja autobus ir pilns', () => {
    component.brivasVietas = 0;
    expect(component.nevarIekapt()).toBe(true);
  });
  it('var iekapt ja autobus ir tukš', () => {
    component.brivasVietas = 16;
    component.pieturasCilvekuSkaits = 0;
    expect(component.nevarIekapt()).toBe(false);
  });

  it('nevar izkapt ja autobus ir tukš', () => {
    component.aiznemtasVietas = 0;
    expect(component.nevarIzkapt()).toBe(true);
  });

  it('nevar izkapt ja pietura ir pilna', () => {
    component.pieturasCilvekuSkaits = 7;
    expect(component.nevarIzkapt()).toBe(true);
  });

  it('nevar iekāpt ja pieturā nav cilvēku', () => {
    component.brivasVietas = 16;
    component.pieturasCilvekuSkaits = 0;
    expect(component.nevarIekapt()).toBe(true);
  });

});
