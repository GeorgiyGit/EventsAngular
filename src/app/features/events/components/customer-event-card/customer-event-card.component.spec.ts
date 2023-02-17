import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEventCardComponent } from './customer-event-card.component';

describe('CustomerEventCardComponent', () => {
  let component: CustomerEventCardComponent;
  let fixture: ComponentFixture<CustomerEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
