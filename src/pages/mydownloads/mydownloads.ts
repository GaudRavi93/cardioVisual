import { Component,Input, Injector } from '@angular/core';
import { IonicPage, NavController,ViewController, Modal, ModalController, ModalOptions, ToastController, AlertController, Platform } from 'ionic-angular'; 
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpService } from '../../services/HttpService';
import { Http } from '@angular/http';
import * as _ from 'underscore/underscore';
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { ToastService } from '../../services/toast-service';
import { NetworkCheckProvider } from '../../providers/network_check/network_check';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';
import { CleverTap } from '@ionic-native/clevertap';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the My Download page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mydownloads',
  templateUrl: 'mydownloads.html',
})

export class MyDownloadPage {
  @Input() events: any;
  data: any = {};
  search:string = '';
  pageHistory:string = '';
  download_again: any = [];
  download_status: string = 'complete';
  userdata: any;
  perc1:any;
  currentTimeInMilliSeconds: any;
  dtStr: any;
  path:string;
  videoUrlpath: string;
  //items: any[];
  limit: any;
  data1: any;
  data2: any;
  templateData:any;
  templateDataLength:any;
  clevertapDate : any;
  imgSHownOnline:any;
  view_controller_object: ViewController;
  storage_object : Storage;
  database_provider_object: DatabaseProvider;
  http_service_object: HttpService;
  http_object: Http;
  modal_controllar_object: ModalController;
  toast_controller_object: ToastController;
  file_object: File;
  toast_service_object: ToastService;
  alert_controller_object: AlertController;
  platform_object: Platform;
  network_check_object: NetworkCheckProvider;
  file_transfer_object: FileTransfer;
  video_share_provider_object: VideosharesocialProvider;
  clevertap_object: any;

  constructor(public navCtrl: NavController,public injector: Injector,private sanitizer: DomSanitizer) {

      this.view_controller_object = injector.get<ViewController>(ViewController);
      this.storage_object = injector.get<Storage>(Storage);
      this.database_provider_object = injector.get<DatabaseProvider>(DatabaseProvider);
      this.http_service_object = injector.get<HttpService>(HttpService);
      this.http_object = injector.get<Http>(Http);
      this.toast_controller_object = injector.get<ToastController>(ToastController);
      this.file_object = injector.get<File>(File);
      this.toast_service_object = injector.get<ToastService>(ToastService);
      this.alert_controller_object = injector.get<AlertController>(AlertController);
      this.platform_object = injector.get<Platform>(Platform);
      this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);
      this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
      this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
      this.clevertap_object = new CleverTap();

      this.imgSHownOnline = this.network_check_object.getNetworkType();
      this.limit = 10;
      this.path = this.file_object.dataDirectory;

      this.currentTimeInMilliSeconds = this.http_service_object.getTimeInMilliSeconds();
      this.dtStr = this.http_service_object.dtStr();
      this.clevertapDate = this.http_service_object.clevertapDate();
      var network_type = this.network_check_object.getNetworkType();
      switch(true){
        case(network_type != 'none'):
          setTimeout(() => { 
            this.network_check_object.getPageAction('MyDownloadPage','start','',localStorage.getItem('cv5usrType'));
          }, 1000); 
          this.network_check_object.forRandomVideoViewCount(localStorage.getItem('userliveId'));   
          break;
      }

      var querystring:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where subtopic_data.downloaded =1 AND isActive=1 AND new_sub_topics.subTopicType='video'");

      this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => {

        var file_object = this.file_object;
        var download_again = this.download_again;
         var that = this;
        _.each(data,function(item, index){

            data[index]['display_content'] = 'education';

            var itemSrc = item.localUrl.replace(item.videoName, '');
            
            file_object.checkFile(file_object.dataDirectory+'V2CardioMedia/', item.videoName).then(data1 => {

              console.log('path   -->'+JSON.stringify(file_object.dataDirectory+'V2CardioMedia/'+item.videoName));
              switch(true){
                case(!data1):
                  download_again[item.id] = 'yes';
                  break;
                case(data1 && item.localUrl == ''):
                  download_again[item.id] = 'no';
                  var video_url = 'V2CardioMedia/'+item.videoName;
                  var querystring:string[] = new Array(" UPDATE subtopic_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                  this.database_provider_object.updateData(querystring);
                  break;
                case(data1 && item.localUrl != ''):
                  download_again[item.id] = 'no';
                  break;  
              }
            }, err => { 
              console.log('error -->'+JSON.stringify(err)); 
              download_again[item.id] = 'yes';
            });
        });
        
        this.data1 = data;
      });

      var info_querystring:string[] = new Array(" join information_data on information.id = information_data.id where information_data.downloaded =1 AND isActive=1 AND information.subTopicType='video'");

      this.database_provider_object.fetchAllData('information' , info_querystring).then(info_data => {

        var file_object = this.file_object;
        var download_again = this.download_again;
         var that = this;
        _.each(info_data,function(item, index){

            info_data[index]['display_content'] = 'information';
            var itemSrc = item.localUrl.replace(item.videoName, '');

            file_object.checkFile(file_object.dataDirectory+'V2CardioMedia/', item.videoName).then(data1 => {
              switch(true){
                case(!data1):
                  download_again[item.id] = 'yes';
                break;
                case(data1 && item.localUrl == ''):
                  download_again[item.id] = 'no';
                  var video_url = 'V2CardioMedia/'+item.videoName;
                  var querystring:string[] = new Array(" UPDATE information_data SET localUrl = '"+video_url+"', downloaded = 1 WHERE id = "+item.id);
                  this.database_provider_object.updateData(querystring);    
                  break;  
                case(data1 && item.localUrl != ''):
                  download_again[item.id] = 'no';
                  break;
              }
              
            }, err => { 
              console.log('error -->'+JSON.stringify(err)); 
              download_again[item.id] = 'yes';
            });
        });
        this.data2 = info_data;
      });

      setTimeout(() => {
          this.templateData = _.union(this.data1,this.data2);
        this.templateData.forEach(data => {
          this.file_object.readAsArrayBuffer(this.file_object.dataDirectory+ "icons/",data.imageName).then(buffer => {
            const imageBlob = new Blob([new Uint8Array(buffer)], {type: 'image/bmp'});
            const imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageBlob));
            data.localIconUrl = imageURL;
          });
        })
          this.templateDataLength = _.size(this.templateData);
      }, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }
  ionViewWillLeave(){
    var network_type = this.network_check_object.getNetworkType();
    if(network_type != 'none') {
      this.network_check_object.getPageAction('MyDownloadPage','end','',localStorage.getItem('cv5usrType'));
    }
  }

  cancel() {
    this.view_controller_object.dismiss();
  }


  onDetailPage(group, event){


    if(group.display_content == 'information'){

     this.onInfoDetailPage(group);

    }else if(group.display_content == 'education'){
      event.stopPropagation();
      this.platform_object.ready().then(() => {

        var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id="+group.id);

        this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data1 => { 
          
          /*
          let options = {
            successCallback: () => { console.log('Video played') },
            errorCallback: (e) => { console.log('Error streaming') },
            shouldAutoClose: true
          };

          if (data1[0].localUrl != '') {
            this.videoUrlpath = this.file_object.dataDirectory+data1[0].localUrl;
            this.streamingMedia.playVideo(this.videoUrlpath, options);
          }else{
            this.videoUrlpath = data1[0].url;
            var network_type = this.network_check_object.getNetworkType();
            if(network_type == 'none'){
              this.toast_controller_object.create({
                message: 'You are now offline.',
                position: 'bottom',
                duration: 5000
              }).present();
            } else {

              var params = {
                "record_time" : this.dtStr,
                "record_date" : this.clevertapDate,
                "os" : localStorage.getItem('getDevicePlatform'),
                "userRoleId" : localStorage.getItem('cv5userRoleId'),
                "userType": localStorage.getItem('cv5usrType'),
                "userEmail" : localStorage.getItem('cv5userEmail'),
                "Identity":localStorage.getItem('userIdentity'),
                "videoName":group.name,
                "videoId":group.id,
                "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
                "location":localStorage.getItem('location'),
                "specialities":localStorage.getItem('usrSpecialities'),
                "videoContentPlayedFor":'Education',
                "subSpecialities": localStorage.getItem('cv5usrRolesubType')
              };   
              this.clevertap_object.recordEventWithNameAndProps("onVideoPlayed",params);
              this.streamingMedia.playVideo(this.videoUrlpath, options);
            }
          }
          */

          var network_type = this.network_check_object.getNetworkType();
          if(network_type == 'none' && data1[0].localUrl == ''){
          this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
          }).present();
          }else {
            this.navCtrl.push('VideoDetailsPage', {pageItem:group.name, data:data1[0], 'header':'show', 'request_from': 'video_list','sendTo':'DownloadPage' });
          }
        }); 
      });
    } 
  }
  

  doInfinite(infiniteScroll) {
    
    //infiniteScroll.complete();
    setTimeout(() => {
      this.limit += 5;
        console.log('Async operation has ended');
        infiniteScroll.complete();
    }, 500);
  }



  removecontent(group, event){

    if(group.display_content == 'information'){

       this.removeInfocontent(group, event);

    }else if(group.display_content == 'education'){
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

          var querystring:string[] = new Array(" join subtopic_data on new_sub_topics.id = subtopic_data.id where subtopic_data.downloaded =1 AND isActive=1 AND new_sub_topics.subTopicType='video' AND new_sub_topics.id="+group.id);
          this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(subtopicdata => {
            group = subtopicdata[0];
            this.file_object.removeFile(this.file_object.dataDirectory+'V2CardioMedia/', group.videoName).then(res => {
              //alert('resoponse '+JSON.stringify(res));
              var querystring:string[] = new Array("UPDATE subtopic_data SET localUrl = '', downloaded = 0 WHERE id="+group.id);
              this.database_provider_object.updateData(querystring);

              var user_id = localStorage.getItem('userliveId');
              var http_object = this.http_object;
              var localapi = this.http_service_object.getApi();

              this.http_service_object.getDoewnloadApiDataforUSers(user_id, group.id).subscribe(data => {
                if(data.length > 0){
                  _.times(data.length, function(i){
                    var url = localapi+'/api/downloads/'+data[i].id;    
                    http_object.delete(url).subscribe(
                      resp => { 
                        //alert('deleted yes '+JSON.stringify(resp)); 
                      },
                      error => { 
                        //alert('error occur, delete fail '+JSON.stringify(error)); 
                      }
                    );
                  });
                  this.toast_service_object.presentToast('"'+group.name+'" removed from download list.');
                }
              });
            }, err => {
              //alert('remove err '+JSON.stringify(err));
            });
          });
          group.downloaded = 0;
        }
      }); 
    } 
  }
  onDownload(item, event){
    var canShare = localStorage.getItem('canDownloadAccess');  
    var network_type = this.network_check_object.getNetworkType();
    var downloadque = localStorage.getItem('Downloadque');

    switch(true){
      case(item.display_content == 'information'):
        this.onInfoDownload(item, event);
        break;
      case(item.display_content == 'education' && canShare == 'true' && network_type == 'none'):
        event.stopPropagation();
        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;  
      case(item.display_content == 'education' && canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
        event.stopPropagation();
        downloadque = item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isDownloadVideoMultiple();
        break;
      case(item.display_content == 'education' && canShare == 'true' && network_type != 'none' && downloadque != ''):
        event.stopPropagation();
        downloadque = downloadque + ','+item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isDownloadVideoMultiple();
        break;
      case(item.display_content == 'education' && canShare != 'true'):
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

            //show first download toast

            var userCondition = new Array("");
            this.database_provider_object.fetchAllData('new_user_info' , userCondition).then(user_data => {
              this.userdata = user_data[0];
            });

            var querystring:string[] = new Array("join subtopic_data on new_sub_topics.id = subtopic_data.id where new_sub_topics.id IN ("+progress_id+")");

            this.database_provider_object.fetchAllData('new_sub_topics' , querystring).then(data => {
              
              const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              
              var item = data[0];

              this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);
                this.video_share_provider_object.downloadVideo(item, 'Education');
                var filename = item.url.split("/").pop();
                
                fileTransfer.onProgress((progressEvent) => {
                  if (progressEvent.lengthComputable) {
                    
                    //var perc:any = 'perc'+item.id;
                    var perc = (progressEvent.loaded / progressEvent.total)*100;

                    this.perc1 = perc.toFixed( 1 );

                    //var loader:any = 'loader'+item.id;
                    var loader = document.getElementById("progressBar_"+item.id);
                    loader.style.background = '#fff';
                    loader.style.display = 'block';
                    loader.innerHTML = this.perc1+'%';

                    //var loader1:any = 'loader1'+item.id;
                    //var loader1 = document.getElementById("mydownload_progress");
                    //loader1.innerHTML = 'Downloading ... '+this.perc1+'%';
                   //// loader1.innerHTML = 'Downloading is in progress...';
                    //loader1.style.padding = '10px';
                    //loader1.style.display = 'block';


                    if(this.perc1 == 100){
                      loader.innerHTML = '';
                      loader.style.background = '';
                      //loader1.innerHTML = '';
                      //loader1.style.padding = '';
                      //loader1.style.display = '';
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
                  this.download_again[item.id] = 'no';
                  this.download_status = 'complete';
                  //alert('dismiss');
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
              
              if(que_ids != ''){
                this.isDownloadVideoMultiple();
              }else if(que_ids == ''){
                localStorage.setItem('Downloadque', '');
              }

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

  markasFavorite(group, event){
    if(group.display_content == 'information'){

       this.markInfoasFavorite(group, event);

    }else if(group.display_content == 'education'){  
      event.stopPropagation();
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
  }

  shareVideo(shareVideo,event){
    event.stopPropagation();

    this.video_share_provider_object.shareSingleVideo(shareVideo);
  }

  onInfoDetailPage(group){
    event.stopPropagation();  
    this.platform_object.ready().then(() => {

      var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id="+group.id);
      this.database_provider_object.fetchAllData('information' , querystring).then(data1 => {
        /*
        let options = { 
          successCallback: () => { console.log('Video played') },
          errorCallback: (e) => { console.log('Error streaming') },
          shouldAutoClose: true
        };
        if (data1[0].localUrl != '') {
          this.videoUrlpath = this.file_object.dataDirectory+data1[0].localUrl;
          this.streamingMedia.playVideo(this.videoUrlpath, options);
        }else{
          this.videoUrlpath = data1[0].url;
          var network_type = this.network_check_object.getNetworkType(); 
          if(network_type == 'none'){
          this.toast_controller_object.create({
            message: 'You are now offline.',
            position: 'bottom',
            duration: 5000
            }).present(); 
          } else {
            var params = {
              "record_time" : this.dtStr,
              "record_date" : this.clevertapDate,
              "os" : localStorage.getItem('getDevicePlatform'),
              "userRoleId" : localStorage.getItem('cv5userRoleId'),
              "userType": localStorage.getItem('cv5usrType'),
              "userEmail" : localStorage.getItem('cv5userEmail'),
              "Identity":localStorage.getItem('userIdentity'),
              "videoName":data1[0].name,
              "videoId":data1[0].id,
              "userRoleSubType" : localStorage.getItem('cv5usrRolesubType'),
              "location":localStorage.getItem('location'),
              "specialities":localStorage.getItem('usrSpecialities'),
              "videoContentPlayedFor":'Information',
              "subSpecialities": localStorage.getItem('cv5usrRolesubType')
            };   
            this.clevertap_object.recordEventWithNameAndProps("onVideoPlayed",params);
            this.streamingMedia.playVideo(this.videoUrlpath, options);
          }
        }
        */
        var network_type = this.network_check_object.getNetworkType(); 
        if(network_type == 'none' && data1[0].localUrl == ''){
          this.toast_controller_object.create({
          message: 'You are now offline.',
              position: 'bottom',
              duration: 5000         
           }).present();    
        }else { 
          this.navCtrl.push('InformationVideoDetailsPage', {pageItem:data1[0].name, coloR:data1[0].hexcodeBase, icondash:data1[0].iconName, data:data1[0], 'header':'show', 'request_from': 'video_list','sendTo':'DownloadPage'});
        }         
      });    
    });  
  }

  removeInfocontent(group, event){
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

        var querystring:string[] = new Array(" join information_data on information.id = information_data.id where information_data.downloaded =1 AND isActive=1 AND information.subTopicType='video' AND information.id="+group.id);
        this.database_provider_object.fetchAllData('information' , querystring).then(info_data => {
          group = info_data[0];
          this.file_object.removeFile(this.file_object.dataDirectory+'V2CardioMedia/', group.videoName).then(res => {
            //alert('resoponse '+JSON.stringify(res));
            var querystring:string[] = new Array("UPDATE information_data SET localUrl = '', downloaded = 0 WHERE id="+group.id);
            this.database_provider_object.updateData(querystring);

            var user_id = localStorage.getItem('userliveId');
            var http_object = this.http_object;
            var localapi = this.http_service_object.getApi();

            this.http_service_object.getInfoDownloadApiDataforUsers(user_id, group.id).subscribe(data => {
              if(data.length > 0){
                _.times(data.length, function(i){
                  var url = localapi+'/api/downloads/'+data[i].id;    
                  http_object.delete(url).subscribe(
                    resp => { 
                      //alert('deleted yes '+JSON.stringify(resp)); 
                    },
                    error => { 
                      //alert('error occur, delete fail '+JSON.stringify(error)); 
                    }
                  );
                });
                this.toast_service_object.presentToast('"'+group.name+'" removed from download list.');
              }
            });
          }, err => {
            //alert('remove err '+JSON.stringify(err));
          });
        });
        group.downloaded = 0;
      }
    });  
  }

  markInfoasFavorite(group, event){
    event.stopPropagation();
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
             this.database_provider_object.setinformationFavorites(val, group.id);
             this.toast_service_object.presentToast("Added to Favourites.");

           });
          } else {
            //set isFavourite == 0
              this.storage_object.get('user_logged_in').then((val) => {
         
               //this.sqlite_sync.setFavorites(val, group.id); 
               this.database_provider_object.setinformationFavorites(val, group.id); 
               this.toast_service_object.presentToast("Removed from Favourites.");
             });
          }

          group.isFavourite = !group.isFavourite 
      }
    });
  }


  onInfoDownload(item, event){
    event.stopPropagation();
    var canShare = localStorage.getItem('canDownloadAccess');
    var network_type = this.network_check_object.getNetworkType();
    var downloadque = localStorage.getItem('Downloadque');

    switch(true){
      case(canShare == 'true' && network_type == 'none'):
        this.toast_controller_object.create({
          message: 'You are now offline.',
          position: 'bottom',
          duration: 5000
        }).present();
        break;
      case(canShare == 'true' && network_type != 'none' && (downloadque == null || downloadque == '')):
        downloadque = item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isInfoDownloadVideoMultiple();
        break;  
      case(canShare == 'true' && network_type != 'none' && downloadque != ''):
        downloadque = downloadque + ','+item.id;
        localStorage.setItem('Downloadque', downloadque);
        this.isInfoDownloadVideoMultiple();
        break;    
      case(canShare != 'true'):
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

            //show first download toast

            var userCondition = new Array("");
            this.database_provider_object.fetchAllData('new_user_info', userCondition).then(user_data => {
              this.userdata = user_data[0];
            });

            var querystring:string[] = new Array("join information_data on information.id = information_data.id where information.id IN ("+progress_id+")");

            this.database_provider_object.fetchAllData('information' , querystring).then(data => {
              
              const fileTransfer: FileTransferObject = this.file_transfer_object.create();
              
              var item = data[0];

              this.toast_service_object.mypresentToast('Downloading : "'+item.name +'"',2000);
              this.video_share_provider_object.downloadVideo(item, 'Information');

                var filename = item.url.split("/").pop();
                
                fileTransfer.onProgress((progressEvent) => {
                  if (progressEvent.lengthComputable) {
                    
                    
                    var perc = (progressEvent.loaded / progressEvent.total)*100;

                    this.perc1 = perc.toFixed( 1 );

                    var loader = document.getElementById("progressBar_"+item.id);
                    loader.style.background = '#fff';
                    loader.style.display = 'block';
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
                  this.download_again[item.id] = 'no';
                  this.download_status = 'complete';
                  //alert('dismiss');
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
              
              if(que_ids != ''){
                this.isInfoDownloadVideoMultiple();
              }else if(que_ids == ''){
                localStorage.setItem('Downloadque', '');
              }

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

  onPlaylistAdd(group,event){
    if(group.display_content == 'information'){
      event.stopPropagation();
      this.addtoplaylist(group , 'information');
    }else if(group.display_content == 'education'){
      event.stopPropagation();
      this.addtoplaylist(group , 'education');
    } 
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