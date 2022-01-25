import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsTestComponent } from './soft-skills-test.component';

describe('SoftSkillsTestComponent', () => {
  let component: SoftSkillsTestComponent;
  let fixture: ComponentFixture<SoftSkillsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftSkillsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
