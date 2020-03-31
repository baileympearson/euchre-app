import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

const mockRouter = { 
  navigate: jest.fn()
};

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [ MatToolbarModule ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
