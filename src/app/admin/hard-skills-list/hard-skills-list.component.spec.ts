import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillsListComponent } from './hard-skills-list.component';

describe('HardSkillsListComponent', () => {
  let component: HardSkillsListComponent;
  let fixture: ComponentFixture<HardSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
