import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomNameLabelComponent } from './room-name-label.component';

describe('RoomNameLabelComponent', () => {
  let component: RoomNameLabelComponent;
  let fixture: ComponentFixture<RoomNameLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomNameLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomNameLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
