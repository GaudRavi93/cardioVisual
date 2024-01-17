import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfavoritesPage } from './myfavorites';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
  declarations: [
    MyfavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyfavoritesPage),
    HeaderPageModule,
    FooterPageModule
  ],
})
export class MyfavoritesPageModule {}
