import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupwithapplePage } from './signupwithapple';

@NgModule({
  declarations: [
    SignupwithapplePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupwithapplePage),
    IonicSelectableModule
  ],
})
export class SignupwithapplePageModule {}
