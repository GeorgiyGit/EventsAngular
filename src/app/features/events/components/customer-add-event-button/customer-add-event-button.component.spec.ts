import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddEventButtonComponent } from './customer-add-event-button.component';

describe('CustomerAddEventButtonComponent', () => {
  let component: CustomerAddEventButtonComponent;
  let fixture: ComponentFixture<CustomerAddEventButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddEventButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddEventButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
