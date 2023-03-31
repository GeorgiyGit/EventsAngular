import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddImagesComponent } from './customer-add-images.component';

describe('CustomerAddImagesComponent', () => {
  let component: CustomerAddImagesComponent;
  let fixture: ComponentFixture<CustomerAddImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
