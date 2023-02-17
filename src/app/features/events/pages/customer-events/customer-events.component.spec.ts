import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEventsComponent } from './customer-events.component';

describe('CustomerEventsComponent', () => {
  let component: CustomerEventsComponent;
  let fixture: ComponentFixture<CustomerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
