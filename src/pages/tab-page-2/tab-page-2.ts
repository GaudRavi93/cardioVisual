import { Component, Input, ViewChild , Pipe, Injector} from '@angular/core';
import { IonicPage, Content, FabButton, NavController, NavParams, ToastController, Tabs, Platform, Modal, ModalController, ModalOptions, App,AlertController } from 'ionic-angular';
//import { TabsService } from '../../services/tabs-service';
import { ToastService } from '../../services/toast-service';
import { HttpService } from '../../services/HttpService';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { File } from '@ionic-native/file'; 
import { DatabaseProvider } from '../../providers/database/database';
import * as _ from 'underscore/underscore';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { CleverTap } from '@ionic-native/clevertap';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { InappProvider } from '../../providers/inapp/inapp';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';


declare var cordova;
@IonicPage()
@Component({
  templateUrl: 'tab-page-2.html',
  //providers: [TabsService]
})

export class TabPage2 {

  params: any = {};
  data: any = {};
  events: any = {};
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  @ViewChild('myTab') tabRef: Tabs;
  network_status : any;
  newTopicId: any;
  category_id: any;
  buttonColor:string = '#000000';
  userid : any;
  currentTimeInMilliSeconds:any; 
  percentage: any; 
  isDownloading: any;
  perc1:any;
  download_count: any;
  userdata: any;
  listlength: any;
  video_que_array: any = [];
  request_from: string;
  search:string = '';
  pageHistory:string = '';
  dtStr : any;
  clevertapDate : any;
  orientation: string;
  download_status:string = 'complete';
  path: string;
  topic_Name: string;
  cat_name: string;
  segment_name: string;
  channelUrlpath: string;
  newtopic_name:string = '';
  imgSHownOnline:any;
  private fileTransfer: FileTransferObject;
  toast_service_object: ToastService;
  http_service_object: HttpService;
  http_object: Http;
  nav_params_object: NavParams;
  network_object: Network;
  toast_controller_object: ToastController;
  storage_object: Storage;
  file_transfer_object: FileTransfer;
  file_object: File;
  platform_object: Platform;
  database_provider_object: DatabaseProvider;
  in_app_browser_object: InAppBrowser;
  modal_controllar_object: ModalController;
  network_check_object: NetworkCheckProvider;
  clevertap_object: CleverTap;
  screen_orientation_object: ScreenOrientation;
  in_app_provider_object: InappProvider;
  alert_controller_object: AlertController;
  video_share_provider_object: VideosharesocialProvider;

  constructor(public navCtrl: NavController, public injector: Injector) {

    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.http_object = injector.get<Http>(Http);
    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.network_object = injector.get<Network>(Network);
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.storage_object = injector.get<Storage>(Storage);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.file_object = injector.get<File>(File);
    this.platform_object = injector.get<Platform>(Platform);
    this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.modal_controllar_object = injector.get<ModalController>(ModalController);
    this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.clevertap_object = new CleverTap();
    this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
    this.in_app_provider_object = injector.get<InappProvider>(InappProvider);
    this.alert_controller_object = injector.get<AlertController>(AlertController);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);

    this.imgSHownOnline = this.network_check_object.getNetworkType();
    //alert('this.imgSHownOnline-->'+this.imgSHownOnline);
    /*segment section start */
    this.segment_name = localStorage.getItem('segment_name');
    this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
    /*segment section end */

    var user_type = localStorage.getItem('cv5usrType');
    this.in_app_provider_object.canShareAccess(user_type);

    this.path = this.file_object.dataDirectory;

    this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();

    //this.newTopicId = this.nav_params_object.get('category_id');
    this.newTopicId = this.nav_params_object.get('newtopics_id');
    
    //this.category_id = this.nav_params_object.get('topic');
    this.category_id = this.nav_params_object.get('category_id');
   // alert('this.category_id---->'+this.category_id);

    switch (this.category_id) {
      case "1":
        // code...
        this.cat_name = "condition";
        break;
      case "2":
        // code...
        this.cat_name = "treatment";
        break;
      case "3":
        // code...
        this.cat_name = "device";
        break;   
    }

    this.topic_Name = this.nav_params_object.get('topicName');
    //alert('this.topic_Name---->'+this.topic_Name);
    //this.newTopicId = localStorage.getItem('dashboard_category_id');
   this.newtopic_name = '';
    this.newTopicId = localStorage.getItem('dashboard_category_id');
    //alert('this.newTopicId---->'+this.newTopicId);
    switch(this.newTopicId){
      case '1':
        this.newtopic_name = 'Cardiac';
        break;
      case '2':
        this.newtopic_name = 'EP';  
        break;
      case '3':
        this.newtopic_name = 'Structural';  
        break;
      case '4':
        this.newtopic_name = 'Vascular';  
        break;
      case '5':
        this.newtopic_name = 'Heart Health';  
        break;
      case '6':
        this.newtopic_name = 'Diabetes';  
        break;        
    }


    if(this.category_id == undefined){
       this.category_id = '1';
    }

    this.network_status = 'connected';
    this.network_object.onDisconnect().subscribe(() => {
      this.network_status = 'not_connected';
    });

    this.network_object.onConnect().subscribe(() => {
      this.network_status = 'connected';
    });

    //for profile page
    this.request_from = this.nav_params_object.get('request_from');
    var all_data = this.nav_params_object.data;
    this.data.currentTimeInMilliSeconds = new Date().getTime();



    var that = this;

    this.events ={
      'onItemClick': function (item: any) {
        //alert('that.cat_name------->'+JSON.stringify(that.cat_name));
        var canShare = localStorage.getItem('userProAccess');

        var params = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "modelNo" : localStorage.getItem('modelNo'),
          "deviceversion" : localStorage.getItem('getDeviceversion'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "topic_name": that.topic_Name,
          "category_name" : that.cat_name,
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "categoryContentFor":"Education",
          "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };

        //alert('params----->'+JSON.stringify(params));
        // Set clevertap Custom AppLaunch event.
        that.clevertap_object.recordEventWithNameAndProps("clickedOnCategory", params); 

        localStorage.setItem('branch_flag', '');
        
        if (item.subTopicType == 'video') {
      
          if(item.isPaid == 0 || canShare == 'true'){

              var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+item.id);
             
              that.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => { 
              console.log('data tab page 2 -->'+JSON.stringify(data));
             
              if(data[0].localUrl != ''){
                
                var params = {
                  "record_time" : that.dtStr,
                  "record_date" : that.clevertapDate,
                  "os" : localStorage.getItem('getDevicePlatform'),
                  "modelNo" : localStorage.getItem('modelNo'),
                  "deviceversion" : localStorage.getItem('getDeviceversion'),
                  "userRoleId" : localStorage.getItem('cv5userRoleId'),
                  "userType": localStorage.getItem('cv5usrType'),
                  "topic_name": that.topic_Name,
                  "category_name" : that.cat_name,
                  "userEmail" : localStorage.getItem('cv5userEmail'),
                  "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                  "file" : item.name,
                  "videoName" : item.videoName,
                  "location":localStorage.getItem('location'),
                  "specialities":localStorage.getItem('usrSpecialities'),
                  "clickedVideoContentFor":"Education",
                  "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                };
                that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params); 

                var liveId = localStorage.getItem('userliveId');
                var video_likeId = item.id;
                
                that.database_provider_object.updateLikesCount( liveId, video_likeId, 'likes-count' );

                if(that.request_from == 'profile_page'){
                  navCtrl.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'ProfilePage' });
                }else{
                 
                  navCtrl.parent.parent.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'TabListing' });
                }

              }else{
                that.platform_object.ready().then(() => {
                var network_type = that.network_check_object.getNetworkType();
                if(network_type == 'none'){

                  that.toast_controller_object.create({
                    message: 'This video requires internet connection.',
                    position: 'bottom',
                    duration: 5000
                  }).present();
                } else {

                  var params = {
                    "record_time" : that.dtStr,
                    "record_date" : that.clevertapDate,
                    "os" : localStorage.getItem('getDevicePlatform'),
                    "modelNo" : localStorage.getItem('modelNo'),
                    "deviceversion" : localStorage.getItem('getDeviceversion'),
                    "userRoleId" : localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "topic_name": that.topic_Name,
                    "category_name" : that.cat_name,
                    "userEmail" : localStorage.getItem('cv5userEmail'),
                    "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                    "file" : item.name,
                    "videoName" : item.videoName,
                    "location":localStorage.getItem('location'),
                    "specialities":localStorage.getItem('usrSpecialities'),
                    "clickedVideoContentFor":"Education",
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                  };
                  that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);

                  var liveId = localStorage.getItem('userliveId');
                  var video_likeId = item.id;

                  that.database_provider_object.updateLikesCount( liveId, video_likeId, 'likes-count' );

                  if(that.request_from == 'profile_page'){
                    navCtrl.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'ProfilePage' });
                  }else{
                    navCtrl.parent.parent.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'TabListing' });
                  }
                }
               });
              }
            });
          }else{

            var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    that.navCtrl.parent.parent.push('UpgradePlanPage');
                  }}
              ]
            });
            confirmPopup.present();
          }
        }else if (item.subTopicType == 'image') {
          // code...
            var imageparams = {
              "record_time" : that.dtStr,
              "record_date" : that.clevertapDate,
              "os" : localStorage.getItem('getDevicePlatform'),
              "modelNo" : localStorage.getItem('modelNo'),
              "deviceversion" : localStorage.getItem('getDeviceversion'),
              "userRoleId" : localStorage.getItem('cv5userRoleId'),
              "userType": localStorage.getItem('cv5usrType'),
              "topic_name": that.topic_Name,
              "category_name" : that.cat_name,
              "userEmail" : localStorage.getItem('cv5userEmail'),
              "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
              "file" : item.name,
              "imageName" : item.videoName,
              "location":localStorage.getItem('location'),
              "specialities":localStorage.getItem('usrSpecialities'),
              "drawonContentFor":'Education',
              "subSpecialities": localStorage.getItem('cv5usrRolesubType')
            };
           that.clevertap_object.recordEventWithNameAndProps("clickedOnDrawOn", imageparams);

          if(item.localUrl){
            //alert('hhh-->localurl');
            that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
          }
          else
          {

           that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
          }        
        }else if (item.subTopicType == 'document'){
          var network_type = that.network_check_object.getNetworkType();
          if(network_type == 'none'){
            that.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();
          } else {

            var ref = that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

            ref.on('loadstop').subscribe((event) => {
              that.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe((event) => {            
              that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
          }
        }else if (item.subTopicType == 'other') {
          // code...
          //alert('other');
          switch (item.otherType) {
            case "link":
              var ref = that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
              ref.on('loadstop').subscribe((event) => {
                that.screen_orientation_object.unlock();
              });
              ref.on('exit').subscribe((event) => {            
                that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
              });

              break;        
            case "qr_code":
              // code...
              that.navCtrl.parent.parent.push('QrcodePage',{previousPage:'channellist',qrUrl:item.url});
              break;
          }
        }
      },
      'onShare': function (item: any) {

        event.stopPropagation();

        that.video_share_provider_object.shareSingleVideo(item);

      },
      'onFavorite': function (item: any) {
        event.stopPropagation();

        that.markasFavorite(item)
      },
      'onMultipleDownload': function (item: any) {
        event.stopPropagation();

        var canShare = localStorage.getItem('canDownloadAccess');
        // code...
        if(item.isDownloadable == 1){
          if(canShare == 'true'){

            that.platform_object.ready().then(() => {
              var network_type = that.network_check_object.getNetworkType();

              if(network_type == 'none'){
               
                that.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                  }).present();

              } else {

                var downloadque = localStorage.getItem('Downloadque');

                if(downloadque == null || downloadque == ''){
                  downloadque = item.id;
                }else{

                  downloadque = downloadque + ','+item.id;
                }
                
                localStorage.setItem('Downloadque', downloadque);
                //_.contains([1, 2, 3], 3);
                
                that.isDownloadVideoMultiple();

              }

            });               
          }else{

            var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    that.navCtrl.parent.parent.push('UpgradePlanPage');
                  }}
              ]
            });
            confirmPopup.present();

          }
        }else{
          var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ['Dismiss']
            });
            confirmPopup.present();
        }
      },
      'onImageCantDownload': function (item: any) {
        //that.toast_service_object.presentToast("Share");
        that.imageCantDownload();
      },
      'onPlaylistAdd': function (item:any){
        event.stopPropagation();
        that.addtoplaylist(item , 'education');
      },
      'onInfoItemClick': function (item: any) {

        //console.log('item------->'+JSON.stringify(item));
        var canShare = localStorage.getItem('userProAccess');

        var params = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "modelNo" : localStorage.getItem('modelNo'),
          "deviceversion" : localStorage.getItem('getDeviceversion'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "topic_name": that.topic_Name,
          "category_name" : that.cat_name,
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "categoryContentFor":"Information",
          "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };
        // Set clevertap Custom AppLaunch event.
        that.clevertap_object.recordEventWithNameAndProps("clickedOnCategory", params); 

        localStorage.setItem('branch_flag', '');
        
        if (item.subTopicType == 'video') {
          if(item.isPaid == 0 || canShare == 'true'){
              var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+item.id);
              that.database_provider_object.fetchAllData('information' , querystring).then(data => { 
              if(data[0].localUrl != ''){
                var params = {
                  "record_time" : that.dtStr,
                  "record_date" : that.clevertapDate,
                  "os" : localStorage.getItem('getDevicePlatform'),
                  "modelNo" : localStorage.getItem('modelNo'),
                  "deviceversion" : localStorage.getItem('getDeviceversion'),
                  "userRoleId" : localStorage.getItem('cv5userRoleId'),
                  "userType": localStorage.getItem('cv5usrType'),
                  "topic_name": that.topic_Name,
                  "category_name" : that.cat_name,
                  "userEmail" : localStorage.getItem('cv5userEmail'),
                  "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                  "file" : item.name,
                  "videoName" : item.videoName,
                  "location":localStorage.getItem('location'),
                  "specialities":localStorage.getItem('usrSpecialities'),
                  "clickedVideoContentFor":"Information",
                  "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                };
                that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params); 

                if(that.request_from == 'profile_page'){
                  navCtrl.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'ProfilePage' });
                }else{
                  navCtrl.parent.parent.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'TabListing' });
                }

              }else{
                that.platform_object.ready().then(() => {
                var network_type = that.network_check_object.getNetworkType();
                if(network_type == 'none'){

                  that.toast_controller_object.create({
                    message: 'This video requires internet connection.',
                    position: 'bottom',
                    duration: 5000
                  }).present();
                } else {

                  var params = {
                    "record_time" : that.dtStr,
                    "record_date" : that.clevertapDate,
                    "os" : localStorage.getItem('getDevicePlatform'),
                    "modelNo" : localStorage.getItem('modelNo'),
                    "deviceversion" : localStorage.getItem('getDeviceversion'),
                    "userRoleId" : localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "topic_name": that.topic_Name,
                    "category_name" : that.cat_name,
                    "userEmail" : localStorage.getItem('cv5userEmail'),
                    "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                    "file" : item.name,
                    "videoName" : item.videoName,
                    "location":localStorage.getItem('location'),
                    "specialities":localStorage.getItem('usrSpecialities'),
                    "clickedVideoContentFor":"Information",
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                  };
                  that.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);

                  if(that.request_from == 'profile_page'){
                    navCtrl.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'ProfilePage' });
                  }else{
                    navCtrl.parent.parent.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'TabListing' });
                  }
                }
               });
              }
            });
          }else{
            var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    that.navCtrl.parent.parent.push('UpgradePlanPage');
                  }}
              ]
            });
            confirmPopup.present();
          }
        }else if (item.subTopicType == 'image') {
          // code...
          //alert('hhh-->'+item.localUrl);

            var imageparams = {
              "record_time" : that.dtStr,
              "record_date" : that.clevertapDate,
              "os" : localStorage.getItem('getDevicePlatform'),
              "modelNo" : localStorage.getItem('modelNo'),
              "deviceversion" : localStorage.getItem('getDeviceversion'),
              "userRoleId" : localStorage.getItem('cv5userRoleId'),
              "userType": localStorage.getItem('cv5usrType'),
              "topic_name": that.topic_Name,
              "category_name" : that.cat_name,
              "userEmail" : localStorage.getItem('cv5userEmail'),
              "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
              "file" : item.name,
              "imageName" : item.videoName,
              "location":localStorage.getItem('location'),
              "specialities":localStorage.getItem('usrSpecialities'),
              "drawonContentFor":'Information',
              "subSpecialities": localStorage.getItem('cv5usrRolesubType')
            };
           that.clevertap_object.recordEventWithNameAndProps("clickedOnDrawOn", imageparams);

          if(item.localUrl){

            that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
            //that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
          }
          else
          {
            //navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
           that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
          }        
        }else if (item.subTopicType == 'document'){
          var network_type = that.network_check_object.getNetworkType();
          if(network_type == 'none'){
            that.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();
          } else {

            var ref = that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

            ref.on('loadstop').subscribe((event) => {
              that.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe((event) => {            
              that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
          }
        }else if (item.subTopicType == 'other') {

          switch (item.otherType) {
            case "link":
              var ref = that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');

              ref.on('loadstop').subscribe((event) => {
                that.screen_orientation_object.unlock();
              });
              ref.on('exit').subscribe((event) => {            
                that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
              });
              break;        
            case "qr_code":
              // code...
              that.navCtrl.parent.parent.push('QrcodePage',{previousPage:'channellist',qrUrl:item.url});
              break;
          }
        }
      },
      'onInfoFavorite': function (item: any) {
        event.stopPropagation();

        that.markasInfoFavorite(item)
      },
      'onInfoMultipleDownload': function (item: any) {
        event.stopPropagation();



        var canShare = localStorage.getItem('canDownloadAccess');
        if(item.isDownloadable == 1){
          //alert('canShare123-->'+canShare);
          // code...
          if(canShare == 'true'){

            that.platform_object.ready().then(() => {
              var network_type = that.network_check_object.getNetworkType();

              if(network_type == 'none'){
               
                that.toast_controller_object.create({
                    message: 'You are now offline.',
                    position: 'bottom',
                    duration: 5000
                  }).present();

              } else {

                var downloadque = localStorage.getItem('InfoDownloadque');

                if(downloadque == null || downloadque == ''){
                  downloadque = item.id;
                }else{

                  downloadque = downloadque + ','+item.id;
                }
                
                localStorage.setItem('InfoDownloadque', downloadque);
                //_.contains([1, 2, 3], 3);
                
                that.isInfoDownloadVideoMultiple();

              }

            });               
          }else{

            var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    that.navCtrl.parent.parent.push('UpgradePlanPage');
                  }}
              ]
            });
            confirmPopup.present();

          }
        }else{
          var confirmPopup = that.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ['Dismiss']
            });
            confirmPopup.present();
        }  
      },
      'onInfoPlaylistAdd': function (item: any) {
        event.stopPropagation();
        that.addtoplaylist(item , 'information');
      },
      'onChannelItemClick': function (item: any) {

        var params = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "modelNo" : localStorage.getItem('modelNo'),
          "deviceversion" : localStorage.getItem('getDeviceversion'),
          "userType": localStorage.getItem('cv5usrType'),
          "userID" : localStorage.getItem('userliveId'),
          "Identity":localStorage.getItem('userIdentity'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "channel_name": localStorage.getItem('channel_name'),
          "channel_id" : localStorage.getItem('channel_id'),
          "itemName":item.name,
          "itemType":item.subTopicType,
          "categoryContentFor":"Channels"
        };
        that.clevertap_object.recordEventWithNameAndProps("clickedOnCategory", params); 

        if (item.subTopicType == 'video') {
          var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+item.id);

          that.database_provider_object.fetchAllData('information' , querystring).then(data => { 

            if(data[0].localUrl != ''){
              navCtrl.parent.parent.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'Channel' });
            }else{
              that.platform_object.ready().then(() => {
                var network_type = that.network_check_object.getNetworkType();
                if(network_type == 'none'){

                  that.toast_controller_object.create({
                  message: 'This video requires internet connection.',
                  position: 'bottom',
                  duration: 5000
                  }).present();
                } else {

                  navCtrl.parent.parent.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'Channel' });
                }
              });
            }
          });
        }else if(item.subTopicType == 'image'){
           if(item.localUrl){
            that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.name, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
          }
          else
          {
            that.navCtrl.parent.parent.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.name, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
          } 
        }else if (item.subTopicType == 'document'){
          if (item.localUrl != '') {
            var ref = that.in_app_browser_object.create(that.file_object.dataDirectory+item.localUrl, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

            ref.on('loadstop').subscribe((event) => {
              that.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe((event) => {            
              that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });

          }else{
            that.channelUrlpath = item.url;
            var network_type = that.network_check_object.getNetworkType();
            if(network_type == 'none'){
              that.toast_controller_object.create({
                message: 'You are now offline.',
                position: 'bottom',
                duration: 5000
              }).present();
            } else {
              var ref = that.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

              ref.on('loadstop').subscribe((event) => {
                that.screen_orientation_object.unlock();
              });
              ref.on('exit').subscribe((event) => {            
                that.screen_orientation_object.lock(that.screen_orientation_object.ORIENTATIONS.PORTRAIT);
              });
            }
          }
        }else if (item.subTopicType == 'other') {
          // code...
          //alert('other');
        }

      }
    };
  }



  ionViewDidLoad() {

    this.segment_name = localStorage.getItem('segment_name');

    
    if(this.segment_name == 'education'){
      if(this.request_from == 'whatsnew_page'){
        var whats_new_data = this.nav_params_object.get('data');
        setTimeout(() => {
          var that = this;
          var custom_data = [];
          _.each(whats_new_data, function(value,index){
            var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

              that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
                if(topic_data.length > 0){
                  custom_data.push(topic_data[0]);
                }
              });
          });
          this.data.items = custom_data;
        }, 1000); 
      }else{
        //alert('else didload alert');
        setTimeout(() => {
          var querystring:string[] = new Array(" WHERE name='"+this.newtopic_name+"' AND type='listing'");

          this.database_provider_object.fetchAllData('custom_listing', querystring).then(custom_listing_data => { 
                        
            var list_json_value = JSON.parse(custom_listing_data[0].list_values);
            console.log('list_json_value',list_json_value)
            var json_variable = '';
            switch(this.category_id){
              case '1':
                json_variable = list_json_value.Condition;
                break;
              case '2':
                json_variable = list_json_value.Treatment;
                break;
              case '3':
                json_variable = list_json_value.Device;
                break;  
            }
            var that = this;
            var custom_data = [];
            _.each(json_variable,function(value,index){
              var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

                that.database_provider_object.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
                  console.log('custom_data',topic_data)
                  if(topic_data.length > 0){
                    custom_data.push(topic_data[0]);
                  }
                }).catch((err)=>{
                  console.log('906  == err',err)
                });

            });
            console.log('custom_data',custom_data)
            this.data.items = custom_data;
          });
        }, 1000); 
      }
    }else if(this.segment_name == 'information'){

      setTimeout(() => {

        var querystring:string[] = new Array(" WHERE name='"+this.newtopic_name+"' AND type='info_listing'");

        this.database_provider_object.fetchAllData('custom_listing', querystring).then(info_custom_listing_data => { 
                      
          var list_json_value = JSON.parse(info_custom_listing_data[0].list_values);
          var json_variable = list_json_value.Expert;

          var that = this;
          var info_custom_data = [];
          _.each(json_variable,function(value,index){

            var json_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1");
             console.log('json_query --->'+JSON.stringify(json_query));
             //alert('json_query --->'+JSON.stringify(json_query));
            that.database_provider_object.fetchAllData('information' , json_query).then(info_topic_data => {
              if(info_topic_data.length > 0){
                info_custom_data.push(info_topic_data[0]);
              }
            });
          });
          this.data.items = info_custom_data;
        });

      }, 1000);
    }
    else if(this.segment_name == 'channel'){
      var channel_id = localStorage.getItem('channel_id');
        //alert('tab page 2 : channel_id--->'+channel_id);
      var channel_name = localStorage.getItem('channel_name');
        //alert('tab page 2 : channel_name--->'+channel_name);
      var shown_Content = 'video';


      var querystring:string[] = new Array(" WHERE name='"+channel_name+"' AND type='channel'");
      this.database_provider_object.fetchAllData('custom_listing', querystring).then(custom_listing_data => {   
      console.log('custom_listing_data--->'+JSON.stringify(custom_listing_data));                  
        var list_json_value = JSON.parse(custom_listing_data[0].list_values);
        console.log('list_json_value--->'+JSON.stringify(list_json_value));
        var json_variable = '';
        switch(shown_Content){
          case 'video':
            json_variable = list_json_value.video;
            break;
          case 'document':
            json_variable = list_json_value.document;
            break;
          case 'image':
            json_variable = list_json_value.image;
            break;
          case 'other':
            json_variable = list_json_value.other;
            break;      
        }
        var that = this;
        var custom_data = [];
        _.each(json_variable,function(value,index){
          console.log('value --->'+JSON.stringify(value));
          var json_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND information.subTopicType='"+shown_Content+"'");
           console.log('json_query --->'+JSON.stringify(json_query));
          that.database_provider_object.fetchAllData('information' , json_query).then(topic_data => {
            if(topic_data.length > 0){
              custom_data.push(topic_data[0]);
            }
          });
        });

        setTimeout(() => {
          //console.log('custom_data --->'+JSON.stringify(custom_data));
          this.data.items = custom_data;
        }, 300); 

      });
    }
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {

      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  imageCantDownload(){
    this.toast_service_object.mypresentToast("Only videos can be downloaded.",2000);
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((d) => {
      //this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }

  markasFavorite(group){
    //console.log('this.markasFavorite(item)=--->'+JSON.stringify(group));

   this.platform_object.ready().then(() => {
    var network_type = this.network_check_object.getNetworkType();
    if(network_type == 'none'){

      this.toast_controller_object.create({
        message: 'You are now offline.',
        position: 'bottom',
        duration: 5000
      }).present();
    } else {

      
   if(group.isFavourite == 0 ) {   
      //set isFavourite == 1
      this.storage_object.get('user_logged_in').then((val) => {
 
       //this.sqlite_sync.setFavorites(val, group.id);
       this.database_provider_object.setFavorites(val, group.id);
       this.toast_service_object.presentToast("Added to Favourites.");
     });
    } else {
      //set isFavourite == 0
      this.storage_object.get('user_logged_in').then((val) => {
        //this.sqlite_sync.setFavorites(val, group.id); 
        this.database_provider_object.setFavorites(val, group.id); 
        this.toast_service_object.presentToast("Removed from Favourites.");
      });
    }
    group.isFavourite = !group.isFavourite 

    }
   });
  }

  //download function
  downloadfile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

      var icon_url = 'icons/'+ name;

      var querystring:string[] = new Array(" UPDATE subtopic_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      this.database_provider_object.updateData(querystring);
    });  
  }

  //insert query to api database
  downloadapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "subtopicId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      console.log('response--->'+JSON.stringify(response));
      var response_data = JSON.stringify(response);
    }, error => {
      //alert("Live Api error" + error);
      console.log(error);
    }); 
  }


  isDownloadVideoMultiple() {

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();

      if(network_type == 'none'){
       
        this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();

      } else {

        var que_ids = localStorage.getItem('Downloadque');
        var progress_ids_arr = que_ids.split(',').map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        localStorage.setItem('Downloadque', que_ids);
        var progress_id = progress_ids_arr[0];
        if(progress_id == 0){
          progress_id = progress_ids_arr[1];
        }


        //if(this.download_status == 'complete') {

            this.download_status = 'inprogress';

            var userCondition = new Array("");
            this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
              this.userdata = user_data[0];
            });

            var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN ("+progress_id+")");

            this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => {
              
              const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              
              var item = data[0];
              //_.each(data,function(item,index){
                if(item.localUrl != ''){

                  var new_ids_arr = que_ids.split(',').map(Number);
                  var test_arr = [];
                  _.each(new_ids_arr, function(value, key){
                    if(value != item.id){
                      test_arr.push(value);
                    }
                  });
                  que_ids = test_arr.toString();
                  localStorage.setItem('Downloadque', que_ids);
                  
                  this.toast_service_object.presentToast('"'+item.name +'" already downloaded.');

                  if(que_ids == ''){
                    localStorage.setItem('Downloadque', '');
                  }
                  this.download_status = 'complete';

                }else{

                  this.toast_service_object.mypresentToast('Downloading: "'+item.name +'"',2000);

                  this.video_share_provider_object.downloadVideo(item, 'Education');
                  
                  var filename = item.url.split("/").pop();
                  var queue_data = {
                    download_url: item.url,
                    videoName: item.videoName,
                    id: item.id,
                    categoryId: item.categoryId,
                    subTopicType: item.subTopicType
                  };

                  fileTransfer.onProgress((progressEvent) => {
                    if (progressEvent.lengthComputable) {
                      this.isDownloading = true;

                      //var perc:any = 'perc'+item.id;
                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );

                      //var loader:any = 'loader'+item.id;
                      var loader = document.getElementById("progressBar_"+item.id);
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        loader.style.background = '';
                      }
                    }
                  });

                  fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

                    var video_url = 'V2CardioMedia/'+filename;

                    var querystring:string[] = new Array(" UPDATE subtopic_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = item.iconUrl.split("/").pop(); 
                    console.log('iconfilename--->'+iconfilename);
                    this.downloadfile(item.iconUrl, iconfilename, item.id);
                    this.downloadapi(item.id, this.userdata.liveId);
                    this.toast_service_object.mypresentToast('Finished downloading: "'+item.name +'"',2000);
                    this.download_status = 'complete';

                    var loader3 = document.getElementById("download_"+item.id);
                    loader3.classList.add("active");
                    
                    if(item.downloaded == 0) item.downloaded = 1;
                    this.download_status = 'complete';
                  },

                  (error) => {
                    this.toast_service_object.presentToast("Download failed! please try again.");
                    //alert('error '+JSON.stringify(error));
                  });

                  que_ids = localStorage.getItem('Downloadque');
                  var new_ids_arr = que_ids.split(',').map(Number);
                  var test_arr = [];
                  _.each(new_ids_arr, function(value, key){
                    if(value != item.id){
                      test_arr.push(value);
                    }
                  });

                  que_ids = test_arr.toString();
                  localStorage.setItem('Downloadque', que_ids);
                  this.download_status = 'complete';
                }

                if(que_ids != ''){
                  this.isDownloadVideoMultiple();
                }else if(que_ids == ''){
                  localStorage.setItem('Downloadque', '');
                }
              //});

            },(e)=>{ 
              //alert('586 error '+JSON.stringify(e))
            });

           }
        //} 
      });
  }

  //information tab logic start
  markasInfoFavorite(group){
    
   this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
      } else {

          
        if(group.isFavourite == 0 ) {
       
          //set isFavourite == 1
          this.storage_object.get('user_logged_in').then((val) => {
     
           this.database_provider_object.setinformationFavorites(val, group.id);
           this.toast_service_object.presentToast("Added to Favourites.");

         });
        } else {
          //set isFavourite == 0
            this.storage_object.get('user_logged_in').then((val) => {
       
             this.database_provider_object.setinformationFavorites(val, group.id); 
             this.toast_service_object.presentToast("Removed from Favourites.");
           });
        }

        group.isFavourite = !group.isFavourite 
      }
   });
  }

  isInfoDownloadVideoMultiple() {

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();

      if(network_type == 'none'){
       
        this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();

      } else {

        var que_ids = localStorage.getItem('InfoDownloadque');
        var progress_ids_arr = que_ids.split(',').map(Number);
        progress_ids_arr = _.uniq(progress_ids_arr);
        que_ids = progress_ids_arr.toString();
        localStorage.setItem('InfoDownloadque', que_ids);
        var progress_id = progress_ids_arr[0];
        if(progress_id == 0){
          progress_id = progress_ids_arr[1];
        }


        //if(this.download_status == 'complete') {

            this.download_status = 'inprogress';

            var userCondition = new Array("");
            this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
              this.userdata = user_data[0];
            });

            var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id IN ("+progress_id+")");

            this.database_provider_object.fetchAllData('information' , querystring).then(data => {
              
              const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              
              var item = data[0];
              //_.each(data,function(item,index){
                if(item.localUrl != ''){

                  var new_ids_arr = que_ids.split(',').map(Number);
                  var test_arr = [];
                  _.each(new_ids_arr, function(value, key){
                    if(value != item.id){
                      test_arr.push(value);
                    }
                  });
                  que_ids = test_arr.toString();
                  localStorage.setItem('InfoDownloadque', que_ids);
                  
                  this.toast_service_object.presentToast('"'+item.name +'" already downloaded.');

                  if(que_ids == ''){
                    localStorage.setItem('InfoDownloadque', '');
                  }
                  this.download_status = 'complete';

                }else{

                  this.toast_service_object.mypresentToast('Downloading: "'+item.name +'"',2000);
                  this.video_share_provider_object.downloadVideo(item, 'Information');

                  var filename = item.url.split("/").pop();
                  var queue_data = {
                    download_url: item.url,
                    videoName: item.videoName,
                    id: item.id,
                    categoryId: item.categoryId,
                    subTopicType: item.subTopicType
                  };

                  fileTransfer.onProgress((progressEvent) => {
                    if (progressEvent.lengthComputable) {
                      this.isDownloading = true;

                      //var perc:any = 'perc'+item.id;
                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );

                      //var loader:any = 'loader'+item.id;
                      var loader = document.getElementById("progressBar_"+item.id);
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      //var loader1:any = 'loader1'+item.id;
                      //var loader1 = document.getElementById("static_download_prog");
                      //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                      //loader1.innerHTML = 'Downloading is in progress...';
                     // loader1.style.padding = '10px';
                      //loader1.style.display = 'block';


                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        loader.style.background = '';
                        //loader1.innerHTML = '';
                        //loader1.style.padding = '';
                        //loader1.style.display = '';

                        var loader3 = document.getElementById("download_"+item.id);
                        loader3.classList.add("active");
                      }
                    }
                  });

                  fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

                    var video_url = 'V2CardioMedia/'+filename;

                    var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = item.iconUrl.split("/").pop(); 
                    console.log('iconfilename--->'+iconfilename);
                    this.downloadInfofile(item.iconUrl, iconfilename, item.id);
                    this.downloadInfoapi(item.id, this.userdata.liveId);
                    this.toast_service_object.mypresentToast('Finished downloading: "'+item.name +'"',2000);
                    this.download_status = 'complete';

                    var loader3 = document.getElementById("download_"+item.id);
                    loader3.classList.add("active");
                    
                    if(item.downloaded == 0) item.downloaded = 1;
                    this.download_status = 'complete';

                    //alert('dismiss');
                    //this.toast_dismiss();
                  },

                  (error) => {
                    this.toast_service_object.presentToast("Download failed! please try again.");
                    //alert('error '+JSON.stringify(error));
                  });

                  que_ids = localStorage.getItem('InfoDownloadque');
                  var new_ids_arr = que_ids.split(',').map(Number);
                  var test_arr = [];
                  _.each(new_ids_arr, function(value, key){
                    if(value != item.id){
                      test_arr.push(value);
                    }
                  });

                  que_ids = test_arr.toString();
                  localStorage.setItem('InfoDownloadque', que_ids);
                  this.download_status = 'complete';
                }

                if(que_ids != ''){
                  this.isInfoDownloadVideoMultiple();
                }else if(que_ids == ''){
                  localStorage.setItem('InfoDownloadque', '');
                }
              //});

            },(e)=>{ 
              //alert('586 error '+JSON.stringify(e))
            });

           }
        //} 
      });
  }
  downloadInfofile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

      var icon_url = 'icons/'+ name;

      var querystring:string[] = new Array(" UPDATE information_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      this.database_provider_object.updateData(querystring);
    });  
  }

  downloadInfoapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "informationId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      console.log('response--->'+JSON.stringify(response));
      var response_data = JSON.stringify(response);
    }, error => {
      //alert("Live Api error" + error);
      console.log(error);
    }); 
  }

   //information tab logic end

  addtoplaylist(item, contentType){
    var canShare = localStorage.getItem('userProAccess');
    
    if(canShare == 'true'){
      var userCondition = new Array("");
      this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
        this.userdata = user_data[0];
      });

      const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false
          }; 
      const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'Add to Playlist', video_data:item, type:contentType}, myModalOptions);

      myModal.present();
    }else{
      var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to create custom playlist.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    this.navCtrl.parent.parent.push('UpgradePlanPage');
                  }}
              ]
            });
      confirmPopup.present();      
    }
  }


}
