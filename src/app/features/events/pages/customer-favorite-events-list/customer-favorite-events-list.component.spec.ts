import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFavoriteEventsListComponent } from './customer-favorite-events-list.component';

describe('CustomerFavoriteEventsListComponent', () => {
  let component: CustomerFavoriteEventsListComponent;
  let fixture: ComponentFixture<CustomerFavoriteEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFavoriteEventsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFavoriteEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
