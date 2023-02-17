import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenresComponent } from './select-genres.component';

describe('SelectGenresComponent', () => {
  let component: SelectGenresComponent;
  let fixture: ComponentFixture<SelectGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
