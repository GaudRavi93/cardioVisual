import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef, Injector } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, ToastController , Modal, ModalController, ModalOptions, AlertController , ActionSheetController, ViewController, MenuController, Platform} from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import * as _ from 'underscore/underscore';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { DatabaseProvider } from '../../providers/database/database';
import { ToastService } from '../../services/toast-service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CleverTap } from '@ionic-native/clevertap';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';

import { CallNumber } from '@ionic-native/call-number';

import { RadientSettingsProvider } from '../../providers/radient-settings/radient-settings';

declare const RadiantMP: any;
/**
 * Generated class for the VideoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window;
declare var cordova;
@IonicPage()
@Component({
  selector: 'info-page-video-details',
  templateUrl: 'information-video-details.html',
})
export class InformationVideoDetailsPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content) content: Content;
  @ViewChild('pageTop') pageTop: Content;
  video_url : any = {};
  playlistname : any = '';
  display_playlist : any = '';
  playlistindex : any = '';
  header:any;
  currentTimeInMilliSeconds:any;
  network_status: any;
  request_from: string;
  requested_tag: string;
  main_tab: string = "recommended_videos";
  sub_tab: string = "expert";
  search:string = '';
  percentage: any; 
  isDownloading: any;
  perc1:any;
  download_count: any;
  userdata: any;
  video_data : any;
  type : any;
  controls: boolean = false;
  loop: boolean = false;
  preload: string = 'auto';
  nativeFs: boolean = true;
  //isFullscreen: boolean = true;
  playlist: any;
  localVideoUrl: any;
  currentVideo = 0;
  totalVideos: any;
  classEnded: boolean = false;
  api: any;
  dtStr : any;
  clevertapDate : any;
  sources : Array<Object>;
  playsitsources : Array<Object>;
  orientation: string;
  pageHistory:string;
  playPause:string = 'startPlay';
  contact_Sales: any;
  videoIdformenu:any;
  videoTagformenu:any;
  userTypeformenu:string;
  disscussforvideomenu:any;
  possibleButtons: any;
  action: any;
  imgSHownOnline:any;
  videoData:any;
  actualvideoduration:any;
  videoViewEvent: boolean = false;
  onProgressSet1: any;
  offlineView: boolean = false;
  network_type:any;
  srcSource: string;
  local_IconUrl: string;
  CurrentPlaylistObject:any;
  category_data:any
  topic_data:any
  rmp: any = null;
  playlistrmp: any = null;
  path:any;
  comesfrom:any
  lastVideoIndex: any;
  share_Url: any;
  forvideo_Obj: any;
  nav_params_object: NavParams;
  http_service_object: HttpService;
  toast_controller_object: ToastController;
  storage_object: Storage;
  network_object: Network;
  http_object: Http;
  social_sharing_object: SocialSharing;
  database_provider_object: DatabaseProvider;
  toast_service_object: ToastService;
  file_transfer_object: FileTransfer;
  platform_object: Platform;
  file_object: File;
  in_app_browser_object: InAppBrowser;
  modal_controllar_object: ModalController;
  alert_controller_object: AlertController;
  clevertap_object: CleverTap;
  screen_orientation_object: ScreenOrientation;
  network_check_object: NetworkCheckProvider;
  video_share_provider_object: VideosharesocialProvider;
  action_sheet_controller_object: ActionSheetController;
  call_number_object: CallNumber;
  radiant_setting_provider_object: RadientSettingsProvider;
  menu_controller_object: MenuController;

  constructor(public navCtrl: NavController,public injector: Injector) {
        
    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.storage_object = injector.get<Storage>(Storage);
    this.network_object = injector.get<Network>(Network);
    this.http_object = injector.get<Http>(Http);
    this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
    this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
    this.platform_object = injector.get<Platform>(Platform);
    this.file_object = injector.get<File>(File);
    this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
    this.modal_controllar_object = injector.get<ModalController>(ModalController);
    this.alert_controller_object = injector.get<AlertController>(AlertController);
    this.clevertap_object = new CleverTap();
    this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
    this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
    this.action_sheet_controller_object = injector.get<ActionSheetController>(ActionSheetController);
    this.call_number_object = injector.get<CallNumber>(CallNumber);
    this.radiant_setting_provider_object = injector.get<RadientSettingsProvider>(RadientSettingsProvider);
    this.menu_controller_object = injector.get<MenuController>(MenuController);

    this.dtStr = this.http_service_object.dtStr();
    this.clevertapDate = this.http_service_object.clevertapDate();
    var localPath = this.file_object.dataDirectory;
    this.path = localPath.replace(/file:\/\//g, "");
    this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
    this.network_status = 'connected';
    this.network_object.onDisconnect().subscribe(() => {
      this.network_status = 'not_connected';
    });

    this.network_object.onConnect().subscribe(() => {
      this.network_status = 'connected';
    });
    this.imgSHownOnline = this.network_check_object.getNetworkType();
    if( this.imgSHownOnline != 'none') {
      this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
    }
    this.request_from = this.nav_params_object.get("request_from");
    this.requested_tag = this.nav_params_object.get("tag");
    this.comesfrom = this.nav_params_object.get("sendTo");
    this.userTypeformenu = localStorage.getItem('cv5usrType');
    //var type = '';
    var playlistindex = '';
    this.network_type = this.network_check_object.getNetworkType();
    if(this.network_type == 'none'){
      this.offlineView = true;      
    }

    var data =  this.nav_params_object.get('data');
    this.data = data;
    this.video_data = data;
    this.playlistname = '';
    this.type = this.nav_params_object.get('type');

    var newTopicId =data.topicId;

    this.data.type = this.type;
    playlistindex = this.nav_params_object.get('index');
    this.playlistindex = playlistindex;

    this.data.expert = '';
    this.data.learn = '';
    this.data.featured = '';
    this.data.product = '';
    this.data.playlist = '';

    var src_Source = this.file_object.dataDirectory+'V2CardioMedia/'+this.video_data.videoName;
    this.srcSource = src_Source.replace(/file:\/\//g, "");
    var localIconUrl = this.file_object.dataDirectory+data.localIconUrl;
    this.local_IconUrl = localIconUrl.replace(/file:\/\//g, "");
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad information video details');
    var frmbranch = this.nav_params_object.get('frmbranch');
    var expert_data = [];
    var learn_data = [];
    var featured_data = [];
    var product_data = [];
        
    switch(true){
      case((this.type != 'playlist' || this.type == undefined) && this.network_type != 'none' && this.request_from == 'tag' && this.video_data.localUrl != ''):
        var category_id = this.data.categoryId;
        this.presentToast(this.data.copyrightInfo);
        this.disscussforvideomenu = this.data;
        this.forvideomenuItem(this.data.id, this.data.tag); 
        setTimeout(() => {
          this.network_check_object.getVideoTagCountAction(this.data.tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.data);
        }, 2000);
        var that = this;
        var tag_query:string[] = new Array("WHERE name='"+this.requested_tag+"' AND type='orientation'");
        this.database_provider_object.fetchAllData('custom_listing' , tag_query).then(info_custom_listing_data => {
          var list_json_value = JSON.parse(info_custom_listing_data[0].list_values);

          _.each(list_json_value.Expert,function(value,index){

            var expert_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");
            that.database_provider_object.fetchAllData('information' , expert_query).then(expertData => {
              expert_data.push(expertData[0]);
            });
          });
          this.data.expert = expert_data;

          _.each(list_json_value.Learn,function(value,index){

            var learn_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

            that.database_provider_object.fetchAllData('information' , learn_query).then(learnData => {
              learn_data.push(learnData[0]);
            });
          });
          this.data.learn = learn_data;

          _.each(list_json_value.Featured,function(value,index){

            var featured_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

            that.database_provider_object.fetchAllData('information' , featured_query).then(featuredData => {
              featured_data.push(featuredData[0]);       
            });
          });
          this.data.featured = featured_data;

           _.each(list_json_value.Product,function(value,index){

            var product_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

            that.database_provider_object.fetchAllData('information' , product_query).then(productData => {
              product_data.push(productData[0]);
            });
          });
          this.data.product = product_data;
        });
        setTimeout(() => {  
          this.radiant_setting_provider_object.forPlayClickTrigger(that.video_data,that.possibleButtons);  
        }, 1000); 

        this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",this.video_data.imageName).then(buffer => {
          const imageBlob = new Blob([new Uint8Array(buffer)], {type: 'image/bmp'});
          const imageURL = URL.createObjectURL(imageBlob);
          
          this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "V2CardioMedia/",this.video_data.videoName).then(buffer =>{
            const videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
            const videoURL = URL.createObjectURL(videoBlob);
        var informationvideoData = [{
          src: {
            mp4: [videoURL]
          },
          contentMetadata: {
            videoContentFor:'Information',
            videoId:this.video_data.id,
            name: this.video_data.name,
            tag: this.video_data.tag,
            thumbnail: imageURL,
            poster: [imageURL]
          }
        }];
        this.radiant_setting_provider_object.setVideoSrcObject(informationvideoData);
});
        });

        var videoDetail_launch = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "comesFrom" : this.comesfrom,
          "contentFor" : "Information",
          "videoId":this.video_data.id,
          "videoName":this.video_data.name,
          "videoTag":this.video_data.tag
        };

        that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch);
        break;
      case((this.type != 'playlist' || this.type == undefined) && this.network_type != 'none' && this.request_from == 'tag' && this.video_data.localUrl == ''):
        var category_id = this.data.categoryId;
        this.presentToast(this.data.copyrightInfo);
        this.disscussforvideomenu = this.data;
        this.forvideomenuItem(this.data.id, this.data.tag); 
        setTimeout(() => {
          this.network_check_object.getVideoTagCountAction(this.data.tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.data);
        }, 2000);
        var that = this;
        var tag_query:string[] = new Array("WHERE name='"+this.requested_tag+"' AND type='orientation'");
        this.database_provider_object.fetchAllData('custom_listing' , tag_query).then(info_custom_listing_data => {
          var list_json_value = JSON.parse(info_custom_listing_data[0].list_values);

          _.each(list_json_value.Expert,function(value,index){

            var expert_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");
            that.database_provider_object.fetchAllData('information' , expert_query).then(expertData => {
              expert_data.push(expertData[0]);
            });
          });
          this.data.expert = expert_data;

          _.each(list_json_value.Learn,function(value,index){

            var learn_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

            that.database_provider_object.fetchAllData('information' , learn_query).then(learnData => {
              learn_data.push(learnData[0]);
            });
          });
          this.data.learn = learn_data;

          _.each(list_json_value.Featured,function(value,index){

            var featured_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

            that.database_provider_object.fetchAllData('information' , featured_query).then(featuredData => {
              featured_data.push(featuredData[0]);       
            });
          });
          this.data.featured = featured_data;

           _.each(list_json_value.Product,function(value,index){

            var product_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

            that.database_provider_object.fetchAllData('information' , product_query).then(productData => {
              product_data.push(productData[0]);
            });
          });
          this.data.product = product_data;
        });
        setTimeout(() => {  
          this.radiant_setting_provider_object.forPlayClickTrigger(that.video_data,that.possibleButtons);  
        }, 1000); 

        var informationvideoData1 = [{
          src: {
            mp4: [this.video_data.url]
          },
          contentMetadata: {
            videoContentFor:'Information',
            videoId:this.video_data.id,
            name: this.video_data.name,
            tag: this.video_data.tag,
            thumbnail: this.video_data.iconUrl,
            poster: [this.video_data.iconUrl]
          }
        }];
        this.radiant_setting_provider_object.setVideoSrcObject(informationvideoData1);
        var videoDetail_launch = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "comesFrom" : this.comesfrom,
          "contentFor" : "Information",
          "videoId":this.video_data.id,
          "videoName":this.video_data.name,
          "videoTag":this.video_data.tag
        };

        that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch);
        break;  
      case((this.type != 'playlist' || this.type == undefined) && this.request_from != 'tag' && this.video_data.localUrl != ''):
        var category_id = this.data.categoryId;
        this.presentToast(this.data.copyrightInfo);
        this.disscussforvideomenu = this.data;
        this.forvideomenuItem(this.data.id, this.data.tag); 
        setTimeout(() => {
          this.network_check_object.getVideoTagCountAction(this.data.tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.data);
        }, 2000);
        var that = this;

        var query:string[] = new Array("WHERE sub_topic_id ='"+this.data.id+"' AND type='video'");
        var query_2:string[] = new Array("WHERE name ='"+this.data.tag+"' AND type='info_tag'");

        this.database_provider_object.fetchAllData('custom_video_json' , query).then(info_custom_video_json_data => {
          if(info_custom_video_json_data.length > 0){
            var list_json_value = JSON.parse(info_custom_video_json_data[0].list_values);
            _.each(list_json_value.Expert,function(value,index){
              var expert_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , expert_query).then(expertData => {
                expert_data.push(expertData[0]);
              });
            });
            this.data.expert = expert_data;

            _.each(list_json_value.Learn,function(value,index){

              var learn_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , learn_query).then(learnData => {
               learn_data.push(learnData[0]);
              });
            });
            this.data.learn = learn_data;

            _.each(list_json_value.Featured,function(value,index){

              var featured_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , featured_query).then(featuredData => {
                featured_data.push(featuredData[0]);
              });
            });
            this.data.featured = featured_data;

            _.each(list_json_value.Product,function(value,index){

              var product_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , product_query).then(productData => {
                product_data.push(productData[0]);
              });
            });
            this.data.product = product_data;           
          }else{
            this.database_provider_object.fetchAllData('custom_listing' , query_2).then(info_custom_listing_data => {
              var topic_id = this.data.topicId;
              var list_json_value = JSON.parse(info_custom_listing_data[0].list_values);
              _.each(list_json_value[topic_id].Expert,function(value,index){

                var expert_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

                that.database_provider_object.fetchAllData('information' , expert_query).then(expertData => {
                  expert_data.push(expertData[0]);
                });
              });
              this.data.expert = expert_data;

              _.each(list_json_value[topic_id].Learn,function(value,index){

                var learn_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

                that.database_provider_object.fetchAllData('information' , learn_query).then(learnData => {
                  learn_data.push(learnData[0]);
                });
              });
              this.data.learn = learn_data;

              _.each(list_json_value[topic_id].Featured,function(value,index){

                var featured_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

                that.database_provider_object.fetchAllData('information' , featured_query).then(featuredData => {
                  featured_data.push(featuredData[0]);
                });
              });
              this.data.featured = featured_data; 

              _.each(list_json_value[topic_id].Product,function(value,index){

                var product_query:string[] =new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");
                that.database_provider_object.fetchAllData('information' , product_query).then(productData => {
                  product_data.push(productData[0]);
                });
              });
              this.data.product = product_data; 
            });
          }
        });

        setTimeout(() => {  
          this.radiant_setting_provider_object.forPlayClickTrigger(that.video_data,that.possibleButtons);  
        }, 1000); 
        this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",this.data.imageName).then(buffer => {
          const imageBlob = new Blob([new Uint8Array(buffer)], {type: 'image/bmp'});
          const imageURL = URL.createObjectURL(imageBlob);
          
          this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "V2CardioMedia/",that.video_data.videoName).then(buffer =>{
            const videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
            const videoURL = URL.createObjectURL(videoBlob);

            const informationvideoData = [{
          src: {
            mp4: [videoURL]
          },
          contentMetadata: {
            videoContentFor:'Information',
            videoId:this.video_data.id,
            name: this.video_data.name,
            tag: this.video_data.tag,
            thumbnail: imageURL,
            poster: [imageURL]
          }
        }];
        this.radiant_setting_provider_object.setVideoSrcObject(informationvideoData);
});
        });

        var videoDetail_launch = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "comesFrom" : this.comesfrom,
          "contentFor" : "Information",
          "videoId":this.video_data.id,
          "videoName":this.video_data.name,
          "videoTag":this.video_data.tag
        };

        that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch);
        break;
      case((this.type != 'playlist' || this.type == undefined) && this.network_type != 'none' && this.request_from != 'tag' && this.video_data.localUrl == ''):
        var category_id = this.data.categoryId;
        this.presentToast(this.data.copyrightInfo);
        this.disscussforvideomenu = this.data;
        this.forvideomenuItem(this.data.id, this.data.tag); 
        setTimeout(() => {
          this.network_check_object.getVideoTagCountAction(this.data.tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.data);
        }, 2000);
        var that = this;

        var query:string[] = new Array("WHERE sub_topic_id ='"+this.data.id+"' AND type='video'");
        var query_2:string[] = new Array("WHERE name ='"+this.data.tag+"' AND type='info_tag'");

        this.database_provider_object.fetchAllData('custom_video_json' , query).then(info_custom_video_json_data => {
          if(info_custom_video_json_data.length > 0){
            var list_json_value = JSON.parse(info_custom_video_json_data[0].list_values);
            _.each(list_json_value.Expert,function(value,index){
              var expert_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , expert_query).then(expertData => {
                expert_data.push(expertData[0]);
              });
            });
            this.data.expert = expert_data;

            _.each(list_json_value.Learn,function(value,index){

              var learn_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , learn_query).then(learnData => {
                learn_data.push(learnData[0]);
              });
            });
            this.data.learn = learn_data;

            _.each(list_json_value.Featured,function(value,index){

              var featured_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , featured_query).then(featuredData => {
                featured_data.push(featuredData[0]);
              });
            });
            this.data.featured = featured_data;

            _.each(list_json_value.Product,function(value,index){

              var product_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

              that.database_provider_object.fetchAllData('information' , product_query).then(productData => {
                product_data.push(productData[0]);
              });
            });
            this.data.product = product_data;           
          }else{
            this.database_provider_object.fetchAllData('custom_listing' , query_2).then(info_custom_listing_data => {
              //alert('for custom_listing ----->'+JSON.stringify(info_custom_listing_data));
              var topic_id = this.data.topicId;

              var list_json_value = JSON.parse(info_custom_listing_data[0].list_values);
              _.each(list_json_value[topic_id].Expert,function(value,index){

                var expert_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

                that.database_provider_object.fetchAllData('information' , expert_query).then(expertData => {
                  expert_data.push(expertData[0]);
                });
              });
              this.data.expert = expert_data;

              _.each(list_json_value[topic_id].Learn,function(value,index){

                var learn_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

                that.database_provider_object.fetchAllData('information' , learn_query).then(learnData => {
                  learn_data.push(learnData[0]);
                });
              });
              this.data.learn = learn_data;

              _.each(list_json_value[topic_id].Featured,function(value,index){

                var featured_query:string[] = new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");

                that.database_provider_object.fetchAllData('information' , featured_query).then(featuredData => {
                  featured_data.push(featuredData[0]);
                });
              });
              this.data.featured = featured_data; 

              _.each(list_json_value[topic_id].Product,function(value,index){

                var product_query:string[] =new Array("join information_data on information.id = information_data.id where information.id = "+value+" AND isActive = 1 AND (information.subTopicType = 'video' OR information.subTopicType = 'image')");
                that.database_provider_object.fetchAllData('information' , product_query).then(productData => {
                  product_data.push(productData[0]);
                });
              });
              this.data.product = product_data; 
            });
          }
        });

        setTimeout(() => {  
          this.radiant_setting_provider_object.forPlayClickTrigger(that.video_data,that.possibleButtons);  
        }, 1000); 
        var informationvideoData1 = [{
          src: {
            mp4: [this.video_data.url]
          },
          contentMetadata: {
            videoContentFor:'Information',
            videoId:this.video_data.id,
            name: this.video_data.name,
            tag: this.video_data.tag,
            thumbnail: this.video_data.iconUrl,
            poster: [this.video_data.iconUrl]
          }
        }];
        this.radiant_setting_provider_object.setVideoSrcObject(informationvideoData1);
        var videoDetail_launch = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "comesFrom" : this.comesfrom,
          "contentFor" : "Information",
          "videoId":this.video_data.id,
          "videoName":this.video_data.name,
          "videoTag":this.video_data.tag
        };

        that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch);
        break;  
      case(this.type == 'playlist' && frmbranch == 'branchplaylist' && this.network_type != 'none'):
        var playName = this.nav_params_object.get("playListName");
        this.playlistname = playName;
        this.data.playlist = this.data;
        this.share_Url = this.data.shareUrl;
        this.totalVideos = this.data.length;
        this.forvideo_Obj = _.filter(this.data,function(videoObj){
          return (videoObj.subTopicType == 'video');
        });
        this.presentToast(this.data[this.currentVideo].copyrightInfo);

        var informationarr = [];

        var brnchlen = _.size(that.forvideo_Obj);

        for (var i = 0; i < brnchlen; i++) {

          informationarr.push({
            src: {
              mp4: [this.forvideo_Obj[i].url]
            },
            contentMetadata: {
              videoContentFor:'Information',
              videoId:this.forvideo_Obj[i].id,
              name:this.forvideo_Obj[i].name,
              tag:this.forvideo_Obj[i].tag,
              thumbnail: this.forvideo_Obj[i].iconUrl,
              poster: [this.forvideo_Obj[i].iconUrl]
            }
          });
        }
        setTimeout(() => {
          this.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(informationarr);
          var playlistRmpContainer = document.getElementById('rmpPlayer');
          var that = this;
          playlistRmpContainer.addEventListener('srcchanging', function() {
            console.log('playlist has start the changing new src');
            that.changingPlayerSource();  
          });
        }, 1000); 
        this.display_playlist = this.data.playlist[this.playlistindex];

        var that = this;  
        that.disscussforvideomenu = that.data.playlist[that.playlistindex];  
        that.videoIdformenu = that.data.playlist[that.playlistindex].id;  
        that.videoTagformenu = that.data.playlist[that.playlistindex].tag;  
        that.forvideomenuItem( that.videoIdformenu,that.videoTagformenu);    
        setTimeout(() => {  
          that.network_check_object.getVideoTagCountAction(that.videoTagformenu,that.userTypeformenu,localStorage.getItem('userliveId'),"",that.possibleButtons,that.disscussforvideomenu );  
        }, 2000);
        setTimeout(() => {  
          that.radiant_setting_provider_object.forPlayClickTrigger(that.data.playlist[that.playlistindex],that.possibleButtons);  
        }, 1000); 
        var videoDetailLaunch1 = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "comesFrom" : this.comesfrom,
          "contentFor" : "Information",
          "videoId":this.display_playlist.id,
          "videoName":this.display_playlist.name,
          "videoTag":this.display_playlist.tag
        };

        this.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetailLaunch1);
        this.lastVideoIndex =_.findLastIndex(this.data.playlist, {
          subTopicType: 'video'
        });

        this.radiant_setting_provider_object.playListNameWithLastIndex(this.playlistname, this.lastVideoIndex, this.share_Url);
        break;  
      case(this.type == 'playlist' && frmbranch != 'branchplaylist' && this.network_type != 'none'):
        var subtopics_id = this.data.subTopicIds;
        this.playlistname = this.data.name;
        this.share_Url = this.data.shareUrl
        this.data.playlist = this.data.items;
        this.disscussforvideomenu = this.data.playlist[this.playlistindex];
        this.videoIdformenu = this.data.playlist[this.playlistindex].id;
        this.videoTagformenu = this.data.playlist[this.playlistindex].tag;
        this.forvideomenuItem( this.videoIdformenu,this.videoTagformenu);
        setTimeout(() => {
          this.network_check_object.getVideoTagCountAction(this.videoTagformenu,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.disscussforvideomenu );
        }, 2000);
        this.totalVideos = this.data.items.length;
        this.presentToast(this.data.items[this.currentVideo].copyrightInfo);

        this.forvideo_Obj = _.filter(this.data.items,function(videoObj){
          return (videoObj.subTopicType == 'video');
        });

        var informationarr = await this.createPlaylist();
          this.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(informationarr);
          var playlistRmpContainer = document.getElementById('rmpPlayer');
          var that = this;
          playlistRmpContainer.addEventListener('srcchanging', function() {
            console.log('playlist has start the changing new src');
            that.changingPlayerSource();  
          });

                this.display_playlist = this.data.playlist[this.playlistindex];
          var videoDetailLaunch1 = {
          "record_time" : that.dtStr,
          "record_date" : that.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "comesFrom" : this.comesfrom,
          "contentFor" : "Information",
          "videoId":this.display_playlist.id,
          "videoName":this.display_playlist.name,
          "videoTag":this.display_playlist.tag
        };
        this.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetailLaunch1);
        this.lastVideoIndex =_.findLastIndex(this.data.playlist, {
          subTopicType: 'video'
        });
        this.radiant_setting_provider_object.playListNameWithLastIndex(this.playlistname, this.lastVideoIndex, this.share_Url);
        break;  
    
    }

    this.pageHistory = this.nav_params_object.get('previousPage');
    this.platform_object.registerBackButtonAction(() => {
      if (this.pageHistory =="OrientationPlaylistHcp" || this.pageHistory =="OrientationPlaylistNonHcp") {
        this.navCtrl.setRoot('WhatsNewPage');
      }else if (this.pageHistory =="fromSideMenu") {
        this.navCtrl.setRoot('WhatsNewPage');
      }else{
        this.navCtrl.pop();
      }
    });
  }

  async createPlaylist() {
    const arr = [];
    const getImageData = async (data) => {
      try {
        const imageBuffer = await this.file_object.readAsArrayBuffer(this.file_object.dataDirectory + "icons/", data.imageName);
        const imageBlob = new Blob([new Uint8Array(imageBuffer)], { type: 'image/bmp' });
        const imageURL = URL.createObjectURL(imageBlob);
        return imageURL;
      } catch (e) {
        return data.iconUrl || data.url;
      }
    };
  
    const getVideoData = async (data) => {
      try {
        const videoBuffer = await this.file_object.readAsArrayBuffer(this.file_object.dataDirectory + "V2CardioMedia/", data?.videoName);
        const videoBlob = new Blob([new Uint8Array(videoBuffer)], { type: 'video/mp4' });
        const videoURL = URL.createObjectURL(videoBlob);
        return videoURL;
      } catch (e) {
        return data.url;
      }
    };
  
    const processItem = async (data, i) => {
      const imageURL = await getImageData(data);
      const videoURL = await getVideoData(data);
  
      arr[i] = {
        src: {
          mp4: [videoURL]
        },
        contentMetadata: {
          videoContentFor: 'Education',
          videoId: data.id,
          name: data.name,
          tag: data.tag,
          thumbnail: imageURL,
          poster: [imageURL]
        }
      };
    };
  
    await Promise.all(this.forvideo_Obj.map(async (data, i) => processItem(data, i)));
    this.radiant_setting_provider_object.forPlayClickTrigger(this.data.playlist[this.playlistindex], this.possibleButtons);
    return arr;
  }

  ionViewDidEnter() {
    this.orientation = this.screen_orientation_object.type;
    this.screen_orientation_object.unlock();
    this.menu_controller_object.swipeEnable(false);
  }

  ionViewWillLeave(){

    this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);

    var network_type = this.network_check_object.getNetworkType();
    if(network_type == 'none'){
      localStorage.setItem('offline', 'yes');
    } else {
      localStorage.setItem('offline', 'no');
    }

    this.menu_controller_object.swipeEnable(true);
    this.rmp = new RadiantMP('rmpPlayer1');
    this.playlistrmp = new RadiantMP('rmpPlayer');

    this.rmp.pause();
    this.playlistrmp.pause();
  }




  onEvent(event: string, item: any, e: any) {
    var canShare = localStorage.getItem('userProAccess');
    var network_type = this.network_check_object.getNetworkType();
    var category_querystring:string[] = new Array(" WHERE id="+item.categoryId);
    var downloadque = localStorage.getItem('Downloadque');

    this.database_provider_object.fetchAllData('new_category' , category_querystring).then(cat_data => { 
      this.category_data = cat_data;
    });

    var topic_querystring:string[] = new Array(" WHERE id="+item.topicId);
    this.database_provider_object.fetchAllData('new_topics' , topic_querystring).then(topic_data => { 
      this.topic_data = topic_data;
    });

    var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+item.id);
    this.database_provider_object.fetchAllData('information' , querystring).then(data => {

      switch(true){
        case(event == 'onItemClick' && item.subTopicType == 'video' && (data[0].isPaid == 0 || canShare == 'true') && network_type != 'none' && data[0].localUrl != ''):
          this.playPause = 'startPlay';
          this.disscussforvideomenu = data[0];
          this.video_data = data[0];
          this.forvideomenuItem(data[0].id, data[0].tag);
            
          setTimeout(() => {
            this.network_check_object.getVideoTagCountAction(data[0].tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,data[0]);
          }, 1000); 
          setTimeout(() => {
            this.network_check_object.forTriggersDetalsPageBACKAction("InformationVideoDetailsPage","forRelateditemClick")
          }, 2000);
          setTimeout(() => {
            this.radiant_setting_provider_object.forPlayClickTrigger(this.video_data,this.possibleButtons);  
          }, 1000);
          localStorage.setItem('offline', 'yes');
          var srcSource = (this.file_object.dataDirectory+'V2CardioMedia/'+data[0].videoName).replace(/file:\/\//g, "");
          var local_IconUrl = (this.file_object.dataDirectory+data[0].localIconUrl).replace(/file:\/\//g, "");

          this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",data[0].imageName).then(buffer => {
            const imageBlob = new Blob([new Uint8Array(buffer)], {type: 'image/bmp'});
            const imageURL = URL.createObjectURL(imageBlob);
            
            this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "V2CardioMedia/",data[0].videoName).then(buffer =>{
              const videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
              const videoURL = URL.createObjectURL(videoBlob);
              
              const playlistData2 = [{
            src: {
              mp4: [videoURL]
            },
            contentMetadata: {
              videoContentFor:'Information',
              videoId:data[0].id,
              name: data[0].name,
              tag: data[0].tag,
              thumbnail: imageURL,
              poster: [imageURL]
            }
          }];
          this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData2);
});
          });
          
          this.pageTop.scrollToTop();
          this.presentToast(data[0].copyrightInfo);
          var params = {
            "record_time" : this.dtStr,
            "record_date" : this.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "modelNo" : localStorage.getItem('modelNo'),
            "deviceversion" : localStorage.getItem('getDeviceversion'),
            "userRoleId" : localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "category_name" : this.category_data[0].name,
            "topic_name": this.topic_data[0].name,
            "userEmail" : localStorage.getItem('cv5userEmail'),
            "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
            "file" : item.name,
            "videoName" : item.videoName,
            "location":localStorage.getItem('location'),
            "specialities":localStorage.getItem('usrSpecialities'),
            "clickedVideoContentFor":"Information",
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
          };
          this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
          break;
        case(event == 'onItemClick' && item.subTopicType == 'video' && data[0].isPaid == 1 && canShare != 'true'):
          var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    this.navCtrl.push('UpgradePlanPage');
                  }}]
          });
          confirmPopup.present();
          break;        
        case(event == 'onItemClick' && item.subTopicType == 'video' && (data[0].isPaid == 0 || canShare == 'true') && network_type == 'none' && data[0].localUrl != ''):
          this.playPause = 'startPlay';
          this.disscussforvideomenu = data[0];
          this.video_data = data[0];
          this.forvideomenuItem(data[0].id, data[0].tag);
          setTimeout(() => {
            this.radiant_setting_provider_object.forPlayClickTrigger(this.video_data,this.possibleButtons);  
          }, 1000);
          localStorage.setItem('offline', 'yes');
          var srcSource = (this.file_object.dataDirectory+'V2CardioMedia/'+data[0].videoName).replace(/file:\/\//g, "");
          var local_IconUrl = (this.file_object.dataDirectory+data[0].localIconUrl).replace(/file:\/\//g, "");

this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",data[0].imageName).then(buffer => {
            const imageBlob = new Blob([new Uint8Array(buffer)], {type: 'image/bmp'});
            const imageURL = URL.createObjectURL(imageBlob);
            
            this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "V2CardioMedia/",data[0].videoName).then(buffer =>{
              const videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
              const videoURL = URL.createObjectURL(videoBlob);
          var playlistData2 = [{
            src: {
              mp4: [videoURL]
            },
            contentMetadata: {
              videoContentFor:'Information',
              videoId:data[0].id,
              name: data[0].name,
              tag: data[0].tag,
              thumbnail: imageURL,
              poster: [imageURL]
            }
          }];
          this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData2);
});
          });

          this.pageTop.scrollToTop();
          this.presentToast(data[0].copyrightInfo);
          var params = {
            "record_time" : this.dtStr,
            "record_date" : this.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "modelNo" : localStorage.getItem('modelNo'),
            "deviceversion" : localStorage.getItem('getDeviceversion'),
            "userRoleId" : localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "category_name" : this.category_data[0].name,
            "topic_name": this.topic_data[0].name,
            "userEmail" : localStorage.getItem('cv5userEmail'),
            "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
            "file" : item.name,
            "videoName" : item.videoName,
            "location":localStorage.getItem('location'),
            "specialities":localStorage.getItem('usrSpecialities'),
            "clickedVideoContentFor":"Information",
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
          };
          this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
          break;
        case(event == 'onItemClick' && item.subTopicType == 'video' && (data[0].isPaid == 0 || canShare == 'true') && network_type == 'none' && data[0].localUrl == ''):
          this.toast_controller_object.create({
            message: 'This video requires internet connection.',
            position: 'bottom',
            duration: 5000
          }).present();
          break;
        case(event == 'onItemClick' && item.subTopicType == 'video' && (data[0].isPaid == 0 || canShare == 'true') && network_type != 'none' && data[0].localUrl == ''):
          this.playPause = 'startPlay';
          this.disscussforvideomenu = data[0];
          this.video_data = data[0];
          this.forvideomenuItem(data[0].id, data[0].tag);
            
          setTimeout(() => {
            this.network_check_object.getVideoTagCountAction(data[0].tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,data[0]);
          }, 1000); 
          setTimeout(() => {
            this.network_check_object.forTriggersDetalsPageBACKAction("InformationVideoDetailsPage","forRelateditemClick")
          }, 2000);
          setTimeout(() => {
            this.radiant_setting_provider_object.forPlayClickTrigger(this.video_data,this.possibleButtons);  
          }, 1000);

          localStorage.setItem('offline', 'no');
          var playlistData3 = [{
            src: {
              mp4: [data[0].url]
            },
            contentMetadata: {
              videoContentFor:'Information',
              videoId:data[0].id,
              name: data[0].name,
              tag: data[0].tag,
              thumbnail: data[0].iconUrl,
              poster: [data[0].iconUrl]
            }
          }];
          this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData3);
          this.pageTop.scrollToTop(); 
          this.presentToast(data[0].copyrightInfo); 
          var params = {
            "record_time" : this.dtStr,
            "record_date" : this.clevertapDate,
            "os" : localStorage.getItem('getDevicePlatform'),
            "modelNo" : localStorage.getItem('modelNo'),
            "deviceversion" : localStorage.getItem('getDeviceversion'),
            "userRoleId" : localStorage.getItem('cv5userRoleId'),
            "userType": localStorage.getItem('cv5usrType'),
            "category_name" : this.category_data[0].name,
            "topic_name": this.topic_data[0].name,
            "userEmail" : localStorage.getItem('cv5userEmail'),
            "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
            "file" : item.name,
            "videoName" : item.videoName,
            "location":localStorage.getItem('location'),
            "specialities":localStorage.getItem('usrSpecialities'),
            "clickedVideoContentFor":"Information",
            "subSpecialities": localStorage.getItem('cv5usrRolesubType')
          };
          this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
          break;
        case(event == 'onItemClick' && item.subTopicType == 'image' && item.localUrl != ''):
          this.navCtrl.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
          break;
        case(event == 'onItemClick' && item.subTopicType == 'image' && item.localUrl == ''):
          this.navCtrl.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
          break;
        
        case(event == 'onDownload' && e.isTrusted && item.isDownloadable == 1 && canShare == 'true' && network_type == 'none'):
          this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();
          e.stopPropagation();
          break;
        case(event == 'onDownload' && e.isTrusted && item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
          downloadque = item.id;
          localStorage.setItem('Downloadque', downloadque);
          this.isDownloadVideoMultiple();
          e.stopPropagation();
          break;
        case(event == 'onDownload' && e.isTrusted && item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && downloadque != ''):
          downloadque = downloadque + ','+item.id;
          localStorage.setItem('Downloadque', downloadque);
          this.isDownloadVideoMultiple();
          e.stopPropagation();
          break;  
        case(event == 'onDownload' && e.isTrusted && item.isDownloadable == 1 && canShare != 'true'):
          var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
            enableBackdropDismiss: true,
            buttons: [{ 
                text: 'Upgrade',
                handler: () => {
                  //this.navCtrl.parent.parent.push('UpgradePlanPage');
                  this.navCtrl.push('UpgradePlanPage');
                }}
            ]
          });
          confirmPopup.present();
          break;
        case(event == 'onDownload' && e.isTrusted && item.isDownloadable == 0):
          var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ['Dismiss']
            });
          confirmPopup.present(); 
          e.stopPropagation(); 
          break; 
        case(event == 'onFavorite' && e.isTrusted):
          e.stopPropagation();
          this.markasFavorite(item); 
          break;
        case(event == 'onShare' && e.isTrusted):
          e.stopPropagation();
          this.video_share_provider_object.shareSingleVideo(item);
          break;
        case(event == 'onImageCantDownload' && e.isTrusted):
          e.stopPropagation();
          this.toast_service_object.mypresentToast("Only videos can be downloaded.",2000);
          break;
      }
    });  
  }


  aftervideoAction(todo_data){
    var url = todo_data[0].url;
    var ref = this.in_app_browser_object.create(url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

    ref.on('loadstop').subscribe((event) => {
      this.screen_orientation_object.unlock();
    });
    ref.on('exit').subscribe((event) => {            
      this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
    });
  }

  onPlaylistClick(clickedata:any, index:any){
    if (clickedata.subTopicType == 'video') {  
      this.disscussforvideomenu = clickedata;

       this.forvideomenuItem(clickedata.id, clickedata.tag);  
      var network_type = this.network_check_object.getNetworkType();  
      if(network_type != 'none') {  
        setTimeout(() => {  
          this.network_check_object.getVideoTagCountAction(clickedata.tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,clickedata);  
        }, 1000);   
        setTimeout(() => {  
          this.network_check_object.forTriggersDetalsPageBACKAction("VideoDetailsPage","forRelateditemClick")  
        }, 2000);   
        setTimeout(() => {  
          this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));  
        }, 2500);  
      }   
      setTimeout(() => {  
        this.radiant_setting_provider_object.forPlayClickTrigger(clickedata,this.possibleButtons);  
      }, 1000); 

      var currentinfoIndex = this.findIndex(this.forvideo_Obj,clickedata.id);
      //console.log('hi-3------>'+JSON.stringify(currentIndex));
      setTimeout(() => {
        this.radiant_setting_provider_object.setSRCChangedforPlaylist(currentinfoIndex);
      },500);  

      this.display_playlist = clickedata;
      this.videoData = clickedata;
      this.pageTop.scrollToTop(); 

      this.presentToast(clickedata.copyrightInfo); 

      var params = {
        "record_time" : this.dtStr,
        "record_date" : this.clevertapDate,
        "os" : localStorage.getItem('getDevicePlatform'),
        "modelNo" : localStorage.getItem('modelNo'),
        "deviceversion" : localStorage.getItem('getDeviceversion'),
        "userRoleId" : localStorage.getItem('cv5userRoleId'),
        "userType": localStorage.getItem('cv5usrType'),
        "category_name" : this.category_data[0].name,
        "topic_name": this.topic_data[0].name,
        "userEmail" : localStorage.getItem('cv5userEmail'),
        "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
        "file" : clickedata.name,
        "videoName" : clickedata.videoName,
        "location":localStorage.getItem('location'),
        "specialities":localStorage.getItem('usrSpecialities'),
        "clickedVideoContentFor":"Information",
        "subSpecialities": localStorage.getItem('cv5usrRolesubType')
      };
      this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
    }else if (clickedata.subTopicType == 'image') {

      if(clickedata.localUrl){

        this.navCtrl.push('DrawonPage', { drawnurl:clickedata.localUrl , drawOnImgTitle:clickedata.title, drawnCopyright:clickedata.copyrightInfo, drawnSubtopicType:clickedata.subTopicType , video_Name:clickedata.videoName, local_Url:'localUrl' });
      }
      else
      {

        this.navCtrl.push('DrawonPage', { drawnurl:clickedata.url , drawOnImgTitle:clickedata.title, drawnCopyright:clickedata.copyrightInfo, drawnSubtopicType:clickedata.subTopicType });
      }        
    }
  }

  changingPlayerSource(){
    var that = this;
    var tolatObj = that.data.items;
     //console.log('tolatObj--->'+JSON.stringify(tolatObj));
     that.CurrentPlaylistObject= that.radiant_setting_provider_object.getCurrentObjectFromPlaylist();
     setTimeout(() => {
      var play_data = _.filter(tolatObj,function(forvideotitle){
        return (forvideotitle.id ==  that.CurrentPlaylistObject.videoId);
      });

      that.forvideomenuItem(play_data[0].id, play_data[0].tag);
      that.disscussforvideomenu = play_data[0];
      that.display_playlist = play_data[0];
      var network_type = that.network_check_object.getNetworkType();  
      if(network_type != 'none') {  
        setTimeout(() => {  
          that.network_check_object.getVideoTagCountAction(play_data[0].tag,that.userTypeformenu,localStorage.getItem('userliveId'),"",that.possibleButtons,play_data[0]);  
        }, 1000);   
        setTimeout(() => {  
          that.network_check_object.forTriggersDetalsPageBACKAction("InformationVideoDetailsPage","forRelateditemClick")  
        }, 2000);   
        setTimeout(() => {  
          that.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));  
        }, 2500);  
      }   
      setTimeout(() => {  
        that.radiant_setting_provider_object.forPlayClickTrigger(play_data[0],that.possibleButtons);  
      }, 1000); 
    },500); 
  }

  findIndex(jsonData, findThis){
    var indexNum = jsonData.findIndex(obj => obj.id==findThis);  
    return indexNum;
  }

  presentToast( msg:any) {
    let toast = this.toast_controller_object.create({
        message: msg,
        //duration: 3000,
        duration: 1500,
        position: 'middle'
    });
    toast.present();
  }

  showConfirmBox(){


    let confirmPopup = this.alert_controller_object.create({
    title: 'Confirmation you watched',
    message: 'Did you watch all the videos in this playlist?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Buy clicked');
            this.confirmPopupThen();
          }
        }
      ]
    });
    confirmPopup.present();
  }

  confirmPopupThen(){

   // alert('box');
    try {
      var options = {
        message: "Yes I have seen playlist '"+this.playlistname+"' and understood the videos.",
        subject: 'The status of playlist', // fi. for email 
        files: [], // an array of filenames either locally or remotely 
        url: localStorage.getItem('isLinkSet'),
        chooserTitle: '' // Android only, you can override the default share sheet title 
      }
      //alert('options-->'+JSON.stringify(options));
      var onSuccess = function(result) {
        var params = {                          
          "userType": 'doctor'
        };
      }
      var onError = function(msg) {
        //$ionicHistory.backView().go();
      }
      //window.plugins.social_sharing_object.shareWithOptions(options, onSuccess, onError);
      this.social_sharing_object.shareWithOptions(options);
    } catch(e) {
      console.log("ctch");
    }
  }

  shareCardio(){

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
         message: 'This video requires internet connection.',
         position: 'bottom',
         duration: 5000
        }).present();
      } else {
        var options = {
         message: 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.', // not supported on some apps (Facebook, Instagram) 
          subject: 'Download CardioVisual', // fi. for email 
          files: [], // an array of filenames either locally or remotely 
          url: localStorage.getItem('isLinkSet'),
          chooserTitle: '' // Android only, you can override the default share sheet title 
        }          
        this.social_sharing_object.shareWithOptions(options);

      }
    }); 
  }

  shareVideo(id,url,name,description){      
    //any member can share the video

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
         message: 'This video requires internet connection.',
         position: 'bottom',
         duration: 5000
        }).present();
      } else {
        var options1 = {
          message:  name+' - '+description+'.Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.',
          files: [], // an array of filenames either locally or remotely 
          url: url,
          chooserTitle: 'Share '+name //'' // Android only, you can override the default share sheet title 
        }

        var params = {
          "record_time" : this.dtStr,
          "record_date" : this.clevertapDate,
          "os" : localStorage.getItem('getDevicePlatform'),
          "userRoleId" : localStorage.getItem('cv5userRoleId'),
          "userType": localStorage.getItem('cv5usrType'),
          "userEmail" : localStorage.getItem('cv5userEmail'),
          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "Identity": localStorage.getItem('userIdentity'),
          "shareVideoContentFor":'Information',
          "videoName":name,
          "videoId":id
        };                
        this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params);  // 
        this.social_sharing_object.shareWithOptions(options1); 
      }
    });     
  }

  shareVideoAsPerType(){
    //alert('Shre video as er type');
  }

  setFavoriteFromBar(group: any){

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
        message: 'This video requires internet connection.',
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

  more_menu(){
      //alert('More Menu');
  }
  public back(){
    this.navCtrl.setRoot('DashboardPage');
  }

  markasFavorite(group){

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
        message: 'This video requires internet connection.',
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
          localStorage.setItem('Downloadque', que_ids);

          this.toast_service_object.presentToast('"'+item.name +'" already downloaded.');

          if(que_ids == ''){
          localStorage.setItem('Downloadque', '');
          }
        }else{

          this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);
          this.video_share_provider_object.downloadVideo(item, 'Information');
          var filename = item.videoName;
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
              var loader = document.getElementById("progressBar_detail_"+item.id);
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

          var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
          this.database_provider_object.updateData(querystring);

          var iconfilename = item.iconUrl.split("/").pop(); 
          console.log('iconfilename--->'+iconfilename);
          this.downloadfile(item.iconUrl, iconfilename, item.id);
          this.downloadapi(item.id, this.userdata.liveId);
          this.toast_service_object.mypresentToast('Finished downloading : "'+item.name +'"',2000);

          var loader3 = document.getElementById("download_"+item.id);
          loader3.classList.add("active");

          if(item.downloaded == 0) item.downloaded = 1;


          //alert('dismiss');
          //this.toast_dismiss();
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
    });
  }

  //download function
  downloadfile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

    var icon_url = 'icons/'+ name;
    var querystring:string[] = new Array(" UPDATE information_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
    this.database_provider_object.updateData(querystring);

    });  
  }


  //insert query to api database
  downloadapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "informationId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      
      var response_data = JSON.stringify(response);  
    }, error => {
      //alert("Live Api error" + error);
      console.log(error);
    }); 
  }
 

  isDownloadVideoFromBar(group){
    var canShare = localStorage.getItem('canDownloadAccess');
    var network_type = this.network_check_object.getNetworkType(); 
    var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id ="+group.id);
    this.database_provider_object.fetchAllData('information' , querystring).then(data => {
      this.download_count = data;
      var names:string[] = new Array(""); 
      this.database_provider_object.fetchAllData('new_user_info' , names).then(u_data => {
        this.userdata = u_data[0];
        if(group.isDownloadable == 1 && canShare == 'true' && network_type == 'none'){
            this.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();
            } else if(group.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && data[0].localUrl != ''){
            this.toast_service_object.presentToast(group.name + " already downloaded!");
            } else if(group.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && data[0].localUrl == '' && this.userdata){
            const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              var filename = group.url.split("/").pop();
              this.toast_service_object.mypresentToast('Downloading : "'+group.name +'"',2000);
              this.video_share_provider_object.downloadVideo(group, 'Information');
              fileTransfer.onProgress((progressEvent) => {
                if (progressEvent.lengthComputable) { 
                  var perc = (progressEvent.loaded / progressEvent.total)*100;
                  this.perc1 = perc.toFixed( 1 );
                  var loader = document.getElementById("progressBar_detail");
                  loader.style.background = '#fff';
                  loader.innerHTML = this.perc1+'%';               
                }
                if(this.perc1 == 100){
                  loader.innerHTML = '';
                }
              });

              fileTransfer.download(group.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {
                var video_url = 'V2CardioMedia/'+filename;                
                var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+group.id+" ");
                this.database_provider_object.updateData(querystring);
                var iconfilename = group.iconUrl.split("/").pop(); 
                this.downloadfile(group.iconUrl, iconfilename, group.id);
                this.downloadapi(group.id,this.userdata.liveId);
                this.toast_service_object.mypresentToast('Finished downloading : "'+group.name +'"',2000);
                var loader1 = document.getElementById("download_on_bar");
                loader1.style.color = '#004958';
                if(group.downloaded == 0) { group.downloaded = 1;} 
              },
              (error) => {
                this.toast_service_object.presentToast("Download failed! please try again.");
                console.log(error);
              });
            } else if (group.isDownloadable == 1 && canShare != 'true'){
            var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
            enableBackdropDismiss: true,
            buttons: [{ 
                text: 'Upgrade',
                handler: () => {
                  this.navCtrl.push('UpgradePlanPage');
                }}
              ]
            });
            confirmPopup.present();
            } else if(group.isDownloadable == 0){
            var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ['Dismiss']
            });
            confirmPopup.present();
                    }
      });  
    });  
  }

  onCompanyUrl(group){
    var url = group.sponsoredLink;
    var ref = this.in_app_browser_object.create(url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

    ref.on('loadstop').subscribe((event) => {
      this.screen_orientation_object.unlock();
    });
    ref.on('exit').subscribe((event) => {            
      this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
    });
  }

  discussClick(video_data){
    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      this.data.discuss = [];
      this.storage_object.get('user_logged_in').then((val) => {
        this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {
          var user_type = (data.userRoleId == 1)? 'doctor' :'patient';
          var discuss_query_for_video:string[] = new Array("WHERE type='discuss_tab_info' AND sub_topic_id='"+video_data.id+"'");
          this.database_provider_object.fetchAllData('custom_video_json', discuss_query_for_video).then(discuss_data_for_video => {

            switch(true){
              case(network_type == 'none'):
                this.toast_controller_object.create({
                  message: 'You are now offline.',
                  position: 'bottom',
                  duration: 5000
                }).present();
                break;
              case(network_type != 'none' && discuss_data_for_video.length > 0):
                var list_values = JSON.parse(discuss_data_for_video[0].list_values);
                this.data.discuss =_.filter(list_values, function(f_data){
                                      if(f_data.isFor == user_type || f_data.isFor == 'all'){ 
                                        return f_data;
                                      }
                                   });
                break;
              case(network_type != 'none' && discuss_data_for_video.length == 0):
                var discuss_query_for_tag:string[] = new Array("WHERE type='discuss_tab_info' AND name='"+video_data.forum_tags+"'");
                this.database_provider_object.fetchAllData('custom_listing' , discuss_query_for_tag).then(discuss_data => {
                  if(discuss_data.length > 0){
                    var list_values = JSON.parse(discuss_data[0].list_values);
                    this.data.discuss =_.filter(list_values, function(f_data){
                                            if(f_data.isFor == user_type || f_data.isFor == 'all'){ 
                                              return f_data;
                                            }
                                          });
                  }  
                });  
                break;  
            }
          });  
        });
      });    
    });
  }

  // Actionsheet start by: sanjeev 

  openMenu() {
    let actionSheet = this.action_sheet_controller_object.create({
      title: '',
      cssClass: 'action-sheets-basic-page',
      buttons: this.createButtons()
    });
    actionSheet.present();
  }

  createButtons() {
    let buttons = [];
    for (let index in this.possibleButtons) {
      let button = {
        text: this.possibleButtons[index].label,
        icon: this.possibleButtons[index].icon,
        role: this.possibleButtons[index].label,
        handler: () => {
          //console.log('index--->'+index);
          this.changeMenuList(this.possibleButtons[index].contentType, this.possibleButtons[index].value);
          this.interactCleverTapActon(this.possibleButtons[index].label,this.possibleButtons[index].value);
          return true;
        }
      }
      buttons.push(button);
    }
    return buttons;
  }

  //Actionsheet End

  openQRCodePage(data){
    
     this.navCtrl.push('QrcodePage',{previousPage:'videoDetails',videoqrData:data});
  }


  forvideomenuItem(videoId: any, videoTag: any){
    var userformenu = this.userTypeformenu;
    var videoMenuquery_3:string[] = new Array("WHERE sub_topic_id ='"+videoId+"' AND type='videomenu'");
    var videoMenuquery_4:string[] = new Array("WHERE name ='"+videoTag+"' AND type='videomenu'");
    this.database_provider_object.fetchAllData('custom_video_json' , videoMenuquery_3).then(custom_video_json_data_formenu => {
      if(custom_video_json_data_formenu.length > 0){
        var custom_video_json_forMenu = JSON.parse(custom_video_json_data_formenu[0].list_values);

        var formenudata = _.filter(custom_video_json_forMenu,function(json_forMenu){
          return ((json_forMenu.usertype ==  userformenu || json_forMenu.usertype == "All" ) && (json_forMenu.contentFor ==  "information" || json_forMenu.contentFor ==  "All" || json_forMenu.contentFor == undefined));
        });

        if (_.size(formenudata) > 2) {
          this.possibleButtons = formenudata;
        }else{
          this.possibleButtons = [
            {"icon": "", "label": "Share App","value":"Active","usertype":"All", "contentType":"forshare"},
            {"icon": "", "label": "Ask a Question" ,"value":"Active","usertype":"All", "contentType":"forForumQuestion" }, 
            {"icon": "", "label": "Add to My Playlist","value":"Active","usertype":"All", "contentType":"forAddtoplaylist" },
            {"icon": "", "label": "Share Feedback" ,"value":"https://eveav.outgrow.us/Copy-of-eveav-203-1","usertype":"All", "contentType":"webUrl"},
            {"icon":"close","label":"Cancel","value":"Cancel","usertype":"All", "contentType":"Cancel"},
          ]
        }
      }else{
        this.database_provider_object.fetchAllData('custom_listing' , videoMenuquery_4).then(custom_listing_data_formenu => {
          if(custom_listing_data_formenu.length > 0){
           var list_json_value_forMenu = JSON.parse(custom_listing_data_formenu[0].list_values);
            
            var forlistmenudata = _.filter(list_json_value_forMenu,function(list_json_forMenu){

              return ((list_json_forMenu.usertype == userformenu || list_json_forMenu.usertype == "All" ) && (list_json_forMenu.contentFor ==  "information" || list_json_forMenu.contentFor ==  "All" || list_json_forMenu.contentFor == undefined));
            });

            if (_.size(forlistmenudata) > 2) {
              this.possibleButtons = forlistmenudata;
            }else{
              this.possibleButtons = [
                {"icon": "", "label": "Share App","value":"Active","usertype":"All", "contentType":"forshare"},
                {"icon": "", "label": "Ask a Question" ,"value":"Active","usertype":"All", "contentType":"forForumQuestion" }, 
                {"icon": "", "label": "Add to My Playlist","value":"Active","usertype":"All", "contentType":"forAddtoplaylist" },
                {"icon": "", "label": "Share Feedback" ,"value":"https://eveav.outgrow.us/Copy-of-eveav-203-1","usertype":"All", "contentType":"webUrl"},
                {"icon":"close","label":"Cancel","value":"Cancel","usertype":"All", "contentType":"Cancel"},
              ]
            }
          }else{
            this.possibleButtons = [
              {"icon": "", "label": "Share App","value":"Active","usertype":"All", "contentType":"forshare"},
              {"icon": "", "label": "Ask a Question" ,"value":"Active","usertype":"All", "contentType":"forForumQuestion" }, 
              {"icon": "", "label": "Add to My Playlist","value":"Active","usertype":"All", "contentType":"forAddtoplaylist" },
              {"icon": "", "label": "Share Feedback" ,"value":"https://eveav.outgrow.us/Copy-of-eveav-203-1","usertype":"All", "contentType":"webUrl"},
              {"icon":"close","label":"Cancel","value":"Cancel","usertype":"All", "contentType":"Cancel"},
            ]
          }  
        });
      }
    });    
    /* for video menu query end*/
  }

  changeMenuList(type,value){
    if (type == 'forshare') {
      this.shareCardio();
    }else if (type == 'forAddtoplaylist') {
      //  this.toast_controller_object.create({
      //   message: 'Coming Soon',
      //   position: 'bottom',
      //   duration: 3000
      // }).present();
      this.addtoplaylist(this.disscussforvideomenu);
    }else if (type == 'forForumQuestion') {
      this.onPromptForQna(this.disscussforvideomenu);
    }else if (type == 'forEmail') {
      this.social_sharing_object.canShareViaEmail().then((emailSuccess) => {
        this.social_sharing_object.shareViaEmail('', 'CardioVisual user has a question for you.', [value]).then((sharEmailSuccess) => {
        //alert('success -->'+JSON.stringify(sharEmailSuccess));
        }).catch((sharEmailError) => {
        //alert('error -->'+JSON.stringify(sharEmailError));
        });
      }).catch((emailError) => {
        // Sharing via email is not possible
        this.toast_service_object.presentToast("Sharing via email is not possible.");
      });
    }else if (type == 'forPhone') {
      this.call_number_object.callNumber(value, true).then((callSuccess) => {
        //console.log('Launched dialer!', JSON.stringify(callSuccess));
      }).catch((callError) => {
        //console.log('Error launching dialer', JSON.stringify(callError));
      });
    }else if (type == 'webUrl') {
      var ref = this.in_app_browser_object.create(value, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
      ref.on('loadstop').subscribe((event) => {
        this.screen_orientation_object.unlock();
      });
      ref.on('exit').subscribe((event) => {            
        this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
      });
          
    }else if (type == 'Cancel') {
      console.log('Cancel');
    }
  }

  interactCleverTapActon(label,value){
    var videoID = this.disscussforvideomenu.id;
    var videoTAG = this.disscussforvideomenu.tag;
    var videoNAME = this.disscussforvideomenu.name;
    var params = {
      "record_time" : this.dtStr,
      "record_date" : this.clevertapDate,
      "os" : localStorage.getItem('getDevicePlatform'),
      "userRoleId" : localStorage.getItem('cv5userRoleId'),
      "userType": localStorage.getItem('cv5usrType'),
      "userEmail" : localStorage.getItem('cv5userEmail'),
      "Identity":localStorage.getItem('userIdentity'),
      "clickd on label":label,
      "videoName":videoNAME,
      "videoId":videoID,
      "videoTag":videoTAG,
      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
      "location":localStorage.getItem('location'),
      "specialities":localStorage.getItem('usrSpecialities'),
      "interactContentFor":'Information',
      "subSpecialities": localStorage.getItem('cv5usrRolesubType')
    };
    //console.log('params-->'+JSON.stringify(params));
    this.clevertap_object.recordEventWithNameAndProps("clickedOninteract",params);
  }

  addtoplaylist(item){
    var canShare = localStorage.getItem('userProAccess');
    if(canShare == 'true'){
      var userCondition = new Array("");
      this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
        this.userdata = user_data[0];
      });

      const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false
          }; 
      const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'Add to Playlist', video_data:item, type:'information'}, myModalOptions);

      myModal.present();
    }else{
      var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to create custom playlist.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                  text: 'Upgrade',
                  handler: () => {
                    this.navCtrl.push('UpgradePlanPage');
                  }}
              ]
            });
      confirmPopup.present();      
    }
  }

  onPromptForQna(video_data){
    this.video_share_provider_object.discussPromptForProffesional(video_data,'','From Info Video Details');
  }
}
