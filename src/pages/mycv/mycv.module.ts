import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycvPage } from './mycv';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
  declarations: [
    MycvPage,
  ],
  imports: [
    IonicPageModule.forChild(MycvPage),
    HeaderPageModule,
    FooterPageModule,
  ],
})
export class MycvPageModule {}
