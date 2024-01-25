import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationTab } from './information-tab';
import { ComponentsModule } from '../../components/components.module';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
    declarations: [
        InformationTab,
    ],
    imports: [
        IonicPageModule.forChild(InformationTab),
        ComponentsModule,
         HeaderPageModule,
         FooterPageModule,
    ],
    exports:[
        InformationTab
    ]
})

export class InformationTabModule { }
