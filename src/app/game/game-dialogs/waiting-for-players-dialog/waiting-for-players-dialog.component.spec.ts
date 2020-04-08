import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingForPlayersDialogComponent } from './waiting-for-players-dialog.component';

describe('WaitingForPlayersDialogComponent', () => {
  let component: WaitingForPlayersDialogComponent;
  let fixture: ComponentFixture<WaitingForPlayersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingForPlayersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingForPlayersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
