import {Injectable, Component, ViewChild, Injector} from '@angular/core';
import { IonicPage, NavController, Slides, LoadingController, AlertController } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { HttpService } from '../../services/HttpService';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
import { CleverTap } from '@ionic-native/clevertap';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';

/**
 * Generated class for the Orientation Playlist for Non-Hcp page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'orientation-playlist-nonhcp.html',
 
})
export class OrientationPlaylistNonHcp {
  @ViewChild(Slides) slides: Slides;
  getStartedMsg: String = "Get Started";
  buttonAnime: boolean = false;
  snapshot: any;
  network_status : any;
  splash_video: any;
  splash_type: any;
  user_data: any;
  startSequenceArray: any;
  type: string;
  activeClass: string;
  dtStr:any;
  clevertapDate:any;
  network_object: Network;
  http_service_object: HttpService;
  storage_object: Storage;
  database_provider_object: DatabaseProvider;
  loading_controller_object: LoadingController;
  alert_controller_object: AlertController;
  clevertap_object: any;
  network_check_object: NetworkCheckProvider;

  constructor(public navCtrl: NavController,public injector: Injector) {

      this.network_object = injector.get<Network>(Network);
      this.http_service_object = injector.get<HttpService>(HttpService);
      this.storage_object = injector.get<Storage>(Storage);
      this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
      this.loading_controller_object = injector.get<LoadingController>(LoadingController);
      this.alert_controller_object = injector.get<AlertController>(AlertController);
      this.clevertap_object = new CleverTap();
      this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);

      var sync_status = localStorage.getItem('app_sync_dashboard');
      if(sync_status == 'yes'){
       
       var loading = this.loading_controller_object.create({
                         spinner: 'ios',
                         content:"<div class='custom-spinner-container'>Getting the app ready for you.</div>",
                         duration: 7000,
                         enableBackdropDismiss: false
                 });
       loading.present();
       
      }

      this.startSequenceArray =[
        {tag:"RISK",position:3200},{tag:"CAD",position:20000},{tag:"AFIB",position:16400},
        {tag:"PAD",position:10900},{tag:"CHF",position:19400},{tag:"LEARN",position:5800},
        {tag:"STROKE",position:13650},{tag:"SCD",position:15850},{tag:"AV",position:13800},
        {tag:"VEIN",position:10400},{tag:"AAA",position:10600},{tag:"SPANISH",position:19700},
        {tag:"NEW",position:10321},{tag:"DIABETES",position:5800}
      ];
      
      this.network_status = 'connected';
      this.network_object.onDisconnect().subscribe(() => {
        this.network_status = 'not_connected';
      });

      this.network_object.onConnect().subscribe(() => {
        this.network_status = 'connected';
      });
    setTimeout(() => { 
      this.network_check_object.getPageAction('OrientationPlaylistNonHcp','start','',localStorage.getItem('cv5usrType'));
    }, 1000);  
  }

  ionViewWillLeave(){
    this.network_check_object.getPageAction('OrientationPlaylistNonHcp','end','',localStorage.getItem('cv5usrType'));
  }

  interestSelected(type:any){

    var old_id = '';
    this.type = type;
    var id = type.toLowerCase();// current selected tab
    if(this.activeClass == id+'_active'){
      this.activeClass = '';
    }else{
      this.activeClass = id+'_active';
    }

    /* change color*/
    this.storage_object.get('orientation_playlist_tag').then((val) => {
      if(val){
        old_id = val.toLowerCase();
      }else{
        old_id = '';
      }
    });
  }

  goToDashboard(){
    //this.navCtrl.setRoot('ItemDetailsPageSwipeToDismiss');
     var params = {
      "record_time" : this.dtStr,
      "record_date" : this.clevertapDate,
      "os" : localStorage.getItem('getDevicePlatform'),
      "modelNo" : localStorage.getItem('modelNo'),
      "deviceversion" : localStorage.getItem('getDeviceversion'),
      "userRoleId" : localStorage.getItem('cv5userRoleId'),
      "userType": localStorage.getItem('cv5usrType'),
      "userEmail" : localStorage.getItem('cv5userEmail'),
      "specialities":localStorage.getItem('usrSpecialities'),
      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
      "location" : localStorage.getItem('location'),
      "clicked":'skip'
    };
    this.clevertap_object.recordEventWithNameAndProps("clickedOnSkip",params);
    //this.navCtrl.setRoot('DashboardPage');
    this.navCtrl.setRoot('WhatsNewPage');
  }

  goToVideoDetail(){
    if(this.type == undefined){
      var conditionPopup = this.alert_controller_object.create({
        title: '',
        message: '<p style="color:#ffffff; text-align:center;">Please choose any one condition of your interest.</p>',
        enableBackdropDismiss: true,
        buttons: ['Dismiss']
      });
      conditionPopup.present();
     //alert('Please choose any one condition of your interest.');
    }else{
      var getInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
      var selected_tag = this.storage_object.set('orientation_playlist_tag', this.type);
      //fetch video details and send to video detrail page.
      var tag = this.type
      var params = {
        "record_time" : this.dtStr,
        "record_date" : this.clevertapDate,
        "os" : localStorage.getItem('getDevicePlatform'),
        "modelNo" : localStorage.getItem('modelNo'),
        "deviceversion" : localStorage.getItem('getDeviceversion'),
        "userRoleId" : localStorage.getItem('cv5userRoleId'),
        "userType": localStorage.getItem('cv5usrType'),
        "userEmail" : localStorage.getItem('cv5userEmail'),
        "specialities":localStorage.getItem('usrSpecialities'),
        "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
        "location":localStorage.getItem('location'),
        "clicked":this.type
      };
      this.clevertap_object.recordEventWithNameAndProps("clickedOnInterest",params);

      //using json
      var query:string[] = new Array("WHERE name='"+tag+"' AND type='orientation'");
      this.database_provider_object.fetchAllData('custom_listing' , query).then(custom_listing_data => {
        var list_json_value = JSON.parse(custom_listing_data[0].list_values);
        var first_id = list_json_value.Condition[0];

        var condition_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+first_id+" AND isActive = 1");

        this.database_provider_object.fetchAllData('new_sub_topics' , condition_query).then(conditionData => {
          if(conditionData.length > 0){
            this.navCtrl.push('VideoDetailsPage', { data :conditionData[0], tag:tag, previousPage:'OrientationPlaylistNonHcp', 'header':'hide', 'request_from': 'tag','sendTo':'OrientationPlaylist' }); 
          }
        });
      });
    }
  }
}


