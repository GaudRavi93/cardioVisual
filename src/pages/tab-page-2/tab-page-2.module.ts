import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage2 } from './tab-page-2';
import { ComponentsModule } from '../../components/components.module';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
    declarations: [
        TabPage2,
    ],
    imports: [
        IonicPageModule.forChild(TabPage2),
        ComponentsModule,
         HeaderPageModule,
         FooterPageModule,
    ],
    exports:[
        TabPage2
    ]
})

export class TabPage2Module { }
