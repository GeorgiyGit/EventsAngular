import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlaceDetailsComponent } from './customer-place-details.component';

describe('CustomerPlaceDetailsComponent', () => {
  let component: CustomerPlaceDetailsComponent;
  let fixture: ComponentFixture<CustomerPlaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPlaceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
