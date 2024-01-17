import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsNewPage } from './whats-new';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    WhatsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsNewPage),
    HeaderPageModule,
    FooterPageModule,
    ComponentsModule
  ],
})
export class WhatsNewPageModule {}
