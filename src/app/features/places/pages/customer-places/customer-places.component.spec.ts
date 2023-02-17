import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlacesComponent } from './customer-places.component';

describe('CustomerPlacesComponent', () => {
  let component: CustomerPlacesComponent;
  let fixture: ComponentFixture<CustomerPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
