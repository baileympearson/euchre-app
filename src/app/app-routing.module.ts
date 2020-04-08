import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { GameComponent } from './game/game/game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { CreateGameComponent } from './create-game/create-game/create-game.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'creategame', component: CreateGameComponent
  },
  {
    path: 'joingame', component: JoinGameComponent
  },
  {
    path: 'joingame/:gamename', component: JoinGameComponent
  },
  {
    path: 'game/:gameName', component: GameComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
