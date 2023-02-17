import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullGenresListComponent } from './full-genres-list.component';

describe('FullGenresListComponent', () => {
  let component: FullGenresListComponent;
  let fixture: ComponentFixture<FullGenresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullGenresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullGenresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
