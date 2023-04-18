import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEventDetailsComponent } from './customer-event-details.component';

describe('CustomerEventDetailsComponent', () => {
  let component: CustomerEventDetailsComponent;
  let fixture: ComponentFixture<CustomerEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEventDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
