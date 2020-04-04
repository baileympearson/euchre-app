import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTrumpDialogComponent } from './accept-trump-dialog.component';

describe('AcceptTrumpDialogComponent', () => {
  let component: AcceptTrumpDialogComponent;
  let fixture: ComponentFixture<AcceptTrumpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptTrumpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptTrumpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
