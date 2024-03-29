import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCropperComponent } from './avatar-cropper.component';

describe('AvatarCropperComponent', () => {
  let component: AvatarCropperComponent;
  let fixture: ComponentFixture<AvatarCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarCropperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
