import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDownloadPage } from './mydownloads';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
  declarations: [
    MyDownloadPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDownloadPage),
    HeaderPageModule,
    FooterPageModule
  ],
})
export class MyDownloadPageModule {}
