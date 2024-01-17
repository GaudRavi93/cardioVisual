import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodePage } from './qrcode';
 import {HeaderPageModule} from "../header/header.module";

@NgModule({
  declarations: [
    QrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrcodePage),
    HeaderPageModule
  ],
})
export class QrcodePageModule {}
