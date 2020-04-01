import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameWrapperComponent } from './create-game-wrapper.component';

describe('CreateGameWrapperComponent', () => {
  let component: CreateGameWrapperComponent;
  let fixture: ComponentFixture<CreateGameWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGameWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
