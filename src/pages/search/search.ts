import { Component, Input, ViewChild, Injector} from '@angular/core';
import { IonicPage, Content, NavController, NavParams, ToastController ,Platform, AlertController, LoadingController, Modal, ModalController, ModalOptions} from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import {Http} from '@angular/http';
import * as _ from 'underscore/underscore';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { ToastService } from '../../services/toast-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { File } from '@ionic-native/file'; 
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';
import { CleverTap } from '@ionic-native/clevertap';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../services/loading-service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @Input() data: any;
  @ViewChild(Content)
  content: Content;
  newcategory : any = {};
  newtopics: any = {};
  network_status: any;
  search: string = ''; 
  percentage: any; 
  isDownloading: any;
  perc1:any;
  download_count: any;
  userdata: any;
  orientation: string;
  dtStr : any;
  download_status:string = 'complete';
  video_que_array: any = [];
  path: string;
  clevertapDate : any;
  isRecording: boolean = true;
  matches: any;
  info_data: any;
  playlist_data: any;
  whatsnew_data: any;
  topics_data: any;
  expert_data: any;
  calculators_data: any;
  our_picks_data: any;
  topic_title: string;
  expert_title: string;
  calculator_title: string;
  our_pick_title: string;
  title_data: any;
  loader: any = {};
  test:any = [];
  nav_params_object: NavParams;
  http_service_object: HttpService;
  http_object: Http;
  network_object: Network;
  toast_controller_object: ToastController;
  database_provider_object: DatabaseProvider;
  social_sharing_object: SocialSharing;
  storage_object: Storage;
  file_transfer_object: FileTransfer;
  file_object: File;
  platform_object: Platform;
  toast_service_object: ToastService;
  screen_orientation_object: ScreenOrientation;
  alert_controller_object: AlertController;
  network_check_object: NetworkCheckProvider;
  video_share_provider_object: VideosharesocialProvider;
  clevertap_object: CleverTap;
  loading_service_object: LoadingService;
  in_app_browser_object: InAppBrowser;
  loading_controller_object: LoadingController;
  modal_controllar_object: ModalController;

  constructor(public navCtrl: NavController, public injector: Injector) {
      
      this.nav_params_object = injector.get<NavParams>(NavParams);
      this.http_service_object = injector.get<HttpService>(HttpService);
      this.http_object = injector.get<Http>(Http);
      this.network_object = injector.get<Network>(Network);
      this.toast_controller_object = injector.get<ToastController>(ToastController);
      this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
      this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
      this.storage_object = injector.get<Storage>(Storage);
      this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
      this.file_object = injector.get<File>(File);
      this.platform_object = injector.get<Platform>(Platform);
      this.toast_service_object = injector.get<ToastService>(ToastService);
      this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);
      this.alert_controller_object = injector.get<AlertController>(AlertController);
      this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
      this.clevertap_object = new CleverTap();
      this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
      this.loading_service_object = injector.get<LoadingService>(LoadingService);
      this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
      this.loading_controller_object = injector.get<LoadingController>(LoadingController);
      this.modal_controllar_object = injector.get<ModalController>(ModalController);
     
      localStorage.setItem('search_page', 'yes');
      this.clevertapDate = this.http_service_object.clevertapDate();
      var localPath = this.file_object.dataDirectory;
      this.path = localPath.replace(/file:\/\//g, "");
      this.data = this.nav_params_object.get('params');
      this.info_data = this.nav_params_object.get('info_result');
      this.playlist_data = this.nav_params_object.get('playlist');
      this.whatsnew_data = this.nav_params_object.get('whatsnew');
      var title_data_query = new Array("WHERE screen='whatsnew' AND is_active=1");
      this.database_provider_object.fetchAllData('whatsnewtitle' , title_data_query).then(titleData =>{
        this.title_data = titleData;
        this.topic_title = titleData[0].name;
        this.expert_title = titleData[1].name;
        this.calculator_title = titleData[2].name
        this.our_pick_title = titleData[3].name
      });

      this.topics_data = _.where(this.whatsnew_data, {type: 'topics'});
      this.calculators_data = _.where(this.whatsnew_data, {type: 'calculators'});
      this.expert_data = _.where(this.whatsnew_data, {type: 'speakers'});
      this.our_picks_data = _.where(this.whatsnew_data, {type: 'curated_lists'});
      this.expert_data = this.expert_data.slice(0, 2);

      this.our_picks_data = this.our_picks_data.slice(0, 2);
      this.calculators_data = this.calculators_data.slice(0, 2);
      this.search = this.nav_params_object.get('search');

      this.network_status = 'connected';
      this.network_object.onDisconnect().subscribe(() => {
        this.network_status = 'not_connected';
      });

      this.network_object.onConnect().subscribe(() => {
        this.network_status = 'connected';
      });

      this.dtStr = this.http_service_object.dtStr();
      var network_type = this.network_check_object.getNetworkType();
      if(network_type != 'none') {
        setTimeout(() => { 
          this.network_check_object.getPageAction('SearchPage','start','',localStorage.getItem('cv5usrType'));
        }, 1000); 
      }  
  }


  ionViewWillLeave(){
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      this.network_check_object.getPageAction('SearchPage','end','',localStorage.getItem('cv5usrType'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

  onEvent(event: string, item: any, e: any) {
    if(event == 'onItemClick'){
      if(item.subTopicType == 'image'){
        if(item.localUrl){
          this.navCtrl.push('DrawonPage', { drawnurl:item.localUrl , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType , video_Name:item.videoName, local_Url:'localUrl' });
        }else{
          this.navCtrl.push('DrawonPage', { drawnurl:item.url , drawOnImgTitle:item.title, drawnCopyright:item.copyrightInfo, drawnSubtopicType:item.subTopicType });
        }
      }else if (item.subTopicType == 'document'){
        var network_type = this.network_check_object.getNetworkType();
        if(network_type == 'none'){
          this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();
        } else {
          var ref = this.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');
          ref.on('loadstop').subscribe((event) => {
            this.screen_orientation_object.unlock();
          });
          ref.on('exit').subscribe((event) => {            
            this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
          });

        }
      }else if (item.subTopicType == 'other') {
        // code...
        //alert('other');
        switch (item.otherType) {
          case "link":
            var ref = this.in_app_browser_object.create(item.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
            ref.on('loadstop').subscribe((event) => {
              this.screen_orientation_object.unlock();
            });
            ref.on('exit').subscribe((event) => {            
              this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
            });
            break;        
          case "qr_code":
            // code...
            this.navCtrl.push('QrcodePage',{previousPage:'channellist',qrUrl:item.url});
            break;
        }
      }
      var canShare = localStorage.getItem('userProAccess');

      if(item.isPaid == 0 || canShare == 'true'){

        if(item.subTopicType == 'video') {

          if(item.categoryId > 3){
            var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+item.id);
            var table = 'information';
          }else{
            var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+item.id);
            var table = 'new_sub_topics';
          }

          this.database_provider_object.fetchAllData(table , querystring).then(data => { 
            //console.log('data tab page 2 -->'+JSON.stringify(data));
            if(data[0].localUrl != ''){
              if(item.categoryId > 3){
                this.navCtrl.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'SearchPage' });
              }else{
                this.navCtrl.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'SearchPage' });
              }
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
                if(item.categoryId > 3){
                  this.navCtrl.push('InformationVideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'SearchPage' });
                }else{
                  this.navCtrl.push('VideoDetailsPage', {pageItem:data[0].name, coloR:data[0].hexcodeBase, icondash:data[0].iconName, data:data[0], 'header':'show', 'request_from': 'video_list','sendTo':'SearchPage' });
                }  
              }
             });
            }
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
                }}
            ]
          });
        confirmPopup.present();  
      }
         
    }
    if(event == 'onDownload'){
      var canShare = localStorage.getItem('canDownloadAccess');
        if(item.subTopicType == 'image'){
          this.toast_service_object.mypresentToast("Only videos can be downloaded.",2000);
        }else if(item.subTopicType == 'video'){
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
                  if(item.categoryId < 3){

                    var downloadque = localStorage.getItem('Downloadque');
                    if(downloadque == null || downloadque == ''){
                      downloadque = item.id;
                    }else{

                      downloadque = downloadque + ','+item.id;
                    }
                    localStorage.setItem('Downloadque', downloadque);                  
                    this.isDownloadVideoMultiple();  

                  }else{
                    var info_downloadque = localStorage.getItem('InfoDownloadque');
                    if(info_downloadque == null || info_downloadque == ''){
                      info_downloadque = item.id;
                    }else{

                      info_downloadque = info_downloadque + ','+item.id;
                    }
                    localStorage.setItem('InfoDownloadque', info_downloadque);
                    this.isInfoDownloadVideoMultiple();
                  }
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
                      this.navCtrl.push('UpgradePlanPage');
                    }}
                ]
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
        }  
      e.stopPropagation();
    }

    if(event == 'onFavorite'){
        this.markasFavorite(item);
        e.stopPropagation();
    }

    if(event == 'onShare'){
      
      e.stopPropagation();
      //this.shareVideo(item);
      this.video_share_provider_object.shareSingleVideo(item);
    }
    if(event == 'onPlay'){
      var canShare = localStorage.getItem('canDownloadAccess');

      this.platform_object.ready().then(() => {

        var network_type = this.network_check_object.getNetworkType();
        var playlistParams = {
                    "record_time" : this.dtStr,
                    "record_date" : this.clevertapDate,
                    "os" : localStorage.getItem('getDevicePlatform'),
                    "modelNo" : localStorage.getItem('modelNo'),
                    "deviceversion" : localStorage.getItem('getDeviceversion'),
                    "userRoleId" : localStorage.getItem('cv5userRoleId'),
                    "userType": localStorage.getItem('cv5usrType'),
                    "userEmail" : localStorage.getItem('cv5userEmail'),
                    "playlistName": item.name,
                    "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                    "location":localStorage.getItem('location'),
                    "specialities":localStorage.getItem('usrSpecialities'),
                    "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
                  };

        if(canShare == 'false' && item.is_paid == 1){

          var confirmPopup = this.alert_controller_object.create({
            title: '',
            message: '<h4 style="color:#ffffff; text-align:center;">Upgrade required</h4><p style="color:#ffffff; text-align:center;font-weight:700;">Please upgrade to watch exclusive content.</p>',
            enableBackdropDismiss: true,
            buttons: [{ 
                text: 'Upgrade',
                handler: () => {
                  this.navCtrl.push('UpgradePlanPage');
                }}
            ]
          });
          confirmPopup.present();

        }else if(canShare == 'true' && item.is_paid == 1){

          if(network_type == 'none'){
           
            this.toast_controller_object.create({
                message: 'You are now offline.',
                position: 'bottom',
                duration: 5000
              }).present();

          } else {
         
            this.clevertap_object.recordEventWithNameAndProps("clickedOnPlaylist",playlistParams);
            this.navCtrl.push('VideoDetailsPage', {data:item, type:'playlist', index:0, 'header':'hide','sendTo':'SearchPage'});
          }

        }else if(item.is_paid == 0){

          if(network_type == 'none'){
           
            this.toast_controller_object.create({
                message: 'You are now offline.',
                position: 'bottom',
                duration: 5000
              }).present();

          } else {

            this.clevertap_object.recordEventWithNameAndProps("clickedOnPlaylist",playlistParams);
            this.navCtrl.push('VideoDetailsPage', {data:item, type:'playlist', index:0, 'header':'hide','sendTo':'SearchPage'});
          }

        }
      });

    }
    if(event == 'onPlaylistFavorite'){
      this.markPlaylistasFavorite(item);
    }
    if (event == 'onPlaylistAdd') {

      if(item.categoryId > 3){
        this.addtoplaylist(item , 'information');

      }else{
        this.addtoplaylist(item , 'education');
      }
      e.stopPropagation();

    }  
    
  }

  shareVideo(shareVideo){

    this.platform_object.ready().then(() => {
      var network_type = this.network_check_object.getNetworkType();
      if(network_type == 'none'){

        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();

      } else {
       //console.log('shareVideo--->'+JSON.stringify(shareVideo));
        var title = shareVideo.title;
        var name = shareVideo.name;
        var description = shareVideo.description;
        var iconUrl = shareVideo.iconUrl;
        var url = shareVideo.shareUrl;
        var id = shareVideo.id;

        var options = {
          message: name+' - '+description+'. Shared via CardioVisual App: The Heart Health App developed by Cardiologists.',
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
          "subSpecialities": localStorage.getItem('cv5usrRolesubType'),
        };                
        this.clevertap_object.recordEventWithNameAndProps("sharedVideo", params);
        this.social_sharing_object.shareWithOptions(options);  
      }
    });
  }

  markasFavorite(item){
      this.platform_object.ready().then(() => {
        var network_type = this.network_check_object.getNetworkType();
        if(network_type == 'none'){
         
          this.toast_controller_object.create({
              message: 'You are now offline.',
              position: 'bottom',
              duration: 5000
            }).present();

        } else {

           if(item.isFavourite == 0 ) {
           
              //set isFavourite == 1
              this.storage_object.get('user_logged_in').then((val) => {
                if(item.categoryId > 3){
                  this.database_provider_object.setinformationFavorites(val, item.id);
                }else{
                  this.database_provider_object.setFavorites(val, item.id);
                }

                this.toast_service_object.presentToast("Added to Favourites.");

             });
            } else {
              //set isFavourite == 0
                this.storage_object.get('user_logged_in').then((val) => {
                  if(item.categoryId > 3){
                    this.database_provider_object.setinformationFavorites(val, item.id);
                  }else{
                    this.database_provider_object.setFavorites(val, item.id);
                  }  
                  this.toast_service_object.presentToast("Removed from Favourites.");
               });
            }

            item.isFavourite = !item.isFavourite 
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
              
                if(item.downloaded == 1){

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

                  this.toast_service_object.mypresentToast('Downloading : "'+item.name+'"',2000);

                  var filename = item.videoName;

                  fileTransfer.onProgress((progressEvent) => {
                    if (progressEvent.lengthComputable) {
                      this.isDownloading = true;

                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );

                      var loader = document.getElementById("progressBar_search_"+item.id);
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      var loader1 = document.getElementById("static_download_prog");
                      //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                      loader1.innerHTML = 'Downloading is in progress...';
                      loader1.style.padding = '10px';
                      loader1.style.display = 'block';


                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        loader.style.background = '';
                        loader1.innerHTML = '';
                        loader1.style.padding = '';
                        loader1.style.display = '';
                      }
                    }
                  });

                  fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

                    var video_url = 'V2CardioMedia/'+filename;

                    var querystring:string[] = new Array(" UPDATE subtopic_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = item.iconUrl.split("/").pop(); 
                    console.log('iconfilename--->'+iconfilename);
                    this.downloadfile(item.iconUrl, iconfilename, item.id, 'education');
                    this.downloadapi(item.id, this.userdata.liveId, 'education');
                    this.toast_service_object.mypresentToast('Finished downloading : "'+item.name+'"',2000);


                    var loader3 = document.getElementById("download_"+item.id);
                    loader3.classList.add("active");
                    
                    if(item.downloaded == 0) item.downloaded = 1;
                  },

                  (error) => {
                    this.toast_service_object.presentToast("Download failed! please try again.");
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

            },(e)=>{ 
              //console.log('586 error '+JSON.stringify(e))
            });

      }
    });
  }
   

  //download function
  downloadfile(url, name, id, type) {

    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

      var icon_url = 'icons/'+ name;
      if(type= 'education'){
        var querystring:string[] = new Array(" UPDATE subtopic_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      }else if(type= 'information'){
        var querystring:string[] = new Array(" UPDATE information_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      }
      this.database_provider_object.updateData(querystring);
    });
  }

  //insert query to api database
  downloadapi(groupid, userid, type) {

    var post_url = this.http_service_object.getPosturl('downloads');
    var params = {};
    if(type == 'education'){  
      params = {"cardiovisualUserId" : userid, "subtopicId" : groupid };
    }else if(type == 'information'){
      params = {"cardiovisualUserId" : userid, "informationId" : groupid };
    }

    this.http_object.post(post_url, params).subscribe(data => {
      var response = JSON.parse(data['_body']);
      var response_data = JSON.stringify(response);
    }, error => {
      console.log(error);
    });  
  }

  // this will remove only beginning and end of string whitespace... By : Sanjeev
  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';    
  }
 
  isInfoDownloadVideoMultiple(){
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


        var userCondition = new Array("");
        this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
          this.userdata = user_data[0];
        });

        var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id IN ("+progress_id+")");

            this.database_provider_object.fetchAllData('information', querystring).then(data => {
              
              const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              
              var item = data[0];
              
                if(item.downloaded == 1){

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
                }else{

                  this.toast_service_object.mypresentToast('Downloading : "'+item.name+'"',2000);

                  var filename = item.videoName;

                  fileTransfer.onProgress((progressEvent) => {
                    if (progressEvent.lengthComputable) {
                      this.isDownloading = true;

                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );

                      var loader = document.getElementById("progressBar_search_"+item.id);
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      var loader1 = document.getElementById("static_download_prog");
                      //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                      loader1.innerHTML = 'Downloading is in progress...';
                      loader1.style.padding = '10px';
                      loader1.style.display = 'block';


                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        loader.style.background = '';
                        loader1.innerHTML = '';
                        loader1.style.padding = '';
                        loader1.style.display = '';
                      }
                    }
                  });

                  fileTransfer.download(item.url, this.file_object.dataDirectory+'V2CardioMedia/'+filename).then((entry) => {

                    var video_url = 'V2CardioMedia/'+filename;

                    var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = item.iconUrl.split("/").pop(); 

                    this.downloadfile(item.iconUrl, iconfilename, item.id, 'information');
                    this.downloadapi(item.id, this.userdata.liveId, 'information');

                    this.toast_service_object.mypresentToast('Finished downloading : "'+item.name+'"',2000);


                    var loader3 = document.getElementById("download_"+item.id);
                    loader3.classList.add("active");
                    
                    if(item.downloaded == 0) item.downloaded = 1;
                  },

                  (error) => {
                    this.toast_service_object.presentToast("Download failed! please try again.");
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
                }

                if(que_ids != ''){
                  this.isInfoDownloadVideoMultiple();
                }else if(que_ids == ''){
                  localStorage.setItem('InfoDownloadque', '');
                }

            },(e)=>{ 
              //console.log('586 error '+JSON.stringify(e))
            });

      }
    });
  }

  seeAllClick(search, type){
    var search_term = '';
    var that = this;
    var where_query = '';
    var only_name_query = '';
    var listingData = [];
    var result = [];
    var info_result = [];
    var params = '';
    var exclude_word = ['is', 'to', 'and', 'are', 'i', 'am', 'how', 'why', 'what', 'dr', 'Dr'];
    var search_str = '';

    var user_type = localStorage.getItem('cv5usrType');
    this.loading_service_object.show();

    if(!(Array.isArray(search))){
      search = search.split(" ");
    }

    _.each(search, function(val, key){
      search_term = that.trimming_fn(val);

      if(search_term != ''){
        var search_arr = search_term.split(" ");
        _.each(search_arr, function(val1, key1){

          var result = _.without(exclude_word, val1.toLowerCase());
          if(_.size(exclude_word) == _.size(result)){
            if(search_str == ''){
              search_str =  val1;
            }else{
              search_str = search_str + ' '+val1;
            }

            //where_query = where_query + " name like '% "+val1+" %' OR description like '% "+val1+" %' OR name like '%"+val1+"%' OR description like'%"+val1+"%' OR";

            where_query = where_query + " name like '% "+val1+" %' OR name like '%"+val1+" %' OR name like '% "+val1+"%' OR description like '% "+val1+" %' OR description like '"+val1+" %' OR description like '% "+val1+"' OR";

            only_name_query = only_name_query + " name like '% "+val1+" %' OR name like '%"+val1+"%' OR";
          }
        });
      }
    });
    where_query = where_query.replace(/ OR\s*$/, "");
    only_name_query = only_name_query.replace(/ OR\s*$/, "");

    where_query = " name like '%"+search_str+"%' OR "+where_query;

    switch(type){
      case 'topics':
        params = 'Topics';
        var whatsnew_query:string[] = new Array(" where ("+only_name_query+") AND type='topics' AND is_active=1");

        this.database_provider_object.fetchAllData('whatsnew' , whatsnew_query).then(whatsnew_result => {
          listingData = whatsnew_result;
          this.navCtrl.push('WhatsNewSeeallPage', {params:params, ListingData:listingData, title_data:this.title_data});
          this.loading_service_object.hide();
        });
        break;
      case 'experts':
        params = 'Experts';
        var whatsnew_query:string[] = new Array(" where ("+only_name_query+") AND type='speakers' AND is_active=1");
        this.database_provider_object.fetchAllData('whatsnew' , whatsnew_query).then(whatsnew_result => {
          listingData = whatsnew_result;
          this.navCtrl.push('WhatsNewSeeallPage', {params:params, ListingData:listingData, title_data:this.title_data});
          this.loading_service_object.hide();
        });
        break;
      case 'calculator':
        params = 'Calculators';
        var whatsnew_query:string[] = new Array(" where ("+only_name_query+") AND type='calculators' AND is_active=1");

        this.database_provider_object.fetchAllData('whatsnew' , whatsnew_query).then(whatsnew_result => {
          listingData = whatsnew_result;
          this.navCtrl.push('WhatsNewSeeallPage', {params:params, ListingData:listingData, title_data:this.title_data});
          this.loading_service_object.hide();
        });
        break;
      case 'our_pick':
        params = 'Playlist';
        var whatsnew_query:string[] = new Array(" where ("+only_name_query+") AND type='curated_lists' AND is_active=1");

        this.database_provider_object.fetchAllData('whatsnew' , whatsnew_query).then(whatsnew_result => {
          listingData = whatsnew_result;
          this.navCtrl.push('WhatsNewSeeallPage', {params:params, ListingData:listingData, title_data:this.title_data});
          this.loading_service_object.hide();
        });
        break;
      case 'playlist':
        var playlist_query:string[] = new Array(" where (is_for ='"+user_type+"' OR is_for = 'all') AND ("+where_query+") AND active=1");
        
        this.database_provider_object.fetchAllData('playlists' , playlist_query).then(playlist_result => {
            listingData = playlist_result;
            this.navCtrl.push("PlaylistPage", {'request_from':'search_page', 'search_data':listingData});
            this.loading_service_object.hide();
        });
        break;

      case 'videos':
        var querystring:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where ("+where_query+") AND isActive=1 AND topicId !=0 AND categoryId !=0");
        
        this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => { 
            result = result.concat(data);
            var querystring_info:string[] = new Array(" join information_data on information.id = information_data.id where ("+where_query+") AND isActive=1 AND topicId !=0 AND categoryId !=0");
            this.database_provider_object.fetchAllData('information' , querystring_info).then(info_data => {
                info_result = info_data;
                this.navCtrl.push("VideoListPage", {'data':'search_page', 'education_data':result, 'info_data': info_result});
                this.loading_service_object.hide();
            });
        });
        break;
    }
  }

    getArraysIntersection(a1, a2) {
        return a1.filter(function (n) {
          return a2.indexOf(n) !== -1;
        });
    }
    subtopicQueryProvider(tableName, subTopicQuery, list_json) {
        return new Promise((resolve, reject) => {
          this.database_provider_object
            .fetchAllData(tableName, subTopicQuery)
            .then((topic_data) => {
              var topic_ids = "['" + _.pluck(topic_data, "id") + "']";
              var filtered_valid_ids = this.getArraysIntersection(
                list_json,
                topic_ids
              );

              resolve({ valid_ids: parseInt(filtered_valid_ids) });
            })
            .catch((error) => {
              console.log("Error occurred");
              reject({ text: "Error occurred" });
            });
        });
    }

    subtopicDetailQueryProvider(subtopicTable, subTopicDetailQuery) {
        return new Promise((resolve, reject) => {
          this.database_provider_object
            .fetchAllData(subtopicTable, subTopicDetailQuery)
            .then((topic_data) => {
              resolve({ subtopicData: topic_data[0] });
            })
            .catch((error) => {
              console.log("Error occurred");
              reject({ texterror: "Error occurred-->" + error });
            });
        });
    }

  gotoDetailPage(item, type, list){

    switch (type) {
      case "expert_playlist":
        this.loading_service_object.show();
        var list_json = JSON.parse(item.list_values);
        //console.log("whatsnew topic" + JSON.stringify(list_json));
        var subtopicQueryResult = "";
        if (item.source == "education") {
          var subtopicTable = "new_sub_topics";
          var subTopicQuery: string[] = new Array(
            "where new_sub_topics.id IN (" + list_json + ") AND isActive = 1"
          );
          this.subtopicQueryProvider(
            subtopicTable,
            subTopicQuery,
            list_json
          ).then((subtopicQueryResult) => {
            console.log(JSON.stringify(subtopicQueryResult));
            var subTopicDetailQuery: string[] = new Array(
              "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
                subtopicQueryResult["valid_ids"] +
                " AND isActive = 1"
            );
            console.log(subTopicDetailQuery);
            this.subtopicDetailQueryProvider(
              subtopicTable,
              subTopicDetailQuery
            ).then((subtopicDetailQueryResult) => {
              console.log(JSON.stringify(subtopicDetailQueryResult));
              var topicData = subtopicDetailQueryResult["subtopicData"];
              //console.log("pqr---->" + topicData);
              //this.forClevertapRecords(item, type, list);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: item.template,
                index: 0,
                header: "hide",
                display_playlist: topicData,
                sendTo: list,
              });
              this.loading_service_object.hide();
            });
          });
        } else {
          var tableName = "information";
          var subTopicQuery: string[] = new Array(
            "where information.id IN (" + list_json + ") AND isActive = 1"
          );
          this.subtopicQueryProvider(tableName, subTopicQuery, list_json).then(
            (infoQueryResult) => {
              var subTopicDetailQuery: string[] = new Array(
                "join information_data on information.id = information_data.id where information.id = " +
                  infoQueryResult["valid_ids"] +
                  " AND isActive = 1"
              );
              this.subtopicDetailQueryProvider(
                subtopicTable,
                subTopicDetailQuery
              ).then((infoDetailQueryResult) => {
                console.log(JSON.stringify(infoDetailQueryResult));
                var infotopicData = infoDetailQueryResult["subtopicData"];
                //console.log("pqr---->" + infotopicData);
                //this.forClevertapRecords(item, type, list);
                this.navCtrl.push("WhatsNewDetailsPage", {
                  data: item,
                  type: item.template,
                  index: 0,
                  header: "hide",
                  display_playlist: infotopicData,
                  sendTo: list,
                });
                this.loading_service_object.hide();
              });
            }
          );
        }
        break;
      case "video_detail":
        this.loading_service_object.show();
        var list_json = JSON.parse(item.list_values);
        if (item.source == "education") {
          var json_query: string[] = new Array(
            "join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = " +
              list_json.Condition[0] +
              " AND isActive = 1"
          );
          this.database_provider_object
            .fetchAllData("new_sub_topics", json_query)
            .then((topic_data) => {
              //this.forClevertapRecords(item, type, list);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: type,
                index: 0,
                header: "hide",
                display_data: topic_data[0],
                sendTo: list,
              });
              this.loading_service_object.hide();
            });
        } else if (item.source == "information") {
          var json_query: string[] = new Array(
            "join information_data on information.id = information_data.id where information.id = " +
              list_json.Expert[0] +
              " AND isActive = 1"
          );
          this.database_provider_object
            .fetchAllData("information", json_query)
            .then((topic_data) => {
              //this.forClevertapRecords(item, type, list);
              this.navCtrl.push("WhatsNewDetailsPage", {
                data: item,
                type: type,
                index: 0,
                header: "hide",
                display_data: topic_data[0],
                sendTo: list,
              });
              this.loading_service_object.hide();
            });
        }
        break;
      case "wordpress_blog":
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
          this.toast_controller_object
            .create({
              message: "You are now offline.",
              position: "bottom",
              duration: 5000,
            })
            .present();
        } else {
          //this.forClevertapRecords(item, type, list);
          if (
            item.list_values == undefined ||
            item.list_values == "undefined"
          ) {
            var ref = this.in_app_browser_object.create(
              item.blog_link,
              "_blank",
              "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
            );
          } else {
            var values = JSON.parse(item.list_values);
            var ref = this.in_app_browser_object.create(
              values.url,
              "_blank",
              "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
            );
          }
        }
        break;
      case "twitter_msg":
        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
          this.toast_controller_object
            .create({
              message: "You are now offline.",
              position: "bottom",
              duration: 5000,
            })
            .present();
        } else {
          //this.forClevertapRecords(item, type, list);
          var url =
            "https://twitter.com/cardiovisualapp/status/" + item.tweet_id;
          var ref = this.in_app_browser_object.create(
            url,
            "_system",
            "location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,closebuttoncaption=Back to CardioVisual app"
          );
        }
        break;
      case "tab_list":
        //this.forClevertapRecords(item, type, list);
        localStorage.setItem("segment_name", item.source);
        this.navCtrl.push("ItemDetailsPageTabs", {
          pageItem: item.name,
          data: item,
          request_from: "whatsnew_page",
        });
        break;
      case "play_video":
        var data = JSON.parse(item.list_values);
        var video_url = data.video_url;

        let options = {
          successCallback: () => {
            console.log("Video played");
          },
          errorCallback: (e) => {
            console.log("Error streaming");
          },
          //orientation: 'landscape',
          shouldAutoClose: true,
          //controls: false
        };

        var network_type = this.network_check_object.getNetworkType();
        if (network_type == "none") {
          this.toast_controller_object
            .create({
              message: "You are now offline.",
              position: "bottom",
              duration: 5000,
            })
            .present();
        } else {
          //this.streamingMedia.playVideo(video_url, options);
        }
        break;
    }
  }

  toggleGroup(group: any) {

      group.show = !group.show;
      
      if(group.show === true){

        this.loader = this.loading_controller_object.create({
          spinner: 'crescent'
        });
        this.loader.present();

        var subtopics_id = group.sub_topic_ids;

        subtopics_id = subtopics_id.split(', ');
        var that = this;
        var data1 = [];
        that.test = [];
        _.each(subtopics_id,function(value,index){         
         var query:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id = "+value+" AND isActive = 1");
         that.database_provider_object.fetchAllData('new_sub_topics' , query).then(data => {
           if(data.length > 0){
                that.test.push(data[0]);
            }     
          });
        });
        
        group.items = that.test;
        this.loader.dismiss();
      }
  }

  isGroupShown(group: any) {
    return group.show;
  }

  markPlaylistasFavorite(group){
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

          this.storage_object.get('user_logged_in').then((val) => {

            this.database_provider_object.setPlaylistFavorites(val, group.id);
            //this.toast_service_object.presentToast("Added To My Playlists.");
            this.toast_service_object.presentToast("Added To Favorite Playlists.");

         });
        } else {
          this.storage_object.get('user_logged_in').then((val) => {
             this.database_provider_object.setPlaylistFavorites(val, group.id); 
             //this.toast_service_object.presentToast("Removed From My Playlists.");
             this.toast_service_object.presentToast("Removed From Favorite Playlists.");
          });
        }
        group.isFavourite = !group.isFavourite;
      }
    });
  }

  addtoplaylist(item, contentType){
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
            this.navCtrl.push('UpgradePlanPage');
          }
        }]
      });
      confirmPopup.present();      
    }
  }
}
