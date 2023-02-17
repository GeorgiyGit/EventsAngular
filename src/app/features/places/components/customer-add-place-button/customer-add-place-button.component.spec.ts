import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddPlaceButtonComponent } from './customer-add-place-button.component';

describe('CustomerAddPlaceButtonComponent', () => {
  let component: CustomerAddPlaceButtonComponent;
  let fixture: ComponentFixture<CustomerAddPlaceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddPlaceButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddPlaceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
