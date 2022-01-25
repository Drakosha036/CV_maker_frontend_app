import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSkillsComponent } from './change-skills.component';

describe('ChangeSkillsComponent', () => {
  let component: ChangeSkillsComponent;
  let fixture: ComponentFixture<ChangeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
