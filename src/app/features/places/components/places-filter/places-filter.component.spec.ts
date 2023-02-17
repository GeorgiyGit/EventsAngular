import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesFilterComponent } from './places-filter.component';

describe('PlacesFilterComponent', () => {
  let component: PlacesFilterComponent;
  let fixture: ComponentFixture<PlacesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
