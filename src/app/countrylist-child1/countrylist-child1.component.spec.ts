import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylistChild1Component } from './countrylist-child1.component';

describe('CountrylistChild1Component', () => {
  let component: CountrylistChild1Component;
  let fixture: ComponentFixture<CountrylistChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrylistChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylistChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
