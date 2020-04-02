import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScoreComponent } from './display-score.component';

describe('DisplayScoreComponent', () => {
  let component: DisplayScoreComponent;
  let fixture: ComponentFixture<DisplayScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
