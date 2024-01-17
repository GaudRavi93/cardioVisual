import { Component ,Input, Injector} from '@angular/core';
import { IonicPage, NavController, Modal, ModalController, ModalOptions, ToastController, Platform, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../services/HttpService';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ToastService } from '../../services/toast-service';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { File } from '@ionic-native/file';
import * as _ from 'underscore/underscore';
import { Http } from '@angular/http';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


/**
 * Generated class for the MyfavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myfavorites',
  templateUrl: 'myfavorites.html',
})
export class MyfavoritesPage {
  @Input() events: any;
  data: any = {};
  search:string = '';
  pageHistory:string = '';
  download_status:string = 'complete';
  userdata: any;
  perc1:any;
  currentTimeInMilliSeconds: any;
  dtStr: any;
  path: string;
  imgSHownOnline:any;
  fileTransfer: FileTransferObject;
  database_provider_object: DatabaseProvider;
  storage_object: Storage;
  modal_controllar_object: ModalController;
  http_service_object: HttpService;
  in_app_browser_object: InAppBrowser;
  toast_controller_object: ToastController;
  toast_service_object: ToastService;
  platform_object: Platform;
  network_check_object: NetworkCheckProvider;
  alert_controller_object: AlertController;
  file_transfer_object: FileTransfer;
  file_object: File;
  http_object: Http;
  video_share_provider_object: VideosharesocialProvider;
  screen_orientation_object: ScreenOrientation;

  constructor(public navCtrl: NavController,public injector: Injector) {

      this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
      this.storage_object = injector.get<Storage>(Storage);
      this.modal_controllar_object = injector.get<ModalController>(ModalController);
      this.http_service_object = injector.get<HttpService>(HttpService);
      this.in_app_browser_object = injector.get<InAppBrowser>(InAppBrowser);
      this.toast_controller_object = injector.get<ToastController>(ToastController);
      this.toast_service_object = injector.get<ToastService>(ToastService);
      this.platform_object = injector.get<Platform>(Platform);
      this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
      this.alert_controller_object = injector.get<AlertController>(AlertController);
      this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
      this.file_object = injector.get<File>(File);
      this.http_object = injector.get<Http>(Http);
      this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
      this.screen_orientation_object = injector.get<ScreenOrientation>(ScreenOrientation);

      this.path = this.file_object.dataDirectory;
      this.imgSHownOnline = this.network_check_object.getNetworkType();
  	   var querystring:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where isActive=1 AND isFavourite=1 "); 

      this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => {
        
        this.data.items = data;
      });

      var info_querystring = new Array(" join information_data on information.id = information_data.id where isActive=1 AND isFavourite=1 "); 
      this.database_provider_object.fetchAllData('information' , info_querystring).then(info_data => {
        //alert('fav information info_data---->'+JSON.stringify(info_data));
        //console.log('fav information info_data---->'+JSON.stringify(info_data));
        this.data.info_items = info_data;
      });

    this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
    this.dtStr = this.http_service_object.dtStr();
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      setTimeout(() => { 
        this.network_check_object.getPageAction('MyfavoritesPage','start','',localStorage.getItem('cv5usrType'));
      }, 1000); 

      this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyfavoritesPage');
  }

  ionViewWillLeave(){
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      this.network_check_object.getPageAction('MyfavoritesPage','end','',localStorage.getItem('cv5usrType'));
    }
  }


  onDetailPage(group){
    var canShare = localStorage.getItem('userProAccess');
    var network_type = this.network_check_object.getNetworkType();

    switch(true){
      case(group.subTopicType == 'video' && (group.isPaid == 0 || canShare == 'true') && group.localUrl != ''):
        var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+group.id);
        this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data1 =>{ 
          this.navCtrl.push('VideoDetailsPage', {pageItem:group.name, data:data1[0], 'header':'show', 'request_from': 'video_list','sendTo':'FavoritePage'});
        });
        break;
      case(group.subTopicType == 'video' && (group.isPaid == 0 || canShare == 'true') && group.localUrl == '' && network_type != 'none'):
        var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+group.id);
        this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data1 => { 

          this.navCtrl.push('VideoDetailsPage', {pageItem:group.name, data:data1[0], 'header':'show', 'request_from': 'video_list','sendTo':'FavoritePage' });
        });
        break;
      case(group.subTopicType == 'video' && (group.isPaid == 0 || canShare == 'true') && group.localUrl == '' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'This video requires internet connection.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;
      case(group.subTopicType == 'video' && group.isPaid == 1 && canShare != 'true'):
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
        break;
      case(group.subTopicType == 'image' && group.localUrl != ''):
        this.navCtrl.push('DrawonPage', { drawnurl:group.localUrl , drawOnImgTitle:group.title, drawnCopyright:group.copyrightInfo, drawnSubtopicType:group.subTopicType , video_Name:group.videoName, local_Url:'localUrl' });
       break;
      case(group.subTopicType == 'image' && group.localUrl == ''):    
        this.navCtrl.push('DrawonPage', { drawnurl:group.url , drawOnImgTitle:group.title, drawnCopyright:group.copyrightInfo, drawnSubtopicType:group.subTopicType });
        break;
      case(group.subTopicType == 'document' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;
      case(group.subTopicType == 'document' && network_type != 'none'):
        var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

        ref.on('loadstop').subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe((event) => {            
          this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
        break; 
      case(group.subTopicType == 'other' && group.otherType == 'link'):
        var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
        ref.on('loadstop').subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe((event) => {            
          this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
        break;
      case(group.subTopicType == 'other' && group.otherType == 'qr_code'):
        this.navCtrl.push('QrcodePage',{previousPage:'channellist',qrUrl:group.url});
        break;
    }
  }
  

  onImageCantDownload(group, event){
    event.stopPropagation();
    this.toast_service_object.mypresentToast("Only videos can be downloaded.",2000);
  }

  onFavorite(group, event){
  	event.stopPropagation();

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

          group.isFavourite = !group.isFavourite;
      }
    });
  }

  onDownload(item, event){
    event.stopPropagation();
    var canShare = localStorage.getItem('canDownloadAccess');
    var network_type = this.network_check_object.getNetworkType();
    var downloadque = localStorage.getItem('Downloadque');

    switch(true){
      case(item.isDownloadable == 1 && canShare == 'true' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;
      case(item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):  
        downloadque = item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isDownloadVideoMultiple();
        break;
      case(item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && downloadque != ''):  
        downloadque = downloadque + ','+item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isDownloadVideoMultiple();
        break;
      case(item.isDownloadable == 1 && canShare != 'true'):
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
        break;
      case(item.isDownloadable == 0):  
        var confirmPopup = this.alert_controller_object.create({
          title: '',
          message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
          enableBackdropDismiss: true,
          buttons: ['Dismiss']
        });
        confirmPopup.present();
        break;
    }


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
              
        //if(this.download_status == 'complete'){

            this.download_status = 'inprogress';
            var que_ids = localStorage.getItem('Downloadque');
            var progress_ids_arr = que_ids.split(',').map(Number);
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
                  this.download_status = 'complete';

                }else{

                   this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);

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
                      //var perc:any = 'perc'+item.id;
                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );

                      //var loader:any = 'loader'+item.id;
                      var loader = document.getElementById("progressBar_"+item.id);
                      loader.style.background = '#fff';
                      loader.innerHTML = this.perc1+'%';

                      //var loader1:any = 'loader1'+item.id;
                      // var loader1 = document.getElementById("myfavorites_progress");
                      // //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                      // loader1.innerHTML = 'Downloading is in progress...';
                      // loader1.style.padding = '10px';
                      // loader1.style.display = 'block';


                      if(this.perc1 == 100){
                        loader.innerHTML = '';
                        loader.style.background = '';
                        // loader1.innerHTML = '';
                        // loader1.style.padding = '';
                        // loader1.style.display = '';
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
                     this.toast_service_object.mypresentToast('Finished downloading : "'+item.name +'"',2000);
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

  shareVideo(shareVideo, event){
  	event.stopPropagation();
    this.video_share_provider_object.shareSingleVideo(shareVideo);
  }

  onPlaylistAdd(group,event){
    event.stopPropagation();
    this.addtoplaylist(group , 'education');
  }

  onInfoPlaylistAdd(group,event){
    event.stopPropagation();
    this.addtoplaylist(group , 'information');
  }

  onInfoDetailPage(group){

    var canShare = localStorage.getItem('userProAccess');
    var network_type = this.network_check_object.getNetworkType();

    switch(true){
      case(group.subTopicType == 'video' && (group.isPaid == 0 || canShare == 'true') && group.localUrl != ''):
        var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+group.id);
        this.database_provider_object.fetchAllData('information' , querystring).then(data1 => { 
          this.navCtrl.push('InformationVideoDetailsPage', {pageItem:group.name, data:data1[0], 'header':'show', 'request_from': 'video_list','sendTo':'FavoritePage' });
        });
        break;
      case(group.subTopicType == 'video' && (group.isPaid == 0 || canShare == 'true') && group.localUrl == '' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'This video requires internet connection.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;  
      case(group.subTopicType == 'video' && (group.isPaid == 0 || canShare == 'true') && group.localUrl == '' && network_type != 'none'):
        var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+group.id);
        this.database_provider_object.fetchAllData('information' , querystring).then(data1 => { 
          this.navCtrl.push('InformationVideoDetailsPage', {pageItem:group.name, data:data1[0], 'header':'show', 'request_from': 'video_list','sendTo':'FavoritePage' });
        });
        break;
      case(group.subTopicType == 'video' && group.isPaid == 1 && canShare != 'true'):  
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
        break;
      case(group.subTopicType == 'image' && group.localUrl != ''):
        this.navCtrl.push('DrawonPage', { drawnurl:group.localUrl , drawOnImgTitle:group.title, drawnCopyright:group.copyrightInfo, drawnSubtopicType:group.subTopicType , video_Name:group.videoName, local_Url:'localUrl' });
        break;
      case(group.subTopicType == 'image' && group.localUrl == ''):
        this.navCtrl.push('DrawonPage', { drawnurl:group.url , drawOnImgTitle:group.title, drawnCopyright:group.copyrightInfo, drawnSubtopicType:group.subTopicType });
        break;
      case(group.subTopicType == 'document' && group.localUrl != ''):
        var ref = this.in_app_browser_object.create(this.file_object.dataDirectory+group.localUrl, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

        ref.on('loadstop').subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe((event) => {            
          this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
        break;
      case(group.subTopicType == 'document' && group.localUrl == '' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;  
      case(group.subTopicType == 'document' && group.localUrl == '' && network_type != 'none'):
        var ref = this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,EnableViewPortScale=yes,closebuttoncaption=Back to CardioVisual app');

        ref.on('loadstop').subscribe((event) => {
          this.screen_orientation_object.unlock();
        });
        ref.on('exit').subscribe((event) => {            
          this.screen_orientation_object.lock(this.screen_orientation_object.ORIENTATIONS.PORTRAIT);
        });
        break;
      case(group.subTopicType == 'other' && group.otherType == 'link'):
        this.in_app_browser_object.create(group.url, '_blank', 'location=no,hardwareback=no,clearcache=yes,clearsessioncache=yes,footer=yes,usewkwebview=no,closebuttoncaption=Back to CardioVisual app');
        break;
      case(group.subTopicType == 'other' && group.otherType == 'qr_code'):
        this.navCtrl.push('QrcodePage',{previousPage:'channellist',qrUrl:group.url});
        break;
      case(group.subTopicType == 'other'):
        this.toast_service_object.presentToast("coming soon.");
        break;  
    }
  }

  onInfoFavorite(group, event){
    event.stopPropagation();

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
       
             this.database_provider_object.setinformationFavorites(val, group.id);
             this.toast_service_object.presentToast("Added to Favourites.");

           });
          } else {
            this.storage_object.get('user_logged_in').then((val) => {
         
               this.database_provider_object.setinformationFavorites(val, group.id); 
               this.toast_service_object.presentToast("Removed from Favourites.");
            });
          }

          group.isFavourite = !group.isFavourite;
      }
    });
  }

  onInfoDownload(item, event){
    event.stopPropagation();
    var canShare = localStorage.getItem('canDownloadAccess');
    var network_type = this.network_check_object.getNetworkType();
    var downloadque = localStorage.getItem('Downloadque');

    switch(true){
      case(item.isDownloadable == 1 && canShare == 'true' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();  
        break;
      case(item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
        downloadque = item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isInfoDownloadVideoMultiple();
        break;
      case(item.isDownloadable == 1 && canShare == 'true' && network_type != 'none' && downloadque != ''):
        downloadque = downloadque + ','+item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isInfoDownloadVideoMultiple();
        break;
      case(item.isDownloadable == 1 && canShare != 'true'):
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
        break;
      case(item.isDownloadable == 0):
        var confirmPopup = this.alert_controller_object.create({
          title: '',
          message: '<h4 style="color:#ffffff; text-align:center;"> </h4><p style="color:#ffffff; text-align:center;font-weight:700;">This video is not for download.</p>',
          enableBackdropDismiss: true,
          buttons: ['Dismiss']
        });
        confirmPopup.present();
        break;    
    }
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

        var que_ids = localStorage.getItem('Downloadque');
        var progress_ids_arr = que_ids.split(',').map(Number);
              
        //if(this.download_status == 'complete'){

            this.download_status = 'inprogress';
            var que_ids = localStorage.getItem('Downloadque');
            var progress_ids_arr = que_ids.split(',').map(Number);
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
                  this.download_status = 'complete';

                }else{

                   this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);
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
                      //var perc:any = 'perc'+item.id;
                      var perc = (progressEvent.loaded / progressEvent.total)*100;

                      this.perc1 = perc.toFixed( 1 );
                      
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

                    var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                    this.database_provider_object.updateData(querystring);

                    var iconfilename = item.iconUrl.split("/").pop(); 
                    this.Infodownloadfile(item.iconUrl, iconfilename, item.id);
                    this.Infodownloadapi(item.id, this.userdata.liveId);
                     this.toast_service_object.mypresentToast('Finished downloading : "'+item.name +'"',2000);
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
                  this.isInfoDownloadVideoMultiple();
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


  //download function
  Infodownloadfile(url, name, id) {
    const fileTransfer: FileTransferObject = this.file_transfer_object.create();
    fileTransfer.download(url, this.file_object.dataDirectory+'icons/'+ name).then((entry) => { 

      var icon_url = 'icons/'+ name;

      var querystring:string[] = new Array(" UPDATE information_data SET localIconUrl = '"+icon_url+"', downloaded = 1 WHERE id = "+id+" ");
      this.database_provider_object.updateData(querystring);
    });  
  }


  //insert query to api database
  Infodownloadapi(groupid,userid) {
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
            }}
        ]
      });
      confirmPopup.present();      
    }
  }


}