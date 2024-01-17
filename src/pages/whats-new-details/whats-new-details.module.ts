import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsNewDetailsPage } from './whats-new-details';
import {HeaderPageModule} from "../header/header.module";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WhatsNewDetailsPage, 
  ],
  imports: [
    IonicPageModule.forChild(WhatsNewDetailsPage),
    ComponentsModule,
    HeaderPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhatsNewDetailsPageModule {}
