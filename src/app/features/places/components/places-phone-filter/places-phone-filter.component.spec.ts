import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesPhoneFilterComponent } from './places-phone-filter.component';

describe('PlacesPhoneFilterComponent', () => {
  let component: PlacesPhoneFilterComponent;
  let fixture: ComponentFixture<PlacesPhoneFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesPhoneFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesPhoneFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
