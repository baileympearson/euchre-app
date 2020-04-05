import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpIndicatorComponent } from './trump-indicator.component';

describe('TrumpIndicatorComponent', () => {
  let component: TrumpIndicatorComponent;
  let fixture: ComponentFixture<TrumpIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
