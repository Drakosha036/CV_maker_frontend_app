import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAndCloseComponent } from './save-and-close.component';

describe('SaveAndCloseComponent', () => {
  let component: SaveAndCloseComponent;
  let fixture: ComponentFixture<SaveAndCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAndCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAndCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
