import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlaceBlockComponent } from './customer-place-block.component';

describe('CustomerPlaceBlockComponent', () => {
  let component: CustomerPlaceBlockComponent;
  let fixture: ComponentFixture<CustomerPlaceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPlaceBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPlaceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
