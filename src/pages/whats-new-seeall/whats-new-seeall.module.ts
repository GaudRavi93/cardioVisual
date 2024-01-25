import {HeaderPageModule} from '../header/header.module';
import {FooterPageModule} from '../footer/footer.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsNewSeeallPage } from './whats-new-seeall';


@NgModule({
  declarations: [
    WhatsNewSeeallPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsNewSeeallPage),
	HeaderPageModule,
	FooterPageModule
  ],
})
export class WhatsNewSeeallPageModule {}

