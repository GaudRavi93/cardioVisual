import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AaplaunchlocationPage } from './aaplaunchlocation';

@NgModule({
  declarations: [
    AaplaunchlocationPage,
  ],
  imports: [
    IonicPageModule.forChild(AaplaunchlocationPage),
    IonicSelectableModule
  ],
})
export class AaplaunchlocationPageModule {}
