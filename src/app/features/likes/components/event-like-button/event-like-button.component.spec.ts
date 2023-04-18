import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLikeButtonComponent } from './event-like-button.component';

describe('EventLikeButtonComponent', () => {
  let component: EventLikeButtonComponent;
  let fixture: ComponentFixture<EventLikeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLikeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
