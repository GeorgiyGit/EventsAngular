import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlaceCardComponent } from './customer-place-card.component';

describe('CustomerPlaceCardComponent', () => {
  let component: CustomerPlaceCardComponent;
  let fixture: ComponentFixture<CustomerPlaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPlaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
