import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddPlaceComponent } from './customer-add-place.component';

describe('CustomerAddPlaceComponent', () => {
  let component: CustomerAddPlaceComponent;
  let fixture: ComponentFixture<CustomerAddPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
