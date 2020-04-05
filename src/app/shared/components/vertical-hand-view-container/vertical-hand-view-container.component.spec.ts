import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalHandViewContainerComponent } from './vertical-hand-view-container.component';

describe('VerticalHandViewContainerComponent', () => {
  let component: VerticalHandViewContainerComponent;
  let fixture: ComponentFixture<VerticalHandViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalHandViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalHandViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
