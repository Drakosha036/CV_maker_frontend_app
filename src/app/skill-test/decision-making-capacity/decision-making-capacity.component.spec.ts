import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionMakingCapacityComponent } from './decision-making-capacity.component';

describe('DecisionMakingCapacityComponent', () => {
  let component: DecisionMakingCapacityComponent;
  let fixture: ComponentFixture<DecisionMakingCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionMakingCapacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionMakingCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
