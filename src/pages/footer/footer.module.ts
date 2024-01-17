import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FooterPage } from './footer';

@NgModule({
  declarations: [
    FooterPage,
  ],
  imports: [
    IonicPageModule.forChild(FooterPage),
  ],
  exports: [
    FooterPage
  ]
})
export class FooterPageModule {}
