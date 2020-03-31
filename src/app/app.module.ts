import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceptTrumpComponent } from './shared/components/accept-trump/accept-trump.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HandViewContainerComponent } from './shared/components/hand-view-container/hand-view-container.component';
import { SharedModule } from './shared/shared.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './state/reducers';
import { AppReducers } from './state/state';

@NgModule({
  declarations: [
    AppComponent,
    AcceptTrumpComponent,
    HandViewContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    LandingPageModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
