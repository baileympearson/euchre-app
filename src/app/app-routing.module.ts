import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { GameSetupComponent } from './game-setup/game-setup/game-setup.component';
import { CreateGameWrapperComponent } from './create-game/create-game-wrapper/create-game-wrapper.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'creategame', component: CreateGameWrapperComponent
  },
  {
    path: 'gameSetup/:gameName', component: GameSetupComponent
  },
  // {
  //   path: 'game/:gameName', component: GameComponent
  // }
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
