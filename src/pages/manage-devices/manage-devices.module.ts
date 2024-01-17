import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageDevicesPage } from './manage-devices';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";


@NgModule({
  declarations: [
    ManageDevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageDevicesPage),
    HeaderPageModule,
    FooterPageModule
  ],
})
export class ManageDevicesPageModule {}
