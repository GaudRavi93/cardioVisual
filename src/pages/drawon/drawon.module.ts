import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrawonPage } from './drawon';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
  declarations: [
    DrawonPage,
  ],
  imports: [
    IonicPageModule.forChild(DrawonPage),
    HeaderPageModule,
    FooterPageModule
  ],
})
export class DrawonPageModule {}
