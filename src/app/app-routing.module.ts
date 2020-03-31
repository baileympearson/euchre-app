import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { CreateGameComponent } from './create-game/create-game/create-game.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'creategame', component: CreateGameComponent
  },
  // {
  //   path: 'gameSetup/:gameName', component: GameSetupComponent
  // }
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
