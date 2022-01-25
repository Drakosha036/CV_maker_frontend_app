import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriousityComponent } from './curiousity.component';

describe('CuriousityComponent', () => {
  let component: CuriousityComponent;
  let fixture: ComponentFixture<CuriousityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriousityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriousityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
