import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUserdetailsComponent } from './child-userdetails.component';

describe('ChildUserdetailsComponent', () => {
  let component: ChildUserdetailsComponent;
  let fixture: ComponentFixture<ChildUserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildUserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
