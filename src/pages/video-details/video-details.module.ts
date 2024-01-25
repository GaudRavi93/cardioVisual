import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoDetailsPage } from './video-details';
import {HeaderPageModule} from "../header/header.module";



@NgModule({
  declarations: [
    VideoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoDetailsPage),
    HeaderPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoDetailsPageModule {}