import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    IonicSelectableModule
  ],
})
export class ModalPageModule {}
