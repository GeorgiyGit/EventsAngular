import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceLikeButtonComponent } from './place-like-button.component';

describe('PlaceLikeButtonComponent', () => {
  let component: PlaceLikeButtonComponent;
  let fixture: ComponentFixture<PlaceLikeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceLikeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
