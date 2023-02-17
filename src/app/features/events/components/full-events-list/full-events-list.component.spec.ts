import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullEventsListComponent } from './full-events-list.component';

describe('FullEventsListComponent', () => {
  let component: FullEventsListComponent;
  let fixture: ComponentFixture<FullEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullEventsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
