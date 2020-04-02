import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HandViewContainerComponent } from './hand-view-container.component';

describe('HandViewContainerComponent', () => {
  let component: HandViewContainerComponent;
  let fixture: ComponentFixture<HandViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
