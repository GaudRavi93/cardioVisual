import { Component, ViewChild, Injector } from '@angular/core';
import { Platform, MenuController, Nav, Modal, ModalController, ModalOptions, App, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { MenuService } from '../services/menu-service';
//import { AppSettings } from '../services/app-settings';

import { IService } from '../services/IService';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { HttpService } from '../services/HttpService';
import { Http } from '@angular/http';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import * as _ from 'underscore/underscore';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DatabaseProvider } from '../providers/database/database';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import { CleverTap } from '@ionic-native/clevertap';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { InappProvider } from '../providers/inapp/inapp';
import { AppVersion } from '@ionic-native/app-version'; 
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { NetworkCheckProvider } from '../providers/network_check/network_check';
import { LoadingService } from '../services/loading-service';
import { VideosharesocialProvider } from '../providers/videosharesocial/videosharesocial';

declare var cordova;

@Component({
  templateUrl: 'app.html',
  providers: []
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage = "HomePage";
  rootPage = "";
  params: any;
  infoparams: any;
  userEmail: any;
  usrType: any;
  userRoleId: any;
  leftMenuTitle: string;
  public counter = 0;
  counter_root_page = 0;
  clevertapId = 0;
  ///branch_data_flag: boolean = false;
  osType : any;
  dtStr : any;
  clevertapDate : any;
  clever_tap_Id : any;
  localapi : any;
  branchplaylist : any;
  app_version_number:any;
  test:any = [];
  email:any;
  username:any;
  notificacioneStatus:any;
  public network_status: any;
  pages: Array<{title: string, component: any, icon: any}>;
  private secureKey: string = '12345678910123456789012345678901';
  private secureIV: string = '1234567891123456';
  updated_id:string;
  valid_ids:any;
  platform_object: Platform;
  splash_screen_object: SplashScreen;
  status_bar_object: StatusBar;
  modal_controller_object: ModalController;
  in_app_browser_object: InAppBrowser;
  toast_controller_object: ToastController;
  storage_object: Storage;
  app_object: App;
  http_object: Http;
  social_sharing_object: SocialSharing;
  onesignal_object: OneSignal;
  clevertap_object: any;
  screen_orientation_object: ScreenOrientation;
  app_version_object: AppVersion;
  alert_controller_object: AlertController;
  network_check_object: NetworkCheckProvider;
  loading_controller_object: LoadingController;
  loading_service_object: LoadingService;
  for_videoshare_object: VideosharesocialProvider;

  constructor(
    public httpservice: HttpService,
    public http: Http,
    private databaseprovider: DatabaseProvider,
    private device: Device,
    private file: File,
    public injector:Injector
    ) {
    
    this.platform_object = injector.get<Platform>(Platform);
    this.splash_screen_object = injector.get<SplashScreen>(SplashScreen);
    this.status_bar_object = injector.get<StatusBar>(StatusBar);
    this.modal_controller_object = injector.get<ModalController>(ModalController);
    this.in_app_browser_object = new InAppBrowser();
    this.toast_controller_object = injector.get<ToastController>(ToastController);
    this.storage_object = injector.get<Storage>(Storage);
    this.app_object = injector.get<App>(App);
    this.http_object = injector.get<Http>(Http);
    this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
    this.onesignal_object = injector.get<OneSignal>(OneSignal);
    this.clevertap_object = new CleverTap();
    this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
    this.app_version_object = injector.get<AppVersion>(AppVersion);
    this.alert_controller_object = injector.get<AlertController>(AlertController);
    this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
    this.loading_controller_object = injector.get<LoadingController>(LoadingController);
    this.loading_service_object = injector.get<LoadingService>(LoadingService);
    this.for_videoshare_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);

    this.dtStr = this.httpservice.dtStr();
    this.clevertapDate = this.httpservice.clevertapDate();

    this.platform_object.ready().then(() => {
      var model = device.model;
      localStorage.setItem('modelNo',model);
      var deviceID = device.uuid;
      localStorage.setItem('getDeviceuuid',deviceID);
      var string = device.version;
      localStorage.setItem('getDeviceversion',string);
      var devicePlatform = device.platform;
      localStorage.setItem('getDevicePlatform',devicePlatform);
      this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);

      localStorage.setItem('app_sync_dashboard', 'yes');
      localStorage.setItem('app_headerNotification', 'yes');
      localStorage.setItem('page_array_push', 'yes');
      localStorage.setItem('showrandomVideo', 'yes');
      localStorage.setItem('arrayOfTags', 'yes');
      localStorage.setItem('applaunchPopup', 'yes');
      
      this.httpservice.getAppDetails(devicePlatform).subscribe(data => {
        var osTypeDetails = data[0];
        this.app_version_object.getVersionNumber().then(version => {
          this.app_version_number = version;
        });
      });


      //for video files
      this.file.createDir(this.file.dataDirectory, 'V2CardioMedia', true).then((mediaval) => {
      }).catch(e => { });

      //for video icon files
      this.file.createDir(this.file.dataDirectory, 'icons', true).then((iconval) => {
      }).catch(e => { });

      //for drawon imgae files
      this.file.createDir(this.file.dataDirectory, 'drawon', true).then((drownval) => {
      }).catch(e => { });

      this.file.createDir(this.file.dataDirectory, 'splashes', true).then((splashval) => {
      }).catch(e => { });

      /*folder is for channels images and logo */
      this.file.createDir(this.file.dataDirectory, 'channels', true).then((channelsval) => {
      }).catch(e => { });

      var android_play_store_link = "https://play.google.com/store/apps/details?id=com.cardiovisual.app";
      localStorage.setItem('android_play_store_link',android_play_store_link);
      var ios_app_store_link = "https://itunes.apple.com/us/app/cardiovisual-heart-health/id1009028152?ls=1&mt=8";

      localStorage.setItem('ios_app_store_link',ios_app_store_link);

      localStorage.setItem('myProductflg', 'false');
      localStorage.setItem('productID', 'false');

      // Branch initialization
      this.platform_object.resume.subscribe(() => {
        branchInit();
      });

      const branchInit = () => {
        if (!this.platform_object.is('cordova')) { return; }
        const Branch = window["Branch"];
        localStorage.setItem('branch_flag', '');
        Branch.initSession( (data) => {
        }).then( (data) => {
          if (data["+clicked_branch_link"]) {
            
            // read deep link data on click
            if(data.hasOwnProperty('sub_topic_ids')){
              // playlist
              var  subTopicIds = data.sub_topic_ids;
              var playListName = data.playlists_name;
              var user_type = ''; 
              this.storage_object.get('user_logged_in').then((val) => {
                if(val == 0 || val == null){

                  let confirmalert = this.alert_controller_object.create({
                      title: 'Are you a healthcare professional',
                      message: 'Yes/No',
                      buttons: [
                          {
                              text: 'Yes',
                               handler: () => {
                                user_type = "doctor";
                              }
                          }, {
                              text: 'No',
                              handler: () => {
                                user_type = "patient";
                              }
                          }
                      ],
                      enableBackdropDismiss: false // <- Here! :)
                  });
                  confirmalert.present();
                  confirmalert.onDidDismiss((alertData) => {
                    this.databaseprovider.getTopicsAPIData(user_type);
                    this.databaseprovider.getCategoriesAPIData(user_type);
                    this.databaseprovider.forbranchSubTopicsAPIData(user_type);
                    this.params = {
                      "record_time" : this.dtStr,
                      "record_date" : this.clevertapDate,
                      "os" : localStorage.getItem('getDevicePlatform'),                  
                      "userRoleId" : (user_type=="doctor")? 1 : 5,
                      "userType": user_type,                      
                      "playlistName":data.playlists_name
                    };  
                    this.clevertap_object.recordEventWithNameAndProps("openedSharedPlaylist",this.params); 
                    var subtopics_id = subTopicIds;
                     subtopics_id = subtopics_id.split(', ');
                     var that = this;
                     that.test = [];
                    _.each(subtopics_id,function(value,index){
                       var query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
                       that.databaseprovider.fetchAllData('new_sub_topics' , query).then(data => {
                         if(data.length > 0){
                            that.test.push(data[0]);
                          }     
                        });
                    });
                    this.loading_service_object.show();
                    setTimeout(() => {
                      this.loading_service_object.hide();
                      this.nav.push('VideoDetailsPage', {data:that.test, type:'playlist', index:0, 'header':'hide', 'frmbranch':'branchplaylist','playListName':playListName, 'sendTo':'Branch'});
                    }, 3000);

                  });                  
                }else{
                  let confirmalert = this.alert_controller_object.create({
                      title: 'Click OK to watch this playlist.',
                      message: '',
                      buttons: [
                          {
                              text: 'OK',
                               handler: () => {
                                console.log('OK clicked: ');
                              }
                          }
                      ]
                  });
                  confirmalert.present();
                  confirmalert.onDidDismiss((alertData) => {
                    
                    this.params = {
                      "record_time" : this.dtStr,
                      "record_date" : this.clevertapDate,
                      "os" : localStorage.getItem('getDevicePlatform'),
                      "userRoleId" : localStorage.getItem('cv5userRoleId'),
                      "userType": localStorage.getItem('cv5usrType'),
                      "userEmail" : localStorage.getItem('cv5userEmail'),
                      "specialities":localStorage.getItem('usrSpecialities'),
                      "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                      "Identity":localStorage.getItem('userIdentity'),
                      "playlistContentFor":"Education",
                      "playlistName":data.playlists_name 
                    };
                    this.clevertap_object.recordEventWithNameAndProps("openedSharedPlaylist",this.params);  
                     var subtopics_id = subTopicIds;
                     subtopics_id = subtopics_id.split(', ');
                     var that = this;
                     that.test = [];
                    _.each(subtopics_id,function(value,index){
                       var query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
                       that.databaseprovider.fetchAllData('new_sub_topics' , query).then(data => {
                         if(data.length > 0){
                            that.test.push(data[0]);
                          }     
                        });
                    });
                    this.loading_service_object.show();
                    setTimeout(() => {
                      this.loading_service_object.hide();
                      this.nav.push('VideoDetailsPage', {data:that.test, type:'playlist', index:0, 'header':'hide', 'frmbranch':'branchplaylist','playListName':playListName,'sendTo':'Branch'});
                    }, 3000);
                    // var query:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN("+subTopicIds+") AND isActive = 1");
                    // this.databaseprovider.fetchAllData('new_sub_topics' , query).then(data => { 
                    //   //this.branchplaylist = data; 
                    //   this.nav.push('VideoDetailsPage', {data:data, type:'playlist', index:0, 'header':'hide', 'frmbranch':'branchplaylist'});
                    // }); 
                  });            
                }               
              });              
            }else if (data.hasOwnProperty('custom_id')){
              // indivisual video
              this.storage_object.get('user_logged_in').then((val) => {

                if(val == 0 || val == null){
                  this.nav.setRoot('LoginPage');
                  this.params = {
                  "record_time" : this.dtStr,
                  "record_date" : this.clevertapDate,
                  "os" : localStorage.getItem('getDevicePlatform'),
                  "userLoggedIn": "user_logged_in:-"+false,               
                  "islogin":false
                  };

                  var ref = this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id='+data.custom_id, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

                  ref.on('loadstop').subscribe((event) => {
                    this.screen_orientation_object.unlock();
                  });
                  ref.on('exit').subscribe((event) => {            
                    this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                  });


                }else{
                  //this.nav.setRoot('DashboardPage');
                  this.params = {
                  "record_time" : this.dtStr,
                  "record_date" : this.clevertapDate,
                  "os" : localStorage.getItem('getDevicePlatform'),
                  "userRoleId" : localStorage.getItem('cv5userRoleId'),
                  "userType": localStorage.getItem('cv5usrType'),
                  "userEmail" : localStorage.getItem('cv5userEmail'),
                  "Identity":localStorage.getItem('userIdentity'),
                  "specialities":localStorage.getItem('usrSpecialities'),
                  "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                  "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                  "videoContentFor":'Education',
                  "userLoggedIn": "user_logged_in:-"+true,
                  "islogin":true
                  };
                  var user_type = localStorage.getItem('cv5usrType');

                  var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+data.custom_id);

                  this.databaseprovider.fetchAllData('new_sub_topics' , querystring).then(subTopics_data => {

                    if(subTopics_data.length == 0){
                      this.databaseprovider.getSingleSubtopic(user_type, data.custom_id);
                    }

                    setTimeout(() => {
                      this.databaseprovider.fetchAllData('new_sub_topics' , querystring).then(subTopics_data1 => {
                        if(subTopics_data1.length > 0){
                          setTimeout(() => {
                            var params1 = {                     
                              "videoName":subTopics_data1[0].name
                            };
                            var params2 = _.extend(this.params, params1);
                            this.clevertap_object.recordEventWithNameAndProps("openedSharedVideo",params2);
                            
                            this.nav.push('VideoDetailsPage', {pageItem:subTopics_data1[0].name, coloR:subTopics_data1[0].hexcodeBase, icondash:subTopics_data1[0].iconName, data:subTopics_data1[0], 'header':'show', 'request_from': 'video_list', previousPage:'appComponent','sendTo':'Branch' });
                          }, 400);
                        }
                      });
                    }, 2000);  
                  });
                }

                if(val == 0 || val == null){
                  this.httpservice.getParticularSubTopicIdAPIData(data.custom_id).subscribe(subTopicIdAPIData => {
                    var params1 = {                     
                    "videoName":subTopicIdAPIData[0].name
                    };
                    var params2 = _.extend(this.params, params1);
                    this.clevertap_object.recordEventWithNameAndProps("openedSharedVideo",params2);
                  }, err => {
                  });  
                }
              }); 
            }else if (data.hasOwnProperty('information_id')){
              this.storage_object.get('user_logged_in').then((val) => {
                if(val == 0 || val == null){
                  this.nav.setRoot('LoginPage');
                  this.infoparams = {
                    "record_time" : this.dtStr,
                    "record_date" : this.clevertapDate,
                    "os" : localStorage.getItem('getDevicePlatform'),
                    "userLoggedIn": "user_logged_in:-"+false,                  
                    "islogin":false
                  }; 
                  var ref = this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id='+data.information_id, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

                  ref.on('loadstop').subscribe((event) => {
                    this.screen_orientation_object.unlock();
                  });
                  ref.on('exit').subscribe((event) => {            
                    this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                  });                                      
                }else{
                  //this.nav.setRoot('DashboardPage');
                  this.infoparams = {
                    "record_time" : this.dtStr,
                    "record_date" : this.clevertapDate,
                    "os" : localStorage.getItem('getDevicePlatform'),
                    "userRoleId" : localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail" : localStorage.getItem('cv5userEmail'),
                    "Identity":localStorage.getItem('userIdentity'),
                    "specialities":localStorage.getItem('usrSpecialities'),
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                    "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                    "videoContentFor":'Information',
                    "userLoggedIn": "user_logged_in:-"+true,
                    "islogin":true
                  };

                  var user_type = localStorage.getItem('cv5usrType');

                  var infoquerystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+data.information_id); 

                  this.databaseprovider.fetchAllData('information' , infoquerystring).then(infodata => { 
                    if(infodata.length == 0){
                      this.databaseprovider.getSingleInformation(user_type, data.information_id);
                    }
                    setTimeout(() => {
                      this.databaseprovider.fetchAllData('information' , infoquerystring).then(infodata1 => { 
                        if(infodata1.length > 0){
                          setTimeout(() => {
                          this.nav.push('InformationVideoDetailsPage', {pageItem:infodata1[0].name, coloR:infodata1[0].hexcodeBase, icondash:infodata1[0].iconName, data:infodata1[0], 'header':'show', 'request_from': 'video_list', previousPage:'appComponent','sendTo':'Branch' });
                          }, 400);  
                        }
                      });
                    }, 2000);
                  });
                }
              }); 
              
              this.httpservice.getSingleInformationVideo(data.information_id).subscribe(individualVideoData => {
                if(localStorage.getItem('cv5userRoleId') == '1') {
                  var vidName =individualVideoData[0].hcp_name;
                }else if (localStorage.getItem('cv5userRoleId') == '5') {
                  var vidName =individualVideoData[0].nonhcp_name;
                }else{
                  var vidName =individualVideoData[0].hcp_name;
                }
                var infoparams1 = { 
                  "videoName":vidName
                };
                var infoparams2 = _.extend(this.infoparams, infoparams1);
                this.clevertap_object.recordEventWithNameAndProps("openedSharedVideo",infoparams2);
              }, informationVideoErr => {
              });  
            }else if (data.hasOwnProperty('forum_link')) {
              this.storage_object.get('user_logged_in').then((val) => {
                if(!(val == 0 || val == null)){
                  this.onPromptForQna({'slug':data.forum_link,'title':data.forum_title})
                }
              });
            }else if(data.hasOwnProperty('referral_code')){
              localStorage.setItem('referred_by', data.referral_code); 
            }else if(data.hasOwnProperty('web_link')){

              this.params = {
                  "record_time" : this.dtStr,
                  "record_date" : this.clevertapDate,
                  "os" : localStorage.getItem('getDevicePlatform'),
                  "userRoleId" : localStorage.getItem('cv5userRoleId'),
                  "userType": localStorage.getItem('cv5usrType'),
                  "userEmail" : localStorage.getItem('cv5userEmail'),
                  "Identity":localStorage.getItem('userIdentity'),
                  "specialities":localStorage.getItem('usrSpecialities'),
                  "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                  "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                  "userLoggedIn": "user_logged_in:-"+true,
                  "islogin":true,
                  "contentName":data.$og_title,
                  "location": localStorage.getItem('location')
                };
                
                this.clevertap_object.recordEventWithNameAndProps("openedSharedLink",this.params);
                var ref = this.in_app_browser_object.create(data.web_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

                ref.on('loadstop').subscribe((event) => {
                  this.screen_orientation_object.unlock();
                });
                ref.on('exit').subscribe((event) => {            
                  this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                });                 

            }else if(data.hasOwnProperty('whatsnew_id')){
              localStorage.setItem('branch_flag', 'yes');
              this.loading_service_object.show();
              this.storage_object.get('user_logged_in').then((val) => {
                if(val == 0 || val == null){
                  
                  var whatsnew_url = this.localapi+"/api/whatsnews/"+data.whatsnew_id;
                  this.httpservice.fetchDataFromapi(whatsnew_url).subscribe(whatsnew_data => {

                    var list_values = JSON.parse(whatsnew_data.list_values);
                    var custom_id = 0;

                    if(_.size(list_values.Condition)>0){
                      custom_id = list_values.Condition[0];
                    }else if(_.size(list_values.Expert)>0){
                      custom_id = list_values.Expert[0];
                    }else if(_.size(list_values.education)>0){
                      custom_id = list_values.education[0];
                    }else if(_.size(list_values)>0){
                      custom_id = list_values[0];
                    }
                    
                    localStorage.setItem('branch_flag',''); 

                    var ref = this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?wid='+custom_id, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

                    ref.on('loadstop').subscribe((event) => {
                      this.screen_orientation_object.unlock();
                    });
                    ref.on('exit').subscribe((event) => {            
                      this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                    });

                  });                     
                }else{
 
                  var whatsnew_url = this.localapi+"/api/whatsnews/"+data.whatsnew_id;
                  this.httpservice.fetchDataFromapi(whatsnew_url).subscribe(whatsnew_data => {

                    this.params = {
                      "record_time" : this.dtStr,
                      "record_date" : this.clevertapDate,
                      "os" : localStorage.getItem('getDevicePlatform'),
                      "userRoleId" : localStorage.getItem('cv5userRoleId'),
                      "userType": localStorage.getItem('cv5usrType'),
                      "userEmail" : localStorage.getItem('cv5userEmail'),
                      "specialities":localStorage.getItem('usrSpecialities'),
                      "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                      "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                      "Identity":localStorage.getItem('userIdentity'),
                      "playlistContentFor":"Whatsnew",
                      "playlistName":whatsnew_data.name 
                    };
                    this.clevertap_object.recordEventWithNameAndProps("openedSharedPlaylist",this.params);

                    switch(whatsnew_data.template){

                    
                      case 'expert_playlist':
                        var list_json = JSON.parse(whatsnew_data.list_values);
                        
                        this.updated_id = '';

                        for(let i=0;i<list_json.length; i++){
                            if(this.updated_id == ''){
                              this.updated_id = list_json[i];
                            }else{
                              this.updated_id = this.updated_id+','+list_json[i];
                            }
                        }
                        setTimeout(() =>{
                          if(whatsnew_data.source == 'education'){
                            var subtopic_url = this.localapi+'/api/subtopics?filter={"where":{"id":{"inq":['+list_json+']}}}';

                            
                            this.httpservice.fetchDataFromapi(subtopic_url).subscribe(topic_data => {
                  
                              var topic_ids = _.pluck(topic_data, 'id');

                              var that = this;
                            
                              for(let i=0;i<list_json.length; i++){

                                var list_item = parseInt(list_json[i]);
                                var n = topic_ids.includes(list_item);
                                if(n){
                                  break;
                                }
                              }
                              this.valid_ids = list_item;
                            });
                            

                          }else if(whatsnew_data.source == 'information'){

                            var info_url = this.localapi+'/api/information?filter={"where": {"id": {"inq":['+ list_json+']}}}';
                            this.httpservice.fetchDataFromapi(info_url).subscribe(topic_data => {

                              var topic_ids = _.pluck(topic_data, 'id');

                              var that = this;

                              for(let i=0;i<list_json.length; i++){
                                var list_item = parseInt(list_json[i]);
                                var n = topic_ids.includes(list_item);
                                if(n){
                                  break;
                                }
                              }
                              this.valid_ids = list_item;
                            });

                          }
                        }, 2000);  

                        setTimeout(() =>{
                          if(whatsnew_data.source == 'education'){

                            var subtopic_url1 = this.localapi+'/api/subtopics?filter[where][isActive]=1&filter[where][id]='+this.valid_ids;

                            this.httpservice.fetchDataFromapi(subtopic_url1).subscribe(topic_data => {
                              
                              topic_data[0].isFavourite = 0;
                              this.nav.push('WhatsNewDetailsPage', {data:whatsnew_data, type:whatsnew_data.template, index:0, 'header':'hide', 'display_playlist':topic_data[0]});
                              this.loading_service_object.hide();
                            });

                          }
                        }, 3000);  

                        break;
                      case 'tab_list':
                        localStorage.setItem('segment_name', whatsnew_data.source);
                        this.nav.push('ItemDetailsPageTabs',{pageItem:whatsnew_data.name, data:whatsnew_data, request_from:'branch'});
                        this.loading_service_object.hide();
                        break;
                      case 'wordpress_blog':
                        var network_type = this.network_check_object.getNetworkType();
                        if(network_type == 'none'){
                          this.toast_controller_object.create({
                            message: 'You are now offline.',
                            position: 'bottom',
                            duration: 5000
                          }).present();
                          this.loading_service_object.hide();
                        } else {
                          //this.forClevertapRecords(item, type, list);
                          if(whatsnew_data.list_values == undefined || whatsnew_data.list_values == 'undefined'){
                            var ref = this.in_app_browser_object.create(whatsnew_data.blog_link, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

                            ref.on('loadstop').subscribe((event) => {
                              this.screen_orientation_object.unlock();
                            });
                            ref.on('exit').subscribe((event) => {            
                              this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });

                            this.loading_service_object.hide();
                          }else{
                            var values = JSON.parse(whatsnew_data.list_values);
                            var ref = this.in_app_browser_object.create(values.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');

                            ref.on('loadstop').subscribe((event) => {
                              this.screen_orientation_object.unlock();
                            });
                            ref.on('exit').subscribe((event) => {            
                              this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
                            });

                            this.loading_service_object.hide();
                          }
                        }
            
                        break;
                      case 'video_detail':
                        var list_json = JSON.parse(whatsnew_data.list_values);
                        if(whatsnew_data.source == 'education'){
                          var subtopic_url = this.localapi+'/api/subtopics?filter[where][isActive]=1&filter[where][id]='+list_json.Condition[0];

                          this.httpservice.fetchDataFromapi(subtopic_url).subscribe(topic_data => {
                            topic_data[0].isFavourite = 0;
                            
                            this.nav.push('WhatsNewDetailsPage', {data:whatsnew_data, type: whatsnew_data.template, index:0, 'header':'hide', 'display_data':topic_data[0], 'request_from':'splash'});
                          });
                        }else if(whatsnew_data.source == 'information'){

                          var info_url = this.localapi+'/api/information?filter[where][isActive]=1&filter[where][id]='+list_json.Expert[0];

                          this.httpservice.fetchDataFromapi(info_url).subscribe(topic_data => {
                            topic_data[0].isFavourite = 0;
                            
                            this.nav.push('WhatsNewDetailsPage', {data:whatsnew_data, type: whatsnew_data.template, index:0, 'header':'hide', 'display_data':topic_data[0], 'request_from':'splash'});
                          });
                        }  
                        break;
                      
                    }
                  });
                }
              });
            }
          }
        }).catch( (err) => {
        });

        Branch.setIdentity("cardio_"+localStorage.getItem('getCleverTapID')).then(function (res) {
          // only canonicalIdentifier is required
          var properties2 = {
            canonicalIdentifier: 'cardiovisual',
            title: 'CardioVisual'
          };
          var branchUniversalObj = null;
          if(localStorage.getItem('isLinkSet') == null){
            // create a branchUniversalObj variable to reference with other Branch methods
            Branch.createBranchUniversalObject(properties2).then(function(res) {
              branchUniversalObj = res;
            }).catch(function(err) {
              console.log(JSON.stringify(err));
            });
          }
        });
      };
      branchInit();  

      this.initializeApp();
    });

    
    var user_role_subtype = localStorage.getItem('cv5usrRolesubType');
    var user_specialities = localStorage.getItem('usrSpecialities');
    if(user_role_subtype == 'medical-device-pharma-professional' || user_role_subtype == 'Medical Device/Pharma Professional' || user_role_subtype == 'patient' || user_role_subtype == 'Patient' || user_role_subtype == 'curious-learner' || user_role_subtype == 'Curious learner/Other' || user_specialities =='Non-Healthcare Professional' || user_specialities =='Healthcare Industry Professional'){
    //if(user_role_subtype == 'medical-device-pharma-professional' || user_role_subtype == 'Medical Device/Pharma Professional' || user_role_subtype == 'patient' || user_role_subtype == 'Patient' || user_role_subtype == 'curious-learner' || user_role_subtype == 'Curious learner/Other' ){

      this.pages = [
        { title: 'Learn Something New', component: '' , icon : "icon-player-play menu-icon-size"},
        { title: 'Upgrade Plan', component: 'UpgradePlanPage', icon : "icon-upgrade"},
        { title: 'Scan & Share', component: 'QrcodePage', icon : "icon-video-icons-share-vid menu-icon-size"},
        { title: 'About', component: '', icon : "icon-about-us"},  
        { title: 'Contact Us', component: '', icon : "icon-contact-us"}, 
        { title: 'Log Out', component: '', icon : "icon-logout" },
        // { title: 'Delete My account', component: '', icon : "icon-trash"},  
        /*{ title: 'How to Use', component: 'HowtousePage', icon : "icon-cardio-info"},*/
        // { title: 'Share the App', component: '', icon : "icon-video-icons-share-app menu-icon-size"},  
        /*{ title: 'How to Share', component: '', icon : "icon-cardio-info"},*/
        // { title: 'Feedback', component: '', icon : "icon-pencil"},
        // { title: 'Privacy Policy', component: '', icon : "icon-privacy-policy"},
        /*{ title: 'Terms of Service', component: '', icon : "icon-sheet"},*/
      ];
    }else{
      this.pages = [
        { title: 'Learn Something New', component: '' , icon : "icon-player-play menu-icon-size"},
        { title: 'Upgrade Plan', component: 'UpgradePlanPage', icon : "icon-upgrade"},
        { title: 'Scan & Share', component: 'QrcodePage', icon : "icon-video-icons-share-vid menu-icon-size"},
        { title: 'About', component: '', icon : "icon-about-us"},  
        { title: 'Contact Us', component: '', icon : "icon-contact-us"}, 
        { title: 'Log Out', component: '', icon : "icon-logout" },
        // { title: 'Delete My account', component: '', icon : "icon-trash"},
        /*{ title: 'Dashboard', component: 'DashboardPage' , icon : ""},*/
        //{ title: 'How to Use', component: 'HowtousePage', icon : "icon-cardio-info"},
        //{ title: 'Discuss', component: '', icon : "icon-cardio-discuss" }, 
        // { title: 'Share the App', component: '', icon : "icon-video-icons-share-app menu-icon-size"},  
        //{ title: 'Scan & Scare', component: 'QrcodePage', icon : "icon-video-icons-share-vid menu-icon-size"},
        // { title: 'Forum Rules', component: '', icon : "icon-cardio-discuss" },
        //{ title: 'How to Share', component: '', icon : "icon-cardio-info"},
        // { title: 'Feedback', component: '', icon : "icon-pencil"},
        // { title: 'Privacy Policy', component: '', icon : "icon-privacy-policy"},
        //{ title: 'Terms of Service', component: '', icon : "icon-sheet"},
      ];
    }

    this.params ={
      "background": "assets/images/background/cardio-user-setup-bg.jpg",
      "image": "assets/images/logo/cv-logo-subscription.png",
      "title": "CardioVisual"
    };
  }

  presentProfileModal() {
    const profileModal = this.modal_controller_object.create("IntroPage");
    profileModal.present();
  }

  doubleBackPress() {
    let toast = this.toast_controller_object.create({
      message: "Press Again to Exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  initializeApp() {

    this.localapi = this.httpservice.getApi();
    this.platform_object.ready().then(() => {

      /*------------------------------------- clevertap -------------------------------------*/
      
      document.addEventListener('onCleverTapProfileDidInitialize', (e: any) => {
        console.log("onCleverTapProfileDidInitialize");
      });


      document.addEventListener('onCleverTapInAppNotificationDismissed', (e: any) => {
        console.log("onCleverTapInAppNotificationDismissed");
      });

      document.addEventListener('onDeepLink', (e: any) => {
        console.log("onDeepLink");
      });

      document.addEventListener('onPushNotification', (e: any) => {
        console.log("onPushNotification");
      });

      this.clevertap_object.setDebugLevel(2);
      this.clevertap_object.enablePersonalization();
      this.clevertap_object.registerPush();
     
      /*-------------------------------End CleverTap--------------------------------------------------------------*/


      /* OneSignal initialization start by: Sanjeev */

      // window["plugins"].OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });

      // this.onesignal_object.startInit("58d2188a-4144-4627-8548-9cd386b16746", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID");

      // this.onesignal_object.inFocusDisplaying(this.onesignal_object.OSInFocusDisplayOption.Notification);

      // this.onesignal_object.handleNotificationReceived().subscribe(() => {
      //  // do something when notification is received
      // });

      // this.onesignal_object.handleNotificationOpened().subscribe((data) => { 
      //   let payload = data; // getting id and action in additionalData.
      //   this.toDoAction(payload);
      // });

      // this.onesignal_object.endInit();

      setTimeout(() => {
      //  this.onesignal_object.sendTag("appVersion",this.app_version_number);       
      //   this.onesignal_object.getPermissionSubscriptionState().then(information => {
      //     this.notificacioneStatus = information.subscriptionStatus.subscribed;
      //     localStorage.setItem('getSubscriptionStatus', this.notificacioneStatus);
      //   });         
      }, 3000);
      

      /* Onesignal end */ 

        /* splash screen start */
      this.storage_object.get('user_logged_in').then((val) => {
        
        if(val == 0 || val == null){
         
          var onetwothreeupdate  = new Array("");
          this.databaseprovider.fetchAllData('new_user_info' , onetwothreeupdate).then(one_to_threeupdateResult => {

            if(_.size(one_to_threeupdateResult) > 0){

              localStorage.setItem('userliveId',one_to_threeupdateResult[0].liveId);

              var userType = one_to_threeupdateResult[0].userRoleId;
              var userROleType =  (userType == 1) ?  "doctor" : "patient";

              localStorage.setItem('cv5usrType',userROleType);

              localStorage.setItem('cv5userEmail',one_to_threeupdateResult[0].email);
              localStorage.setItem('cv5userRoleId',one_to_threeupdateResult[0].userRoleId);
              localStorage.setItem('cv5usrRolesubType',one_to_threeupdateResult[0].userRoleSubType);
              localStorage.setItem('userIdentity',userROleType+one_to_threeupdateResult[0].liveId);
              localStorage.setItem('verified',one_to_threeupdateResult[0].verified);
              localStorage.setItem('location',one_to_threeupdateResult[0].location);
              this.storage_object.set('user_logged_in', one_to_threeupdateResult[0].liveId);

              this.databaseprovider.newUserInfoAddColumn(one_to_threeupdateResult[0].liveId);
              // Get topics detail from API
              this.databaseprovider.getTopicsAPIData(userROleType);

              //insert playlist data from api
              this.databaseprovider.insertPlaylistsAPIData(one_to_threeupdateResult[0].liveId);

              // Get categories detail from API
              this.databaseprovider.getCategoriesAPIData(userROleType);

              this.databaseprovider.getCardioSplashes(userROleType);

              this.databaseprovider.getSubTopicsAPIData(userROleType);
              this.databaseprovider.getOrderDetailsAPIData(one_to_threeupdateResult[0].liveId);

              //information table
             this.databaseprovider.getInformationAPIData(userROleType);

             //channels table
             this.databaseprovider.getChannelsApiData(userROleType);

               //custom_lisiting
              this.databaseprovider.getCutomlistingApi();

              //custom video json
              this.databaseprovider.getCutomVideoJsonApi();

              this.databaseprovider.getSponsoredByData(userROleType);
              
              this.databaseprovider.getUserNotificationData(userROleType);
             
              var loading = this.loading_controller_object.create({
                //spinner: 'ios',
                spinner: 'dots',
                content:"<div class='custom-spinner-container'>Please wait, app is being updated.</div>",
                duration: 7700,
                enableBackdropDismiss: false
              });
              loading.present();
              setTimeout(() => {
               this.nav.setRoot('DashboardPage', {forAppUpdate:'forAppUpgrade'});
              }, 8000);            
            }else {
              this.rootPage = "IntroPage";
            }
          }, onetwothreeupdateError=>{
          });
        }else{
          var userData = new Array(""); 
          this.databaseprovider.fetchAllData('new_user_info' , userData).then(userresult => {
            this.databaseprovider.newUserInfoAddColumn(userresult[0].liveId);
            this.userEmail = userresult[0].email;
            this.usrType = userresult[0].user_type;
            this.userRoleId = userresult[0].userRoleId;
            
            // this.onesignal_object.sendTags({"userType": this.userRoleId, "profession": this.usrType, "email": this.userEmail,"userRolesubtype":userresult[0].user_role_sub_type});
            /* set user details for clavertap use start */
            localStorage.setItem('cv5userEmail',this.userEmail);
            localStorage.setItem('cv5userRoleId',this.userRoleId);
            localStorage.setItem('cv5usrType',this.usrType);
            localStorage.setItem('cv5usrRolesubType',userresult[0].user_role_sub_type);
            localStorage.setItem('userIdentity',this.usrType+userresult[0].liveId);
            localStorage.setItem('verified',userresult[0].verified);
            localStorage.setItem('userliveId',userresult[0].liveId);
            localStorage.setItem('loginMedium',userresult[0].medium);
            localStorage.setItem('location',userresult[0].location);
            

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
              "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
              "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
              "location":localStorage.getItem('location')
            };
            // Set clevertap Custom AppLaunch event.
            this.clevertap_object.recordEventWithNameAndProps("myAppLaunch", params); 
            
            this.clevertap_object.profileSet({
              "Location":localStorage.getItem('location'),
              "UserRoleId":localStorage.getItem('cv5userRoleId'),
              "UserType":localStorage.getItem('cv5usrType'),
              "Specialities":localStorage.getItem('usrSpecialities'),
              "SubSpecialities":localStorage.getItem('cv5usrRolesubType'),
              "medium":localStorage.getItem('loginMedium')
            });
            /* set user details End */
            setTimeout(() => {
              if (userresult.length > 0 && localStorage.getItem('branch_flag') == '') {

                var network_type = this.network_check_object.getNetworkType();
                if(network_type == 'none'){
                  this.nav.setRoot('DashboardPage');
                  // this.nav.setRoot('WhatsNewPage');
                }else{

                  if(userresult[0].verified != 0 && userresult[0].verified != null) {

                    var userType = (userresult[0].userRoleId == 1) ? "doctor" : "patient";

                    /*var splash_condition = new Array(" WHERE isFor='"+userType+"' OR isFor='all' ORDER BY position DESC");
                    this.databaseprovider.fetchAllData('new_cardio_splashes' , splash_condition).then(splash_data => {*/
                    
                    this.httpservice.getnewSplashes().subscribe(splash_data => {
                      var splash_data_1 = _.filter(splash_data,function(s_data1){
                            return (s_data1.isFor == userType || s_data1.isFor == 'all');
                      });

                      if(_.size(splash_data_1) > 0){
                          var data2 = _.filter(splash_data_1,function(data1){
                            return (data1.isSponsor == 1)
                          });
                          if(_.size(data2) > 0){
                            this.nav.setRoot('SplashesPage', {sponsordbyResult : data2 , type:'sponsordBy'});
                          }else{
                            this.nav.setRoot('DashboardPage');
                            // this.nav.setRoot('WhatsNewPage');
                          }
                      }else{
                        this.nav.setRoot('DashboardPage');
                        // this.nav.setRoot('WhatsNewPage');
                      }

                    }, error=>{

                      this.httpservice.getSponsorSplashes().subscribe(data => {
                        if(_.size(data) > 0){

                          var data2 = _.filter(data,function(data1){
                            return (data1.isFor == userType  || data1.isFor == "all")
                          });
                          if (_.size(data2) > 0) {
                            this.nav.setRoot('SplashesPage',{sponsordbyResult : data2 , type:'sponsordBy'});
                          }else{
                            this.nav.setRoot('DashboardPage');
                            // this.nav.setRoot('WhatsNewPage');
                          }                                         
                        }else{
                          this.nav.setRoot('DashboardPage');
                          // this.nav.setRoot('WhatsNewPage');
                        }
                      }, err => {
                      });
                    });                
                  } else {
                    this.nav.setRoot('RegisterPage');
                  }
                }
              }else if(localStorage.getItem('branch_flag') == ''){
                this.rootPage = "IntroPage";
              }
            },1000);
          });
        }
      });
      /* splash screen end */
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.status_bar_object.overlaysWebView(false);
      this.status_bar_object.styleDefault();
      this.status_bar_object.backgroundColorByHexString('#f0f0f0');
      this.splash_screen_object.hide();
      //localStorage.setItem("mailChimpLocal", "true");



      var offline = fromEvent(window, "offline");
      var online = fromEvent(window, "online");

      offline.subscribe(() => {
          let toast1 = this.toast_controller_object.create({
            message: 'You are Offline',
            position: 'bottom',
            duration: 5000,
            cssClass: 'normal-button'
        });
        toast1.present();

        toast1.onDidDismiss(() => {
          //alert('Dismissed');
        });
      });

      online.subscribe(() => {
          let toast2 = this.toast_controller_object.create({
            message: 'Back Online',
            duration: 3000,
            position: 'bottom',
            cssClass: 'green-button'
        });
        toast2.present();    
      });

      /* DOUBLE BACK EXIT start */
      this.platform_object.registerBackButtonAction(() => {
         var nav = this.app_object.getActiveNavs()[0];
         var activeView = nav.getActive();
         if(activeView.name != 'DashboardPage'){
             this.counter = 0;
             this.nav.pop();
         }else{
           this.doubleBackPress();
           this.counter++;
           
           if(this.counter == 2){
             this.platform_object.exitApp();
           }
         }  
      }, 0);
      /* DOUBLE BACK EXIT end */


      /*Initialize Freshchat with your AppId & AppKey from your portal
       *https://web.Freshchat.com/settings/apisdk
       *Freshchat init start
       *Sanjeev Kumar 6th may 2019
       */
      ((window as any).Freshchat).init({
        appId       : 'ef339760-dcd9-46e7-903b-af831966d4ac',
        appKey      : 'fa99ad4c-6f87-4946-af8e-87a47ee6e2e1',
        gallerySelectionEnabled      : true,
        cameraCaptureEnabled    : true,
        teamMemberInfoVisible   : true,
        notificationSoundEnabled : true,
        showNotificationBanner : true,
      }, function(success){
      });
      /* Freshchat init END*/

      //branchInit();
   
    }); //device ready end


    // document.addEventListener('deviceready', function() {
    //     branchInit();
    // }, false);


  }//initializeApp End

 /*---------------------------------------------------------------------------------------------*/
  toDoAction(data) { 
    try {
      if (data.notification.payload.hasOwnProperty("additionalData")) {
        var additional_data = data.notification.payload.additionalData;
        var idVideo = additional_data.video_id;
        var informationID = additional_data.information_id;
        var user_type = localStorage.getItem('cv5usrType');

        if((!idVideo || idVideo != null) && idVideo != undefined){

          this.storage_object.get('user_logged_in').then((val) => {
            if(val == 0 || val == null){

              this.nav.setRoot('LoginPage');
              var params = {
                "record_time" : this.dtStr,
                "record_date" : this.clevertapDate,
                "os" : localStorage.getItem('getDevicePlatform'),
                "videoName":"webUrl::= https://pulse.cardiovisual.com/video/?id="+idVideo,                  
                "islogin":false
              }; 
              this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo",params);
              var ref = this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id='+idVideo, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app');  

              ref.on('loadstop').subscribe((event) => {
                this.screen_orientation_object.unlock();
              });
              ref.on('exit').subscribe((event) => {            
                this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
              });

            }else{
              //this.nav.setRoot('DashboardPage');
              this.params = {
                "record_time" : this.dtStr,
                "record_date" : this.clevertapDate,
                "os" : localStorage.getItem('getDevicePlatform'),
                "userRoleId" : localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "userEmail" : localStorage.getItem('cv5userEmail'),
                "specialities":localStorage.getItem('usrSpecialities'),
                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                "Identity":localStorage.getItem('userIdentity'),
                "location":localStorage.getItem('location'),
                "videoContentFor":'Education',
                "islogin":true
              };
              var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+idVideo);
              this.databaseprovider.fetchAllData('new_sub_topics' , querystring).then(subTopic_data => {

                if(subTopic_data.length == 0){
                  this.databaseprovider.getSingleSubtopic(user_type, idVideo);
                } 
                setTimeout(() => {
                  this.databaseprovider.fetchAllData('new_sub_topics' , querystring).then(subTopic_data1 => {
                    if(subTopic_data1.length > 0){
                      setTimeout(() => {
                        var params1 = {                   
                          "videoName":subTopic_data1[0].name
                        };
                        var params2 = _.extend(this.params, params1);
                        this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo",params2);
                        this.nav.push('VideoDetailsPage', {pageItem:subTopic_data1[0].name, coloR:subTopic_data1[0].hexcodeBase, icondash:subTopic_data1[0].iconName, data:subTopic_data1[0], 'header':'show', 'request_from': 'video_list', previousPage:'appComponent','sendTo':'OneSignal' });
                      }, 400);
                    }
                  });
                }, 2000);
              });             
            }
          });                    
        }else if ((!informationID || informationID != null) && informationID != undefined) {

          this.storage_object.get('user_logged_in').then((val) => {
            if(val == 0 || val == null){

              this.nav.setRoot('LoginPage');
              var params = {
                "record_time" : this.dtStr,
                "record_date" : this.clevertapDate,
                "os" : localStorage.getItem('getDevicePlatform'),
                "videoName":"webUrl::= https://pulse.cardiovisual.com/video/?id="+informationID,              
                "islogin":false
              }; 
              this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo",params);
              var ref = this.in_app_browser_object.create('https://pulse.cardiovisual.com/video/?id='+informationID, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app'); 

              ref.on('loadstop').subscribe((event) => {
                this.screen_orientation_object.unlock();
              });
              ref.on('exit').subscribe((event) => {            
                this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
              });

            }else{
              //this.nav.setRoot('DashboardPage');
              this.params = {
                "record_time" : this.dtStr,
                "record_date" : this.clevertapDate,
                "os" : localStorage.getItem('getDevicePlatform'),
                "userRoleId" : localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "userEmail" : localStorage.getItem('cv5userEmail'),
                "specialities":localStorage.getItem('usrSpecialities'),
                "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                "Identity":localStorage.getItem('userIdentity'),
                "location":localStorage.getItem('location'),
                "videoContentFor":'Information',   
                "islogin":true
              };

              var infoquerystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+informationID);
              this.databaseprovider.fetchAllData('information' , infoquerystring).then(infodata => { 
                if(infodata.length == 0){
                  this.databaseprovider.getSingleInformation(user_type, informationID);
                }
                setTimeout(() => {
                  this.databaseprovider.fetchAllData('information' , infoquerystring).then(infodata1 => { 
                    if(infodata1.length > 0){
                      setTimeout(() => {
                        var params1 = {                   
                          "videoName":infodata1[0].name
                        };
                        var params2 = _.extend(this.params, params1);
                        this.clevertap_object.recordEventWithNameAndProps("openedOneSignalPushVideo",params2);
                        this.nav.push('InformationVideoDetailsPage', {pageItem:infodata1[0].name, coloR:infodata1[0].hexcodeBase, icondash:infodata1[0].iconName, data:infodata1[0], 'header':'show', 'request_from': 'video_list', previousPage:'appComponent','sendTo':'OneSignal' });
                      }, 400);  
                    }
                  });
                }, 2000);
              });           
            }
          });  
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }

  // openPage(page) {

  //   this.nav.setRoot(page.component);
  // };

  openPage(page) {
    if(page.title === 'How to Use') {
      this.loading_service_object.show();

      var howto_query = new Array("WHERE name like '%How to Use%'");
      this.databaseprovider.fetchAllData('whatsnew' , howto_query).then(data=>{
        var list_values = JSON.parse(data[0].list_values);

        var json_query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+list_values[0]+" AND isActive = 1");
        this.databaseprovider.fetchAllData('new_sub_topics' , json_query).then(topic_data => {
          setTimeout(()=>{
            if(topic_data.length > 0){  

              this.nav.push('WhatsNewDetailsPage', {data:data[0], type:data[0].template, index:0, 'header':'hide', 'display_playlist':topic_data[0],'sendTo':'How to Use'});
            }else{
              this.toast_controller_object.create({
                message: 'Content is not available.',
                position: 'bottom',
                duration: 3000
              }).present();
            }
            this.loading_service_object.hide();
          }, 2000);
        });        
      });      
      //this.openModal('How to Use');
    }else if (page.title === 'How to Share') {
      this.openModal('How to Share');
    }else if (page.title === 'About') {
      this.openModal('About Us');
    }else if (page.title === 'Privacy Policy') {
      this.openModal('Privacy Policy');
    }else if (page.title === 'Log Out') {
      this.logout();
    }else if (page.title === 'Forum Rules') {
      //this.forumLink();
      //this.forumRuleLink();
      this.openModal('Forum Rules');

    }else if (page.title === 'Terms of Service') {
      this.termsOfService();
    }else if (page.title === 'Share the App') {
      this.shareApplink();
    }else if (page.title === 'Feedback' || page.title === 'Contact Us') {
      this.leaveMessage();
    }else if (page.title === 'Upgrade Plan') {
      var flg = localStorage.getItem('myProductflg');
      if (flg == 'false' || flg == null || flg == '') {
        this.nav.push('UpgradePlanPage',{previousPage:'fromSideMenu'});
      }else{
        this.nav.push('PlandetailsPage',{previousPage:'fromSideMenu'});
      }
    }else if (page.title === 'Scan & Share') {

      this.nav.push('QrcodePage',{previousPage:'fromSideMenu'});
    }else if (page.title === 'Learn Something New') {
      // code...
      var roleId = localStorage.getItem('cv5userRoleId');

      if ( roleId == '5' ){
        this.nav.setRoot('OrientationPlaylistNonHcp',{previousPage:'fromSideMenu'}); 
      } else {
        this.nav.setRoot('OrientationPlaylistHcp',{previousPage:'fromSideMenu'});  
      }
    }
    else{
      this.nav.setRoot(page.component);
    }
  };


  openModal(myData) {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    
    const myModal: Modal = this.modal_controller_object.create('ModalPage', { data: myData }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
    });

    myModal.onWillDismiss((data) => {
    });
  }

  /*leave feedback by: sanjeev*/
  leaveMessage(){
    var usrType = '';
    var userEmail = localStorage.getItem('cv5userEmail');
    var name   = userEmail.substring(0, userEmail.lastIndexOf("@"));
    var userType = (this.userRoleId == 1) ? "doctor" : "patient";
    if(userType != "doctor"){
        usrType = 'nonhcp';
    } else {
      usrType = 'hcp';
    }
    var userInfo = {
        "firstName": name,
        "lastName": usrType,
        "email" : userEmail,
        "externalId" : userEmail
    };


    ((window as any).Freshchat).updateUser(userInfo)

    var userProperties = {
        "userRoleId": localStorage.getItem('cv5userRoleId'),
        "userType": localStorage.getItem('cv5usrType'),
        "organisation": "CardioVisual"
    };

    ((window as any).Freshchat).updateUserProperties(userProperties);

    //window.Freshchat.setExternalID('sanjeev.kumar@oneleap.in');
    ((window as any).Freshchat).showConversations();      
  }

  /*End*/

  termsOfService(){
    this.in_app_browser_object.create('https://cardiovisual.com/cardio-visual-app-end-user-license-agreement/', '_blank', 'location=yes');
  }



  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }


  logout(){
    var confirmPopup = this.alert_controller_object.create({
      title: '',
      message: '<h4 style="color:#ffffff; text-align:center;">Are you sure you want to logout?</h4>',
      buttons: [{ 
      text: 'No',
      handler: () => {}
      }, {
        text: 'Yes',
        handler: (e) => {
        this.storage_object.get('user_logged_in').then((val) => {
          var device_token = this.databaseprovider.getOSSpecificUUID(val);

          var deviceData  = {
            "userId": val,
            "deviceToken": device_token
          };
          this.httpservice.getDeviceDatas(deviceData).subscribe(user_data => {
            if(user_data.length > 0){
              var params = {"updatedAt": new Date().toISOString(), "status": '0'};

              this.http_object.put(this.localapi+"/api/devices/"+user_data[0].id, params).subscribe(data => {
              }, error => {
                console.log(error);
              });
            }
          }, err => {
            console.log('err->'+err);
          }); 
        }); 
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
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
          "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
          "loggedInMedium":localStorage.getItem('loginMedium'),
          "location":localStorage.getItem('location')
        };

        this.clevertap_object.recordEventWithNameAndProps("clickedLogout",params);

        this.databaseprovider.deleteRecords("DELETE FROM new_user_info");
        //this.sqlite_sync.deleteUserInfo();
        this.storage_object.set('user_logged_in', 0);
        this.storage_object.set('get_started_page_counter', 0);

        localStorage.setItem('cv5userEmail','');
        localStorage.setItem('cv5userRoleId','');
        localStorage.setItem('cv5usrType','');
        localStorage.setItem('cv5usrRolesubType','');
        localStorage.setItem('userIdentity','');
        localStorage.setItem('getCleverTapID','');
        localStorage.setItem('updatedPlayerId', '');
        localStorage.setItem('liveId','');
        localStorage.setItem('verified','');
        localStorage.setItem('isLinkSet', '');

        localStorage.setItem('shownContent', '');
        localStorage.setItem('productActiveTill', '');
        localStorage.setItem('myProductflg', 'false');
        localStorage.setItem('userProAccess', '');
        localStorage.setItem('productExpired', ''); 
        localStorage.setItem('productID', 'false');
        localStorage.setItem('productType', '');
        localStorage.setItem('productExpiredate', '');
        localStorage.setItem('promotionalCodeStatus','');
        localStorage.setItem('canvasimgshare','notset');
        localStorage.setItem('canDownloadAccess','false');
        localStorage.setItem('Downloadque', '');
        localStorage.setItem('app_sync_dashboard', 'yes');
        localStorage.setItem('page_array_push', 'yes');
        localStorage.setItem('showrandomVideo', 'yes');
        localStorage.setItem('arrayOfTags', 'yes');
        localStorage.setItem('loginMedium','false');
        localStorage.setItem('ratingDialogShown', 'null');
        localStorage.setItem('userliveId','');
        localStorage.setItem('InfoDownloadque', '');
        localStorage.setItem('usrSpecialities', '');
        localStorage.setItem('referral_code', '');
        localStorage.setItem('referred_by', '');
        localStorage.setItem('applaunchPopup', 'yes');


        this.nav.setRoot("LoginPage");

        }
      }]
    });

    confirmPopup.present();
  }





  shareApplink() {

    var options = {
    //message: 'Please download CardioVisual: A free heart health app that has easy-to-understand educational videos of heart conditions and treatments. Available for iOS and Android.', // not supported on some apps (Facebook, Instagram) 
    message: 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.', // not supported on some apps (Facebook, Instagram) 
    subject: 'Download CardioVisual', // fi. for email 
    files: [], // an array of filenames either locally or remotely 
    url: localStorage.getItem('isLinkSet'),
    chooserTitle: '' // Android only, you can override the default share sheet title 
    }
    var params = {                    
      "userType": localStorage.getItem('cv5usrType')
    };
    // Set clevertap Custom AppLaunch event.
    this.clevertap_object.recordEventWithNameAndProps("appSharing", params);
    this.social_sharing_object.shareWithOptions(options);

    if(localStorage.getItem( 'ratingDialogShown') == null || localStorage.getItem( 'ratingDialogShown') == 'null' || localStorage.getItem( 'ratingDialogShown') == "" || localStorage.getItem( 'ratingDialogShown') == "undefined"){
        //this.httpservice.showRateDialogueBox();
        localStorage.setItem( 'ratingDialogShown', 'true');
    }
  }

  onPromptForQna(forum){
    this.for_videoshare_object.discussPromptForProffesional(forum,'From Branch Link','From Branch Link');
  }
}
