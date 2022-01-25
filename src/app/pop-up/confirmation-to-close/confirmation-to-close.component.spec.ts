import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationToCloseComponent } from './confirmation-to-close.component';

describe('ConfirmationToCloseComponent', () => {
  let component: ConfirmationToCloseComponent;
  let fixture: ComponentFixture<ConfirmationToCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationToCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationToCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
