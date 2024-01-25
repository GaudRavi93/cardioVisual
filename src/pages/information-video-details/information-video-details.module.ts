import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationVideoDetailsPage } from './information-video-details';
import {HeaderPageModule} from "../header/header.module";


@NgModule({
  declarations: [
    InformationVideoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationVideoDetailsPage),
    HeaderPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InformationVideoDetailsPageModule {}