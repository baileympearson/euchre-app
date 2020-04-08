import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutDeckDialogComponent } from './cut-deck-dialog.component';

describe('CutDeckDialogComponent', () => {
  let component: CutDeckDialogComponent;
  let fixture: ComponentFixture<CutDeckDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutDeckDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutDeckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
