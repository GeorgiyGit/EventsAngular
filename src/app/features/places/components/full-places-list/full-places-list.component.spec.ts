import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPlacesListComponent } from './full-places-list.component';

describe('FullPlacesListComponent', () => {
  let component: FullPlacesListComponent;
  let fixture: ComponentFixture<FullPlacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPlacesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullPlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
