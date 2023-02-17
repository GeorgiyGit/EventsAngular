import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFavoriteButtonComponent } from './place-favorite-button.component';

describe('PlaceFavoriteButtonComponent', () => {
  let component: PlaceFavoriteButtonComponent;
  let fixture: ComponentFixture<PlaceFavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceFavoriteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
