import { Component, Input, ViewChild, Renderer, ElementRef, ChangeDetectorRef, Injector } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, Platform, ToastController , Modal, ModalController, ModalOptions, AlertController , ActionSheetController, ViewController, MenuController} from 'ionic-angular';
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
  selector: 'page-video-details',
  templateUrl: 'video-details.html',
})
export class VideoDetailsPage {
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
  sub_tab: string = "condition";
  search:string = '';
  percentage: any; 
  isDownloading: any;
  perc1:any;
  download_count: any;
  userdata: any;
  video_data : any;
  type: any;
  controls: boolean = false;
  loop: boolean = false;
  preload: string = 'auto';
  nativeFs: boolean = true;
  playlist: any;
  localVideoUrl: any;
  currentVideo = 0;
  totalVideos: any;
  classEnded: boolean = false;
  offlineView: boolean = false;
  api: any;
  dtStr : any;
  clevertapDate : any;
  sources : Array<Object>;
  playsitsources : Array<Object>;
  orientation: string;
  path: string;
  playPause:string = 'startPlay';
  userrole: string;
  user_specialities:string;
  userTypeformenu:string;
  polUrl: any;
  quizurl: any;
  feedbackurl : any;
  knowyourRisk : any;
  menuemail : any;
  connect_with_Hospital : any;
  know_More_About_Device: any;
  contact_Sales: any;
  videoIdformenu:any;
  videoTagformenu:any;
  disscussforvideomenu:any;
  possibleButtons: any;
  action: any;
  onProgressSet1: any;
  imgSHownOnline:any;
  totalDuration:any;
  totalDurationInsec:any;
  videoData:any;
  actualvideoduration:any;
  videoViewEvent: boolean = false;
  srcSource: string;
  local_IconUrl: string;
  CurrentPlaylistObject:any;
  network_type:any
  category_data:any
  comesfrom:any
  topic_data:any
  rmp: any = null;
  playlistrmp: any = null;
  lastVideoIndex: any;
  share_Url: any;
  forvideo_Obj: any;
  nav_params_object: NavParams;
  http_service_object: HttpService;
  toast_controller_object: ToastController;
  platform_object: Platform;
  storage_object: Storage;
  network_object: Network;
  http_object: Http;
  social_sharing_object: SocialSharing;
  database_provider_object: DatabaseProvider;
  toast_service_object: ToastService;
  file_transfer_object: FileTransfer;
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

  constructor(public navCtrl: NavController,public injector:Injector) {

    this.nav_params_object = injector.get<NavParams>(NavParams);
    this.http_service_object = injector.get<HttpService>(HttpService);
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.platform_object = injector.get<Platform>(Platform);
    this.storage_object = injector.get<Storage>(Storage);
    this.network_object = injector.get<Network>(Network);
    this.http_object = injector.get<Http>(Http);
    this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
    this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
    this.toast_service_object = injector.get<ToastService>(ToastService);
    this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
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
    var localPath = this.file_object.dataDirectory
    this.path = localPath.replace(/file:\/\//g, "");
    this.imgSHownOnline = this.network_check_object.getNetworkType();
    this.network_type = this.network_check_object.getNetworkType();
    if(this.network_type == 'none'){
      this.offlineView = true;
    }
    this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
    this.network_status = 'connected';
    this.network_object.onDisconnect().subscribe(() => {
      this.network_status = 'not_connected';
    });
    this.network_object.onConnect().subscribe(() => {
      this.network_status = 'connected';
    });

    this.request_from = this.nav_params_object.get("request_from");
    this.requested_tag = this.nav_params_object.get("tag");
    this.comesfrom = this.nav_params_object.get("sendTo");

    var playlistindex = '';    
    this.userrole = localStorage.getItem('cv5usrRolesubType');

    this.userTypeformenu = localStorage.getItem('cv5usrType');

    this.user_specialities = localStorage.getItem('usrSpecialities');

    var data =  this.nav_params_object.get('data');
    this.data = data;
    this.video_data = data;

    this.type = this.nav_params_object.get('type');

    this.playlistname = '';
    var newTopicId =data.topicId;

    this.data.type = this.nav_params_object.get('type');

    playlistindex = this.nav_params_object.get('index');
    this.playlistindex = playlistindex;
    this.data.conditions = '';
    this.data.treatment = '';
    this.data.device = '';
    this.data.playlist = '';

    if(this.network_type != 'none') {
      this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
      setTimeout(() => { 
        this.network_check_object.getPageAction('VideoDetailsPage','start','',localStorage.getItem('cv5usrType'));
      }, 1000); 
    }

    var src_Source = this.file_object.dataDirectory+'V2CardioMedia/'+this.video_data.videoName;
    this.srcSource = src_Source.replace(/file:\/\//g, "");

    var localIconUrl = this.file_object.dataDirectory+data.localIconUrl;
    this.local_IconUrl = localIconUrl.replace(/file:\/\//g, "");
   
  }

  async ionViewDidLoad() {

    console.log('video details ionViewDidLoad ');

    if(this.type != 'playlist' || this.type == undefined){

      var category_id = this.data.categoryId;

      this.presentToast(this.data.copyrightInfo);
      this.disscussforvideomenu = this.data;

      this.forvideomenuItem(this.data.id, this.data.tag);

      if(this.network_type != 'none') {
        setTimeout(() => {
          this.network_check_object.getVideoTagCountAction(this.data.tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.data);
        }, 2000); 
      }
      //relate video with respect to json stored in api
      var that = this;
      var condition_data = [];
      var treatment_data = [];
      var device_data = [];

      if(this.request_from == 'tag'){
        var tag_query:string[] = new Array("WHERE name='"+this.requested_tag+"' AND type='orientation'");
        this.database_provider_object.fetchAllData('custom_listing' , tag_query).then(custom_listing_data => {
          var list_json_value = JSON.parse(custom_listing_data[0].list_values);

          _.each(list_json_value.Condition,function(value,index){

            var condition_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

            that.database_provider_object.fetchAllData('new_sub_topics' , condition_query).then(conditionData => {
              if(conditionData.length > 0){
                condition_data.push(conditionData[0]);
              }
            });
          });
          this.data.conditions = condition_data;

          _.each(list_json_value.Treatment,function(value,index){

            var treatment_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

            that.database_provider_object.fetchAllData('new_sub_topics' , treatment_query).then(treatmentData => {
              if(treatmentData.length > 0){
                treatment_data.push(treatmentData[0]);
              }     
            });
          });
          this.data.treatment = treatment_data;

          _.each(list_json_value.Device,function(value,index){

            var device_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

            that.database_provider_object.fetchAllData('new_sub_topics' , device_query).then(deviceData => {
              if(deviceData.length > 0){
                device_data.push(deviceData[0]);
              }     
            });
          });
          this.data.device = device_data;
        });
      }else{

        var query:string[] = new Array("WHERE sub_topic_id ='"+this.data.id+"' AND type='video'");
        var query_2:string[] = new Array("WHERE name ='"+this.data.tag+"' AND type='tag'");

        this.database_provider_object.fetchAllData('custom_video_json' , query).then(custom_video_json_data => {
          if(custom_video_json_data.length > 0){
            var list_json_value = JSON.parse(custom_video_json_data[0].list_values);

            _.each(list_json_value.Condition,function(value,index){
              var condition_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

              that.database_provider_object.fetchAllData('new_sub_topics' , condition_query).then(conditionData => {
                if(conditionData.length > 0){
                  condition_data.push(conditionData[0]);
                }
              });
            });
            this.data.conditions = condition_data;

            _.each(list_json_value.Treatment,function(value,index){

              var treatment_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

              that.database_provider_object.fetchAllData('new_sub_topics' , treatment_query).then(treatmentData => {
                if(treatmentData.length > 0){
                  treatment_data.push(treatmentData[0]);
                } 
              });
            });
            this.data.treatment = treatment_data;

            _.each(list_json_value.Device,function(value,index){

              var device_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

              that.database_provider_object.fetchAllData('new_sub_topics' , device_query).then(deviceData => {
                if(deviceData.length > 0){
                  device_data.push(deviceData[0]);
                }
              });
            });
            this.data.device = device_data;          
          }else{
            this.database_provider_object.fetchAllData('custom_listing' , query_2).then(custom_listing_data => {

              var topic_id = this.data.topicId;
              var list_json_value = JSON.parse(custom_listing_data[0].list_values);

              //console.log('custom_listing list_json_value----->'+JSON.stringify(list_json_value));

              _.each(list_json_value[topic_id].Condition,function(value,index){

                var condition_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

                that.database_provider_object.fetchAllData('new_sub_topics' , condition_query).then(conditionData => {
                  if(conditionData.length > 0){
                    condition_data.push(conditionData[0]);
                  }
                });
              });
              this.data.conditions = condition_data;

              _.each(list_json_value[topic_id].Treatment,function(value,index){

                var treatment_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

                that.database_provider_object.fetchAllData('new_sub_topics' , treatment_query).then(treatmentData => {
                  if(treatmentData.length > 0){
                    treatment_data.push(treatmentData[0]);
                  }     
                });
              });
              this.data.treatment = treatment_data;

              _.each(list_json_value[topic_id].Device,function(value,index){

                var device_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");

                that.database_provider_object.fetchAllData('new_sub_topics' , device_query).then(deviceData => {
                  if(deviceData.length > 0){
                    device_data.push(deviceData[0]);
                  }     
                });
              });

              this.data.device = device_data; 
            });
          }
        });
      }

      setTimeout(() => {  
        that.radiant_setting_provider_object.forPlayClickTrigger(that.video_data,that.possibleButtons);  
      }, 1000); 

      if(that.video_data.localUrl != ''){       
        this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",this.data.imageName).then(buffer => {
          const imageBlob = new Blob([new Uint8Array(buffer)], {type: 'image/bmp'});
          const imageURL = URL.createObjectURL(imageBlob);
          
          this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "V2CardioMedia/",that.video_data.videoName).then(buffer =>{
            const videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
            const videoURL = URL.createObjectURL(videoBlob);
            
            const playlistData = [{
          src: {
            mp4: [videoURL]
          },
          contentMetadata: {
            videoContentFor:'Education',
            videoId:that.video_data.id,
            name: that.video_data.name,
            tag: that.video_data.tag,
            thumbnail: imageURL,
            poster: [imageURL]
          }
        }];
        that.radiant_setting_provider_object.setVideoSrcObject(playlistData);             
        });
        });
      }else{    
        
        var playlistData1 = [{
          src: {
            mp4: [that.video_data.url]
          },
          contentMetadata: {
            videoContentFor:'Education',
            videoId:that.video_data.id,
            name: that.video_data.name,
            tag: that.video_data.tag,
            thumbnail: that.video_data.iconUrl,
            poster: [that.video_data.iconUrl]
          }
        }];
        that.radiant_setting_provider_object.setVideoSrcObject(playlistData1);          
      }
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
        "comesFrom" : that.comesfrom,
        "contentFor" : "Education",
        "videoId":that.video_data.id,
        "videoName":that.video_data.name,
        "videoTag":that.video_data.tag
      };

      that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetail_launch); 
      
    }else if(this.type == 'playlist'){
      var that = this;
      var frmbranch = that.nav_params_object.get('frmbranch');
      if (frmbranch == 'branchplaylist') {
        // code...

        var playName = that.nav_params_object.get("playListName");
        that.playlistname = playName;
        that.data.playlist = that.data;
        that.share_Url = that.data.shareUrl;


        that.forvideo_Obj = _.filter(that.data,function(videoObj){
          return (videoObj.subTopicType == 'video');
        });

        that.totalVideos = that.data.length;
        that.presentToast(that.data[that.currentVideo].copyrightInfo);

        var brancharr = [];

        var brnchlen = _.size(that.forvideo_Obj);

        for (var i = 0; i < brnchlen; i++) {

          brancharr.push({
            src: {
              mp4: [that.forvideo_Obj[i].url]
            },
            contentMetadata: {
              videoContentFor:'Education',
              videoId:that.forvideo_Obj[i].id,
              name:that.forvideo_Obj[i].name,
              tag:that.forvideo_Obj[i].tag,
              thumbnail: that.forvideo_Obj[i].iconUrl,
              poster: [that.forvideo_Obj[i].iconUrl]
            }
          });
        }
        setTimeout(() => {
          that.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(brancharr);
          var playlistRmpContainer = document.getElementById('rmpPlayer');
          
          playlistRmpContainer.addEventListener('srcchanging', function() {
            console.log('playlist has start the changing new src');
            that.changingPlayerSource();  
          });
        }, 1000); 
        that.display_playlist = that.data.playlist[that.playlistindex];

        that.disscussforvideomenu = that.data.playlist[that.playlistindex];  
        that.videoIdformenu = that.data.playlist[that.playlistindex].id;  
        that.videoTagformenu = that.data.playlist[that.playlistindex].tag;  
        that.forvideomenuItem( that.videoIdformenu,that.videoTagformenu);  
        if(that.network_type != 'none') {  
          setTimeout(() => {  
            that.network_check_object.getVideoTagCountAction(that.videoTagformenu,that.userTypeformenu,localStorage.getItem('userliveId'),"",that.possibleButtons,that.disscussforvideomenu );  
          }, 2000);  
        }  
        setTimeout(() => {  
          that.radiant_setting_provider_object.forPlayClickTrigger(that.data.playlist[that.playlistindex],that.possibleButtons);  
        }, 1000);  

      }else{
        var subtopics_id = that.data.subTopicIds;
        that.playlistname = that.data.name;
        that.share_Url = that.data.shareUrl
        that.data.playlist = that.data.items;
        //console.log('this.data.playlist--->'+JSON.stringify(that.data.playlist));
        that.disscussforvideomenu = that.data.playlist[that.playlistindex];

        that.videoIdformenu = that.data.playlist[that.playlistindex].id;
        that.videoTagformenu = that.data.playlist[that.playlistindex].tag;

        that.forvideomenuItem( that.videoIdformenu,that.videoTagformenu);

        if(that.network_type != 'none') {
          setTimeout(() => {
            that.network_check_object.getVideoTagCountAction(that.videoTagformenu,that.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,this.disscussforvideomenu );
          }, 2000);
        } 
        that.totalVideos = that.data.items.length;
        that.presentToast(that.data.items[that.currentVideo].copyrightInfo);

        that.forvideo_Obj = _.filter(that.data.items,function(videoObj){
          return (videoObj.subTopicType == 'video');
        });

        var arr = await this.createPlaylist();

        setTimeout(() => {

          that.radiant_setting_provider_object.data_set_array_of_objects_forPlaylist(arr);
          var playlistRmpContainer = document.getElementById('rmpPlayer');
          playlistRmpContainer.addEventListener('srcchanging', function() {
            console.log('playlist has start the changing new src');
            that.changingPlayerSource();  
          });
        }, 1000); 
        that.display_playlist = that.data.playlist[that.playlistindex];
      }

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
        "comesFrom" : that.comesfrom,
        "contentFor" : "Education",
        "videoId":that.display_playlist.id,
        "videoName":that.display_playlist.name,
        "videoTag":that.display_playlist.tag
      };

      that.clevertap_object.recordEventWithNameAndProps("videoDetailLaunch", videoDetailLaunch1);

      that.lastVideoIndex =_.findLastIndex(that.data.playlist, {
        subTopicType: 'video'
      });

      that.radiant_setting_provider_object.playListNameWithLastIndex(that.playlistname, that.lastVideoIndex, that.share_Url);

    }    
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
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      this.network_check_object.getPageAction('VideoDetailsPage','end','',localStorage.getItem('cv5usrType'));
    }
    this.menu_controller_object.swipeEnable(true);
    this.rmp = new RadiantMP('rmpPlayer1');
    this.playlistrmp = new RadiantMP('rmpPlayer');

    this.rmp.pause();
    this.playlistrmp.pause();
  }

  onEvent(event: string, item: any, e: any) {
    var network_type = this.network_check_object.getNetworkType();

    if(event == 'onItemClick' && e.isTrusted){
      e.stopPropagation();
      var category_querystring:string[] = new Array(" WHERE id="+item.categoryId);
      this.database_provider_object.fetchAllData('new_category' , category_querystring).then(cat_data => { 
        this.category_data = cat_data;
      });

      var topic_querystring:string[] = new Array(" WHERE id="+item.topicId);
      this.database_provider_object.fetchAllData('new_topics' , topic_querystring).then(topic_data => { 
        this.topic_data = topic_data;
      });


      if (item.subTopicType == 'video') {
        this.videoViewEvent == true;
        this.playPause = 'startPlay';

        var canShare = localStorage.getItem('userProAccess');        
        var liveId = localStorage.getItem('userliveId');
        var video_likeId = item.id;

        var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+item.id);
        this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => { 

          if(data[0].isPaid == 0 || canShare == 'true'){

            this.disscussforvideomenu = data[0];
            this.forvideomenuItem(data[0].id, data[0].tag);
            if(network_type != 'none') { 
              setTimeout(() => {
                this.network_check_object.getVideoTagCountAction(data[0].tag,this.userTypeformenu,localStorage.getItem('userliveId'),"",this.possibleButtons,data[0]);
              }, 1000); 
              setTimeout(() => {
                this.network_check_object.forTriggersDetalsPageBACKAction("VideoDetailsPage","forRelateditemClick")
              }, 2000); 
            }

            setTimeout(() => {  
              this.radiant_setting_provider_object.forPlayClickTrigger(this.video_data,this.possibleButtons);  
            }, 1000);

            if(data[0].localUrl != ''){
              this.video_data = data[0];
              localStorage.setItem('offline', 'yes');
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
                  videoContentFor:'Education',
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
                "clickedVideoContentFor":"Education",
                "subSpecialities": localStorage.getItem('cv5usrRolesubType')
              };
              this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);
            }else{
              this.platform_object.ready().then(() => {
                var network_type = this.network_check_object.getNetworkType();
                if(network_type == 'none'){

                  this.toast_controller_object.create({
                    message: 'This video requires internet connection.',
                    position: 'bottom',
                    duration: 5000
                  }).present();
                } else {

                  this.video_data = data[0];

                  localStorage.setItem('offline', 'no');                  
                  var playlistData3 = [{
                    src: {
                      mp4: [data[0].url]
                    },
                    contentMetadata: {
                      videoContentFor:'Education',
                      videoId:data[0].id,
                      name: data[0].name,
                      tag: data[0].tag,
                      thumbnail: data[0].iconUrl,
                      poster: [data[0].iconUrl]
                    }
                  }];

                  this.radiant_setting_provider_object.setSrcObjectOnitemClick(playlistData3);

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
                    "clickedVideoContentFor":"Education",
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
                  };
                  this.clevertap_object.recordEventWithNameAndProps("clickedOnVideo", params);  
                }
                this.pageTop.scrollToTop(); 
                this.presentToast(data[0].copyrightInfo); 
              }); 
            }

          }else{
            var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
              enableBackdropDismiss: true,
              buttons: [{ 
                text: 'Upgrade',
                handler: () => {
                  this.navCtrl.push('UpgradePlanPage');
                }
              }]
            });
            confirmPopup.present();
          }
        });
      }else if (item.subTopicType == 'image') {

        if(item.localUrl){

          this.navCtrl.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
        }
        else
        {

          this.navCtrl.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
        }        
      }
    }else if(event == 'onDownload' && e.isTrusted){
      //e.stopPropagation();

      var canShare = localStorage.getItem('canDownloadAccess'); 

      if(item.isDownloadable == 1){       
        if(canShare == 'true'){

          this.platform_object.ready().then(() => {
            var network_type = this.network_check_object.getNetworkType();
            if(network_type == 'none'){

              this.toast_controller_object.create({
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
              this.isDownloadVideoMultiple();
            }
          }); 
        }else{
          var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to unlock more features.</p>',
            enableBackdropDismiss: true,
            buttons: [{ 
              text: 'Upgrade',
              handler: () => {
                //this.navCtrl.parent.parent.push('UpgradePlanPage');
                this.navCtrl.push('UpgradePlanPage');
              }
            }]
          });
          confirmPopup.present();
        }
      }else{
        var confirmPopup = this.alert_controller_object.create({
          title: '',
          message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
          enableBackdropDismiss: true,
          buttons: ['Dismiss']
        });
        confirmPopup.present();
      }  
      e.stopPropagation();
    }else if(event == 'onFavorite' && e.isTrusted){
      e.stopPropagation();
      this.markasFavorite(item)

    }else if(event == 'onShare' && e.isTrusted){
      e.stopPropagation();
      this.video_share_provider_object.shareSingleVideo(item);
    }else if(event == 'onImageCantDownload' && e.isTrusted) {
      // code...
      e.stopPropagation();
      this.toast_service_object.mypresentToast("Only videos can be downloaded.",2000);
    }
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

      var currentIndex = this.findIndex(this.forvideo_Obj,clickedata.id);
      setTimeout(() => {
         this.radiant_setting_provider_object.setSRCChangedforPlaylist(currentIndex);
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
        "clickedVideoContentFor":"Education",
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
          that.network_check_object.forTriggersDetalsPageBACKAction("VideoDetailsPage","forRelateditemClick")  
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
        //position: 'top'
        position: 'middle'
    });
    toast.present();
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

      if(localStorage.getItem( 'ratingDialogShown') == null || localStorage.getItem( 'ratingDialogShown') == 'null' || localStorage.getItem( 'ratingDialogShown') == ""){
        this.http_service_object.showRateDialogueBox();
        localStorage.setItem( 'ratingDialogShown', 'true');
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
          "Identity": localStorage.getItem('userIdentity'),
          "videoName":name,
          "videoId":id,
          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
          "location":localStorage.getItem('location'),
          "specialities":localStorage.getItem('usrSpecialities'),
          "shareVideoContentFor":'Education',
          "subSpecialities": localStorage.getItem('cv5usrRolesubType')
        };                
        this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params);  // 
        this.social_sharing_object.shareWithOptions(options1); 
      }
    });     
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

            this.database_provider_object.setFavorites(val, group.id);
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
         //set isFavourite == 0
           this.storage_object.get('user_logged_in').then((val) => {

            this.database_provider_object.setFavorites(val, group.id); 
            this.toast_service_object.presentToast("Removed from Favourites.");
          });
        }

       group.isFavourite = !group.isFavourite 
      }
    });
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

            this.database_provider_object.setFavorites(val, group.id);
            this.toast_service_object.presentToast("Added to Favourites.");
          });
        } else {
          //set isFavourite == 0
          this.storage_object.get('user_logged_in').then((val) => {

            this.database_provider_object.setFavorites(val, group.id); 
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
          }else{

            this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);

            this.video_share_provider_object.downloadVideo(item, 'Education');
            
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

              var querystring:string[] = new Array(" UPDATE subtopic_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
              this.database_provider_object.updateData(querystring);

              var iconfilename = item.iconUrl.split("/").pop(); 
              //console.log('iconfilename--->'+iconfilename);
              this.downloadfile(item.iconUrl, iconfilename, item.id);
              this.downloadapi(item.id, this.userdata.liveId);
              this.toast_service_object.mypresentToast('Finished downloading : "'+item.name +'"',2000);

              var loader3 = document.getElementById("download_"+item.id);
              loader3.classList.add("active");

              if(item.downloaded == 0) item.downloaded = 1;
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
    var querystring:string[] = new Array(" UPDATE subtopic_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
    this.database_provider_object.updateData(querystring);

    });  
  }


  //insert query to api database
  downloadapi(groupid,userid) {
    var post_url = this.http_service_object.getPosturl('downloads'); 
    this.http_object.post(post_url, {"cardiovisualUserId" : userid, "subtopicId" : groupid }).subscribe(data => {
      var response = JSON.parse(data['_body']);
      
      var response_data = JSON.stringify(response);  
    }, error => {
      //alert("Live Api error" + error);
      console.log(error);
    }); 
  }


/*  qnaSite(video_data){
    this.platform_object.ready().then(() => {

      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();

      } else {

        if(video_data.forum_tags == undefined || video_data.forum_tags == 'undefined'){
          var forum_tags = video_data.slug; 
        }else{
          var forum_tags = video_data.forum_tags; 
        }
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
        };

        this.storage_object.get('user_logged_in').then((val) => {

          if(val == 0 || val == null){

            this.toast_controller_object.create({
              message: 'Please Login',
              position: 'bottom',
              duration: 2000
            }).present();

          }else{
            this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {
              if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){


                  var email = data.email;
                  var username = data.username;
                  if(email =='' || username == '' || username == null){
                    //openForumDetailDashboardModal(this.email, this.username);
                    const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
                    myModal.present();

                    myModal.onDidDismiss((data) => {
                      console.log("I have dismissed.");
                      console.log(data);
                    });

                    myModal.onWillDismiss((data) => {
                      console.log("I'm about to dismiss");
                      console.log(data);
                    });
                  }else{
                    this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Patient'});
                  }


              }else{

                var email = data.email;
                var username = data.username;
                if(email =='' || username == '' || username == null){
                  //openForumDetailDashboardModal(this.email, this.username);
                  const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'forum', userdata:data }, myModalOptions);
                  myModal.present();

                  myModal.onDidDismiss((data) => {
                  console.log("I have dismissed.");
                  //alert("I have dismissed.");
                  console.log(data);
                  });

                  myModal.onWillDismiss((data) => {
                  console.log("I'm about to dismiss");
                  //alert("I'm about to dismiss");
                  console.log(data);
                  });
                }else{
                  this.redirectToForumDashboard({'email': email, 'username': username, 'first_time': 'no', 'forum_tags' : forum_tags, 'user_type':'Doctor'});
                }
          }  

          //console.log('onboardingImgs-->'+JSON.stringify(this.onboardingImgs));
          }, err => {
          console.log('err->'+err);
          //alert(err);
          }); 
          }    
        });
      }
    });    
  }

  redirectToForumDashboard(object){

    var params = {
    "record_time" : this.dtStr,
    "record_date" : this.clevertapDate,
    "os" : localStorage.getItem('getDevicePlatform'),
    "userRoleId" : localStorage.getItem('cv5userRoleId'),
    "userType": localStorage.getItem('cv5usrType'),
    "userEmail" : localStorage.getItem('cv5userEmail'),
    "Identity":localStorage.getItem('userIdentity'),
    "userName" : object.username,
    "tags" : object.forum_tags,
    "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
    "location":localStorage.getItem('location'),
    "specialities":localStorage.getItem('usrSpecialities'),
    "subSpecialities": localStorage.getItem('cv5usrRolesubType')
    };

    //alert('params-->'+JSON.stringify(params));      
    this.clevertap_object.recordEventWithNameAndProps("openedForum",params);

    var text_arr =[object.username, object.email, object.first_time, object.forum_tags];
    var text = JSON.stringify(text_arr);
    //var text = 'abhishek#*#abbhishek.chavan+1@oneleap.in#*#no';//+object.email+'#*#'+object.first_time;
    var encode_string = window.btoa(text);
    if(object.user_type == 'Patient'){
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/create_user_discuss.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
        
      }else{
        var ref = this.in_app_browser_object.create('https://cardiovisual.com/cv5/create_user.php?t='+encode_string, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');
      }  
  }*/

  isDownloadVideoFromBar(group){

    var canShare = localStorage.getItem('canDownloadAccess');
    if(group.isDownloadable == 0){

       var confirmPopup = this.alert_controller_object.create({
              title: '',
              message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
              enableBackdropDismiss: true,
              buttons: ['Dismiss']
            });
            confirmPopup.present();

    }else{
      if(canShare == 'true'){

      this.platform_object.ready().then(() => {

        var network_type = this.network_check_object.getNetworkType();
        if(network_type == 'none'){
         
          this.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();

        } else {

          var querystring:string[] = new Array("WHERE id = "+group.id); 

          this.database_provider_object.fetchAllData('subtopic_data' , querystring).then(data => { 
            //console.log('data download --->'+JSON.stringify(data));
            //alert('data download --->'+JSON.stringify(data));
            this.download_count = data; 
            if (data[0].localUrl != '') {
              this.toast_service_object.presentToast(group.name + " already downloaded!");
            }else{
       
            //this.platform_object.ready().then(() => {

              var names:string[] = new Array(""); 
              this.database_provider_object.fetchAllData('new_user_info' , names).then(data => { 

                this.userdata = data[0];

                if (data.length > 0) {
                  // alert(JSON.stringify(this.userdata));

                  const fileTransfer: FileTransferObject = this.file_transfer_object.create();

                  //downlad video

                  var filename = group.url.split("/").pop();

                  this.toast_service_object.mypresentToast('Downloading : "'+group.name +'"',2000);

                   this.video_share_provider_object.downloadVideo(group, 'Education');

                  fileTransfer.onProgress((progressEvent) => {

                    if (progressEvent.lengthComputable) { 
                      var perc = (progressEvent.loaded / progressEvent.total)*100;
                      this.perc1 = perc.toFixed( 1 );
                      // //console.log(perc);
                      var loader = document.getElementById("progressBar_detail");
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        //loader1.innerHTML = '';
                      }
                    }
                  });

                  fileTransfer.download(group.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {


                    var video_url = 'V2CardioMedia/'+filename;


                    var querystring:string[] = new Array(" UPDATE subtopic_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+group.id+" ");
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = group.iconUrl.split("/").pop(); 
                    //download video icon
                    this.downloadfile(group.iconUrl, iconfilename, group.id);
                    //insert into live server 
                    this.downloadapi(group.id,this.userdata.liveId);
                    this.toast_service_object.mypresentToast('Finished downloading : "'+group.name +'"',2000);
                    var loader1 = document.getElementById("download_on_bar");
                    loader1.style.color = '#004958';
                    if(group.downloaded == 0) { group.downloaded = 1;} 
                  },
                  (error) => {

                    //alert('download failed: ' + error);
                    this.toast_service_object.presentToast("Download failed! please try again.");
                    console.log(error);
                    //handle error
                  });
                }
              }); 
            //});
            }
          }); 
        }
      });

      }else{
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

      }
    }
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

  videolike(video_likeId: any){
    //alert('videolike');

    var liveId = localStorage.getItem('userliveId');
    //alert('subtopicid ---->'+JSON.stringify(video_likeId)+'liveId--->'+liveId);
    this.database_provider_object.setLikeDislikes( liveId, video_likeId, 'likes-count' );

    this.toast_controller_object.create({
      message: 'video liked',
      position: 'middle',
      duration: 1000
    }).present();
  }

  discussClick(video_data){
    this.platform_object.ready().then(() => {
        var network_type = this.network_check_object.getNetworkType();
        if(network_type == 'none'){
          this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();

        } else {
          this.storage_object.get('user_logged_in').then((val) => {
            this.http_service_object.getUserInfoByLiveId(val).subscribe(data => {

              /*if(data.userRoleSubType == 'medical-device-pharma-professional' || data.userRoleSubType == 'Medical Device/Pharma Professional' || data.userRoleSubType == 'patient' || data.userRoleSubType == 'Patient' || data.userRoleSubType == 'curious-learner' || data.userRoleSubType == 'Curious learner/Other' || data.specialities =='Non-Healthcare Professional' || data.specialities =='Healthcare Industry Professional' ){
                this.data.discuss = [];
                var confirmPopup = this.alert_controller_object.create({
                                    title: '',
                                    message: '<h4 style="text-align:center;"></h4><p style="text-align:center;font-weight:700;">Coming Soon...</p>',
                                    enableBackdropDismiss: true,
                                    buttons: [{ 
                                      text: 'Dismiss',
                                      handler: () => {

                                      }
                                    }]
                                  });
                confirmPopup.present();
              }else{*/

                // this.http_service_object.getTagRelatedDiscussion(video_data.forum_tags).subscribe(result => {
                //   this.data.discuss = result;
                // });

                var user_type = (data.userRoleId == 1)? 'doctor' :'patient';
                var discuss_query_for_video:string[] = new Array("WHERE type='discuss_tab' AND sub_topic_id='"+video_data.id+"'");
                this.database_provider_object.fetchAllData('custom_video_json', discuss_query_for_video).then(discuss_data_for_video => {
                    if(discuss_data_for_video.length > 0){
                      var list_values = JSON.parse(discuss_data_for_video[0].list_values);

                      this.data.discuss =_.filter(list_values, function(f_data){
                                            if(f_data.isFor == user_type || f_data.isFor == 'all'){ 
                                              return f_data;
                                            }
                                         });
                    }else{
                      var discuss_query_for_tag:string[] = new Array("WHERE type='discuss_tab' AND name='"+video_data.forum_tags+"'");
                      this.database_provider_object.fetchAllData('custom_listing' , discuss_query_for_tag).then(discuss_data => {
                        if(discuss_data.length > 0){
                          var list_values = JSON.parse(discuss_data[0].list_values);
                          
                          this.data.discuss =_.filter(list_values, function(f_data){
                                            if(f_data.isFor == user_type || f_data.isFor == 'all'){ 
                                              return f_data;
                                            }
                                         });
                          
                        }else{
                          this.data.discuss = [];
                        }
                    });      
                  }
                });    
                          
              //}
            });
          });
        }
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

    /* for video menu query start : sanjeev */
    var videoMenuquery_3:string[] = new Array("WHERE sub_topic_id ='"+videoId+"' AND type='videomenu'");
    var videoMenuquery_4:string[] = new Array("WHERE name ='"+videoTag+"' AND type='videomenu'");
    this.database_provider_object.fetchAllData('custom_video_json' , videoMenuquery_3).then(custom_video_json_data_formenu => {

      if(custom_video_json_data_formenu.length > 0){
        var custom_video_json_forMenu = JSON.parse(custom_video_json_data_formenu[0].list_values);

        // var formenudata = _.filter(custom_video_json_forMenu,function(json_forMenu){
        //   return (json_forMenu.usertype ==  userformenu || json_forMenu.usertype == "All" );
        // });

         var formenudata = _.filter(custom_video_json_forMenu,function(json_forMenu){
          return ((json_forMenu.usertype ==  userformenu || json_forMenu.usertype == "All" ) && (json_forMenu.contentFor ==  "education" || json_forMenu.contentFor ==  "All" || json_forMenu.contentFor == undefined));
        });

        if (_.size(formenudata) > 2) {
          // code...
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
        this.removeExtraIntractionOption();
      }else{
        this.database_provider_object.fetchAllData('custom_listing' , videoMenuquery_4).then(custom_listing_data_formenu => {
          if(custom_listing_data_formenu.length > 0){
            var list_json_value_forMenu = JSON.parse(custom_listing_data_formenu[0].list_values);
            var forlistmenudata = _.filter(list_json_value_forMenu,function(list_json_forMenu){
              return ((list_json_forMenu.usertype == userformenu || list_json_forMenu.usertype == "All" ) && (list_json_forMenu.contentFor ==  "education" || list_json_forMenu.contentFor ==  "All" || list_json_forMenu.contentFor == undefined));
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
            this.removeExtraIntractionOption();
          }else{
            this.possibleButtons = [
              {"icon": "", "label": "Share App","value":"Active","usertype":"All", "contentType":"forshare"},
              {"icon": "", "label": "Ask a Question" ,"value":"Active","usertype":"All", "contentType":"forForumQuestion" }, 
              {"icon": "", "label": "Add to My Playlist","value":"Active","usertype":"All", "contentType":"forAddtoplaylist" },
              {"icon": "", "label": "Share Feedback" ,"value":"https://eveav.outgrow.us/Copy-of-eveav-203-1","usertype":"All", "contentType":"webUrl"},
              {"icon":"close","label":"Cancel","value":"Cancel","usertype":"All", "contentType":"Cancel"},
            ];
            this.removeExtraIntractionOption();
          } 
        });
      }
    });    
    /* for video menu query end*/
  }

  removeExtraIntractionOption(){
    if (this.possibleButtons) {
      const optionsToRemove = ['Share Your Feedback', 'Whats your Opinion', 'Quiz Yourself', 'Take a Quiz'];
    
      optionsToRemove.forEach(option => {
        const optionIdx = this.possibleButtons.findIndex(val => val.label === option);
    
        if (optionIdx !== -1) {
          this.possibleButtons.splice(optionIdx, 1);
        }
      });
    }
  }

  changeMenuList(type,value){
    if (type == 'forshare') {
      this.shareCardio();
    }else if (type == 'forAddtoplaylist') {

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
      "interactContentFor":'Education',
      "subSpecialities": localStorage.getItem('cv5usrRolesubType')
    };
    //console.log('params-->'+JSON.stringify(params));
    this.clevertap_object.recordEventWithNameAndProps("clickedOninteract",params);
  }


  addtoplaylist(item){
    var canShare = localStorage.getItem('userProAccess');
    //canShare = 'true';
    if(canShare == 'true'){
      var userCondition = new Array("");
      this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
        this.userdata = user_data[0];
      });

      const myModalOptions: ModalOptions = {
            enableBackdropDismiss: false
          }; 
      const myModal: Modal = this.modal_controllar_object.create('ModalPage', { data: 'Add to Playlist', video_data:item, type:'education'}, myModalOptions);

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
    this.video_share_provider_object.discussPromptForProffesional(video_data,'','From Video Details');
  }

}
