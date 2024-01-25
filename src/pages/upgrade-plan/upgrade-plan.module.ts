import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpgradePlanPage } from './upgrade-plan';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
  declarations: [
    UpgradePlanPage,
  ],
  imports: [
    IonicPageModule.forChild(UpgradePlanPage),
    HeaderPageModule,
  ],
})
export class UpgradePlanPageModule {}
