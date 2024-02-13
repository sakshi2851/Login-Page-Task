import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercredentialComponent } from './usercredential.component';

describe('UsercredentialComponent', () => {
  let component: UsercredentialComponent;
  let fixture: ComponentFixture<UsercredentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercredentialComponent]
    });
    fixture = TestBed.createComponent(UsercredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
