import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaylistPage } from './playlist';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaylistPage),
     ComponentsModule,
    HeaderPageModule,
    FooterPageModule,
  ],
})
export class PlaylistPageModule {}
