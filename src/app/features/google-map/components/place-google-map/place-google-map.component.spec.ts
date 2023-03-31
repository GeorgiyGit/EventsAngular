import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceGoogleMapComponent } from './place-google-map.component';

describe('PlaceGoogleMapComponent', () => {
  let component: PlaceGoogleMapComponent;
  let fixture: ComponentFixture<PlaceGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceGoogleMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
