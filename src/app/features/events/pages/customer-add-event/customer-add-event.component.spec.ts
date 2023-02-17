import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddEventComponent } from './customer-add-event.component';

describe('CustomerAddEventComponent', () => {
  let component: CustomerAddEventComponent;
  let fixture: ComponentFixture<CustomerAddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
