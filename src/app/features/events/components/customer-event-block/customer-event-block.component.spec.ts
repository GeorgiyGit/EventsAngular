import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEventBlockComponent } from './customer-event-block.component';

describe('CustomerEventBlockComponent', () => {
  let component: CustomerEventBlockComponent;
  let fixture: ComponentFixture<CustomerEventBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEventBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEventBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
