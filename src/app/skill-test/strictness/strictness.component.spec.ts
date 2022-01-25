import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictnessComponent } from './strictness.component';

describe('StrictnessComponent', () => {
  let component: StrictnessComponent;
  let fixture: ComponentFixture<StrictnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrictnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
