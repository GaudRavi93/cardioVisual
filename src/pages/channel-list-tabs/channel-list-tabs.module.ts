import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelListTabsPage } from './channel-list-tabs';

import { TabsLayout3Module } from '../../components/tabs/layout-3/tabs-layout-3.module';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
	declarations: [
		ChannelListTabsPage,
	],
	imports: [
		IonicPageModule.forChild(ChannelListTabsPage),
		TabsLayout3Module,
		HeaderPageModule,
		FooterPageModule,
	], exports: [
		ChannelListTabsPage
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChannelListTabsPageModule {}
