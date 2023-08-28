import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcalcComponent } from './ucalc.component';

describe('UcalcComponent', () => {
  let component: UcalcComponent;
  let fixture: ComponentFixture<UcalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcalcComponent]
    });
    fixture = TestBed.createComponent(UcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
