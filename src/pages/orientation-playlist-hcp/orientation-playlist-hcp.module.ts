
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrientationPlaylistHcp } from './orientation-playlist-hcp';

@NgModule({
  declarations: [
    OrientationPlaylistHcp,
  ],

  imports: [
    IonicPageModule.forChild(OrientationPlaylistHcp),
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrientationPlaylistHcpModule {}
