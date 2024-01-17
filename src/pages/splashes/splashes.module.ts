import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashesPage } from './splashes';

@NgModule({
  declarations: [
    SplashesPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashesPage),
  ],
})
export class SplashesPageModule {}
