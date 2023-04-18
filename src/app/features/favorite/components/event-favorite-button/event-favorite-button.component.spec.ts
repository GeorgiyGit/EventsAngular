import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFavoriteButtonComponent } from './event-favorite-button.component';

describe('EventFavoriteButtonComponent', () => {
  let component: EventFavoriteButtonComponent;
  let fixture: ComponentFixture<EventFavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFavoriteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
