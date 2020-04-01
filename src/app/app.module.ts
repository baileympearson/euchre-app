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
import { AppReducers } from './state/state';
import { AppEffects } from './state/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CreateGameModule } from './create-game/create-game.module';
import { GameSetupModule } from './game-setup/game-setup.module';

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
    ToolbarModule,
    CreateGameModule,
    GameSetupModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
