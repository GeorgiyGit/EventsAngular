import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesNavigationComponent } from './entities-navigation.component';

describe('EntitiesNavigationComponent', () => {
  let component: EntitiesNavigationComponent;
  let fixture: ComponentFixture<EntitiesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
