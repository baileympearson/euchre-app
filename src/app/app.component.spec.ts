import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToolbarModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({})
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
