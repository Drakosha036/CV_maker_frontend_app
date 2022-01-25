import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityToFederateComponent } from './ability-to-federate.component';

describe('AbilityToFederateComponent', () => {
  let component: AbilityToFederateComponent;
  let fixture: ComponentFixture<AbilityToFederateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityToFederateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityToFederateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
