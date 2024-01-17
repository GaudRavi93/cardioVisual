
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrientationPlaylistNonHcp } from './orientation-playlist-nonhcp';

@NgModule({
  declarations: [
    OrientationPlaylistNonHcp,
  ],

  imports: [
    IonicPageModule.forChild(OrientationPlaylistNonHcp),
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrientationPlaylistNonHcpModule {}
