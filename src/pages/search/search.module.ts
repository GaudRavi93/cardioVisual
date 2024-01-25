import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    HeaderPageModule,
  ],
})
export class SearchPageModule {}
