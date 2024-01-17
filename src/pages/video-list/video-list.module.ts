import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoListPage } from './video-list';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
  declarations: [
    VideoListPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoListPage),
    HeaderPageModule,
    FooterPageModule
  ],
})
export class VideoListPageModule {}
