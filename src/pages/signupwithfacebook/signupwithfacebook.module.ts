import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupwithfacebookPage } from './signupwithfacebook';

@NgModule({
  declarations: [
    SignupwithfacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupwithfacebookPage),
    IonicSelectableModule
  ],
})
export class SignupwithfacebookPageModule {}
