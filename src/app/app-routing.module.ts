import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  // {
  //   path: 'createGame', component: CreateGameComponent
  // },
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
