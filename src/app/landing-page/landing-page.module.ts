import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';



@NgModule({
  declarations: [LandingPageComponent, LoginComponentComponent, RegisterComponentComponent],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
