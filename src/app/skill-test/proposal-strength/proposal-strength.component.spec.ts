import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalStrengthComponent } from './proposal-strength.component';

describe('ProposalStrengthComponent', () => {
  let component: ProposalStrengthComponent;
  let fixture: ComponentFixture<ProposalStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
