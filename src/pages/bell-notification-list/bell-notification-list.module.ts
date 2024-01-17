import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BellNotificationListPage } from './bell-notification-list';

@NgModule({
  declarations: [
    BellNotificationListPage,
  ],
  imports: [
    IonicPageModule.forChild(BellNotificationListPage),
  ],
})
export class BellNotificationListPageModule {}
