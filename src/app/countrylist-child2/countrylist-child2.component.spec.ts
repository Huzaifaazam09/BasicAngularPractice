import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylistChild2Component } from './countrylist-child2.component';

describe('CountrylistChild2Component', () => {
  let component: CountrylistChild2Component;
  let fixture: ComponentFixture<CountrylistChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrylistChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylistChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
