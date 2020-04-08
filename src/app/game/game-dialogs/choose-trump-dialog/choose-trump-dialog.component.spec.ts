import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTrumpDialogComponent } from './choose-trump-dialog.component';

describe('ChooseTrumpDialogComponent', () => {
  let component: ChooseTrumpDialogComponent;
  let fixture: ComponentFixture<ChooseTrumpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTrumpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTrumpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
