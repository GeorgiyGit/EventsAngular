import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedPlacesComponent } from './user-created-places.component';

describe('UserCreatedPlacesComponent', () => {
  let component: UserCreatedPlacesComponent;
  let fixture: ComponentFixture<UserCreatedPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreatedPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreatedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
