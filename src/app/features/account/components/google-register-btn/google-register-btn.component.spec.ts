import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRegisterBtnComponent } from './google-register-btn.component';

describe('GoogleRegisterBtnComponent', () => {
  let component: GoogleRegisterBtnComponent;
  let fixture: ComponentFixture<GoogleRegisterBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleRegisterBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleRegisterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
