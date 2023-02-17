import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSimpleEventsListComponent } from './customer-simple-events-list.component';

describe('CustomerSimpleEventsListComponent', () => {
  let component: CustomerSimpleEventsListComponent;
  let fixture: ComponentFixture<CustomerSimpleEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSimpleEventsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSimpleEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
