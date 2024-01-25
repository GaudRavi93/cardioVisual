import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupwithsocialnoemailPage } from './signupwithsocialnoemail';

@NgModule({
  declarations: [
    SignupwithsocialnoemailPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupwithsocialnoemailPage),
    IonicSelectableModule
  ],
})
export class SignupwithsocialnoemailPageModule {}
