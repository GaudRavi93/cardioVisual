import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { SkeletonItemComponent } from '../../components/skeleton-item/skeleton-item';
import {HeaderPageModule} from "../header/header.module";
import {FooterPageModule} from "../footer/footer.module";
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    ComponentsModule,
    HeaderPageModule,
    FooterPageModule,
  ],
})
export class DashboardPageModule {}
