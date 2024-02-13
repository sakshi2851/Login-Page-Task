import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelRegistrationComponent } from './excel-registration.component';

describe('ExcelRegistrationComponent', () => {
  let component: ExcelRegistrationComponent;
  let fixture: ComponentFixture<ExcelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelRegistrationComponent]
    });
    fixture = TestBed.createComponent(ExcelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
