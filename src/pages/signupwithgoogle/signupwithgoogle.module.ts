import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupwithgooglePage } from './signupwithgoogle';

@NgModule({
  declarations: [
    SignupwithgooglePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupwithgooglePage),
    IonicSelectableModule
  ],
})
export class SignupwithgooglePageModule {}
