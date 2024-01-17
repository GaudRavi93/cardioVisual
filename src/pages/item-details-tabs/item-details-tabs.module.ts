import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageTabs } from './item-details-tabs';

import { TabsLayout3Module } from '../../components/tabs/layout-3/tabs-layout-3.module';
import { TabsLayout2Module } from '../../components/tabs/layout-2/tabs-layout-2.module';

import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
    declarations: [
        ItemDetailsPageTabs,
    ],
    imports: [
        IonicPageModule.forChild(ItemDetailsPageTabs),
        TabsLayout3Module,
        TabsLayout2Module,
        HeaderPageModule,
        FooterPageModule,
    ], exports: [
        ItemDetailsPageTabs
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageTabsModule { }
