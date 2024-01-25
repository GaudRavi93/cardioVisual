import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlandetailsPage } from './plandetails';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
  declarations: [
    PlandetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlandetailsPage),
    HeaderPageModule,
  ],
})
export class PlandetailsPageModule {}
